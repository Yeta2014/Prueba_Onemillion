# 🚀 Leads API

API REST desarrollada en **Node.js + TypeScript + Prisma + MySQL + Docker**, que permite la gestión de leads con funcionalidades avanzadas como filtros, estadísticas y análisis con inteligencia artificial (OpenAI).

---

## 🧠 Descripción

Este proyecto implementa una API para la gestión de leads, incluyendo:

* CRUD completo de leads
* Soft delete (eliminación lógica)
* Filtros por fecha, fuente y paginación
* Estadísticas de negocio
* Generación de insights con IA (OpenAI)
* Arquitectura limpia (controllers, services, repositories)
* Contenerización con Docker

---

## 🛠️ Tecnologías

* Node.js
* TypeScript
* Express
* Prisma ORM
* MySQL
* Docker
* OpenAI API

---

## 📁 Estructura del proyecto

```
leads-api/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── middlewares/
│   └── app.ts
│
├── docker-compose.yml
├── Dockerfile
├── package.json
└── .env
```

---

## ⚙️ Configuración

### 1. Clonar repositorio

```
git clone https://github.com/tu-usuario/leads-api.git
cd leads-api
```

---

### 2. Variables de entorno

Crear archivo `.env` en la raíz:

```
DATABASE_URL=mysql://root:root@db:3306/leads_db
OPENAI_API_KEY=tu_api_key
PORT=3000
```

---

### 3. Levantar con Docker

```
docker-compose up --build
```

---

### 4. Ejecutar migraciones

```
docker exec -it leads-api-app-1 npx prisma migrate dev
```

---

## 🚀 Endpoints

### 🔹 Crear lead

```
POST /leads
```

```json
{
  "nombre": "Tatiana",
  "email": "tatiana@test.com",
  "fuente": "instagram",
  "presupuesto": 1500
}
```

---

### 🔹 Obtener leads

```
GET /leads?page=1&limit=10&fuente=instagram
```

---

### 🔹 Obtener por ID

```
GET /leads/:id
```

---

### 🔹 Actualizar

```
PATCH /leads/:id
```

---

### 🔹 Eliminar (soft delete)

```
DELETE /leads/:id
```

---

### 🔹 Estadísticas

```
GET /leads/stats
```

---

### 🔹 Resumen con IA

```
POST /leads/ai/summary
```

```json
{
  "leads": [...]
}
```

---

## 📊 Ejemplo de respuesta (stats)

```json
{
  "total": 10,
  "porFuente": [
    { "fuente": "instagram", "_count": 5 }
  ],
  "promedio": 1750,
  "ultimos_7_dias": 3
}
```

---

## 🧠 Funcionalidades destacadas

* ✔ Arquitectura escalable (Clean Architecture)
* ✔ Manejo de errores global
* ✔ Prisma como ORM moderno
* ✔ Integración con OpenAI
* ✔ Docker listo para producción
* ✔ Código tipado con TypeScript

---

## 🔐 Seguridad

* Variables sensibles manejadas con `.env`
* `.env` excluido del repositorio
* Uso de buenas prácticas en configuración

---

## 📌 Mejoras futuras

* Swagger (documentación automática)
* Autenticación (JWT)
* Tests unitarios
* Deploy en la nube (Render / Railway)
* Rate limiting

---

## 👩‍💻 Autor

Desarrollado por **[Tu Nombre]**

---

## ⭐ Notas finales

Este proyecto fue desarrollado como prueba técnica demostrando habilidades en:

* Backend moderno con Node.js
* Diseño de APIs REST
* Integración de servicios externos (IA)
* Uso de contenedores Docker
* Manejo de base de datos con Prisma

---
