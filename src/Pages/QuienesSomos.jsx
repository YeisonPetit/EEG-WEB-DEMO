import React from 'react';
import { 
  Award, Users, TrendingUp, Target, BookOpen, Building2, 
  Globe, GraduationCap, Briefcase, CheckCircle, Quote, Sparkles
} from 'lucide-react';

export default function SomosEEG() {
  const stats = [
    {
      icon: Briefcase,
      number: '+480',
      title: 'Empresas confían en nosotros',
      description: 'En nuestra experiencia, dedicación y la capacitación que impartimos a través de nuestra Metodología MATROP®.'
    },
    {
      icon: Building2,
      number: '+25',
      title: 'Programas In Company',
      description: 'Servicios de capacitación, coaching y consultoría diseñados de forma personalizada para cada organización.'
    },
    {
      icon: GraduationCap,
      number: '+42',
      title: 'Programas de Actualización Profesional',
      description: 'Entre nuestros diplomados y maestrías propias y en alianza con Universidades en España como Universidad Antonio de Nebrija.'
    },
    {
      icon: Users,
      number: '+8.6k',
      title: 'Egresados',
      description: 'Más de 8500 estudiantes egresados en 7 países de Iberoamérica a través de nuestras diferentes ofertas de formación y servicios In Company.'
    }
  ];

  const bondades = [
    {
      title: 'El talento EEG',
      description: 'Con competencias transversales únicas en donde destacan el liderazgo compartido, la integridad, la disciplina y la orientación a resultados. Los facilitadores, conferencistas, consultores y mentores cuentan con más de 15 años de experiencia en la alta gerencia.'
    },
    {
      title: 'MATROP®',
      description: 'Es una metodología dinámica que se enfoca en el participante y tiene por objetivo facilitar el cambio conductual y generar resultados en las organizaciones. Toma en cuenta los diferentes estilos de aprendizaje y las realidades de cada contexto empresarial.'
    },
    {
      title: 'Calidad e innovación',
      description: 'Con la certificación de calidad ISO 21,001 orientada a la calidad como organización educativa, y con una filosofía KAIZEN de mejora continua, todos nuestros programas y soluciones son relevantes y actualizados constantemente.'
    }
  ];

  const timeline = [
    { year: '2001', label: 'Inicio' },
    { year: '2005', label: '' },
    { year: '2009', label: '' },
    { year: '2012', label: '' },
    { year: '2013', label: '' },
    { year: '2017', label: '' },
    { year: '2020', label: '' },
    { year: '2022', label: 'Actualidad' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fondo animado\ */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Elementos flotantes decorativos */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
          
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Título principal centrado */}
            <div className="text-center mb-16">
              <div className="inline-block mt-3 mb-6">
                <span className="px-6 py-3 bg-linear-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                  Escuela Europea de Gerencia
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
                Comprometidos
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  con tu éxito
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light">
                Casi tres décadas transformando líderes y organizaciones en Iberoamérica
              </p>
            </div>

            {/* Grid de contenido */}
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Imagen destacada */}
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                  {/* Gradiente de fondo animado */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-cyan-500/30 to-orange-500/40 animate-pulse"></div>
                  
                  {/* Imagen */}
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=900&fit=crop" 
                    alt="Equipo EEG"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-3xl font-black text-white mb-1">23+</p>
                        <p className="text-xs text-cyan-300 uppercase tracking-wider">Años</p>
                      </div>
                      <div className="text-center border-x border-white/20">
                        <p className="text-3xl font-black text-white mb-1">7</p>
                        <p className="text-xs text-orange-300 uppercase tracking-wider">Países</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-black text-white mb-1">8.6k+</p>
                        <p className="text-xs text-cyan-300 uppercase tracking-wider">Egresados</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
                </div>
                
                {/* Efecto de sombra exterior */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10 opacity-60"></div>
              </div>

              {/* Contenido de texto optimizado */}
              <div className="space-y-8 order-1 lg:order-2">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Nuestra Esencia</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Escuela de negocios española con presencia en Iberoamérica, especializada en la formación de líderes e impacto positivo en organizaciones.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Nuestra Misión</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Diseñar soluciones holísticas, sencillas y contextualizadas para acompañar a organizaciones y líderes a lograr sus objetivos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - CTA */}
                <div className="bg-gradient-to-br from-orange-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg mb-2">¿Listo para transformar tu organización?</p>
                      <p className="text-gray-300 text-sm">Descubre nuestros programas</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tres Grandes Bondades */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
              Para ello, cuenta con tres grandes bondades:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {bondades.map((bondad, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                    index === 0 ? 'bg-cyan-500/20' : index === 1 ? 'bg-orange-500/20' : 'bg-cyan-500/20'
                  } mb-6`}>
                    <span className="text-2xl font-black text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{bondad.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{bondad.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Nuestras estadísticas hablan por sí solas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-white mb-2">{stat.number}</p>
                      <h3 className="text-xl font-bold text-white uppercase mb-3">{stat.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <BookOpen className="w-10 h-10 text-orange-400" />
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Nuestra Historia
              </h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                La capacidad de impactar a las personas
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  El momento en que José Luis Falcón, CEO de la Escuela Europea de Gerencia, descubrió que tenía la capacidad de generar un impacto positivo en las personas y ayudarlas a incrementar su productividad, fue el que dio origen a este proyecto al que hoy llamamos EEG y que inició en el año 2002 en Venezuela, con la creación del Instituto Venezolano de Gerencia.
                </p>
                <p>
                  Con una visión muy clara de lo que quería lograr, Falcón diseñó una serie de capacitaciones prácticas orientadas a resultados que pudieran generar un cambio conductual, más allá de una simple transferencia de conocimientos.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl border border-orange-500/20">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl text-white font-semibold italic mb-2">
                      "Impactar a las personas y a las organizaciones es el motor de impulso de la Escuela Europea de Gerencia"
                    </p>
                    <p className="text-orange-400 font-bold">- José Luis Falcón</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Nuestra Trayectoria</h3>
              <div className="relative">
                {/* Línea horizontal */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500"></div>
                
                {/* Puntos del timeline */}
                <div className="relative flex justify-between">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full ${
                        index === 0 || index === timeline.length - 1
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50'
                          : 'bg-gray-600'
                      } border-4 border-slate-950 flex items-center justify-center mb-4 relative z-10`}>
                        {(index === 0 || index === timeline.length - 1) && (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <p className={`text-sm font-bold ${
                        index === 0 || index === timeline.length - 1 ? 'text-orange-400' : 'text-gray-500'
                      }`}>
                        {item.year}
                      </p>
                      {item.label && (
                        <p className="text-xs text-gray-400 mt-1">{item.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 relative bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
              Nuestros Valores
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Integridad', 'Excelencia', 'Innovación', 'Compromiso'].map((valor, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{valor}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-12 border border-orange-500/20">
              <Sparkles className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-6">
                Únete a nuestra comunidad de líderes
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Descubre cómo podemos ayudarte a alcanzar tus objetivos profesionales
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                Conoce nuestros programas
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}