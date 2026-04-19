export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-6">Web Design Agency</p>
          <h1 className="text-8xl font-black text-white tracking-[0.2em] mb-2">
            M<span className="bg-gradient-to-br from-purple-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">Ø</span>RK
          </h1>
        </div>
        
        <div className="animate-fade-in-delay">
          <p className="text-gray-500 text-lg tracking-[0.5em] uppercase mb-8">Studio</p>
          <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
            Creamos experiencias digitales oscuras y elegantes 
            para marcas que buscan destacar.
          </p>
        </div>

        <div className="animate-fade-in-delay-2 flex gap-8 justify-center mt-12">
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:text-purple-400 transition-colors duration-500">12+</p>
            <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mt-1">Proyectos</p>
          </div>
          <div className="w-px bg-gray-800"></div>
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:text-purple-400 transition-colors duration-500">5</p>
            <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mt-1">Sectores</p>
          </div>
          <div className="w-px bg-gray-800"></div>
          <div className="text-center group">
            <p className="text-4xl font-black text-white group-hover:text-purple-400 transition-colors duration-500">100%</p>
            <p className="text-gray-600 text-xs uppercase tracking-[0.2em] mt-1">Premium</p>
          </div>
        </div>

        {/* Línea decorativa */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>
    </section>
  );
}