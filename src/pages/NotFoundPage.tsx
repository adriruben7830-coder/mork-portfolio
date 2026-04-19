import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <p className="text-gray-400 mb-6">Página no encontrada</p>
      <Link to="/" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
        Volver al Portfolio
      </Link>
    </div>
  );
}