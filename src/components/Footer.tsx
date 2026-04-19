export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-white font-bold tracking-widest">
            M<span className="text-purple-500">Ø</span>RK
            <span className="text-purple-500 text-sm ml-1 font-light">Studio</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">Diseño web premium para marcas de lujo</p>
        </div>
        <div className="flex gap-6">
          <span className="text-gray-500 text-sm hover:text-purple-400 transition cursor-pointer">Automoción</span>
          <span className="text-gray-500 text-sm hover:text-purple-400 transition cursor-pointer">Hoteles</span>
          <span className="text-gray-500 text-sm hover:text-purple-400 transition cursor-pointer">Arquitectura</span>
          <span className="text-gray-500 text-sm hover:text-purple-400 transition cursor-pointer">Moda</span>
        </div>
        <p className="text-gray-600 text-xs">© 2026 MØRK Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}