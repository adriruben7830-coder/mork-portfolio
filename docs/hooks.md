# Hooks utilizados

## useState
Gestiona el estado local en componentes. Se usa en ProjectForm
para controlar los inputs del formulario y en HomePage para
el filtro y la búsqueda.

## useEffect
Maneja efectos secundarios. Se usa en ProjectContext para
cargar los proyectos desde la API al montar el componente.

## useMemo
Optimiza cálculos costosos. Se usa en HomePage para filtrar
y buscar proyectos sin recalcular en cada render.

## useCallback
Evita recrear funciones en cada render. Se usa en ProjectContext
para la función refreshProjects.

## useProjects (custom hook)
Hook personalizado que consume el ProjectContext y devuelve
los proyectos, el estado de carga, errores y las funciones
para crear, editar y eliminar proyectos.
- **Ubicación**: src/hooks/useProjects.ts
- **Uso**: const { projects, loading, addProject } = useProjects()