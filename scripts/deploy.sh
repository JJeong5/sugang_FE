#!/bin/bash

# ECR 이미지 정보
ECR_REPO="194453983284.dkr.ecr.ap-northeast-2.amazonaws.com"
IMAGE_NAME="myreca"

# 빌드 번호를 태그로 사용
TAG="FE40"

REGION="ap-northeast-2"
ACCOUNT_ID="194453983284"

# ECR 이미지 가져오기
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:$TAG

# 현재 실행중인 컨테이너 확인
CURRENT_CONTAINER_ID=$(docker ps -q --filter ancestor=$ECR_REPO --format="{{.ID}}")

# 현재 실행중인 컨테이너 종료
if [ -n "$CURRENT_CONTAINER_ID" ]; then
  echo "Stopping currently running container: $CURRENT_CONTAINER_ID"
  docker stop $CURRENT_CONTAINER_ID
  docker rm $CURRENT_CONTAINER_ID
fi

# 새로운 컨테이너 실행
docker run -d -p 80:80 --name $IMAGE_NAME $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$IMAGE_NAME:$TAG
