# GitHub y Control de Versiones

## Organización del Proyecto

Olé Sevilla utiliza una estructura monorepo con separación entre frontend y backend.

Esto permite mantener una arquitectura organizada y escalable.

---

# 🏛️ Estructura General

```txt
ole-sevilla/
 ├── frontend/
 ├── backend/
 └── docs/
```

---

# 🌿 Estrategia de Ramas

El proyecto sigue una estrategia de ramas basada en desarrollo incremental.

## Ramas principales

```txt
main → producción
develop → desarrollo
feature/* → nuevas funcionalidades
```

---

# 🔄 Flujo de Trabajo

El flujo de trabajo seguido durante el desarrollo consiste en:

1. Crear una rama feature.
2. Implementar funcionalidad.
3. Realizar commits descriptivos.
4. Revisar cambios.
5. Integrar en develop.
6. Fusionar finalmente en main.

---

# 🧠 Convención de Commits

El proyecto sigue una estructura basada en Conventional Commits.

## Ejemplos

```txt
feat: añadir rutas interactivas
fix: corregir sistema login
style: mejorar diseño responsive
refactor: reorganizar componentes
docs: actualizar documentación
```

---

# 🔒 Control de Calidad

Antes de integrar cambios en la rama principal se verifican:

- funcionamiento general
- estructura del proyecto
- errores visuales
- conflictos de integración

---

# 🚀 GitHub

GitHub se utiliza para:

- control de versiones
- trabajo colaborativo
- despliegue continuo
- gestión del código fuente

---

# 📦 Integración Continua

La documentación y el frontend están preparados para integrarse automáticamente con plataformas de despliegue como Vercel.