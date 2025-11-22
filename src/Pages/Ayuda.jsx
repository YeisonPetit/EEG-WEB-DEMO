import React, { useState, useEffect } from 'react';
import {
  HelpCircle, Search, MessageSquare, Phone, Mail, MapPin,
  ChevronDown, ChevronRight, Book, Video, FileText, Users,
  Clock, CheckCircle, ArrowRight, Sparkles, Zap, Calendar,
  CreditCard, GraduationCap, Briefcase, Award, Globe,
  HeadphonesIcon, Send, ExternalLink, TrendingUp, Star,
  ThumbsUp, MessageCircle, Bot, Smile, Coffee, Rocket
} from 'lucide-react';

export default function Ayuda() {
  const [busqueda, setBusqueda] = useState('');
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);
  const [chatAbierto, setChatAbierto] = useState(false);
  const [mensajeChat, setMensajeChat] = useState('');
  const [conversacion, setConversacion] = useState([
    { tipo: 'bot', texto: '¡Hola! 👋 Soy el asistente virtual de EEG. ¿En qué puedo ayudarte hoy?', hora: '10:00' }
  ]);
  const [reaccion, setReaccion] = useState({});
  const [votosUtiles, setVotosUtiles] = useState({});
  const [pasoGuia, setPasoGuia] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const respuestasBot = {
    'inscripción': '¡Genial que quieras inscribirte! 🎓 El proceso es súper simple:\n1. Elige tu programa\n2. Completa el formulario\n3. Recibe confirmación en 24h\n\n¿Necesitas ayuda con algún paso en específico?',
    'pago': '💳 Tenemos varias opciones de pago flexibles:\n- Tarjeta de crédito/débito\n- Transferencia bancaria\n- PayPal\n- Planes de cuotas hasta 6 meses\n\n¿Qué método te interesa?',
    'certificado': '🏆 Al finalizar el programa recibirás:\n- Certificado digital y físico\n- Validez internacional\n- Registro en blockchain\n- Doble titulación (programas alianza)\n\n¿Tienes dudas sobre algún programa específico?',
    'default': '🤔 Déjame buscar esa información para ti... ¿Puedes ser más específico? O mejor aún, ¡puedo transferirte con un asesor humano!'
  };

  const preguntasRapidas = [
    { id: 1, pregunta: '¿Cómo me inscribo?', emoji: '📝', categoria: 'inscripción' },
    { id: 2, pregunta: '¿Métodos de pago?', emoji: '💳', categoria: 'pago' },
    { id: 3, pregunta: '¿Becas disponibles?', emoji: '🎓', categoria: 'beca' },
    { id: 4, pregunta: '¿Certificados válidos?', emoji: '🏆', categoria: 'certificado' }
  ];

  const categorias = [
    { 
      id: 'inscripcion', 
      label: 'Inscripción', 
      icon: GraduationCap, 
      color: 'orange',
      descripcion: 'Todo sobre cómo inscribirte',
      preguntas: 15
    },
    { 
      id: 'pagos', 
      label: 'Pagos', 
      icon: CreditCard, 
      color: 'cyan',
      descripcion: 'Opciones de pago y financiamiento',
      preguntas: 12
    },
    { 
      id: 'programas', 
      label: 'Programas', 
      icon: Book, 
      color: 'orange',
      descripcion: 'Información de nuestros programas',
      preguntas: 18
    },
    { 
      id: 'certificacion', 
      label: 'Certificación', 
      icon: Award, 
      color: 'cyan',
      descripcion: 'Certificados y validaciones',
      preguntas: 10
    }
  ];

  const preguntasFrecuentes = [
    {
      id: 1,
      categoria: 'inscripcion',
      pregunta: '¿Cómo puedo inscribirme en un programa?',
      respuesta: 'El proceso de inscripción es muy sencillo y lo puedes completar 100% online en menos de 10 minutos.',
      pasos: [
        { titulo: 'Elige tu programa', descripcion: 'Explora nuestro catálogo y selecciona el que más te convenga', icono: '🎯' },
        { titulo: 'Completa el formulario', descripcion: 'Llena tus datos personales y académicos', icono: '📋' },
        { titulo: 'Recibe confirmación', descripcion: 'Te contactaremos en máximo 24 horas', icono: '✅' },
        { titulo: 'Realiza el pago', descripcion: 'Elige tu método de pago preferido', icono: '💳' },
        { titulo: '¡Empieza a aprender!', descripcion: 'Accede a tu plataforma y comienza tu transformación', icono: '🚀' }
      ],
      popularidad: 95,
      util: 142
    },
    {
      id: 2,
      categoria: 'inscripcion',
      pregunta: '¿Hay becas o financiamiento disponible?',
      respuesta: 'Sí, tenemos múltiples opciones para que el dinero no sea un obstáculo en tu desarrollo profesional.',
      pasos: [
        { titulo: 'Becas por mérito', descripcion: 'Hasta 30% de descuento según tu perfil académico', icono: '⭐' },
        { titulo: 'Descuentos corporativos', descripcion: 'Grupos de 3+ personas de la misma empresa', icono: '🏢' },
        { titulo: 'Planes de pago', descripcion: 'Hasta 12 meses sin intereses', icono: '📅' },
        { titulo: 'Becas sociales', descripcion: 'Para sectores estratégicos', icono: '💙' }
      ],
      popularidad: 88,
      util: 128
    },
    {
      id: 3,
      categoria: 'pagos',
      pregunta: '¿Qué métodos de pago aceptan?',
      respuesta: 'Aceptamos prácticamente cualquier forma de pago para tu máxima comodidad.',
      pasos: [
        { titulo: 'Tarjetas', descripcion: 'Visa, Mastercard, Amex - débito y crédito', icono: '💳' },
        { titulo: 'Transferencias', descripcion: 'Locales e internacionales', icono: '🏦' },
        { titulo: 'PayPal', descripcion: 'Pago seguro internacional', icono: '🌐' },
        { titulo: 'Efectivo', descripcion: 'En nuestras oficinas', icono: '💵' }
      ],
      popularidad: 92,
      util: 156
    },
    {
      id: 4,
      categoria: 'pagos',
      pregunta: '¿Puedo pagar en cuotas?',
      respuesta: '¡Por supuesto! Ofrecemos planes de pago super flexibles.',
      pasos: [
        { titulo: 'Sin tarjeta', descripcion: 'Hasta 6 cuotas mensuales directas con EEG', icono: '📊' },
        { titulo: 'Con tarjeta', descripcion: 'Hasta 12 meses a través de tu banco', icono: '💳' },
        { titulo: 'Pago inicial', descripcion: 'Solo 30% al momento de inscripción', icono: '✨' }
      ],
      popularidad: 85,
      util: 134
    },
    {
      id: 5,
      categoria: 'programas',
      pregunta: '¿Cuál es la diferencia entre las modalidades?',
      respuesta: 'Cada modalidad está diseñada para diferentes estilos de vida y preferencias.',
      pasos: [
        { titulo: 'Online', descripcion: '100% virtual, estudia desde donde quieras', icono: '💻' },
        { titulo: 'Presencial', descripcion: 'Clases en vivo en nuestras instalaciones', icono: '🏫' },
        { titulo: 'Híbrida', descripcion: 'Lo mejor de ambos mundos', icono: '🔄' }
      ],
      popularidad: 78,
      util: 98
    },
    {
      id: 6,
      categoria: 'programas',
      pregunta: '¿Qué pasa si me pierdo una clase?',
      respuesta: '¡Tranquilo! Tenemos todo cubierto para que no te pierdas nada.',
      pasos: [
        { titulo: 'Grabaciones', descripcion: 'Todas las clases quedan grabadas', icono: '📹' },
        { titulo: 'Materiales', descripcion: 'Disponibles 24/7 en la plataforma', icono: '📚' },
        { titulo: 'Mentoría', descripcion: 'Sesiones de recuperación sin costo', icono: '👨‍🏫' }
      ],
      popularidad: 72,
      util: 89
    },
    {
      id: 7,
      categoria: 'certificacion',
      pregunta: '¿Los certificados tienen validez internacional?',
      respuesta: 'Sí, nuestros certificados son reconocidos globalmente.',
      pasos: [
        { titulo: 'ISO 21001', descripcion: 'Certificación de calidad educativa', icono: '✅' },
        { titulo: 'Alianzas', descripcion: 'Universidades europeas acreditadas', icono: '🇪🇺' },
        { titulo: 'Blockchain', descripcion: 'Verificación digital permanente', icono: '🔐' },
        { titulo: '+50 países', descripcion: 'Reconocimiento internacional', icono: '🌍' }
      ],
      popularidad: 91,
      util: 167
    },
    {
      id: 8,
      categoria: 'certificacion',
      pregunta: '¿Qué necesito para obtener el certificado?',
      respuesta: 'Los requisitos son claros y alcanzables para todos.',
      pasos: [
        { titulo: '80% asistencia', descripcion: 'O ver las grabaciones', icono: '📊' },
        { titulo: 'Evaluaciones', descripcion: 'Mínimo 70% de calificación', icono: '📝' },
        { titulo: 'Proyecto final', descripcion: 'Aplicado a tu realidad', icono: '🎯' },
        { titulo: 'Pagos al día', descripcion: 'Sin deudas pendientes', icono: '💰' }
      ],
      popularidad: 86,
      util: 145
    }
  ];

  const guiaInteractiva = [
    { 
      titulo: '¡Bienvenido! 👋', 
      descripcion: 'Vamos a guiarte paso a paso en tu proceso de inscripción',
      accion: 'Comenzar',
      icono: '🚀'
    },
    { 
      titulo: 'Elige tu programa', 
      descripcion: 'Tenemos diplomados, maestrías y programas ejecutivos',
      accion: 'Ver programas',
      icono: '📚'
    },
    { 
      titulo: 'Completa tus datos', 
      descripcion: 'Necesitamos tu información básica para contactarte',
      accion: 'Llenar formulario',
      icono: '📋'
    },
    { 
      titulo: 'Selecciona tu pago', 
      descripcion: 'Elige entre pago completo o en cuotas',
      accion: 'Ver opciones',
      icono: '💳'
    },
    { 
      titulo: '¡Listo! 🎉', 
      descripcion: 'Te enviaremos un email con todos los detalles',
      accion: 'Finalizar',
      icono: '✅'
    }
  ];

  const enviarMensaje = () => {
    if (!mensajeChat.trim()) return;

    const nuevoMensaje = {
      tipo: 'usuario',
      texto: mensajeChat,
      hora: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })
    };

    setConversacion([...conversacion, nuevoMensaje]);
    setMensajeChat('');

    setTimeout(() => {
      let respuesta = respuestasBot.default;
      const mensajeLower = mensajeChat.toLowerCase();

      if (mensajeLower.includes('inscri') || mensajeLower.includes('registr')) {
        respuesta = respuestasBot.inscripción;
      } else if (mensajeLower.includes('pago') || mensajeLower.includes('precio') || mensajeLower.includes('costo')) {
        respuesta = respuestasBot.pago;
      } else if (mensajeLower.includes('certificado') || mensajeLower.includes('diploma')) {
        respuesta = respuestasBot.certificado;
      }

      setConversacion(prev => [...prev, {
        tipo: 'bot',
        texto: respuesta,
        hora: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  const marcarUtil = (id) => {
    setVotosUtiles(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const siguientePaso = () => {
    if (pasoGuia < guiaInteractiva.length - 1) {
      setPasoGuia(pasoGuia + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoGuia > 0) {
      setPasoGuia(pasoGuia - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                fontSize: '24px'
              }}
            >
              {['🎉', '✨', '⭐', '🎊'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}

      {/* Hero Interactivo */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        
        {/* Elementos flotantes animados */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 animate-bounce">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                🚀 Centro de Ayuda Inteligente
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Estamos aquí
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                para ayudarte
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Encuentra respuestas al instante o chatea con nuestro asistente virtual 24/7
            </p>

            {/* Buscador inteligente */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Escribe tu pregunta... (ej: ¿Cómo me inscribo?)"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 bg-slate-900/80 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all shadow-2xl hover:shadow-orange-500/20"
                />
                {busqueda && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-sm text-gray-400">{preguntasFrecuentes.filter(p => 
                      p.pregunta.toLowerCase().includes(busqueda.toLowerCase())
                    ).length} resultados</span>
                  </div>
                )}
              </div>
            </div>

            {/* Preguntas rápidas */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {preguntasRapidas.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBusqueda(item.pregunta)}
                  className="px-6 py-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-cyan-500/20 border border-white/10 hover:border-orange-500/30 rounded-xl text-white text-sm font-bold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <span className="text-xl">{item.emoji}</span>
                  {item.pregunta}
                </button>
              ))}
            </div>

            {/* Stats en tiempo real */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-orange-400 mb-1">98%</p>
                <p className="text-xs text-gray-400">Satisfacción</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-cyan-400 mb-1">&lt;2min</p>
                <p className="text-xs text-gray-400">Tiempo respuesta</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-black text-orange-400 mb-1">24/7</p>
                <p className="text-xs text-gray-400">Disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías interactivas */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorias.map((cat, index) => (
                <div
                  key={cat.id}
                  className="group bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  {/* Efecto hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    cat.color === 'orange' 
                      ? 'from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5' 
                      : 'from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5'
                  } transition-all duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                      cat.color === 'orange' 
                        ? 'from-orange-500/20 to-orange-600/10' 
                        : 'from-cyan-500/20 to-cyan-600/10'
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <cat.icon className={`w-7 h-7 ${
                        cat.color === 'orange' ? 'text-orange-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{cat.descripcion}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{cat.preguntas} preguntas</span>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guía interactiva paso a paso */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                🎯 Guía Interactiva de Inscripción
              </h2>
              <p className="text-xl text-gray-400">
                Te llevamos paso a paso en tu proceso
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              {/* Barra de progreso */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {guiaInteractiva.map((paso, index) => (
                    <div key={index} className="flex items-center flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        index <= pasoGuia 
                          ? 'bg-gradient-to-br from-orange-500 to-cyan-500 text-white scale-110' 
                          : 'bg-slate-800 text-gray-500'
                      }`}>
                        {index < pasoGuia ? '✓' : index + 1}
                      </div>
                      {index < guiaInteractiva.length - 1 && (
                        <div className={`flex-1 h-1 mx-2 rounded transition-all ${
                          index < pasoGuia ? 'bg-gradient-to-r from-orange-500 to-cyan-500' : 'bg-slate-800'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenido del paso actual */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{guiaInteractiva[pasoGuia].icono}</div>
                <h3 className="text-3xl font-black text-white mb-4">
                  {guiaInteractiva[pasoGuia].titulo}
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  {guiaInteractiva[pasoGuia].descripcion}
                </p>

                {/* Botones de navegación */}
                <div className="flex gap-4 justify-center">
                  {pasoGuia > 0 && (
                    <button
                      onClick={pasoAnterior}
                      className="px-8 py-4 bg-slate-800/50 text-white font-bold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all flex items-center gap-2"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                      Anterior
                    </button>
                  )}
                  <button
                    onClick={siguientePaso}
                    className={`px-8 py-4 font-bold rounded-xl transition-all flex items-center gap-2 ${
                      pasoGuia === guiaInteractiva.length - 1
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-2xl hover:shadow-orange-500/50'
                        : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-2xl hover:shadow-cyan-500/50'
                    }`}
                  >
                    {guiaInteractiva[pasoGuia].accion}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes con sistema de votos */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-4">
              💡 Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Las respuestas que más buscan nuestros estudiantes
            </p>

            <div className="space-y-4">
              {preguntasFrecuentes
                .filter(p => !busqueda || p.pregunta.toLowerCase().includes(busqueda.toLowerCase()))
                .map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all"
                >
                  <button
                    onClick={() => setPreguntaAbierta(preguntaAbierta === item.id ? null : item.id)}
                    className="w-full p-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                          {item.pregunta}
                        </h3>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-gray-400">
                            <TrendingUp className="w-4 h-4" />
                            {item.popularidad}% popularidad
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <ThumbsUp className="w-4 h-4" />
                            {item.util + (votosUtiles[item.id] || 0)} útil
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`transition-transform ${
                      preguntaAbierta === item.id ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>
                  </button>

                  {preguntaAbierta === item.id && (
                    <div className="px-6 pb-6 pl-20 animate-fade-in">
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {item.respuesta}
                      </p>
                      
                      {item.pasos && item.pasos.length > 0 && (
                        <div className="space-y-4 mb-6">
                          {item.pasos.map((paso, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all group">
                              <div className="text-3xl">{paso.icono}</div>
                              <div className="flex-1">
                                <h4 className="font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                                  {paso.titulo}
                                </h4>
                                <p className="text-sm text-gray-400">{paso.descripcion}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Acciones */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <button
                          onClick={() => marcarUtil(item.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
                            votosUtiles[item.id] 
                              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                              : 'bg-slate-800/50 text-gray-400 border border-white/10 hover:border-orange-500/30 hover:text-orange-400'
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          {votosUtiles[item.id] ? '¡Útil!' : '¿Te ayudó?'}
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-gray-400 rounded-xl border border-white/10 hover:border-cyan-500/30 hover:text-cyan-400 font-bold transition-all">
                          <MessageCircle className="w-4 h-4" />
                          Más info
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat flotante interactivo */}
      {chatAbierto && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Header del chat */}
          <div className="bg-gradient-to-r from-orange-500 to-cyan-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Bot className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-white font-bold">Asistente EEG</p>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatAbierto(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conversacion.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.tipo === 'usuario' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  msg.tipo === 'usuario' 
                    ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white' 
                    : 'bg-slate-800 text-gray-200'
                } rounded-2xl p-4 shadow-lg`}>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.texto}</p>
                  <p className="text-xs opacity-70 mt-2">{msg.hora}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input del chat */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={mensajeChat}
                onChange={(e) => setMensajeChat(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && enviarMensaje()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-all"
              />
              <button
                onClick={enviarMensaje}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botón chat flotante */}
      {!chatAbierto && (
        <button
          onClick={() => setChatAbierto(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full shadow-2xl shadow-orange-500/50 flex items-center justify-center z-50 hover:scale-110 transition-all animate-bounce"
        >
          <MessageSquare className="w-8 h-8 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-pulse">
            1
          </span>
        </button>
      )}

      {/* CTA Final súper interactivo */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-12 border border-orange-500/20 overflow-hidden">
              {/* Elementos decorativos animados */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

              <div className="relative z-10 text-center">
                <div className="flex justify-center gap-4 mb-6 text-5xl">
                  <span className="animate-bounce">🎯</span>
                  <span className="animate-bounce delay-100">💬</span>
                  <span className="animate-bounce delay-200">🚀</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-6">
                  ¿Aún tienes dudas?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Nuestro equipo humano está listo para ayudarte en tiempo real
                </p>
                
                {/* Opciones de contacto */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 cursor-pointer group">
                    <Phone className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-bold mb-1">Llámanos</p>
                    <p className="text-sm text-gray-400">Lun-Vie 8AM-7PM</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all hover:scale-105 cursor-pointer group">
                    <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-bold mb-1">Email</p>
                    <p className="text-sm text-gray-400">Respuesta en 24h</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 cursor-pointer group">
                    <Send className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-bold mb-1">WhatsApp</p>
                    <p className="text-sm text-gray-400">24/7 disponible</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setChatAbierto(true)}
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat en vivo
                  </button>
                  <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-800/50 text-white font-bold rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <Calendar className="w-5 h-5" />
                    Agendar llamada
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}