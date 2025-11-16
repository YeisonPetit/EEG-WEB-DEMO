export default function Empresas() {
  const Logos = [
    '/empresa1.jpg',
    '/empresa2.jpg',
    '/empresa3.jpg',
    '/empresa4.jpg',
    '/empresa5.jpg',
    '/empresa6.jpg',
    '/empresa7.jpg',
    '/empresa8.jpg',
    '/empresa9.jpg',
  ]

  return (
    <section className="py-16 bg-linear-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 text-center">
          Empresas que confían en nosotros
        </h2>
        
        {/* Primera fila - scroll derecha */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-scroll gap-8">
            {[...Logos, ...Logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[200px] shrink-0"
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-26 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila - scroll inverso */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse gap-12">
            {[...Logos, ...Logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center min-w-[200px] shrink-0"
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-26 w-auto object-contain transition-all duration-300  hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Únete a las empresas que ya están transformando su liderazgo con EEG.
          </p>
        </div>
      </div>
    </section>
  );
}

