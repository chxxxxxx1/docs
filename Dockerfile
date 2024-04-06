FROM registry.cn-hangzhou.aliyuncs.com/docker-image-base/ubuntu:latest-amd64
ARG BUILDPLATFORM=linux/amd64

ARG FRONT_STATIC_PATH=/public
RUN mkdir -p ${FRONT_STATIC_PATH}
# 将容器的80端口映射到主机的80端口
COPY script/nginx.conf /etc/nginx/
ADD dist.tar  ${FRONT_STATIC_PATH}
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]