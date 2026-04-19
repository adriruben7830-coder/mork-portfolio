import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold tracking-widest">
          M<span className="text-purple-500">Ø</span>RK
          <span className="text-purple-500 text-sm ml-1 font-light tracking-wider">Studio</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-gray-400 hover:text-white transition text-sm tracking-wide">
            Portfolio
          </Link>
          <Link to="/new" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 text-sm">
            + Nuevo Proyecto
          </Link>
        </div>
      </div>
    </nav>
  );
}