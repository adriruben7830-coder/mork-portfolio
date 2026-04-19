# Context API - Estado global

## ¿Qué es Context API?
Context API es una herramienta de React que permite compartir
estado entre componentes sin pasar props manualmente en cada nivel.

## Implementación en MØRK Portfolio

### ProjectContext
- **Ubicación**: src/context/ProjectContext.tsx
- **Estado compartido**: projects, loading, error
- **Funciones compartidas**: addProject, updateProject, deleteProject, refreshProjects

### ProjectProvider
Componente que envuelve toda la aplicación en App.tsx y proporciona
el estado global a todos los componentes hijos.

### Consumo
Los componentes acceden al contexto mediante el custom hook
useProjects() en vez de usar useContext directamente.

## ¿Cuándo es útil Context API?
- Cuando varios componentes necesitan los mismos datos
- Para evitar prop drilling (pasar props por muchos niveles)
- Para estado global como autenticación, tema o datos compartidos
- En este proyecto, para que HomePage, NewProjectPage y EditProjectPage
  compartan la lista de proyectos