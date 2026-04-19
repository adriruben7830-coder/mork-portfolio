import { createContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Project } from '../types/Project';
import { apiClient } from '../api/client';

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  addProject: (data: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (id: number, data: Partial<Project>) => Promise<void>;
  deleteProject: (id: number) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiClient.getAll();
      setProjects(data);
    } catch (err) {
      setError('Error al cargar los proyectos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshProjects();
  }, [refreshProjects]);

  const addProject = async (data: Omit<Project, 'id'>) => {
    await apiClient.create(data);
    await refreshProjects();
  };

  const updateProject = async (id: number, data: Partial<Project>) => {
    await apiClient.update(id, data);
    await refreshProjects();
  };

  const deleteProject = async (id: number) => {
    await apiClient.remove(id);
    await refreshProjects();
  };

  return (
    <ProjectContext.Provider value={{ projects, loading, error, addProject, updateProject, deleteProject, refreshProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}