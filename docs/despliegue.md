# Despliegue en la Nube

## Introducción

Olé Sevilla está diseñada para desplegarse en plataformas cloud modernas permitiendo una arquitectura escalable y accesible desde cualquier dispositivo.

---

# 🌍 Frontend

El frontend se despliega utilizando Vercel.

Vercel permite:

- despliegue automático
- integración con GitHub
- optimización frontend
- hosting rápido y escalable

---

# 🚀 Proceso de Despliegue Frontend

## Paso 1

Subir el proyecto a GitHub.

---

## Paso 2

Acceder a Vercel.

---

## Paso 3

Importar el repositorio del proyecto.

---

## Paso 4

Configurar variables de entorno necesarias.

---

## Paso 5

Realizar el despliegue automático.

---

# ⚙️ Variables de Entorno

Ejemplo de variables utilizadas:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GOOGLE_TTS_API=your_api_key
```

---

# 🔄 Integración Continua

La plataforma implementa despliegue continuo conectado con GitHub.

Cada push realizado en la rama principal genera automáticamente una nueva versión del proyecto.

---

# 🔧 Backend

El backend está preparado para desplegarse utilizando plataformas como:

- Render
- Railway

Estas plataformas permiten desplegar APIs Node.js de forma sencilla y escalable.

---

# 🧠 APIs Externas

Durante el despliegue es necesario configurar correctamente las claves de APIs externas:

- TensorFlow.js
- Audd.io
- LibreTranslate
- Google Cloud TTS

---

# 🔒 Seguridad

Las variables sensibles se gestionan mediante sistemas de variables de entorno proporcionados por las plataformas cloud.

No se almacenan credenciales directamente en el código fuente.

---

# 📱 Accesibilidad

El proyecto está diseñado para funcionar correctamente en:

- dispositivos móviles
- tablets
- escritorio

garantizando una experiencia responsive y accesible.