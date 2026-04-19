# Capa de red y cliente de API

## Cliente de API
- **Ubicación**: src/api/client.ts
- **Tecnología**: fetch nativo con TypeScript

## Funciones disponibles
| Función | Método | Endpoint | Retorna |
|---|---|---|---|
| getAll() | GET | /api/v1/projects | Project[] |
| getById(id) | GET | /api/v1/projects/:id | Project |
| create(data) | POST | /api/v1/projects | Project |
| update(id, data) | PUT | /api/v1/projects/:id | Project |
| remove(id) | DELETE | /api/v1/projects/:id | void |

## Tipado
Todas las funciones usan la interfaz Project definida en
src/types/Project.ts, garantizando tipado seguro entre
frontend y backend.

## Gestión de estados de red
- **Loading**: se muestra "Cargando proyectos..." mientras se espera la API
- **Éxito**: se renderizan los datos en las tarjetas
- **Error**: se muestra un mensaje de error en rojo