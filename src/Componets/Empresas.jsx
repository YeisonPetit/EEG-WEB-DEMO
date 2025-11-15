export default function Empresas() {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Empresas que confían en nosotros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['/src/assets/image.png', '/src/assets/image.png', '/src/assets/image.png', '/src/assets/image.png' , '/src/assets/image.png', '/src/assets/image.png', '/src/assets/image.png'].map((logo, index) => (
              <div key={index} className="flex flex-nowrap items-center justify-center">
                <img src={logo} alt={`Logo ${index + 1}`} className="h-20" />
              </div>
            ))}
        </div>
        <div className="mt-12">
          <p className="text-gray-400">
            Únete a las empresas que ya están transformando su liderazgo con EEG.
          </p>
        </div>
      </div>
    </section>
  );
}
