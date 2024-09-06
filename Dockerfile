# 使用基础的Nginx镜像
FROM nginx:latest

# 移除默认的Nginx配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 将Vue应用的静态文件复制到Nginx的网站目录
COPY dist/ /usr/share/nginx/html/

# 将自定义的Nginx配置文件复制到Nginx的配置目录
COPY nginx.conf /etc/nginx/conf.d/

# 暴露Nginx的80端口
EXPOSE 80
