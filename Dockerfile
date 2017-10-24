# build from nginx:latest...
FROM nginx

# ...and copy website assets to default document root
COPY src /usr/share/nginx/html

# make sure port 80 is exposed
#EXPOSE 80
EXPOSE 80:8010
