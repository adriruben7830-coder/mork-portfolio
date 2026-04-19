export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

let projects: Project[] = [
  {
    id: 1,
    title: 'Noir Automobiles',
    category: 'automotive',
    description: 'Web premium para concesionario de coches de lujo con estética oscura y animaciones 3D.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    technologies: ['React', 'Three.js', 'Tailwind'],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Maison Noire Hotel',
    category: 'hospitality',
    description: 'Sitio web para hotel boutique de 5 estrellas con reservas online y tour virtual.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    technologies: ['Next.js', 'Framer Motion', 'Supabase'],
    status: 'completed'
  },
  {
    id: 3,
    title: 'Zeus Architecture',
    category: 'architecture',
    description: 'Portfolio de estudio de arquitectura minimalista con galería interactiva.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800',
    technologies: ['React', 'GSAP', 'Tailwind'],
    status: 'in-progress'
  }
];

export function getProjects() { return projects; }

export function getProjectById(id: number) {
  return projects.find(p => p.id === id);
}

export function addProject(project: Omit<Project, 'id'>) {
  const newProject = { ...project, id: Date.now() };
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: number, data: Partial<Project>) {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...data };
  return projects[index];
}

export function deleteProject(id: number) {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
}