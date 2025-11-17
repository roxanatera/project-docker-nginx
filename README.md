# 🐳 Static Web Application with Docker and Nginx | Aplicación Web Estática con Docker y Nginx

[English](#english) | [Español](#español)

---

## English

### 📋 Description

This project shows how to deploy a static web application inside a Docker container using Nginx as a web server. It is part of my DevOps portfolio, specifically in the basic projects section.

### 🛠️ Technologies

- **Docker**: Application containerization
- **Nginx**: High-performance web server
- **Docker Compose**: Container orchestration
- **HTML5/CSS3/JavaScript**: Frontend development

### 🚀 Installation and Usage

#### Prerequisites

- Docker Desktop installed
- Docker Compose

#### Steps

1. Clone the repository:
```bash
git clone https://github.com/roxanatera/project-docker-nginx.git
cd project-docker-nginx
```

2. Build and start the container:
```bash
docker-compose up -d --build
```

3. Open the application in your browser:
```
http://localhost:8080
```

4. Stop the container:
```bash
docker-compose down
```

### 📂 Project Structure
```
project-docker-nginx/
│
├── Dockerfile              # Docker image definition
├── docker-compose.yml      # Docker Compose configuration
├── README.md              
│
└── src/                    # Application source code
    ├── index.html
    ├── styles.css
    └── script.js
```

### 🎯 Features

- ✅ Complete Docker containerization
- ✅ Optimized Nginx server (Alpine image)
- ✅ Container orchestration with Docker Compose
- ✅ Responsive design
- ✅ Modern and professional interface

### 📝 Useful Commands
```bash
# View container logs
docker-compose logs -f

# View running containers
docker ps

# Rebuild after changes
docker-compose up -d --build

# Enter the container
docker exec -it nginx-static-web sh
```

### 🔧 How It Works

1. **Dockerfile** creates a lightweight image using Nginx Alpine
2. **Docker Compose** manages the container lifecycle
3. **Nginx** serves the static files from the `/src` folder
4. The application runs on port **8080** of your computer

### 📚 What I Learned

- How to create a Dockerfile
- How to use Docker Compose for easy deployment
- How to configure Nginx as a web server
- Container port mapping
- Basic Docker commands

### 👨‍💻 Author

**JR** - DevOps Portfolio

### 📄 License

This project is open source and available for educational purposes.

---

## Español

### 📋 Descripción

Este proyecto demuestra la containerización de una aplicación web estática utilizando Docker y Nginx. Es parte de mi portfolio DevOps, específicamente del nivel básico de proyectos.

### 🛠️ Tecnologías

- **Docker**: Containerización
- **Nginx**: Servidor web de alto rendimiento
- **Docker Compose**: Orquestación de contenedores
- **HTML5/CSS3/JavaScript**: Frontend

### 🚀 Instalación y Uso

#### Prerequisitos

- Docker Desktop instalado
- Docker Compose

#### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/TU-USUARIO/project-docker-nginx.git
cd project-docker-nginx
```

2. Construir y levantar el contenedor:
```bash
docker-compose up -d --build
```

3. Acceder a la aplicación:
```
http://localhost:8080
```

4. Detener el contenedor:
```bash
docker-compose down
```

### 📂 Estructura del Proyecto
```
project-docker-nginx/
│
├── Dockerfile              # Definición de la imagen Docker
├── docker-compose.yml      # Configuración de Docker Compose
├── README.md              
│
└── src/                    # Código fuente de la aplicación
    ├── index.html
    ├── styles.css
    └── script.js
```

### 🎯 Características

- ✅ Containerización completa con Docker
- ✅ Servidor Nginx optimizado (imagen Alpine)
- ✅ Orquestación con Docker Compose
- ✅ Diseño responsive
- ✅ Interfaz moderna y profesional

### 📝 Comandos Útiles
```bash
# Ver logs del contenedor
docker-compose logs -f

# Ver contenedores en ejecución
docker ps

# Reconstruir después de cambios
docker-compose up -d --build

# Entrar al contenedor
docker exec -it nginx-static-web sh
```

### 🔧 Cómo Funciona

1. **Dockerfile** crea una imagen ligera usando Nginx Alpine
2. **Docker Compose** gestiona el ciclo de vida del contenedor
3. **Nginx** sirve los archivos estáticos desde la carpeta `/src`
4. La aplicación se ejecuta en el puerto **8080** de tu ordenador

### 📚 Lo que Aprendí

- Cómo crear un Dockerfile
- Cómo usar Docker Compose para despliegues fáciles
- Cómo configurar Nginx como servidor web
- Mapeo de puertos de contenedores
- Comandos básicos de Docker

### 👨‍💻 Autor

**JR** - DevOps Portfolio

### 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.