# API REST - Gestión de Productos con Node.js y Firebase Firestore

API REST desarrollada con Node.js y Express para la administración de un catálogo de productos de una tienda oficial, utilizando Firebase Firestore como base de datos en la nube y autenticación basada en JSON Web Tokens (JWT).

---

## 🚀 Características

* **Arquitectura por capas:** Separación clara entre Rutas, Controladores, Servicios, Modelos y Middlewares.
* **Base de Datos NoSQL:** Conexión remota con Firebase Firestore.
* **Seguridad:** Autenticación de usuarios mediante JWT (JSON Web Tokens) y rutas protegidas.
* **Manejo de Errores:** Control centralizado de códigos de estado HTTP (400, 401, 403, 404, 500).
* **Despliegue Serverless:** Configurado para producción en Vercel.

---

## 🛠️ Tecnologías Utilizadas

* [Node.js](https://nodejs.org/) (ESModules)
* [Express.js](https://expressjs.com/)
* [Firebase Firestore](https://firebase.google.com/)
* [JSON Web Token (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
* [Dotenv](https://github.com/motdotla/dotenv)
* [CORS](https://github.com/expressjs/cors) & [Body-Parser](https://github.com/expressjs/body-parser)

---

## ⚙️ Instalación y Configuración Local

1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias del proyecto:
   ```bash
   npm install