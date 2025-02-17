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

## Backend

The following configurations are set up for configuring a proxy for interacting with the backend.

```nginx
location /api/ {
  # Forward all API requests to the Java backend
  resolver 127.0.0.11 valid=5s;
  proxy_pass http://backend:8080/api/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

