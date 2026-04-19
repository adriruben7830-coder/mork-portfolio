import type { Project } from '../types/Project';

const API_URL = 'http://localhost:3001/api/v1/projects';

export const apiClient = {
  getAll: async (): Promise<Project[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al cargar proyectos');
    return res.json();
  },

  getById: async (id: number): Promise<Project> => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error('Proyecto no encontrado');
    return res.json();
  },

  create: async (data: Omit<Project, 'id'>): Promise<Project> => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Error al crear proyecto');
    return res.json();
  },

  update: async (id: number, data: Partial<Project>): Promise<Project> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Error al actualizar proyecto');
    return res.json();
  },

  remove: async (id: number): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Error al eliminar proyecto');
  }
};