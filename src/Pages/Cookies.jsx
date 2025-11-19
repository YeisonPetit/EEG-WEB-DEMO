import React, { useState } from 'react';
import { Cookie, Shield, Settings, Info, CheckCircle, XCircle, ChevronDown, AlertTriangle } from 'lucide-react';

export default function Cookies() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const tiposCookies = [
    {
      id: 'preferencias',
      icon: Settings,
      title: 'Cookies de Preferencias',
      color: 'cyan',
      description: 'Nos permiten saber si has visitado antes nuestro sitio o cuál es tu idioma predefinido. Hacen que la experiencia del sitio web sea más funcional.'
    },
    {
      id: 'procesos',
      icon: CheckCircle,
      title: 'Cookies de Procesos',
      color: 'orange',
      description: 'Permiten el funcionamiento del sitio web y ofrecen servicios esperados como la navegación por páginas web o el acceso a áreas seguras. Son necesarias para el funcionamiento adecuado.'
    },
    {
      id: 'analitica',
      icon: Info,
      title: 'Cookies de Terceros - Analítica',
      color: 'cyan',
      description: 'Google Analytics recopila información de forma anónima y elabora informes de tendencias sin identificar a usuarios individuales.'
    }
  ];

  const cookiesPropias = [
    {
      nombre: 'Cookies de entrada del usuario',
      finalidad: 'Sirven para ofrecer servicios o recordar configuraciones'
    },
    {
      nombre: 'Cookies de sesión de autenticación',
      finalidad: 'Identificación del usuario en el sistema'
    },
    {
      nombre: 'Cookies de seguridad',
      finalidad: 'Protección y seguridad del usuario'
    },
    {
      nombre: 'Cookies de personalización',
      finalidad: 'Mejoran la experiencia de navegación'
    },
    {
      nombre: 'Cookies de aceptación',
      finalidad: 'Recuerdan la aceptación de cookies'
    }
  ];

  const cookiesTerceros = [
    {
      nombre: 'Google Analytics',
      finalidad: 'Informes estadísticos sobre el tráfico del sitio web',
      datos: 'Número de visitas, páginas visitadas, tiempo de navegación'
    },
    {
      nombre: 'JetFormBuilder',
      finalidad: 'Carga de formularios de suscripción y caché',
      datos: 'Formularios de newsletter y Club de Negocios'
    },
    {
      nombre: 'PayPal / Stripe',
      finalidad: 'Seguridad en el acceso a plataformas de pago',
      datos: 'Cookies técnicas necesarias para el pago'
    }
  ];

  const redesSociales = [
    { nombre: 'Twitter', link: 'https://twitter.com/privacy' },
    { nombre: 'Facebook', link: 'https://www.facebook.com/policies/cookies/' },
    { nombre: 'Google Maps', link: 'https://policies.google.com/technologies/cookies' },
    { nombre: 'Pinterest', link: 'https://policy.pinterest.com/cookies' }
  ];

  const navegadores = [
    { nombre: 'Chrome', link: 'https://support.google.com/chrome/answer/95647' },
    { nombre: 'Firefox', link: 'https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-' },
    { nombre: 'Safari', link: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
    { nombre: 'Edge', link: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Cookie className="w-5 h-5 text-orange-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-orange-400">
                Uso de Cookies
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">Cookies</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Utilizamos cookies para facilitar el uso de nuestra página web y mejorar tu experiencia de navegación
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Introducción */}
            <div className="mb-12">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Info className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-4">¿Qué son las Cookies?</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar. Esta información permite identificarle a usted como un usuario concreto y permite guardar sus preferencias personales, así como información técnica como pueden ser visitas o páginas concretas que visite.
                    </p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">¿Qué NO es una cookie?</h3>
                      <p className="text-gray-300 text-sm">
                        No es un virus, ni un troyano, ni un gusano, ni spam, ni spyware, ni abre ventanas pop-up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tipos de Cookies */}
            <div className="mb-12">
              <h2 className="text-4xl font-black text-white mb-8 flex items-center gap-3">
                <Cookie className="w-8 h-8 text-orange-400" />
                Tipos de Cookies que Utilizamos
              </h2>
              
              <div className="space-y-6">
                {tiposCookies.map((tipo) => (
                  <div key={tipo.id} className={`bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-${tipo.color}-500/20 hover:border-${tipo.color}-500/40 transition-all duration-300`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${tipo.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                        <tipo.icon className={`w-6 h-6 text-${tipo.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{tipo.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{tipo.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookies Propias */}
            <div className="mb-12">
              <button
                onClick={() => toggleSection('propias')}
                className="w-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Cookies Propias</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedSection === 'propias' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'propias' && (
                <div className="mt-4 space-y-3 animate-fadeIn">
                  {cookiesPropias.map((cookie, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                      <h4 className="text-white font-semibold mb-1">{cookie.nombre}</h4>
                      <p className="text-gray-400 text-sm">{cookie.finalidad}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cookies de Terceros */}
            <div className="mb-12">
              <button
                onClick={() => toggleSection('terceros')}
                className="w-full bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <Settings className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold text-white">Cookies de Terceros</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedSection === 'terceros' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'terceros' && (
                <div className="mt-4 space-y-3 animate-fadeIn">
                  {cookiesTerceros.map((cookie, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-5 border border-white/5">
                      <h4 className="text-white font-bold mb-2">{cookie.nombre}</h4>
                      <p className="text-gray-300 text-sm mb-2">{cookie.finalidad}</p>
                      <p className="text-gray-500 text-xs">{cookie.datos}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cómo Gestionar Cookies */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-cyan-500/10 to-orange-500/10 rounded-3xl p-8 border border-cyan-500/20">
                <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-cyan-400" />
                  Cómo Gestionar las Cookies
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Puedes configurar tu navegador para aceptar o rechazar cookies. La mayoría de navegadores permiten gestionar las cookies de 3 formas:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center">
                    <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">No aceptar nunca</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center">
                    <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Preguntar cada vez</p>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Aceptar siempre</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Configuración por Navegador:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {navegadores.map((nav, index) => (
                    <a
                      key={index}
                      href={nav.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                    >
                      <span className="text-white font-semibold">{nav.nombre}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Consecuencias de Desactivar */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-black text-white mb-4">¿Qué ocurre si desactivas las cookies?</h2>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>No podrás compartir contenidos en redes sociales</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>El sitio no podrá adaptar los contenidos a tus preferencias</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>No podrás acceder al área personal (Mi cuenta, Mi perfil)</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>Será imposible realizar compras online</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>No será posible personalizar preferencias geográficas</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mb-12">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Cookies de Redes Sociales</h3>
                <p className="text-gray-300 mb-6">
                  Las redes sociales que utilizamos tienen sus propias políticas de cookies:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {redesSociales.map((red, index) => (
                    <a
                      key={index}
                      href={red.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-slate-800/50 rounded-xl p-4 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
                    >
                      <span className="text-white">{red.nombre}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Actualización */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-orange-500/20 rounded-3xl p-8 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <Info className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Cambios en esta Política</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Podemos modificar este Aviso de Cookies de acuerdo con la legislación aplicable. Te informaremos de cualquier modificación que tenga un impacto relevante en tu privacidad.
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-cyan-400">Actualizado:</strong> Agosto 2025
                  </p>
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}