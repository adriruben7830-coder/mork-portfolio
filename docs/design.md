# Arquitectura de la aplicación

## Estructura del proyecto
El proyecto sigue una arquitectura fullstack con separación clara
entre frontend y backend.

### Frontend (React + TypeScript + Tailwind)
- `src/components/` — Componentes reutilizables (Navbar, ProjectCard, ProjectForm)
- `src/pages/` — Páginas de la aplicación (Home, New, Edit, 404)
- `src/hooks/` — Custom hooks (useProjects)
- `src/context/` — Estado global con Context API (ProjectContext)
- `src/api/` — Cliente de API tipado (client.ts)
- `src/types/` — Interfaces TypeScript (Project)

### Backend (Node.js + Express)
- `server/src/routes/` — Definición de endpoints REST
- `server/src/controllers/` — Lógica de los endpoints
- `server/src/services/` — Lógica de negocio
- `server/src/config/` — Datos y configuración

## Flujo de datos
Frontend (React) → API Client (fetch) → Backend (Express) → Data (memoria)

## Endpoints REST
| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/v1/projects | Listar todos los proyectos |
| GET | /api/v1/projects/:id | Obtener un proyecto |
| POST | /api/v1/projects | Crear proyecto |
| PUT | /api/v1/projects/:id | Actualizar proyecto |
| DELETE | /api/v1/projects/:id | Eliminar proyecto |

## Decisiones de arquitectura
- Los datos se guardan en memoria en el backend, no en LocalStorage
- El frontend consume la API como única fuente de verdad
- Se usa Context API para estado global en vez de Redux por simplicidad
- TypeScript en ambos lados para tipado seguro