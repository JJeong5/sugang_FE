FROM node:latest as builder

# 작업 디렉터리 설정
WORKDIR /sugang_FE  

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 애플리케이션 코드 복사
COPY . .

# React 앱 빌드
RUN npm run build

# 별도의 builder 스테이지에서 빌드를 완료한 후,
# 실제 Nginx 이미지를 사용하여 최종 이미지를 구성합니다.
FROM nginx:latest

# 앱 디렉터리 생성 및 작업 디렉터리로 설정
RUN mkdir /sugang_FE  
WORKDIR /sugang_FE   

# 앱 디렉터리에 빌드 디렉터리 생성
RUN mkdir ./build

# builder 스테이지에서 빌드된 React 앱을 앱의 빌드 디렉터리로 복사
COPY --from=builder /sugang_FE/build /sugang_FE/build  

# 기본 Nginx 구성 파일 삭제
RUN rm /etc/nginx/conf.d/default.conf

# 사용자 정의 Nginx 구성 파일을 적절한 디렉터리로 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 포트 80 개방
EXPOSE 80

# Nginx를 백그라운드에서 실행하지 않도록 설정하여 컨테이너 실행 시 자동 실행될 명령어를 지정
CMD ["nginx", "-g", "daemon off;"]
