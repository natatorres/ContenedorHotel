# 🐳 Docker Prueba Tecnica

Este proyecto es una solución full-stack desarrollada con **Laravel 9** en el backend y **React + Vite** en el frontend, empaquetado con **Docker y Docker Compose** para facilitar el desarrollo y despliegue.

---

## 🚀 Tecnologías utilizadas

- ⚙️ Backend: Laravel 9, PHP 8
- 🎨 Frontend: React 18, Vite
- 🐘 Base de datos: PostgreSQL
- 🐳 Contenedores: Docker, Docker Compose
- 🔐 Autenticación: JWT

---

## 📂 Estructura del proyecto

DockerDecameron/
├── backend/ # Proyecto Laravel
├── frontend/ # Proyecto React + Vite
├── docker-compose.yml
└── .gitignore


---

## ⚙️ Requisitos previos

- Docker y Docker Compose instalados  
- Node.js y npm (si quieres correr frontend fuera de Docker)  
- Git

---

## 🛠️ Instalación y uso

Clone el repositorio

Para levantar el contenedor

docker-compose up --build

Y luego ejecute las migraciones

docker exec -it laravel-app php artisan migrate --seed

