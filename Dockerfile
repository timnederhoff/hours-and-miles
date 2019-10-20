FROM nginx

WORKDIR /usr/share/nginx/html
COPY dist/hours-and-miles .
