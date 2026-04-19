# Formularios

## ProjectForm
Formulario controlado que gestiona la creación y edición de proyectos.

### Campos
- **Título** (obligatorio): input de texto
- **Categoría** (obligatorio): select con opciones predefinidas
- **Descripción**: textarea
- **URL de imagen**: input de texto con valor por defecto
- **Tecnologías**: input de texto separado por comas
- **Estado**: select (planificado, en progreso, completado)

### Validación
- Título y categoría son campos obligatorios
- Si faltan, se muestra un mensaje de error en rojo
- Las tecnologías se separan por comas automáticamente

### Estado de los inputs
Cada campo está controlado con useState. El estado se inicializa
con los datos del proyecto si se está editando, o vacío si es nuevo.