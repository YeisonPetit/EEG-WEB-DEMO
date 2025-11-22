import React, { useState } from 'react';
import {
  GraduationCap, BookOpen, Award, Clock, Users, Star,
  TrendingUp, Target, Briefcase, Globe, CheckCircle, Sparkles,
  ArrowRight, Filter, Search, Calendar, MapPin, Zap,
  Building2, Brain, BarChart, MessageSquare, Trophy, Rocket,
  X, ChevronLeft
} from 'lucide-react';

export default function Programas() {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

  const categorias = [
    { id: 'todos', label: 'Todos los programas', icon: Globe },
    { id: 'diplomados', label: 'Diplomados', icon: Award },
    { id: 'maestrias', label: 'Maestrías', icon: GraduationCap },
    { id: 'ejecutivos', label: 'Programas Ejecutivos', icon: Briefcase },
    { id: 'certificaciones', label: 'Certificaciones', icon: Trophy }
  ];

  const programas = [
    {
      id: 1,
      categoria: 'diplomados',
      titulo: 'Diplomado Líderes de Alto Desempeño',
      subtitulo: 'Desarrolla tu potencial como líder transformador',
      duracion: '6 meses',
      modalidad: 'Híbrido',
      nivel: 'Intermedio-Avanzado',
      precio: 'Consultar',
      rating: 4.9,
      estudiantes: 450,
      destacado: true,
      imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      descripcion: 'Programa intensivo diseñado para desarrollar competencias de liderazgo en contextos complejos y cambiantes.',
      descripcionLarga: 'Este programa está diseñado para profesionales que buscan potenciar sus habilidades de liderazgo y convertirse en agentes de cambio dentro de sus organizaciones.',
      modulos: [
        'Liderazgo transformacional y situacional',
        'Gestión del cambio organizacional',
        'Comunicación estratégica y asertiva',
        'Toma de decisiones bajo presión',
        'Desarrollo y coaching de equipos',
        'Inteligencia emocional aplicada'
      ],
      beneficios: [
        'Certificación internacional avalada',
        'Metodología MATROP® exclusiva',
        'Networking con líderes ejecutivos',
        'Proyecto final aplicado',
        'Mentoría personalizada',
        'Acceso a comunidad de egresados'
      ],
      dirigidoA: [
        'Gerentes y directores de área',
        'Líderes de equipos',
        'Profesionales en ascenso',
        'Emprendedores'
      ],
      fechaInicio: '20 de enero, 2025',
      horario: 'Lunes y Miércoles, 6:00 PM - 9:00 PM'
    },
    {
      id: 2,
      categoria: 'maestrias',
      titulo: 'Maestría en Dirección de Empresas (MBA)',
      subtitulo: 'En alianza con Universidad Antonio de Nebrija',
      duracion: '18 meses',
      modalidad: 'Online',
      nivel: 'Avanzado',
      precio: 'Consultar',
      rating: 5.0,
      estudiantes: 280,
      destacado: true,
      imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      descripcion: 'MBA con doble titulación que combina excelencia académica europea con contexto empresarial latinoamericano.',
      descripcionLarga: 'Nuestro MBA está diseñado para ejecutivos que buscan dar el siguiente salto en su carrera profesional.',
      modulos: [
        'Estrategia empresarial avanzada',
        'Finanzas corporativas y valoración',
        'Marketing digital y transformación',
        'Operaciones y supply chain',
        'Gestión de personas',
        'Innovación y emprendimiento'
      ],
      beneficios: [
        'Doble titulación (EEG + Nebrija)',
        'Alianza con universidad europea',
        'Campus virtual avanzado',
        'Mentorías personalizadas',
        'Casos Harvard Business School',
        'Viaje de estudios internacional'
      ],
      dirigidoA: [
        'Ejecutivos senior',
        'Directores de área',
        'Empresarios',
        'Consultores'
      ],
      fechaInicio: '1 de febrero, 2025',
      horario: 'Plataforma 24/7 + Sesiones sábados'
    },
    {
      id: 3,
      categoria: 'diplomados',
      titulo: 'Diplomado en Ventas Consultivas',
      subtitulo: 'Domina el arte de vender con valor',
      duracion: '4 meses',
      modalidad: 'Presencial',
      nivel: 'Todos los niveles',
      precio: 'Consultar',
      rating: 4.8,
      estudiantes: 620,
      destacado: false,
      imagen: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      descripcion: 'Aprende técnicas avanzadas de ventas consultivas orientadas a generar relaciones de largo plazo.',
      descripcionLarga: 'Este programa te enseñará a convertirte en un asesor de confianza para tus clientes.',
      modulos: [
        'Psicología del comprador moderno',
        'Técnicas de prospección digital',
        'Negociación ganar-ganar',
        'Cierre de ventas consultivas',
        'Servicio postventa y fidelización'
      ],
      beneficios: [
        'Casos reales de empresas',
        'Role playing intensivo',
        'Herramientas digitales incluidas',
        'Certificación EEG'
      ],
      dirigidoA: [
        'Ejecutivos de ventas',
        'Gerentes comerciales',
        'Emprendedores',
        'Consultores'
      ],
      fechaInicio: '15 de enero, 2025',
      horario: 'Martes y Jueves, 6:30 PM - 9:30 PM'
    }
  ];

  const programasFiltrados = programas.filter(programa => {
    const matchCategoria = filtroActivo === 'todos' || programa.categoria === filtroActivo;
    const matchBusqueda = programa.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          programa.subtitulo.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const stats = [
    { icon: GraduationCap, number: '+42', label: 'Programas activos' },
    { icon: Users, number: '8.6k+', label: 'Egresados' },
    { icon: Globe, number: '7', label: 'Países' },
    { icon: Award, number: '100%', label: 'Certificados' }
  ];

  // Página de detalle del programa
  if (programaSeleccionado) {
    return (
      <div className="min-h-screen bg-slate-950">
        {/* Header con imagen */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={programaSeleccionado.imagen} 
            alt={programaSeleccionado.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          
          <button
            onClick={() => setProgramaSeleccionado(null)}
            className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl hover:bg-slate-800 transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver
          </button>

          {programaSeleccionado.destacado && (
            <div className="absolute top-8 right-8 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              Destacado
            </div>
          )}

          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-sm font-bold rounded-full uppercase border border-cyan-500/30">
              {programaSeleccionado.categoria}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-4 mb-4">
              {programaSeleccionado.titulo}
            </h1>
            <p className="text-2xl text-cyan-400">{programaSeleccionado.subtitulo}</p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">{programaSeleccionado.duracion}</p>
                    <p className="text-gray-400 text-sm">Duración</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">{programaSeleccionado.modalidad}</p>
                    <p className="text-gray-400 text-sm">Modalidad</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <Target className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">{programaSeleccionado.nivel}</p>
                    <p className="text-gray-400 text-sm">Nivel</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">{programaSeleccionado.rating}</p>
                    <p className="text-gray-400 text-sm">Rating</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Sobre el programa</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {programaSeleccionado.descripcionLarga}
                  </p>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                    Módulos del programa
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {programaSeleccionado.modulos.map((modulo, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-300">{modulo}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-orange-400" />
                    Lo que obtendrás
                  </h2>
                  <div className="space-y-4">
                    {programaSeleccionado.beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                        <p className="text-gray-200 text-lg">{beneficio}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-cyan-400" />
                    ¿A quién va dirigido?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {programaSeleccionado.dirigidoA.map((perfil, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <p className="text-gray-300">{perfil}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                    <div className="text-center mb-6">
                      <p className="text-gray-400 mb-2">Inversión</p>
                      <p className="text-4xl font-black text-white mb-4">{programaSeleccionado.precio}</p>
                      <div className="flex items-center justify-center gap-2 text-yellow-400 mb-6">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold">{programaSeleccionado.rating}</span>
                        <span className="text-gray-400">({programaSeleccionado.estudiantes} estudiantes)</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                        <div>
                          <p className="text-sm text-gray-400">Inicio</p>
                          <p className="font-bold text-white">{programaSeleccionado.fechaInicio}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Clock className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-sm text-gray-400">Horario</p>
                          <p className="font-bold text-white">{programaSeleccionado.horario}</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 mb-3">
                      Inscribirme ahora
                    </button>
                    <button className="w-full py-4 bg-slate-800/50 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                      Descargar brochure
                    </button>
                  </div>

                  <div className="bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                    <h3 className="text-lg font-bold text-white mb-4">¿Tienes dudas?</h3>
                    <p className="text-gray-300 text-sm mb-4">Contáctanos y te ayudaremos</p>
                    <button className="w-full py-3 bg-cyan-500/20 text-cyan-400 font-bold rounded-xl border border-cyan-500/30 hover:bg-cyan-500/30 transition-all">
                      Hablar con asesor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Lista de programas
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                Nuestros Programas
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Impulsa tu
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                carrera profesional
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Programas de formación de clase mundial con metodología MATROP® y certificación internacional
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-3xl font-black text-white mb-1">{stat.number}</p>
                  <p className="text-xs text-gray-400 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900/50 sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar programas..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFiltroActivo(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    filtroActivo === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-400 text-center">
                Mostrando <span className="text-orange-400 font-bold">{programasFiltrados.length}</span> programas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programasFiltrados.map((programa, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                    programa.destacado
                      ? 'border-orange-500/50 shadow-lg shadow-orange-500/20'
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                  onClick={() => setProgramaSeleccionado(programa)}
                >
                  {programa.destacado && (
                    <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white text-xs font-bold shadow-lg shadow-orange-500/50 flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Destacado
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={programa.imagen} 
                      alt={programa.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs font-bold rounded-full uppercase">
                        {programa.categoria}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {programa.titulo}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-4">{programa.subtitulo}</p>

                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-bold">{programa.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Users className="w-4 h-4" />
                        {programa.estudiantes}
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span>Duración: {programa.duracion}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>Modalidad: {programa.modalidad}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Target className="w-4 h-4 text-orange-400" />
                        <span>Nivel: {programa.nivel}</span>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 rounded-xl text-white font-bold hover:from-orange-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                      Ver detalles
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-4">
              Lo que incluyen nuestros programas
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              Experiencia de aprendizaje integral con resultados garantizados
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: BookOpen, title: 'Metodología MATROP®', desc: 'Enfoque práctico y resultados' },
                { icon: Award, title: 'Certificación', desc: 'Reconocimiento internacional' },
                { icon: Users, title: 'Networking', desc: 'Conexiones profesionales' },
                { icon: Rocket, title: 'Proyecto Final', desc: 'Aplicación real' },
                { icon: Brain, title: 'Mentorías', desc: 'Acompañamiento experto' },
                { icon: Globe, title: 'Alcance Global', desc: '7 países de Iberoamérica' },
                { icon: Zap, title: 'Contenido Actualizado', desc: 'Tendencias del mercado' },
                { icon: Trophy, title: 'Bolsa de Empleo', desc: 'Oportunidades laborales' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-12 border border-orange-500/20 text-center">
              <Sparkles className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-6">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contáctanos y diseñaremos un programa a tu medida
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Hablar con un asesor
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="/servicios"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-800/50 text-white font-bold rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Ver servicios
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}