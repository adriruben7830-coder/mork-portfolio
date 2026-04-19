import { getProjects, getProjectById, addProject, updateProject, deleteProject, Project } from '../config/data';

export const projectService = {
  getAll: () => getProjects(),
  getById: (id: number) => getProjectById(id),
  create: (data: Omit<Project, 'id'>) => addProject(data),
  update: (id: number, data: Partial<Project>) => updateProject(id, data),
  remove: (id: number) => deleteProject(id)
};