# API REST - Gestión de Productos con Node.js y Firebase Firestore

API REST desarrollada con **Node.js y Express** para la administración de un catálogo de productos de una tienda oficial, utilizando **Firebase Firestore** como base de datos en la nube y autenticación basada en **JSON Web Tokens (JWT)**.

---

## 🚀 Características

- **Arquitectura por capas:** Separación clara entre Rutas, Controladores, Servicios, Modelos y Middlewares.
- **Base de Datos NoSQL:** Conexión remota con Firebase Firestore.
- **Seguridad:** Autenticación de usuarios mediante JWT (JSON Web Tokens) y rutas protegidas.
- **Manejo de Errores:** Control centralizado de códigos de estado HTTP (400, 401, 403, 404, 500).
- **Despliegue Serverless:** Configurado y desplegado en producción en Vercel.

---

## 🛠️ Tecnologías Utilizadas

- Node.js (ESModules)
- Express.js
- Firebase Firestore
- JSON Web Token (jsonwebtoken)
- Dotenv
- CORS & Body-Parser

---

## ⚙️ Instalación y Configuración Local

1. Clona el repositorio o descarga el proyecto.
2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto basándote en la siguiente estructura:

```env
PORT=3000
JWT_SECRET=tu_clave_secreta_jwt
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

4. Inicia el servidor en entorno de desarrollo:

```bash
npm run start
```

---

## ☁️ Despliegue en Vercel y Pruebas en Producción

La aplicación se encuentra desplegada como un servicio serverless en Vercel y lista para ser consumida desde cualquier cliente HTTP o frontend.

**URL Base de Producción:**

`https://dameiri-castillejo-comisi-n-26225-b.vercel.app`

### Cómo conectarse y probar con Postman / Thunder Client

### 1. Rutas públicas (no requieren autenticación)

**Listar todos los productos**

- **Método:** `GET`
- **URL:** `https://dameiri-castillejo-comisi-n-26225-b.vercel.app/api/products`

**Obtener un producto por ID**

- **Método:** `GET`
- **URL:** `https://dameiri-castillejo-comisi-n-26225-b.vercel.app/api/products/:id`

### 2. Obtener el token de autenticación (Login)

Para realizar operaciones protegidas, como crear o eliminar productos, primero debes autenticarte.

- **Método:** `POST`
- **URL:** `https://dameiri-castillejo-comisi-n-26225-b.vercel.app/auth/login`

**Body (JSON):**

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Respuesta:** Copia el valor del campo `token` que devuelve la respuesta exitosa.

### 3. Consumir rutas protegidas

**Crear un producto**

- **Método:** `POST`
- **URL:** `https://dameiri-castillejo-comisi-n-26225-b.vercel.app/api/products/create`
- **Autenticación:** En la pestaña **Auth**, selecciona `Bearer Token` y pega el token obtenido en el paso anterior.

**Body (JSON):**

```json
{
  "name": "Nombre del Producto",
  "price": 99.99,
  "stock": 10
}
```

**Eliminar un producto**

- **Método:** `DELETE`
- **URL:** `https://dameiri-castillejo-comisi-n-26225-b.vercel.app/api/products/:id`

Reemplaza `:id` con el ID real del documento en Firestore.

- **Autenticación:** En la pestaña **Auth**, selecciona `Bearer Token` y pega tu token.