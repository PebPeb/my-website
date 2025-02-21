# Nginx Configurations

`default.conf` is the Nginx configuration file. 

## Frontend

The following sets the root configuration of the front end.

```nginx
listen 80;
server_name localhost;

root /usr/share/nginx/html;
index index.html;

location / {
  root /usr/share/nginx/html;
}
```


