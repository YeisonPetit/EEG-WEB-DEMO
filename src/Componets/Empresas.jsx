export default function Empresas() {
  const logos = [
    "/empresa1.webp",
    "/empresa2.webp",
    "/empresa3.webp",
    "/empresa4.webp",
    "/empresa5.webp",
    "/empresa6.webp",
    "/empresa1.webp",
    "/empresa4.webp",
    "/empresa3.webp",
  ];

  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 text-center">
          Empresas que confían en nosotros
        </h2>

        {/* FILA 1 */}
        <div className="overflow-hidden mb-8">
          <div className="flex animate-scroll gap-10">
            {infiniteLogos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center justify-center min-w-40 shrink-0"
              >
                <img
                  src={logo}
                  loading="lazy"
                  width="150"
                  height="80"
                  alt={`Logo ${index + 1}`}
                  className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FILA 2 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse gap-10">
            {infiniteLogos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center justify-center min-w-40 shrink-0"
              >
                <img
                  src={logo}
                  loading="lazy"
                  width="150"
                  height="80"
                  alt={`Logo ${index + 1}`}
                  className="h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-center mt-12 text-lg">
          Únete a las empresas que ya están transformando su liderazgo con EEG.
        </p>
      </div>
    </section>
  );
}
