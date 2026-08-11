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

Backend API desplegado en Vercel:

🔗 https://qalab-api-gamma.vercel.app

### Endpoints principales

```http
GET  https://qalab-api-gamma.vercel.app/api/health
POST https://qalab-api-gamma.vercel.app/api/auth/login
GET  https://qalab-api-gamma.vercel.app/api/auth/me
GET  https://qalab-api-gamma.vercel.app/api/oos
POST https://qalab-api-gamma.vercel.app/api/oos
GET  https://qalab-api-gamma.vercel.app/api/oos/:id
PATCH https://qalab-api-gamma.vercel.app/api/oos/:id
```

> Nota: los endpoints del módulo OOS requieren autenticación mediante JWT, excepto el health check.

---

## 🎯 Objetivo del MVP

Construir una plataforma funcional que permita:

- Registrar casos OOS.
- Consultar y actualizar casos OOS.
- Controlar acceso mediante autenticación y roles.
- Guiar una investigación Fase I mediante un flujo tipo wizard.
- Aplicar un motor básico de reglas.
- Generar informes técnicos editables.
- Crear CAPA asociadas a causas raíz.
- Gestionar usuarios, roles, aprobaciones y trazabilidad básica.
- Preparar la base para firma electrónica y audit trail.
- Usar IA como apoyo de redacción técnica, sin tomar decisiones regulatorias finales.

---

## 🧬 Contexto funcional

En laboratorios farmacéuticos, las investigaciones OOS suelen depender de formatos estáticos y de la experiencia del investigador.

Esto puede generar:

- Investigaciones incompletas.
- Variabilidad en criterios técnicos.
- Dificultad para identificar causas raíz.
- CAPA poco efectivas.
- Dependencia de personal altamente experto.
- Tiempos prolongados de documentación.

**QALab** busca resolver este problema mediante un flujo guiado, reglas básicas de decisión, trazabilidad y generación estructurada de informes.

---

## 🧱 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| ORM | Prisma |
| Base de datos | PostgreSQL |
| Proveedor DB | Neon |
| Autenticación | JWT + bcrypt |
| Pruebas API | Thunder Client |
| Editor | Visual Studio Code |
| Control de versiones | Git + GitHub |
| Despliegue frontend | Vercel |
| Despliegue backend | Vercel |

---

## 📁 Estructura del proyecto

```txt
qalab/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── api/
│   │   └── index.js
│   │
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.js
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   ├── vercel.json
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

## 🎨 Arquitectura de estilos

El frontend utiliza una estructura modular de estilos para mantener el proyecto ordenado y escalable.

```txt
frontend/src/styles/
├── main.css
├── variables.css
├── base.css
├── layout.css
├── components.css
├── oos.css
└── forms.css
```

### Descripción de archivos

| Archivo | Propósito |
|---|---|
| `main.css` | Archivo principal que importa todos los estilos |
| `variables.css` | Colores, sombras, radios y variables globales |
| `base.css` | Reset básico y estilos globales |
| `layout.css` | Estructura general de la aplicación |
| `components.css` | Componentes reutilizables como sidebar, botones, badges y mensajes |
| `oos.css` | Estilos específicos del listado y tarjetas de casos OOS |
| `forms.css` | Estilos para formularios del sistema, login y creación de casos |

Esta organización permite separar responsabilidades visuales y facilita el mantenimiento a medida que QALab crezca.

---

## ✅ Estado actual del proyecto

### Completado

- Repositorio creado en GitHub.
- Estructura inicial tipo monorepo.
- Frontend creado con React + Vite.
- Backend creado con Node.js + Express.
- Endpoint de salud disponible en `/api/health`.
- Prisma instalado y configurado.
- Base de datos PostgreSQL creada en Neon.
- Migración inicial ejecutada correctamente.
- Modelos iniciales creados:
  - `User`
  - `OOSCase`
- Usuario administrador inicial creado mediante seed.
- API REST inicial para casos OOS implementada.
- Datos verificados en Prisma Studio.
- Frontend inicial conectado a la API local de OOS.
- Listado visual de casos OOS implementado.
- Formulario frontend para crear casos OOS implementado.
- Navegación básica entre:
  - Casos OOS
  - Nuevo OOS
  - Dashboard
- Creación de casos OOS desde la interfaz validada correctamente.
- Branding inicial de QALab configurado:
  - Título del sitio.
  - Favicon personalizado.
  - Metadatos SEO.
  - Open Graph básico.
  - `robots.txt`.
  - `sitemap.xml`.
- Arquitectura de estilos reorganizada en archivos CSS modulares.
- Frontend desplegado en Vercel.
- Backend desplegado en Vercel.
- Base de datos PostgreSQL en Neon.
- Frontend conectado a la API pública mediante `VITE_API_BASE_URL`.
- Autenticación JWT implementada en backend.
- Pantalla de login implementada en frontend.
- Persistencia temporal de sesión mediante `localStorage`.
- Botón de cierre de sesión implementado.
- Mensajes de autenticación en español.
- Creación de casos OOS asociada al usuario autenticado.
- Rutas OOS protegidas mediante token.
- Control de acceso por rol implementado:
  - `ADMIN` consulta todos los casos.
  - `ANALYST` consulta solo sus propios casos.

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

## 🔐 Usuarios, roles y permisos

QALab implementa autenticación JWT y control de acceso por rol para proteger las operaciones críticas del módulo OOS.

### Endpoints de autenticación

```http
POST /api/auth/login
GET  /api/auth/me
```

### Seguridad implementada

- Login con email y contraseña.
- Contraseñas almacenadas mediante hash con bcrypt.
- Generación de token JWT con expiración.
- Persistencia temporal de sesión en frontend mediante `localStorage`.
- Validación de sesión mediante middleware de autenticación.
- Middleware de autorización por roles.
- Protección de rutas OOS mediante header `Authorization`.
- Asociación automática del caso OOS al usuario autenticado.

### Roles actuales

- `ADMIN`
- `ANALYST`
- `REVIEWER`
- `QA`

### Permisos implementados actualmente

| Acción | ADMIN | ANALYST | QA | REVIEWER |
|---|---:|---:|---:|---:|
| Iniciar sesión | ✅ | ✅ | ✅ | ✅ |
| Ver todos los casos OOS | ✅ | ❌ | ✅ | ❌ |
| Ver casos propios | ✅ | ✅ | ✅ | ✅ |
| Crear casos OOS | ✅ | ✅ | ✅ | ❌ |
| Editar casos OOS | ✅ | ❌ | ❌ | ❌ |
| Cambiar estado del caso | ✅ | ❌ | ❌ | ❌ |
| Cerrar casos OOS | ✅ | ❌ | ❌ | ❌ |
| Eliminar casos OOS | ❌ | ❌ | ❌ | ❌ |

### Reglas activas

- `ADMIN` puede consultar todos los casos OOS.
- `QA` queda previsto para consultar todos los casos OOS.
- `ANALYST` solo puede consultar los casos creados por él mismo.
- `ANALYST` puede crear casos OOS, pero no editarlos ni cerrarlos.
- La creación de casos OOS requiere autenticación.
- La actualización de casos OOS queda limitada a `ADMIN`.
- No se implementa eliminación definitiva de casos por enfoque regulatorio.
- Más adelante se podrá implementar anulación controlada con justificación y audit trail.

### Endpoints protegidos

```http
GET   /api/oos
POST  /api/oos
GET   /api/oos/:id
PATCH /api/oos/:id
```

Las rutas protegidas requieren el header:

```http
Authorization: Bearer <token>
```

### Usuarios seed de desarrollo

El proyecto cuenta con usuarios de prueba para validar flujos de autenticación y permisos.

Las credenciales deben gestionarse de forma privada y no publicarse en el repositorio.

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

### Login

```http
POST /api/auth/login
```

Body de ejemplo:

```json
{
  "email": "usuario@qalab.local",
  "password": "password-privado"
}
```

Respuesta esperada:

```json
{
  "success": true,
  "message": "Login successful.",
  "data": {
    "token": "jwt-token",
    "user": {
      "id": "uuid-del-usuario",
      "name": "Nombre del usuario",
      "email": "usuario@qalab.local",
      "role": "ADMIN",
      "isActive": true
    }
  }
}
```

---

### Usuario autenticado

```http
GET /api/auth/me
```

Header requerido:

```http
Authorization: Bearer <token>
```

Respuesta esperada:

```json
{
  "success": true,
  "data": {
    "id": "uuid-del-usuario",
    "name": "Nombre del usuario",
    "email": "usuario@qalab.local",
    "role": "ADMIN",
    "isActive": true
  }
}
```

---

### Listar casos OOS

```http
GET /api/oos
```

Header requerido:

```http
Authorization: Bearer <token>
```

Comportamiento por rol:

- `ADMIN`: devuelve todos los casos.
- `QA`: previsto para devolver todos los casos.
- `ANALYST`: devuelve solo los casos creados por el usuario autenticado.

Respuesta esperada:

```json
{
  "success": true,
  "data": []
}
```

Cuando existen casos registrados, `data` devuelve un arreglo con los casos OOS permitidos para el usuario autenticado.

---

### Crear caso OOS

```http
POST /api/oos
```

Header requerido:

```http
Authorization: Bearer <token>
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
    "phase": "PHASE_ONE",
    "createdBy": {
      "id": "uuid-del-usuario",
      "name": "Nombre del usuario",
      "email": "usuario@qalab.local",
      "role": "ANALYST"
    }
  }
}
```

---

### Consultar caso OOS por ID

```http
GET /api/oos/:id
```

Header requerido:

```http
Authorization: Bearer <token>
```

Ejemplo:

```http
GET /api/oos/uuid-del-caso
```

Reglas de acceso:

- `ADMIN` puede consultar cualquier caso.
- `QA` queda previsto para consultar cualquier caso.
- `ANALYST` solo puede consultar casos creados por él mismo.

---

### Actualizar caso OOS

```http
PATCH /api/oos/:id
```

Header requerido:

```http
Authorization: Bearer <token>
```

Permiso actual:

- Solo `ADMIN`.

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

### Backend

El backend requiere un archivo `.env` dentro de la carpeta `backend`.

Ejemplo:

```env
PORT=4000
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
JWT_SECRET="your_jwt_secret"
OPENAI_API_KEY=
```

Importante:

- El archivo `.env` no debe subirse al repositorio.
- Las credenciales reales de Neon deben mantenerse privadas.
- El valor de `JWT_SECRET` debe ser privado.
- Para documentar la estructura de variables se debe usar `.env.example`.

---

### Frontend

Para conectar el frontend desplegado con la API pública, Vercel debe tener configurada la variable:

```env
VITE_API_BASE_URL=https://qalab-api-gamma.vercel.app/api
```

En desarrollo local, si esta variable no existe, el frontend usa:

```txt
http://localhost:4000/api
```

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

Por seguridad, las credenciales de usuarios seed deben gestionarse de forma privada y no publicarse en el repositorio.

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

- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/oos`
- `POST /api/oos`
- `GET /api/oos/:id`
- `PATCH /api/oos/:id`

Resultado:

- El backend responde correctamente.
- La API permite iniciar sesión mediante JWT.
- La API permite consultar el usuario autenticado.
- La API permite crear casos OOS con usuario autenticado.
- La API permite listar casos según rol.
- `ADMIN` puede consultar todos los casos.
- `ANALYST` solo puede consultar sus propios casos.
- Los datos se almacenan correctamente en PostgreSQL / Neon.

---

### Prisma Studio

Se verificaron los modelos:

- `User`
- `OOSCase`

Resultado:

- El usuario administrador inicial existe en la base de datos.
- El usuario analista de prueba fue creado correctamente para validar permisos.
- Los casos OOS de prueba se almacenan correctamente en Neon PostgreSQL.
- Los casos OOS quedan asociados al usuario que los crea.

---

### Frontend

Se validó el flujo desde la interfaz:

- Pantalla de login.
- Inicio de sesión con usuario autorizado.
- Persistencia temporal de sesión mediante `localStorage`.
- Visualización de usuario y rol en la interfaz.
- Botón de cierre de sesión.
- Visualización de casos OOS según permisos del usuario.
- Creación de nuevo caso OOS desde formulario.
- Guardado correcto del caso en PostgreSQL / Neon.
- Actualización del listado después de crear el registro.
- Validación de que `ADMIN` ve todos los casos.
- Validación de que `ANALYST` ve solo sus propios casos.

---

## 🗺️ Roadmap del MVP

### Último sprint completado

Control de acceso por roles y autenticación frontend/backend.

Estado:

- Login con JWT implementado.
- Pantalla de login implementada.
- Persistencia temporal de sesión mediante `localStorage`.
- Botón de cierre de sesión implementado.
- Mensajes de autenticación en español.
- Creación de casos OOS asociada al usuario autenticado.
- `ADMIN` puede consultar todos los casos OOS.
- `ANALYST` solo puede consultar sus propios casos.
- Rutas OOS protegidas mediante token.
- Frontend y backend desplegados en producción.

---

### Siguiente sprint

Wizard de investigación Fase I.

Tareas previstas:

- Diseñar modelo Prisma para investigación Fase I.
- Crear endpoints para guardar respuestas de Fase I.
- Crear flujo tipo wizard en frontend.
- Asociar investigación Fase I con casos OOS.
- Preparar motor básico de reglas.
- Definir transición de estados según resultado de Fase I.

---

### Próximos módulos

1. Wizard de investigación Fase I.
2. Motor de reglas.
3. Generación de informe técnico.
4. Creación automática de CAPA.
5. Dashboard básico con métricas reales.
6. Flujo de revisión técnica.
7. Flujo de aprobación QA.
8. Firma electrónica.
9. Audit trail básico.
10. Integración con OpenAI para apoyo de redacción.
11. Gestión avanzada de usuarios.
12. Anulación controlada de registros con justificación.

---

## 🧠 Uso de inteligencia artificial

La IA en QALab será usada únicamente como apoyo técnico, principalmente para:

- Mejorar redacción de informes.
- Resumir hallazgos.
- Sugerir hipótesis preliminares.
- Proponer preguntas adicionales.
- Apoyar la generación de acciones CAPA.

La IA no debe:

- Tomar decisiones regulatorias finales.
- Cerrar investigaciones.
- Aprobar CAPA.
- Invalidar resultados de forma autónoma.
- Reemplazar el criterio del usuario autorizado.

---

## 🧾 Consideraciones regulatorias

QALab se diseña considerando buenas prácticas de entornos regulados, especialmente en laboratorios farmacéuticos.

Principios considerados desde el MVP:

- Trazabilidad de registros.
- Identificación de usuario responsable.
- Control de acceso por rol.
- Control de cambios.
- Registro estructurado de investigaciones.
- Separación entre apoyo de IA y decisión humana.
- No eliminación definitiva de registros OOS en la etapa actual.
- Preparación futura para firma electrónica.
- Preparación futura para audit trail.
- Enfoque hacia controles alineados con 21 CFR Part 11.

---

## 🚀 Despliegue

| Componente | Plataforma | Estado |
|---|---|---|
| Frontend | Vercel | Desplegado |
| Backend API | Vercel | Desplegado |
| Base de datos | Neon PostgreSQL | Activa |

Frontend:

```txt
https://qalab-steel.vercel.app
```

Backend API:

```txt
https://qalab-api-gamma.vercel.app
```

Estado actual:

- Frontend desplegado en Vercel.
- Backend desplegado en Vercel.
- Base de datos PostgreSQL alojada en Neon.
- Frontend conectado a la API pública mediante `VITE_API_BASE_URL`.
- Flujo autenticado validado en producción:
  - Login.
  - Consulta de casos OOS.
  - Creación de casos OOS.
  - Visibilidad según rol.
  - Cierre de sesión.

---

## 🧰 Comandos útiles

### Backend

```bash
cd backend
npm run dev
```

---

### Frontend

```bash
cd frontend
npm run dev
```

---

### Prisma Studio

```bash
cd backend
npx prisma studio
```

---

### Seed

```bash
cd backend
npm run seed
```

---

### Migraciones

```bash
cd backend
npx prisma migrate dev
```

---

### Build frontend

```bash
cd frontend
npm run build
```

---

### Git

```bash
git status
git add .
git commit -m "mensaje-del-commit"
git push
```

---

## ✅ Buenas prácticas del proyecto

- No subir archivos `.env`.
- No publicar credenciales reales ni contraseñas seed en el README.
- Mantener actualizado el README en cada avance importante.
- Hacer commits pequeños y claros.
- Probar endpoints antes de conectar el frontend.
- Documentar rutas nuevas en la sección de API.
- Validar cambios en Prisma Studio cuando se modifiquen datos.
- Mantener separación entre frontend, backend y documentación.
- Usar Thunder Client para pruebas REST durante desarrollo.
- Priorizar trazabilidad, claridad y mantenibilidad.
- Evitar eliminación definitiva de registros OOS por enfoque regulatorio.
- Implementar anulación controlada solo cuando exista audit trail.

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