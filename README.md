<h1 align="center">🧪 QALab</h1>

<p align="center">
  <strong>Asistente inteligente para investigaciones OOS y gestión CAPA en laboratorios</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff" />
  <img src="https://img.shields.io/badge/API-Express-000000?style=for-the-badge&logo=express&logoColor=fff" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=fff" />
  <img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=fff" />
  <img src="https://img.shields.io/badge/Cloud-Neon-00E599?style=for-the-badge&logo=neon&logoColor=000" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-En%20desarrollo-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/MVP-OOS%20%2B%20CAPA-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/Regulatory%20Focus-21%20CFR%20Part%2011-orange?style=flat-square" />
</p>

---

## 📌 Descripción

**QALab** es una aplicación web orientada a laboratorios farmacéuticos, microbiológicos y de control de calidad.

Su propósito es apoyar la gestión de investigaciones de resultados fuera de especificación —**OOS**—, guiar al usuario durante la investigación, documentar hallazgos, generar informes técnicos y conectar los resultados con acciones correctivas y preventivas —**CAPA**—.

La visión del producto no es ser un simple formulario digital, sino convertirse en un **asistente técnico de investigación** que ayude a estandarizar criterios, reducir omisiones y mejorar la calidad documental de los procesos de laboratorio.

---

## 🌐 Demo

Frontend desplegado en Vercel:

🔗 https://qalab-steel.vercel.app

> Nota: en esta etapa el frontend ya está desplegado, pero el backend todavía se ejecuta localmente.  
> La conexión completa con datos reales en producción se habilitará cuando la API backend sea desplegada y configurada mediante `VITE_API_BASE_URL`.

---

## 🎯 Objetivo del MVP

Construir una plataforma funcional que permita:

* Registrar casos OOS.
* Consultar y actualizar casos OOS.
* Guiar una investigación Fase I mediante un flujo tipo wizard.
* Aplicar un motor básico de reglas.
* Generar informes técnicos editables.
* Crear CAPA asociadas a causas raíz.
* Gestionar usuarios, roles, aprobaciones y trazabilidad básica.
* Preparar la base para firma electrónica y audit trail.
* Usar IA como apoyo de redacción técnica, sin tomar decisiones regulatorias finales.

---

## 🧬 Contexto funcional

En laboratorios farmacéuticos, las investigaciones OOS suelen depender de formatos estáticos y de la experiencia del investigador.

Esto puede generar:

* Investigaciones incompletas.
* Variabilidad en criterios técnicos.
* Dificultad para identificar causas raíz.
* CAPA poco efectivas.
* Dependencia de personal altamente experto.
* Tiempos prolongados de documentación.

**QALab** busca resolver este problema mediante un flujo guiado, reglas básicas de decisión, trazabilidad y generación estructurada de informes.

---

## 🧱 Stack tecnológico

| Capa                 | Tecnología         |
| -------------------- | ------------------ |
| Frontend             | React + Vite       |
| Backend              | Node.js + Express  |
| ORM                  | Prisma             |
| Base de datos        | PostgreSQL         |
| Proveedor DB         | Neon               |
| Pruebas API          | Thunder Client     |
| Editor               | Visual Studio Code |
| Control de versiones | Git + GitHub       |

---

## 📁 Estructura del proyecto

```txt
qalab/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.js
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env.example
│
├── docs/
│   ├── requirements.md
│   ├── roadmap.md
│   └── api.md
│
├── README.md
└── .gitignore
```

---

## ✅ Estado actual del proyecto

### Completado

* Repositorio creado en GitHub.
* Estructura inicial tipo monorepo.
* Frontend creado con React + Vite.
* Backend creado con Node.js + Express.
* Endpoint de salud disponible en `/api/health`.
* Prisma instalado y configurado.
* Base de datos PostgreSQL creada en Neon.
* Migración inicial ejecutada correctamente.
* Modelos iniciales creados:

  * `User`
  * `OOSCase`
* Usuario administrador inicial creado mediante seed.
* API REST inicial para casos OOS implementada.
* Caso OOS de prueba creado exitosamente desde Thunder Client.
* Datos verificados en Prisma Studio.

---

## 🧪 Modelos iniciales

### User

Representa los usuarios del sistema.

Campos principales:

```txt
id
name
email
passwordHash
role
isActive
createdAt
updatedAt
```

Roles iniciales:

```txt
ADMIN
ANALYST
REVIEWER
QA
```

---

### OOSCase

Representa un caso OOS registrado en el sistema.

Campos principales:

```txt
id
code
productName
batchNumber
area
testType
method
resultObtained
specification
microorganism
description
status
phase
createdById
createdAt
updatedAt
```

Estados iniciales:

```txt
OPEN
IN_INVESTIGATION
PHASE_ONE_COMPLETED
REQUIRES_PHASE_TWO
CLOSED
```

Fases iniciales:

```txt
PHASE_ONE
PHASE_TWO
COMPLETED
```

---

## 🔌 API actual

### Health Check

```http
GET /api/health
```

Respuesta esperada:

```json
{
  "status": "ok",
  "service": "QALab API",
  "version": "1.0.0"
}
```

---

### Listar casos OOS

```http
GET /api/oos
```

Respuesta esperada:

```json
{
  "success": true,
  "data": []
}
```

Cuando existen casos registrados, `data` devuelve un arreglo con los casos OOS.

---

### Crear caso OOS

```http
POST /api/oos
```

Body de ejemplo:

```json
{
  "productName": "Producto A",
  "batchNumber": "L-2026-001",
  "area": "Microbiología",
  "testType": "Ensayo microbiológico",
  "method": "Recuento microbiológico",
  "resultObtained": "Presencia de Burkholderia cepacia",
  "specification": "Ausencia",
  "microorganism": "Burkholderia cepacia",
  "description": "Resultado fuera de especificación detectado durante análisis microbiológico de rutina."
}
```

Respuesta esperada:

```json
{
  "success": true,
  "message": "OOS case created successfully.",
  "data": {
    "id": "uuid-del-caso",
    "code": "OOS-2026-000001",
    "productName": "Producto A",
    "batchNumber": "L-2026-001",
    "area": "Microbiología",
    "testType": "Ensayo microbiológico",
    "method": "Recuento microbiológico",
    "resultObtained": "Presencia de Burkholderia cepacia",
    "specification": "Ausencia",
    "microorganism": "Burkholderia cepacia",
    "description": "Resultado fuera de especificación detectado durante análisis microbiológico de rutina.",
    "status": "OPEN",
    "phase": "PHASE_ONE"
  }
}
```

---

### Consultar caso OOS por ID

```http
GET /api/oos/:id
```

Ejemplo:

```http
GET /api/oos/uuid-del-caso
```

---

### Actualizar caso OOS

```http
PATCH /api/oos/:id
```

Body de ejemplo:

```json
{
  "status": "IN_INVESTIGATION",
  "phase": "PHASE_ONE"
}
```

---

## ⚙️ Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/ea0627/qalab.git
cd qalab
```

---

### 2. Instalar dependencias del backend

```bash
cd backend
npm install
```

---

### 3. Instalar dependencias del frontend

```bash
cd ../frontend
npm install
```

---

## 🔐 Variables de entorno

El backend requiere un archivo `.env` dentro de la carpeta `backend`.

Ejemplo:

```env
PORT=4000
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
JWT_SECRET="qalab_super_secret_dev"
OPENAI_API_KEY=
```

Importante:

* El archivo `.env` no debe subirse al repositorio.
* Las credenciales reales de Neon deben mantenerse privadas.
* Para documentar la estructura de variables se debe usar `.env.example`.

---

## ▶️ Ejecutar en desarrollo

### Backend

```bash
cd backend
npm run dev
```

Servidor backend:

```txt
http://localhost:4000
```

---

### Frontend

```bash
cd frontend
npm run dev
```

Servidor frontend:

```txt
http://localhost:5173
```

---

## 🧭 Prisma

### Ejecutar migraciones

```bash
cd backend
npx prisma migrate dev
```

---

### Generar Prisma Client

```bash
npx prisma generate
```

---

### Ejecutar seed

```bash
npm run seed
```

El seed crea un usuario administrador inicial para desarrollo.

Credenciales temporales de desarrollo:

```txt
Email: admin@qalab.local
Password: Admin123*
Rol: ADMIN
```

---

### Abrir Prisma Studio

```bash
npx prisma studio
```

Prisma Studio corre normalmente en:

```txt
http://localhost:5555
```

---

## 🧪 Pruebas realizadas

### Thunder Client

Se probaron los siguientes endpoints:

* `GET /api/health`
* `GET /api/oos`
* `POST /api/oos`

Resultado:

* El backend responde correctamente.
* La API permite crear casos OOS.
* La API permite listar casos OOS existentes.
* Los datos se almacenan correctamente en PostgreSQL.

---

### Prisma Studio

Se verificaron los modelos:

* `User`
* `OOSCase`

Resultado:

* El usuario administrador inicial existe en la base de datos.
* El caso OOS de prueba se almacena correctamente en Neon PostgreSQL.

---

## 🗺️ Roadmap del MVP

### Sprint actual

API REST inicial para casos OOS.

Estado:

* `GET /api/oos` implementado.
* `POST /api/oos` implementado.
* `GET /api/oos/:id` implementado.
* `PATCH /api/oos/:id` implementado.

---

### Siguiente sprint

Conexión del frontend con la API de OOS.

Tareas:

* Crear servicio frontend para consumir la API.
* Crear pantalla de listado de casos OOS.
* Crear formulario para registrar un nuevo caso OOS.
* Mostrar detalle básico del caso.
* Preparar la base visual para el wizard de investigación Fase I.

---

### Próximos módulos

1. Autenticación con JWT.
2. Gestión de usuarios y roles.
3. Wizard de investigación Fase I.
4. Motor de reglas.
5. Generación de informe técnico.
6. Creación automática de CAPA.
7. Dashboard básico.
8. Firma electrónica.
9. Audit trail básico.
10. Integración con OpenAI para apoyo de redacción.

---

## 🧠 Uso de inteligencia artificial

La IA en QALab será usada únicamente como apoyo técnico, principalmente para:

* Mejorar redacción de informes.
* Resumir hallazgos.
* Sugerir hipótesis preliminares.
* Proponer preguntas adicionales.
* Apoyar la generación de acciones CAPA.

La IA no debe:

* Tomar decisiones regulatorias finales.
* Cerrar investigaciones.
* Aprobar CAPA.
* Invalidar resultados de forma autónoma.
* Reemplazar el criterio del usuario autorizado.

---

## 🧾 Consideraciones regulatorias

QALab se diseña considerando buenas prácticas de entornos regulados, especialmente en laboratorios farmacéuticos.

Principios considerados desde el MVP:

* Trazabilidad de registros.
* Identificación de usuario responsable.
* Control de cambios.
* Registro estructurado de investigaciones.
* Separación entre apoyo de IA y decisión humana.
* Preparación futura para firma electrónica.
* Preparación futura para audit trail.
* Enfoque hacia controles alineados con 21 CFR Part 11.

---

## 🚀 Despliegue previsto

La estrategia prevista de despliegue es:

| Componente    | Plataforma                |
| ------------- | ------------------------- |
| Frontend      | Vercel                    |
| Backend       | Vercel / Render / Railway |
| Base de datos | Neon PostgreSQL           |

En esta etapa el proyecto se encuentra en desarrollo local. El despliegue se realizará cuando el frontend esté conectado con la API inicial.

---

## 🧰 Comandos útiles

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

### Prisma Studio

```bash
cd backend
npx prisma studio
```

### Seed

```bash
cd backend
npm run seed
```

### Migraciones

```bash
cd backend
npx prisma migrate dev
```

### Git

```bash
git status
git add .
git commit -m "mensaje-del-commit"
git push
```

---

## ✅ Buenas prácticas del proyecto

* No subir archivos `.env`.
* Mantener actualizado el README en cada avance importante.
* Hacer commits pequeños y claros.
* Probar endpoints antes de conectar el frontend.
* Documentar rutas nuevas en la sección de API.
* Validar cambios en Prisma Studio cuando se modifiquen datos.
* Mantener separación entre frontend, backend y documentación.
* Usar Thunder Client para pruebas REST durante desarrollo.
* Priorizar trazabilidad, claridad y mantenibilidad.

---

## 📦 Repositorio

```txt
https://github.com/ea0627/qalab
```

---

## 👨‍💻 Autor

Desarrollado por **Eduardo Amaya**.

<p align="left">
  <a href="https://github.com/ea0627">
    <img src="https://img.shields.io/badge/GitHub-ea0627-181717?style=for-the-badge&logo=github" />
  </a>
  <a href="https://www.linkedin.com/in/ea0627/">
    <img src="https://img.shields.io/badge/LinkedIn-Eduardo%20Amaya-0A66C2?style=for-the-badge&logo=linkedin" />
  </a>
  <a href="https://portafolio-ea.vercel.app/">
    <img src="https://img.shields.io/badge/Portafolio-Eduardo%20Amaya-00A3E0?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

---

<p align="center">
  <strong>QALab</strong> — Construyendo una herramienta inteligente para investigaciones OOS y CAPA en laboratorio.
</p>

<p align="center">
  🧪 Calidad · 🔍 Investigación · 🧾 Trazabilidad · ✅ CAPA
</p>
