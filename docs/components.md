# Documentación de componentes

## Navbar
Barra de navegación fija con el logo MØRK Studio y enlaces.
- **Props**: ninguna
- **Ubicación**: src/components/Navbar.tsx

## ProjectCard
Tarjeta que muestra un proyecto con imagen, título, descripción,
tecnologías y botones de acción.
- **Props**: project (Project), onDelete (función)
- **Ubicación**: src/components/ProjectCard.tsx
- **Reutilizable**: sí, se usa en HomePage

## ProjectForm
Formulario para crear y editar proyectos. Se adapta según
si recibe datos iniciales o no.
- **Props**: initialData (Project opcional), onSubmit (función), buttonText (string)
- **Ubicación**: src/components/ProjectForm.tsx
- **Reutilizable**: sí, se usa en NewProjectPage y EditProjectPage