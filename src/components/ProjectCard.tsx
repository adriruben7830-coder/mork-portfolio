import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
  onDelete: (id: number) => void;
}

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const statusColors = {
    'completed': 'bg-green-500/20 text-green-400 border border-green-500/30',
    'in-progress': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    'planned': 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
  };

  const statusText = {
    'completed': 'Completado',
    'in-progress': 'En progreso',
    'planned': 'Planificado'
  };

  return (
    <div className="group bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-white text-lg font-semibold tracking-wide">{project.title}</h3>
          <span className={`${statusColors[project.status]} text-xs px-2 py-1 rounded-full`}>
            {statusText[project.status]}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-purple-500/10 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/20">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 pt-3 border-t border-gray-800">
          <Link
            to={`/edit/${project.id}`}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 text-sm flex-1 text-center"
          >
            Editar
          </Link>
          <button
            onClick={() => onDelete(project.id)}
            className="bg-gray-800 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 text-sm"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}