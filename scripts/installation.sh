#!/bin/bash

# CodeDeploy Agent 설치 스크립트

# Amazon Linux 2에서 CodeDeploy Agent 설치
sudo yum update -y
sudo yum install -y ruby
sudo yum install -y wget

cd /home/ec2-user
wget https://aws-codedeploy-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto

# CodeDeploy Agent 서비스 시작
sudo service codedeploy-agent start

#----------------------------------------

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
