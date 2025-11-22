import React, { useState } from 'react';
import {
  Newspaper, Calendar, Clock, User, Tag, TrendingUp,
  MessageSquare, Share2, BookmarkPlus, Eye, ArrowRight,
  Search, Filter, Grid, List, Zap, Award, Users,
  Briefcase, GraduationCap, Sparkles, ChevronLeft, ChevronRight,
  Play, Image as ImageIcon, FileText, ExternalLink
} from 'lucide-react';

export default function Noticias() {
  const [vistaActiva, setVistaActiva] = useState('grid');
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const categorias = [
    { id: 'todas', label: 'Todas', icon: Newspaper, color: 'orange' },
    { id: 'eventos', label: 'Eventos', icon: Calendar, color: 'cyan' },
    { id: 'logros', label: 'Logros', icon: Award, color: 'orange' },
    { id: 'programas', label: 'Programas', icon: GraduationCap, color: 'cyan' },
    { id: 'empresas', label: 'Empresas', icon: Briefcase, color: 'orange' }
  ];

  const noticias = [
    {
      id: 1,
      categoria: 'logros',
      tipo: 'destacada',
      titulo: 'EEG recibe certificación ISO 21001 por excelencia educativa',
      subtitulo: 'Primera escuela de negocios en la región con esta distinción',
      descripcion: 'La Escuela Europea de Gerencia ha obtenido la prestigiosa certificación ISO 21001.',
      contenido: 'Este logro representa un hito importante en nuestra historia de más de dos décadas. La certificación ISO 21001 es un estándar internacional que establece los requisitos para los sistemas de gestión de organizaciones educativas.\n\nEl proceso de certificación incluyó una auditoría exhaustiva de todos nuestros procesos, metodologías y sistemas de gestión.\n\nEste reconocimiento refuerza nuestro compromiso con nuestros estudiantes y partners corporativos.',
      imagen: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop',
      autor: 'José Luis Falcón',
      fecha: '15 de Noviembre, 2024',
      lecturas: '2.4k',
      comentarios: 45,
      tags: ['Certificación', 'ISO 21001', 'Calidad', 'Excelencia']
    },
    {
      id: 2,
      categoria: 'eventos',
      tipo: 'normal',
      titulo: 'Summit de Liderazgo 2025',
      subtitulo: 'Más de 500 líderes se reunirán en nuestro evento anual',
      descripcion: 'El próximo 20 de enero daremos inicio a nuestro Summit Anual de Liderazgo.',
      contenido: 'El Summit de Liderazgo 2025 será el evento más importante del año para ejecutivos.\n\nContaremos con speakers de talla mundial, incluyendo CEOs de empresas Fortune 500.\n\nLos asistentes podrán participar en workshops interactivos y sesiones de networking.',
      imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
      autor: 'María González',
      fecha: '10 de Noviembre, 2024',
      lecturas: '1.8k',
      comentarios: 32,
      tags: ['Summit', 'Liderazgo', 'Networking']
    },
    {
      id: 3,
      categoria: 'programas',
      tipo: 'video',
      titulo: 'Nuevo MBA Executive con doble titulación',
      subtitulo: 'Alianza con Universidad Antonio de Nebrija',
      descripcion: 'Presentamos nuestro nuevo MBA Executive.',
      contenido: 'El MBA Executive está diseñado para profesionales con experiencia gerencial.\n\nCombina sesiones virtuales con módulos presenciales intensivos.\n\nLos egresados obtendrán doble titulación con reconocimiento europeo.',
      imagen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop',
      autor: 'Sharon Manno',
      fecha: '5 de Noviembre, 2024',
      lecturas: '3.2k',
      comentarios: 67,
      tags: ['MBA', 'Nebrija', 'Educación']
    },
    {
      id: 4,
      categoria: 'empresas',
      tipo: 'normal',
      titulo: 'Más de 50 empresas confían en MATROP®',
      subtitulo: 'Casos de éxito en transformación organizacional',
      descripcion: 'Empresas líderes han implementado nuestros programas.',
      contenido: 'Más de 50 empresas han confiado en la metodología MATROP®.\n\nNuestros programas In Company se diseñan a la medida.\n\nLos resultados incluyen 35% de incremento en productividad.',
      imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      autor: 'Carlos Ramírez',
      fecha: '1 de Noviembre, 2024',
      lecturas: '1.5k',
      comentarios: 28,
      tags: ['MATROP', 'Empresas', 'Resultados']
    },
    {
      id: 5,
      categoria: 'logros',
      tipo: 'normal',
      titulo: '8,600 profesionales egresados',
      subtitulo: 'Celebramos dos décadas de impacto',
      descripcion: 'Alcanzamos un hito histórico con más de 8,600 egresados.',
      contenido: 'Hemos superado la marca de 8,600 profesionales egresados.\n\nNuestros egresados ocupan posiciones clave en empresas Fortune 500.\n\nLa red de alumni se ha convertido en una comunidad vibrante.',
      imagen: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop',
      autor: 'José Luis Falcón',
      fecha: '28 de Octubre, 2024',
      lecturas: '2.1k',
      comentarios: 54,
      tags: ['Alumni', 'Egresados', 'Impacto']
    },
    {
      id: 6,
      categoria: 'eventos',
      tipo: 'normal',
      titulo: 'Webinar: Transformación Digital 2025',
      subtitulo: 'Expertos internacionales comparten insights',
      descripcion: 'No te pierdas nuestro próximo webinar gratuito.',
      contenido: 'Webinar gratuito sobre tendencias en transformación digital.\n\nReunirá a expertos de Silicon Valley, Europa y Latinoamérica.\n\nLos asistentes recibirán certificado y materiales exclusivos.',
      imagen: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop',
      autor: 'Andrea Martínez',
      fecha: '20 de Octubre, 2024',
      lecturas: '980',
      comentarios: 15,
      tags: ['Webinar', 'Digital', 'Gratuito']
    }
  ];

  const noticiasFiltradas = noticias.filter(noticia => {
    const matchCategoria = categoriaActiva === 'todas' || noticia.categoria === categoriaActiva;
    const matchBusqueda = noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                          noticia.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  const noticiaDestacada = noticias.find(n => n.tipo === 'destacada');
  const noticiasRegulares = noticiasFiltradas.filter(n => n.tipo !== 'destacada');

  if (noticiaSeleccionada) {
    return (
      <div className="min-h-screen bg-slate-950">
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={noticiaSeleccionada.imagen}
            alt={noticiaSeleccionada.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          
          <button
            onClick={() => setNoticiaSeleccionada(null)}
            className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-sm text-white rounded-xl hover:bg-slate-800 transition-all border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
            Volver
          </button>

          <div className="absolute bottom-12 left-8 right-8 max-w-5xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-sm font-bold rounded-full uppercase border border-cyan-500/30">
                {noticiaSeleccionada.categoria}
              </span>
              {noticiaSeleccionada.tipo === 'destacada' && (
                <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-400 text-sm font-bold rounded-full uppercase border border-orange-500/30 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Destacada
                </span>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              {noticiaSeleccionada.titulo}
            </h1>
            <p className="text-2xl text-cyan-400 mb-6">{noticiaSeleccionada.subtitulo}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-orange-400" />
                <span>{noticiaSeleccionada.autor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>{noticiaSeleccionada.fecha}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-400" />
                <span>{noticiaSeleccionada.lecturas} lecturas</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>{noticiaSeleccionada.comentarios} comentarios</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
              <div className="prose prose-invert prose-lg max-w-none">
                {noticiaSeleccionada.contenido.split('\n\n').map((parrafo, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {parrafo}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {noticiaSeleccionada.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-xl text-sm border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Compartir
              </button>
              <button className="flex-1 py-4 bg-slate-800/50 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2">
                <BookmarkPlus className="w-5 h-5" />
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                Noticias y Actualizaciones
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Mantente
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                informado
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Últimas noticias, eventos y logros de la Escuela Europea de Gerencia
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-900/50 sticky top-0 z-40 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setVistaActiva('grid')}
                  className={`p-3 rounded-xl transition-all ${
                    vistaActiva === 'grid'
                      ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setVistaActiva('list')}
                  className={`p-3 rounded-xl transition-all ${
                    vistaActiva === 'list'
                      ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setVistaActiva('magazine')}
                  className={`p-3 rounded-xl transition-all ${
                    vistaActiva === 'magazine'
                      ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'
                  }`}
                >
                  <Newspaper className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    categoriaActiva === cat.id
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

      {categoriaActiva === 'todas' && noticiaDestacada && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div 
                className="relative h-[600px] rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => setNoticiaSeleccionada(noticiaDestacada)}
              >
                <img 
                  src={noticiaDestacada.imagen}
                  alt={noticiaDestacada.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-400 text-sm font-bold rounded-full uppercase border border-orange-500/30 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Destacada
                  </span>
                </div>

                <div className="absolute bottom-12 left-12 right-12">
                  <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-sm font-bold rounded-full uppercase border border-cyan-500/30 mb-4 inline-block">
                    {noticiaDestacada.categoria}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                    {noticiaDestacada.titulo}
                  </h2>
                  <p className="text-2xl text-gray-300 mb-6 max-w-3xl">
                    {noticiaDestacada.subtitulo}
                  </p>
                  
                  <div className="flex items-center gap-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-orange-400" />
                      <span>{noticiaDestacada.autor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span>{noticiaDestacada.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-orange-400" />
                      <span>{noticiaDestacada.lecturas}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {vistaActiva === 'grid' && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {noticiasRegulares.map((noticia) => (
                  <div
                    key={noticia.id}
                    className="group cursor-pointer bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
                    onClick={() => setNoticiaSeleccionada(noticia)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-xs font-bold rounded-full uppercase">
                          {noticia.categoria}
                        </span>
                      </div>
                      {noticia.tipo === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-current ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {noticia.descripcion}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{noticia.lecturas}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{noticia.comentarios}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {vistaActiva === 'list' && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-6">
              {noticiasRegulares.map((noticia) => (
                <div
                  key={noticia.id}
                  className="group cursor-pointer bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                  onClick={() => setNoticiaSeleccionada(noticia)}
                >
                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="relative h-48 md:h-full rounded-2xl overflow-hidden">
                      <img 
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {noticia.tipo === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-6 h-6 text-white fill-current ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full uppercase">
                          {noticia.categoria}
                        </span>
                        <span className="text-gray-400 text-sm">{noticia.fecha}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {noticia.descripcion}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-orange-400" />
                            <span>{noticia.autor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span>{noticia.lecturas}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span>{noticia.comentarios}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {vistaActiva === 'magazine' && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                  {noticiasRegulares.filter((_, i) => i % 2 === 0).map((noticia) => (
                    <div
                      key={noticia.id}
                      className="group cursor-pointer"
                      onClick={() => setNoticiaSeleccionada(noticia)}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
                        <img 
                          src={noticia.imagen}
                          alt={noticia.titulo}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-400 text-sm font-bold rounded-full uppercase border border-cyan-500/30">
                            {noticia.categoria}
                          </span>
                        </div>

                        {noticia.tipo === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-10 h-10 text-white fill-current ml-1" />
                            </div>
                          </div>
                        )}

                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                            {noticia.titulo}
                          </h3>
                          <p className="text-gray-300 line-clamp-2 mb-3">
                            {noticia.descripcion}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{noticia.fecha}</span>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{noticia.lecturas}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  {noticiasRegulares.filter((_, i) => i % 2 === 1).map((noticia) => (
                    <div
                      key={noticia.id}
                      className="group cursor-pointer"
                      onClick={() => setNoticiaSeleccionada(noticia)}
                    >
                      <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
                        <img 
                          src={noticia.imagen}
                          alt={noticia.titulo}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                        
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-400 text-sm font-bold rounded-full uppercase border border-orange-500/30">
                            {noticia.categoria}
                          </span>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {noticia.titulo}
                          </h3>
                          <p className="text-gray-300 line-clamp-2 mb-3">
                            {noticia.descripcion}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{noticia.fecha}</span>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{noticia.lecturas}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-12 border border-orange-500/20 text-center">
              <Zap className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-4xl font-black text-white mb-6">
                Suscríbete a nuestro newsletter
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Recibe las últimas noticias, eventos y contenido exclusivo directamente en tu correo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
                />
                <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Suscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}