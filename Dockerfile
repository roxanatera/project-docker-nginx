
FROM nginx:alpine

# Copiamos nuestros archivos web al directorio de Nginx
COPY src/ /usr/share/nginx/html/

# Exponemos el puerto 80
EXPOSE 80

# Nginx se inicia automáticamente con la imagen