FROM registry.cn-hangzhou.aliyuncs.com/images-lib/image-base:caddy-1.0.0

ARG SITE_ADDRESS=code-sofaware.cn
# 将容器的80端口映射到主机的80端口
COPY ./.vitepress/dist/* /home/admin/web/

EXPOSE 80 443