# QALab

**QALab — Asistente inteligente para investigaciones OOS y CAPA**

QALab es una aplicación web orientada a laboratorios farmacéuticos y de control de calidad. Su objetivo es guiar investigaciones de resultados fuera de especificación (OOS), apoyar la identificación de causas raíz, generar informes técnicos y conectar los hallazgos con acciones correctivas y preventivas (CAPA).

## Objetivo del MVP

Construir una plataforma funcional que permita:

* Registrar casos OOS.
* Guiar una investigación Fase I mediante un flujo tipo wizard.
* Aplicar un motor básico de reglas.
* Generar informes técnicos editables.
* Crear CAPA asociadas a causas raíz.
* Gestionar usuarios, roles, aprobaciones, firma electrónica y trazabilidad básica.
* Usar IA como apoyo de redacción, sin tomar decisiones regulatorias finales.

## Tecnologías principales

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL

### Base de datos

* Neon PostgreSQL

### Herramientas de desarrollo

* Visual Studio Code
* Git
* GitHub
* Prisma Studio

## Estructura del proyecto

```txt
qalab/
├── frontend/
├── backend/
├── docs/
├── README.md
└── .gitignore
```

## Estado actual del proyecto

### Completado

* Repositorio creado en GitHub.
* Estructura inicial tipo monorepo.
* Frontend creado con React + Vite.
* Backend creado con Express.
* Endpoint de salud disponible en `/api/health`.
* Prisma instalado y configurado.
* Base de datos PostgreSQL creada en Neon.
* Migración inicial ejecutada.
* Modelos iniciales creados:

  * `User`
  * `OOSCase`
* Usuario administrador inicial creado mediante seed.

## Variables de entorno

El backend requiere un archivo `.env` dentro de la carpeta `backend`.

Ejemplo:

```env
PORT=4000
DATABASE_URL="postgresql://USER:PASSWORD@HOST/neondb?sslmode=require"
JWT_SECRET="qalab_super_secret_dev"
OPENAI_API_KEY=
```

Importante: el archivo `.env` no debe subirse al repositorio.

## Ejecutar el proyecto en desarrollo

### Backend

```bash
cd backend
npm install
npm run dev
```

El backend corre en:

```txt
http://localhost:4000
```

Endpoint de prueba:

```txt
GET http://localhost:4000/api/health
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend corre en:

```txt
http://localhost:5173
```

## Prisma

Ejecutar migraciones:

```bash
cd backend
npx prisma migrate dev
```

Generar Prisma Client:

```bash
npx prisma generate
```

Abrir Prisma Studio:

```bash
npx prisma studio
```

## Roadmap inmediato

1. Crear API REST para casos OOS.
2. Crear endpoints:

   * `GET /api/oos`
   * `POST /api/oos`
   * `GET /api/oos/:id`
   * `PATCH /api/oos/:id`
3. Crear servicios y controladores en backend.
4. Conectar el frontend con la API.
5. Crear pantalla de listado de OOS.
6. Crear formulario de nuevo caso OOS.
7. Implementar autenticación con JWT.
8. Implementar wizard de investigación Fase I.

## Repositorio

Repositorio GitHub:

```txt
https://github.com/ea0627/qalab
```
