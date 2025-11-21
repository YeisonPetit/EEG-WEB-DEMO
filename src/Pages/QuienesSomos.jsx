import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, Users, TrendingUp, Target, BookOpen, Building2, 
  Globe, GraduationCap, Briefcase, CheckCircle, Quote, Sparkles,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function SomosEEG() {
  const [activeYear, setActiveYear] = useState(0);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

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
    { 
      year: '2000', 
      label: 'La inspiración toca a la puerta',
      title: 'La inspiración toca a la puerta: buscando soluciones',
      quote: '"La necesidad es la madre del ingenio"',
      description: 'Nuestro actual CEO, José Luis Falcón, decide llevar a las aulas su experiencia en la banca y los conocimientos adquiridos en Stetson University, en el área de finanzas y mercadeo.'
    },
    { 
      year: '2002', 
      label: 'Poniendo los pilares',
      title: 'Poniendo los pilares',
      quote: '"Cuando la oportunidad se encuentra con la preparación"',
      description: 'Durante su carrera financiera y en una posición directiva, José Luis Falcón detectó brechas en las competencias profesionales de muchos gerentes e identificó la necesidad de capacitaciones prácticas. Con esto en mente, y gracias a la colaboración de un grupo de talentosos profesionales, en el año 2002 se funda el Instituto Venezolano de Gerencia (IVG) Escuela de Negocios en la ciudad de Caracas, Venezuela, con la finalidad de aportar soluciones prácticas y "más teoría".'
    },
    { 
      year: '2011-2012', 
      label: 'Subiendo la escalera',
      title: 'Subiendo la escalera',
      quote: '"El crecimiento es intencional"',
      description: '¡Llegamos a España! En el 2011, el grupo IVG decide desarrollar el proyecto Escuela Europea de Gerencia en España. En el año 2012, Sharon Manno y José Luis Falcón crean la Metodología MATROP® para capacitaciones efectivas orientadas al desplazamiento de hábitos y conductas y al logro de indicadores de gestión.'
    },
    { 
      year: '2011-2014', 
      label: 'Navegando aguas turbulentas',
      title: 'España. Navegando aguas turbulentas y aprendiendo en el Caribe',
      quote: '"El coraje no es tener la fortaleza de seguir adelante; es seguir adelante cuando no tienes la fuerza"',
      description: 'Las dificultades económicas del momento plantean la necesidad de explorar otros espacios. Apertura de la primera oficina en Panamá e inicio de operaciones en República Dominicana con el primer proyecto de Ventas Consultivas para la Ferretería Haché.'
    },
    { 
      year: '2015-2017', 
      label: 'Expandiendo y mejorando',
      title: 'Expandiendo y mejorando',
      quote: '"La medida de lo que somos es lo que hacemos con lo que tenemos"',
      description: 'En el año 2015 la EEG abre las puertas de su primera oficina en República Dominicana, ubicada en Spring Center. En el 2017, la EEG da un paso decisivo en términos de calidad obteniendo la prestigiosa certificación de calidad ISO 29990.'
    },
    { 
      year: '2018-2019', 
      label: 'La semilla comienza a dar frutos',
      title: 'La semilla comienza a dar frutos',
      quote: '"Cuando creemos, creamos"',
      description: 'En el año 2018, la EEG inaugura nuevas instalaciones en Naco, Santo Domingo y se expande la oferta de programas, consultoría y soluciones de tecnología. En el 2019, la EEG establece alianzas con el Centro Europeo de Postgrados y con el Centro Internacional de Gobierno y Marketing Político de la Universidad Camilo José Cela de Madrid.'
    },
    { 
      year: '2020-2021', 
      label: 'Aportando para el mundo',
      title: 'Aportando para el mundo',
      quote: '"El carácter se manifiesta en los grandes momentos, pero se construye en los pequeños"',
      description: 'Tras un año de pandemia, la EEG decide arriesgarse y hacer una inversión en talento humano, tecnología, marketing y procesos, en la búsqueda de un crecimiento sostenido con miras a la internacionalización y obtiene la certificación internacional de calidad para organizaciones educativas ISO 21001.'
    },
    { 
      year: '2022', 
      label: 'Hasta el infinito…',
      title: 'Hasta el infinito…',
      quote: '"Si tus acciones inspiran a los demás a soñar, aprender y hacer más; eres un líder"',
      description: 'El equipo crece, se consolida y sirve al mundo. Nuestro principal elemento diferenciador, además de la calidad, la metodología y la idoneidad de los contenidos, es un equipo que sabe brindar una excelente experiencia de servicio. De esta manera, el equipo administrativo, académico, de consultores y coaches, contribuye con el proceso de aprendizaje y garantiza el crecimiento profesional de todos los participantes. Es su pasión, y no solo conocen el camino, recorren el camino y muestran el camino.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .timeline-item {
          opacity: 0;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fondo animado mejorado */}
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
              {/* <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                  Escuela Europea de Gerencia
                </span>
              </div> */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none">
                Llevamos años comprometidos
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  con tu éxito
                </span>
              </h1>
              {/* <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light">
                Casi tres décadas transformando líderes y organizaciones en Iberoamérica
              </p> */}
            </div>

            {/* Grid de contenido */}
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Imagend */}
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
                  {/* <div className="absolute bottom-0 left-0 right-0 p-8">
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
                  </div> */}
                  
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
                       La Escuela Europea de Gerencia es una escuela de negocios española con presencia y alcance en varios países de Iberoamérica. Su trayectoria en la formación de líderes y en el impacto positivo a las organizaciones suma ya casi tres décadas.
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
                        Su misión es diseñar soluciones holísticas, multifactoriales pero sencillas, asequibles y contextualizadas para acompañar a las organizaciones y a los líderes empresariales a lograr sus objetivos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - CTA */}
                {/* <div className="bg-gradient-to-br from-orange-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg mb-2">¿Listo para transformar tu organización?</p>
                      <p className="text-gray-300 text-sm">Descubre nuestros programas</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                </div> */}
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
              Nuestras estadísticas en un formato bonito
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

            {/* Timeline Interactivo */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Nuestra Trayectoria</h3>
              
              <div className="max-w-6xl mx-auto">
                {/* Selector de años */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {timeline.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveYear(index)}
                      className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                        activeYear === index
                          ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg shadow-orange-500/50 scale-110'
                          : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-800 border border-white/10'
                      }`}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>

                {/* Contenedor de contenido */}
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 min-h-[400px]">
                  {/* Navegación */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                    <button
                      onClick={() => setActiveYear(Math.max(0, activeYear - 1))}
                      disabled={activeYear === 0}
                      className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        activeYear === 0
                          ? 'bg-slate-800/30 text-gray-600 cursor-not-allowed'
                          : 'bg-slate-800/80 text-white hover:bg-orange-500 hover:scale-110'
                      }`}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setActiveYear(Math.min(timeline.length - 1, activeYear + 1))}
                      disabled={activeYear === timeline.length - 1}
                      className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        activeYear === timeline.length - 1
                          ? 'bg-slate-800/30 text-gray-600 cursor-not-allowed'
                          : 'bg-slate-800/80 text-white hover:bg-cyan-500 hover:scale-110'
                      }`}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Contenido animado */}
                  <div className="space-y-6" key={activeYear}>
                    {/* Año destacado */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/50"></div>
                      <span className="px-8 py-3 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full text-orange-400 font-black text-3xl border border-orange-500/30 animate-fade-in-up">
                        {timeline[activeYear].year}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
                    </div>

                    {/* Título */}
                    <h4 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 animate-fade-in-up">
                      {timeline[activeYear].label}
                    </h4>

                    {/* Quote destacado */}
                    <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 rounded-2xl p-6 border border-orange-500/20 mb-6 animate-fade-in-up">
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                        <p className="text-xl md:text-2xl text-cyan-300 italic font-medium">
                          {timeline[activeYear].quote}
                        </p>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto animate-fade-in-up">
                      {timeline[activeYear].description}
                    </p>

                    {/* Indicador de progreso */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                      {timeline.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === activeYear
                              ? 'w-12 bg-gradient-to-r from-orange-500 to-cyan-500'
                              : 'w-1.5 bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
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