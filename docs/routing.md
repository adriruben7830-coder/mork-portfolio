# Rutas y navegación

## Configuración
Se usa React Router v6 configurado en App.tsx con BrowserRouter.

## Estructura de rutas
| Ruta | Página | Descripción |
|---|---|---|
| / | HomePage | Lista de proyectos con filtros |
| /new | NewProjectPage | Formulario para crear proyecto |
| /edit/:id | EditProjectPage | Formulario para editar proyecto |
| * | NotFoundPage | Página 404 para rutas no válidas |

## Navegación
- El componente Navbar tiene enlaces a / y /new
- Las tarjetas de proyecto tienen un enlace a /edit/:id
- Después de crear o editar se redirige a / con useNavigate()