import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, BookOpen, CreditCard, GraduationCap, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categories = [
    { id: 'todas', name: 'Todas', icon: HelpCircle },
    { id: 'programas', name: 'Programas', icon: BookOpen },
    { id: 'inscripcion', name: 'Inscripción', icon: GraduationCap },
    { id: 'pagos', name: 'Pagos', icon: CreditCard }
  ];

  const faqs = [
    {
      category: 'programas',
      question: '¿Tienen programas en línea?',
      answer: 'Efectivamente, en la EEG contamos con la modalidad de formación en línea. Tenemos una programación anual en distintos temas relacionados al área de gerencia y negocios.'
    },
    {
      category: 'programas',
      question: '¿Cómo es la metodología de aprendizaje?',
      answer: 'Nuestra metodología combina sesiones en vivo, contenido asincrónico, casos prácticos y trabajo colaborativo. Los participantes reciben acompañamiento continuo de facilitadores expertos con experiencia ejecutiva comprobada.'
    },
    {
      category: 'programas',
      question: '¿Ustedes están avalados por alguna Institución de Educación Superior?',
      answer: 'Sí, la EEG cuenta con avales y acreditaciones de prestigiosas instituciones de educación superior que garantizan la calidad de nuestros programas académicos.'
    },
    {
      category: 'programas',
      question: '¿Con qué universidades tienen alianzas?',
      answer: 'Mantenemos alianzas estratégicas con universidades de primer nivel en Europa y América Latina, lo que nos permite ofrecer doble titulación en varios de nuestros programas.'
    },
    {
      category: 'programas',
      question: '¿Dónde está su sede?',
      answer: 'Nuestra sede principal está ubicada en Valencia, España. Sin embargo, operamos en formato virtual y presencial en múltiples países de Latinoamérica.'
    },
    {
      category: 'programas',
      question: '¿En qué países tienen sucursales o representación?',
      answer: 'Tenemos presencia en más de 12 países de Latinoamérica, incluyendo República Dominicana, México, Colombia, Perú, Chile, Argentina, entre otros.'
    },
    {
      category: 'programas',
      question: '¿Cómo puedo ver el perfil de los facilitadores?',
      answer: 'Puedes consultar el perfil de nuestros facilitadores en nuestra página web, en la sección de "Equipo Docente" o solicitando información sobre el programa específico de tu interés.'
    },
    {
      category: 'programas',
      question: '¿Cómo puedo obtener la programación que ustedes ofrecen?',
      answer: 'Puedes descargar nuestra programación completa desde nuestra página web o solicitarla a través del formulario de contacto. También enviamos actualizaciones periódicas a nuestros suscriptores.'
    },
    {
      category: 'programas',
      question: '¿En la EEG tienen evaluaciones psicométricas para procesos de selección o evaluación de competencias de liderazgo?',
      answer: 'Sí, ofrecemos servicios de evaluación psicométrica y assessment center para empresas que deseen evaluar competencias de liderazgo en sus equipos.'
    },
    {
      category: 'programas',
      question: '¿La EEG es Proveedor del Estado?',
      answer: 'Sí, somos proveedores certificados para entidades estatales en varios países, cumpliendo con todos los requisitos legales y de calidad establecidos.'
    },
    {
      category: 'inscripcion',
      question: '¿Qué necesito para inscribirme?',
      answer: 'Para inscribirte necesitas completar el formulario de inscripción, enviar tu CV actualizado y realizar el pago inicial o gestionar tu financiamiento. Nuestro equipo te guiará en todo el proceso.'
    },
    {
      category: 'inscripcion',
      question: '¿Ya me inscribí y ahora cómo hago para acceder a la plataforma?',
      answer: 'Una vez confirmada tu inscripción, recibirás un correo electrónico con tus credenciales de acceso al campus virtual. Si tienes dificultades, nuestro equipo de soporte está disponible para ayudarte.'
    },
    {
      category: 'pagos',
      question: '¿Qué modalidades de pago hay disponibles?',
      answer: 'Aceptamos pagos con tarjetas de crédito/débito, transferencias bancarias, PayPal y planes de financiamiento. También trabajamos con pagos corporativos para empresas.'
    },
    {
      category: 'pagos',
      question: '¿Cuentan con Becas?',
      answer: 'Sí, contamos con un programa de becas parciales para candidatos destacados. Las becas se otorgan según mérito académico, situación económica y potencial de liderazgo.'
    },
    {
      category: 'pagos',
      question: '¿Cómo aplico para una beca?',
      answer: 'Para aplicar a una beca debes completar el formulario de solicitud de beca disponible en nuestra web, adjuntar los documentos requeridos y realizar una entrevista con nuestro comité de admisiones.'
    },
    {
      category: 'pagos',
      question: '¿Ustedes cuentan con plan de descuentos?',
      answer: 'Sí, ofrecemos descuentos por pronto pago, inscripciones grupales, alumni y promociones especiales en fechas determinadas. Consulta con nuestro equipo comercial.'
    },
    {
      category: 'pagos',
      question: '¿Cómo aplico a los descuentos?',
      answer: 'Los descuentos se aplican automáticamente al cumplir con las condiciones establecidas. También puedes solicitar información sobre descuentos disponibles contactando a tu ejecutivo de cuenta.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'todas' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-slate-950 to-orange-600/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <HelpCircle className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-cyan-400">
                Centro de Ayuda
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">Frecuentes</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros programas
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar pregunta..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/50 text-gray-400 hover:bg-slate-800/50 border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No se encontraron preguntas que coincidan con tu búsqueda</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-10 h-10 rounded-xl ${
                          faq.category === 'programas' ? 'bg-cyan-500/20' : 
                          faq.category === 'inscripcion' ? 'bg-orange-500/20' : 
                          'bg-green-500/20'
                        } flex items-center justify-center flex-shrink-0`}>
                          {faq.category === 'programas' && <BookOpen className="w-5 h-5 text-cyan-400" />}
                          {faq.category === 'inscripcion' && <GraduationCap className="w-5 h-5 text-orange-400" />}
                          {faq.category === 'pagos' && <CreditCard className="w-5 h-5 text-green-400" />}
                        </div>
                        <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        expandedQuestion === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {expandedQuestion === index && (
                      <div className="px-6 pb-6 animate-fadeIn">
                        <div className="pl-14">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-orange-500/10 rounded-3xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <h2 className="text-3xl font-black text-white mb-4">
                  ¿No encontraste lo que buscabas?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Nuestro equipo está listo para ayudarte con cualquier duda adicional que tengas
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    Contactar por Email
                  </a>
                  <a
                    href="https://wa.me/18099379410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}