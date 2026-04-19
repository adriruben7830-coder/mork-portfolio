import { useState, useMemo } from 'react';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../components/ProjectCard';
import { Hero } from '../components/Hero';

export function HomePage() {
  const { projects, loading, error, deleteProject } = useProjects();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projects
      .filter(p => filter === 'all' || p.category === filter)
      .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }, [projects, filter, search]);

  if (loading) return <div className="text-center text-gray-400 py-20">Cargando proyectos...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-gray-900/50 backdrop-blur text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none flex-1 transition-all duration-300"
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-gray-900/50 backdrop-blur text-white border border-gray-700 rounded-xl px-4 py-3 focus:border-purple-500 focus:outline-none transition-all duration-300"
          >
            <option value="all">Todas las categorías</option>
            <option value="automotive">Automoción</option>
            <option value="hospitality">Hostelería</option>
            <option value="architecture">Arquitectura</option>
            <option value="fashion">Moda</option>
            <option value="gastronomy">Gastronomía</option>
          </select>
        </div>

        <p className="text-gray-500 text-sm mb-6 tracking-wide">
          Mostrando {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onDelete={deleteProject} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 py-10">No se encontraron proyectos</p>
        )}
      </div>
    </>
  );
}