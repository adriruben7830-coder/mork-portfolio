import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ProjectForm } from '../components/ProjectForm';

export function NewProjectPage() {
  const { addProject } = useProjects();
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    await addProject(data);
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">Nuevo Proyecto</h1>
      <ProjectForm onSubmit={handleSubmit} buttonText="Crear Proyecto" />
    </div>
  );
}