import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ProjectForm } from '../components/ProjectForm';

export function EditProjectPage() {
  const { id } = useParams();
  const { projects, updateProject } = useProjects();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === Number(id));

  if (!project) return <div className="text-center text-gray-400 py-20">Proyecto no encontrado</div>;

  const handleSubmit = async (data: any) => {
    await updateProject(Number(id), data);
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Editar Proyecto</h1>
      <ProjectForm initialData={project} onSubmit={handleSubmit} buttonText="Guardar Cambios" />
    </div>
  );
}