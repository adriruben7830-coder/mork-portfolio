import { useState } from 'react';
import type { Project } from '../types/Project';

interface ProjectFormProps {
  initialData?: Project;
  onSubmit: (data: Omit<Project, 'id'>) => void;
  buttonText: string;
}

export function ProjectForm({ initialData, onSubmit, buttonText }: ProjectFormProps) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [technologies, setTechnologies] = useState(initialData?.technologies.join(', ') || '');
  const [status, setStatus] = useState<Project['status']>(initialData?.status || 'planned');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) {
      setError('Título y categoría son obligatorios');
      return;
    }
    setError('');
    onSubmit({
      title,
      category,
      description,
      image: image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      technologies: technologies.split(',').map(t => t.trim()).filter(Boolean),
      status
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">Título *</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">Categoría *</label>
        <select value={category} onChange={e => setCategory(e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none">
          <option value="">Seleccionar...</option>
          <option value="automotive">Automoción</option>
          <option value="hospitality">Hostelería</option>
          <option value="architecture">Arquitectura</option>
          <option value="fashion">Moda</option>
          <option value="gastronomy">Gastronomía</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">Descripción</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">URL de imagen</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-1">Tecnologías (separadas por coma)</label>
        <input type="text" value={technologies} onChange={e => setTechnologies(e.target.value)}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none" />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm mb-1">Estado</label>
        <select value={status} onChange={e => setStatus(e.target.value as Project['status'])}
          className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none">
          <option value="planned">Planificado</option>
          <option value="in-progress">En progreso</option>
          <option value="completed">Completado</option>
        </select>
      </div>

      <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
        {buttonText}
      </button>
    </form>
  );
}