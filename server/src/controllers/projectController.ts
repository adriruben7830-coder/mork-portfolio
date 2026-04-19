import { Request, Response } from 'express';
import { projectService } from '../services/projectService';

export const projectController = {
  getAll: (_req: Request, res: Response) => {
    const projects = projectService.getAll();
    res.json(projects);
  },

  getById: (req: Request, res: Response) => {
    const project = projectService.getById(Number(req.params.id));
    if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(project);
  },

  create: (req: Request, res: Response) => {
    const { title, category, description, image, technologies, status } = req.body;
    if (!title || !category) return res.status(400).json({ error: 'Título y categoría son obligatorios' });
    const newProject = projectService.create({ title, category, description, image, technologies, status });
    res.status(201).json(newProject);
  },

  update: (req: Request, res: Response) => {
    const updated = projectService.update(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(updated);
  },

  remove: (req: Request, res: Response) => {
    const deleted = projectService.remove(Number(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.status(200).json({ message: 'Proyecto eliminado' });
  }
};