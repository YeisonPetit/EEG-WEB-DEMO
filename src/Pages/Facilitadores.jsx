import React, { useState } from 'react';
import {
  Users, Award, Briefcase, GraduationCap, Globe, Star,
  BookOpen, TrendingUp, Linkedin, Mail, MessageSquare,
  Search, Filter, ChevronRight, Sparkles, Target, Brain,
  Coffee, Rocket, Heart, Zap, Trophy, CheckCircle, Play
} from 'lucide-react';

export default function Facilitadores() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroArea, setFiltroArea] = useState('todos');
  const [facilitadorSeleccionado, setFacilitadorSeleccionado] = useState(null);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const areas = [
    { id: 'todos', label: 'Todos', icon: Users },
    { id: 'liderazgo', label: 'Liderazgo', icon: Target },
    { id: 'ventas', label: 'Ventas', icon: TrendingUp },
    { id: 'finanzas', label: 'Finanzas', icon: Briefcase },
    { id: 'marketing', label: 'Marketing', icon: Sparkles },
    { id: 'tecnologia', label: 'Tecnología', icon: Rocket }
  ];

  const facilitadores = [
    {
      id: 1,
      nombre: 'José Luis Falcón Mendoza',
      rol: 'CEO & Fundador',
      especialidad: 'Liderazgo Estratégico',
      areas: ['liderazgo', 'finanzas'],
      imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      experiencia: '25+ años',
      pais: 'España/Venezuela',
      destacado: true,
      bio: 'Fundador y CEO de la Escuela Europea de Gerencia. Experto en liderazgo estratégico y transformación organizacional con más de 25 años de experiencia en la banca y consultoría empresarial.',
      logros: [
        'Fundador de EEG (2002)',
        'Más de 8,600 profesionales formados',
        'Creador de Metodología MATROP®',
        'MBA por Stetson University'
      ],
      certificaciones: ['MBA', 'PMP', 'Coach ICC'],
      empresas: ['Banco Central', 'BBVA', 'Santander', 'EEG'],
      rating: 4.9,
      estudiantes: 3200,
      linkedin: '#',
      email: 'jfalcon@eeggerencia.com'
    },
    {
      id: 2,
      nombre: 'Sharon Manno',
      rol: 'Directora Académica',
      especialidad: 'Metodologías de Enseñanza',
      areas: ['liderazgo', 'marketing'],
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      experiencia: '20+ años',
      pais: 'República Dominicana',
      destacado: true,
      bio: 'Co-creadora de la Metodología MATROP® y Directora Académica de EEG. Especialista en diseño instruccional y transformación educativa con enfoque en resultados medibles.',
      logros: [
        'Co-creadora MATROP® (2012)',
        'Directora Académica EEG',
        'Certificación ISO 21001',
        '15+ programas diseñados'
      ],
      certificaciones: ['PhD Educación', 'Coach ICC', 'Instructional Design'],
      empresas: ['EEG', 'Universidad Nebrija', 'INTEC'],
      rating: 5.0,
      estudiantes: 2800,
      linkedin: '#',
      email: 'smanno@eeggerencia.com'
    },
    {
      id: 3,
      nombre: 'Carlos Espert',
      rol: 'Experto en Ventas',
      especialidad: 'Ventas Consultivas',
      areas: ['ventas', 'liderazgo'],
      imagen: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      experiencia: '18+ años',
      pais: 'España',
      destacado: false,
      bio: 'Especialista en ventas consultivas y negociación estratégica. Ha liderado equipos comerciales en empresas Fortune 500 y formado a más de 2,000 ejecutivos de ventas.',
      logros: [
        'Director Comercial Regional',
        '2,000+ vendedores formados',
        'Incremento promedio 45% en ventas',
        'Autor de "Vender con Valor"'
      ],
      certificaciones: ['Sales Leadership', 'Negotiation Expert', 'Coach ICC'],
      empresas: ['IBM', 'Microsoft', 'Oracle', 'EEG'],
      rating: 4.8,
      estudiantes: 1900,
      linkedin: '#',
      email: 'cespert@eeggerencia.com'
    },
    {
      id: 4,
      nombre: 'Daniel Fernández',
      rol: 'Experto en Finanzas',
      especialidad: 'Finanzas Corporativas',
      areas: ['finanzas', 'liderazgo'],
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      experiencia: '22+ años',
      pais: 'España',
      destacado: false,
      bio: 'CFO con amplia experiencia en finanzas corporativas, valoración de empresas y reestructuraciones. Ha asesorado a más de 50 empresas en procesos de transformación financiera.',
      logros: [
        'Ex-CFO multinacional',
        '50+ empresas asesoradas',
        'Especialista en M&A',
        'CFA Charterholder'
      ],
      certificaciones: ['CFA', 'MBA Finance', 'FRM'],
      empresas: ['Deloitte', 'EY', 'Banco Santander', 'EEG'],
      rating: 4.9,
      estudiantes: 1500,
      linkedin: '#',
      email: 'dfernandez@eeggerencia.com'
    },
    {
      id: 5,
      nombre: 'Tomás Lucero',
      rol: 'Experto en Transformación Digital',
      especialidad: 'Tecnología e Innovación',
      areas: ['tecnologia', 'liderazgo'],
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      experiencia: '15+ años',
      pais: 'Argentina',
      destacado: false,
      bio: 'Líder en transformación digital y adopción de nuevas tecnologías. Ha dirigido proyectos de innovación en empresas tech y tradicionales en proceso de digitalización.',
      logros: [
        'Director de Innovación',
        '30+ proyectos digitales',
        'Especialista en IA y ML',
        'Speaker TEDx'
      ],
      certificaciones: ['Scrum Master', 'AWS Certified', 'Design Thinking'],
      empresas: ['Google', 'Amazon', 'Mercado Libre', 'EEG'],
      rating: 4.7,
      estudiantes: 1200,
      linkedin: '#',
      email: 'tlucero@eeggerencia.com'
    },
    {
      id: 6,
      nombre: 'Enrique Rosas',
      rol: 'Experto en Marketing',
      especialidad: 'Marketing Digital & Branding',
      areas: ['marketing', 'ventas'],
      imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      experiencia: '16+ años',
      pais: 'México',
      destacado: false,
      bio: 'Estratega de marketing digital y branding con experiencia en startups y corporaciones. Especialista en crecimiento acelerado y posicionamiento de marca en mercados competitivos.',
      logros: [
        'CMO en 3 startups exitosas',
        'Growth Hacker certificado',
        '10M+ en ventas generadas',
        'Experto en SEO/SEM'
      ],
      certificaciones: ['Google Ads', 'Meta Blueprint', 'HubSpot'],
      empresas: ['Rappi', 'Kavak', 'Clip', 'EEG'],
      rating: 4.8,
      estudiantes: 1600,
      linkedin: '#',
      email: 'erosas@eeggerencia.com'
    }
  ];

  const facilitadoresFiltrados = facilitadores.filter(f => {
    const matchArea = filtroArea === 'todos' || f.areas.includes(filtroArea);
    const matchBusqueda = f.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          f.especialidad.toLowerCase().includes(busqueda.toLowerCase());
    return matchArea && matchBusqueda;
  });

  const facilitadoresDestacados = facilitadores.filter(f => f.destacado);

  if (facilitadorSeleccionado) {
    return (
      <div className="min-h-screen bg-slate-950">
        {/* Header con imagen */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          
          <button
            onClick={() => setFacilitadorSeleccionado(null)}
            className="absolute top-20 left-8 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl hover:bg-slate-800 transition-all border border-white/10 z-10"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            Volver
          </button>

          <div className="absolute bottom-12 left-12 right-12 flex items-end gap-8">
            <div className="relative">
              <img 
                src={facilitadorSeleccionado.imagen}
                alt={facilitadorSeleccionado.nombre}
                className="w-40 h-40 rounded-3xl object-cover border-4 border-slate-950 shadow-2xl"
              />
              {facilitadorSeleccionado.destacado && (
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              )}
            </div>
            <div className="flex-1 pb-4">
              <h1 className="text-5xl font-black text-white mb-2">{facilitadorSeleccionado.nombre}</h1>
              <p className="text-2xl text-cyan-400 mb-4">{facilitadorSeleccionado.rol}</p>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <span>{facilitadorSeleccionado.pais}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>{facilitadorSeleccionado.experiencia}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span>{facilitadorSeleccionado.estudiantes}+ estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold">{facilitadorSeleccionado.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Columna principal */}
              <div className="lg:col-span-2 space-y-8">
                {/* Bio */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Brain className="w-6 h-6 text-orange-400" />
                    Sobre {facilitadorSeleccionado.nombre.split(' ')[0]}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {facilitadorSeleccionado.bio}
                  </p>
                </div>

                {/* Logros */}
                <div className="bg-linear-to-br from-orange-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-orange-400" />
                    Logros Destacados
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {facilitadorSeleccionado.logros.map((logro, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-gray-300">{logro}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experiencia */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                    Experiencia Profesional
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {facilitadorSeleccionado.empresas.map((empresa, index) => (
                      <span key={index} className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-xl text-sm border border-white/10">
                        {empresa}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contacto */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-white/10 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-6">Contactar</h3>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Enviar email
                    </button>
                    <button className="w-full py-4 bg-slate-800/50 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2">
                      <Linkedin className="w-5 h-5" />
                      Ver LinkedIn
                    </button>
                    <button className="w-full py-4 bg-slate-800/50 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Agendar mentoría
                    </button>
                  </div>

                  {/* Certificaciones */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4">Certificaciones</h4>
                    <div className="space-y-2">
                      {facilitadorSeleccionado.certificaciones.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Especialidad */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4">Especialidad</h4>
                    <span className="px-4 py-2 bg-linear-to-r from-orange-500/20 to-cyan-500/20 text-cyan-400 rounded-xl text-sm font-bold border border-cyan-500/30 inline-block">
                      {facilitadorSeleccionado.especialidad}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(ellipse_at_top_left,_var(--tw-linear-stops))] from-orange-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-linear(ellipse_at_bottom_right,_var(--tw-linear-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-linear-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                Nuestro Equipo
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Facilitadores
              <br />
              <span className="bg-linear-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                de excelencia
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Profesionales altamente cualificados comprometidos con tu desarrollo y el logro de resultados excepcionales
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-orange-400 mb-1">25+</p>
                <p className="text-xs text-gray-400">Años experiencia</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-cyan-400 mb-1">50+</p>
                <p className="text-xs text-gray-400">Facilitadores</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-orange-400 mb-1">8.6k+</p>
                <p className="text-xs text-gray-400">Estudiantes</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-cyan-400 mb-1">4.9</p>
                <p className="text-xs text-gray-400">Rating promedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buscador y filtros */}
      <section className="py-8 bg-slate-900/50 sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar facilitador..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setFiltroArea(area.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    filtroArea === area.id
                      ? 'bg-linear-to-r from-orange-500 to-cyan-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                  }`}
                >
                  <area.icon className="w-4 h-4" />
                  {area.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilitadores destacados */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-orange-400" />
              Facilitadores Destacados
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {facilitadoresDestacados.map((facilitador) => (
                <div
                  key={facilitador.id}
                  className="group cursor-pointer bg-linear-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  onClick={() => setFacilitadorSeleccionado(facilitador)}
                >
                  <div className="grid md:grid-cols-5 gap-6 p-8">
                    <div className="md:col-span-2 relative">
                      <img 
                        src={facilitador.imagen}
                        alt={facilitador.nombre}
                        className="w-full aspect-square object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-white fill-current" />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {facilitador.nombre}
                      </h3>
                      <p className="text-cyan-400 font-bold mb-4">{facilitador.rol}</p>
                      <p className="text-gray-300 mb-4 line-clamp-3">{facilitador.bio}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-bold text-white">{facilitador.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{facilitador.estudiantes}+</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{facilitador.experiencia}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-orange-400 font-bold text-sm flex items-center gap-2">
                          Ver perfil completo
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Todos los facilitadores */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-8">
              Todos los Facilitadores
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilitadoresFiltrados.filter(f => !f.destacado).map((facilitador) => (
                <div
                  key={facilitador.id}
                  className="group cursor-pointer bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  onClick={() => setFacilitadorSeleccionado(facilitador)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={facilitador.imagen}
                      alt={facilitador.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs font-bold rounded-full uppercase inline-block mb-2">
                        {facilitador.especialidad}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {facilitador.nombre}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{facilitador.rol}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{facilitador.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{facilitador.estudiantes}+</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4" />
                      <span className="px-4 py-2 bg-linear-to-r from-orange-500/20 to-cyan-500/20 text-cyan-400 rounded-xl text-xs font-bold border border-cyan-500/30">
                        {facilitador.especialidad}
                      </span>

                      <button className="flex items-center gap-2 text-orange-400 font-bold text-sm hover:text-orange-300 transition">
                        Ver perfil
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {facilitadoresFiltrados.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">
                  No se encontraron facilitadores con esos criterios.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
