#!/bin/bash
# Docker 설치 스크립트

# Docker 설치 (Amazon Linux 2 기준)
sudo amazon-linux-extras install docker
sudo yum install docker

# Docker 서비스 시작
sudo service docker start

# 현재 사용자를 docker 그룹에 추가하여 sudo 없이 Docker 명령어 사용 가능
sudo usermod -aG docker $USER

# 로그아웃 후 재로그인하거나, 다음 명령어로 현재 세션에서 즉시 적용
exec sudo su -l $USER
