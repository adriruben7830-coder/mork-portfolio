export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
}