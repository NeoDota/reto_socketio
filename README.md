# 🛒 Sistema CRUD de Compras y Productos - VIP GYM

Este proyecto es una aplicación web desarrollada con **Laravel** y **AdminLTE**, diseñada para gestionar categorías, productos, clientes y compras. Además, incluye una interfaz tipo cajero y actualizaciones en tiempo real usando **Socket.IO**.

---

## 🚀 Características

- CRUD completo para:
  - Categorías de productos
  - Productos
  - Clientes
  - Compras
  - Relación entre compras y productos (muchos a muchos)
- Sistema tipo **cajero** con:
  - Agregado dinámico de productos a la compra
  - Control de stock en tiempo real
- Interfaz moderna con **AdminLTE**
- Comunicación en tiempo real con **Socket.IO**
- Validaciones de formularios y retroalimentación visual

---

## 📂 Estructura del Proyecto

├── app/
│ ├── Http/Controllers/
│ ├── Models/
├── resources/views/
│ ├── productos/
│ ├── compras/
│ └── layouts/
├── routes/web.php
├── database/migrations/
├── public/
│ └── js/ (opcional si separas lógica)
├── README.md
└── ...

---

## 🧾 Requisitos Previos

- PHP >= 8.1
- Composer
- Node.js y NPM
- Laravel 10+
- XAMPP / Apache o Laravel Valet
- MySQL o PostgreSQL

---

## 🛠️ Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/NeoDota/reto_socketio.git
cd reto_socketio

Instalar dependencias

composer install
npm install

Copiar archivo .env y generar clave de aplicación
cp .env.example .env


php artisan key:generate

Edita .env:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_market
DB_USERNAME=root
DB_PASSWORD=``

Migrar tablas

php artisan migrate

Iniciar servidor Laravel

php artisan serve

Iniciar servidor de Socket.IO

Ubícate en el directorio socket-server/ (si tienes uno) o donde esté tu servidor Node.js y ejecuta:

npm install
node server.js

🌐 Acceso al Proyecto
Una vez en ejecución:

Laravel: http://localhost:8000

Socket.IO: http://localhost:3001

🧑‍💻 Tecnologías Usadas
Laravel 10

AdminLTE 3

Bootstrap 4

Socket.IO

jQuery

PostgreSQL / MySQL

