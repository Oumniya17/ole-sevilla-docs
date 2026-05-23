# Backend

## Arquitectura Backend

El backend de Olé Sevilla está diseñado siguiendo una arquitectura modular basada en Node.js y Express.

La API REST se encarga de gestionar:

- autenticación
- perfiles de usuario
- rutas culturales
- gamificación
- publicaciones sociales
- integración con APIs externas

---

# 🏛️ Estructura Backend

```txt
backend/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middlewares/
 ├── services/
 ├── config/
 ├── utils/
 ├── uploads/
 └── server.js
```

---

# 🔐 Sistema de Autenticación

La plataforma implementa autenticación basada en JWT (JSON Web Tokens).

Las contraseñas se almacenan cifradas utilizando bcrypt.

El sistema está preparado para:

- protección de rutas
- control de roles
- sesiones seguras
- validación de usuarios

---

# 👥 Roles del Sistema

| Rol | Funcionalidad |
|---|---|
| Administrador | Gestión total del sistema |
| Turista | Exploración cultural y gamificación |
| Sevillano | Publicación de contenido e interacción cultural |

---

# 🔌 Endpoints Principales

| Método | Endpoint | Descripción |
|---|---|---|
| POST | /auth/register | Registro de usuarios |
| POST | /auth/login | Inicio de sesión |
| GET | /users/profile | Obtener perfil |
| GET | /routes | Obtener rutas culturales |
| POST | /posts/create | Crear publicación |
| GET | /dictionary | Obtener expresiones andaluzas |

---

# 🧠 APIs Externas

La plataforma integra diferentes servicios externos:

## TensorFlow.js

Utilizado para reconocimiento visual de monumentos y experiencias interactivas mediante inteligencia artificial.

---

## Audd.io API

Sistema de reconocimiento musical para detectar canciones tradicionales y flamenco.

---

## LibreTranslate API

Servicio de traducción automática para experiencia multilingüe.

---

## Google Cloud TTS

Conversión de texto a voz para narraciones culturales inmersivas.

---

## Leaflet + OpenStreetMap

Sistema de mapas interactivos y rutas culturales.

---

# 🔒 Seguridad

La arquitectura backend está diseñada siguiendo buenas prácticas de seguridad:

- validación de peticiones
- cifrado de contraseñas
- autenticación JWT
- middleware de protección
- control de acceso por roles