import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
  onDelete: (id: number) => void;
}

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const statusColors = {
    'completed': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'planned': 'bg-gray-500'
  };

  const statusText = {
    'completed': 'Completado',
    'in-progress': 'En progreso',
    'planned': 'Planificado'
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white text-lg font-semibold">{project.title}</h3>
          <span className={`${statusColors[project.status]} text-white text-xs px-2 py-1 rounded-full`}>
            {statusText[project.status]}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-800 text-purple-400 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            to={`/edit/${project.id}`}
            className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition text-sm"
          >
            Editar
          </Link>
          <button
            onClick={() => onDelete(project.id)}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}