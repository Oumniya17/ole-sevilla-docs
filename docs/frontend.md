# Frontend

## Arquitectura Frontend

El frontend de Olé Sevilla está desarrollado utilizando React.js y Vite.

La aplicación sigue una arquitectura modular basada en separación de responsabilidades, permitiendo mantener una estructura limpia, escalable y reutilizable.

---

# 📱 Estructura del Proyecto

```txt
frontend/
 ├── public/
 ├── src/
 │   ├── assets/
 │   ├── components/
 │   │    ├── layout/
 │   │    ├── profile/
 │   │    └── words/
 │   ├── context/
 │   ├── data/
 │   ├── hooks/
 │   ├── pages/
 │   ├── router/
 │   ├── services/
 │   ├── styles/
 │   ├── App.jsx
 │   └── main.jsx
```

---

# 🧩 Componentes Principales

## 🏠 Inicio

Pantalla principal inspirada en la estética andaluza moderna con navegación interactiva y diseño inmersivo.

---

## 📸 Scan&Olé

Sistema de reconocimiento visual de monumentos mediante inteligencia artificial.

Permite identificar lugares emblemáticos de Sevilla desde el dispositivo móvil.

---

## 🎵 Sound&Olé

Sistema de reconocimiento musical para detectar canciones tradicionales, flamenco y sonidos culturales.

---

## 🗺️ Rutas Interactivas

Mapa interactivo con recorridos culturales y sistema gamificado de exploración.

---

## 👥 Olé Connect

Mini red social diseñada para conectar turistas y sevillanos mediante publicaciones y experiencias culturales.

---

## 📖 Diccionario Andaluz

Sistema interactivo para aprender expresiones locales mediante juegos y ejemplos visuales.

---

## 👤 My Olé

Perfil del usuario donde se muestran:

- logros
- puntos
- progreso
- actividad cultural

---

# 🎨 Diseño UX/UI

La interfaz sigue una filosofía mobile-first orientada a experiencias inmersivas y navegación intuitiva.

La identidad visual combina:

- minimalismo futurista
- estética andaluza
- gradientes cálidos
- diseño emocional

---

# 🔄 Gestión del Estado

La aplicación utiliza Context API para compartir información global entre componentes y evitar prop drilling.

---

# 🔌 Servicios y APIs

La carpeta services centraliza:

- llamadas HTTP
- conexión con backend
- integración con APIs externas
- gestión de datos

Esto permite una arquitectura desacoplada y escalable.