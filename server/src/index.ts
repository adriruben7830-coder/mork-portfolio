import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/v1/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Servidor MØRK corriendo en puerto ${PORT}`);
});