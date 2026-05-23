# Arquitectura de la Aplicación

## Arquitectura General

Olé Sevilla sigue una arquitectura cliente-servidor moderna basada en una SPA (Single Page Application) desarrollada con React y Vite.

El frontend se comunica con un backend REST construido con Node.js y Express, encargado de gestionar autenticación, lógica de negocio y comunicación con servicios externos.

---

# 🏛️ Flujo General

```txt
Usuario
   ↓
Frontend React (Vite)
   ↓
API REST (Node.js + Express)
   ↓
MongoDB
   ↓
Servicios Externos
 ├── Reconocimiento IA
 ├── Traducción
 ├── Text-to-Speech
 └── Mapas interactivos
 ```

---

# 🛠️ Tecnologías Utilizadas

| Área | Tecnología |
|---|---|
| Frontend | React.js + Vite |
| Estilos | CSS3 + Framer Motion |
| Backend | Node.js + Express |
| Base de Datos | MongoDB |
| Autenticación | JWT |
| Reconocimiento IA | TensorFlow.js |
| Reconocimiento Musical | Audd.io API |
| Traducción | LibreTranslate API |
| Text-to-Speech | Google Cloud TTS |
| Mapas | Leaflet + OpenStreetMap |
| Control de versiones | Git + GitHub |
| Despliegue | Vercel + Render |

---

# 📦 Requisitos Técnicos

```bash
Node.js >= 20
npm >= 10
React >= 18
MongoDB >= 7
```

---

# 📱 Arquitectura Frontend

La aplicación sigue una arquitectura modular basada en separación de responsabilidades.

```txt
frontend/
 ├── public/
 ├── src/
 │   ├── assets/
 │   ├── components/
 │   ├── context/
 │   ├── hooks/
 │   ├── pages/
 │   ├── router/
 │   ├── services/
 │   ├── styles/
 │   ├── App.jsx
 │   └── main.jsx
```

---

# 🔐 Seguridad

La plataforma está preparada para implementar:

- autenticación JWT
- cifrado de contraseñas
- middleware de protección
- control de roles
- validación de peticiones

---

# 🌍 Escalabilidad

La arquitectura está diseñada para permitir futuras expansiones del proyecto como:

- Olé París
- Olé Roma
- Olé Marrakech

manteniendo la misma estructura tecnológica.