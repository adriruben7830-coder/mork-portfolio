import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold tracking-wider">
          MØRK <span className="text-purple-500">Studio</span>
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="text-gray-400 hover:text-white transition">
            Portfolio
          </Link>
          <Link to="/new" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            + Nuevo
          </Link>
        </div>
      </div>
    </nav>
  );
}