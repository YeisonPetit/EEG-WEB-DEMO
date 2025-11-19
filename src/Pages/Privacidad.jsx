import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Mail, AlertCircle } from 'lucide-react';

export default function Privacidad() {
  const sections = [
    {
      id: 'introduccion',
      title: 'Introducción',
      icon: Shield,
      content: `La confidencialidad y la seguridad son valores primordiales de la Escuela Europea de Gerencia y, en consecuencia, asumimos el compromiso de garantizar la privacidad del Usuario en todo momento y de no recabar información innecesaria.

Nuestra Política de Privacidad regula cómo gestionamos los datos personales de todos los usuarios que acceden o se ponen en contacto con la ESCUELA EUROPEA DE GERENCIA S.L., a través de nuestra página web eegerencia.eu, que se fundamenta en los principios del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (Reglamento General de Protección de Datos).`
    },
    {
      id: 'responsable',
      title: 'Responsable del Tratamiento',
      icon: UserCheck,
      content: `El Responsable del tratamiento de los datos es la ESCUELA EUROPEA DE GERENCIA S.L., CIF: B98369002 y con domicilio social en Calle Xativa, 4 Esc.d 9 18 – Valencia (España). Código Postal: 46002.

El Delegado de Protección de Datos (DPD): info@eegerencia.eu`
    }
  ];

  const finalidades = [
    {
      title: 'Formulario de Contacto',
      description: 'Facilitarle un medio para que pueda ponerse en contacto con la EEG y contestar a sus solicitudes de información.',
      legitimacion: 'Consentimiento del usuario',
      conservacion: 'Hasta que solicite la baja'
    },
    {
      title: 'Envío de Correos Electrónicos',
      description: 'Contestar a sus solicitudes de información, atender sus peticiones y responder sus consultas o dudas.',
      legitimacion: 'Consentimiento del usuario',
      conservacion: '5 años según Manual de Calidad'
    },
    {
      title: 'Suscripción Newsletter',
      description: 'Enviarle información de valor en términos de conocimiento y experiencia gerencial.',
      legitimacion: 'Consentimiento al suscribirse',
      conservacion: 'Hasta solicitud de baja'
    },
    {
      title: 'Club de Negocios',
      description: 'Formalizar su alta como usuario registrado en nuestra comunidad de antiguos alumnos.',
      legitimacion: 'Consentimiento e interés legítimo',
      conservacion: 'Durante adhesión y 5 años posteriores'
    },
    {
      title: 'Formulario de Inscripción',
      description: 'Tramitar y gestionar la inscripción al programa, evento o actividad.',
      legitimacion: 'Consentimiento del usuario',
      conservacion: '5 años según Manual de Calidad'
    },
    {
      title: 'Compra y Reserva',
      description: 'Tramitar y gestionar los productos y servicios ofertados en nuestra tienda online.',
      legitimacion: 'Consentimiento del usuario',
      conservacion: '5 años según Manual de Calidad'
    }
  ];

  const derechos = [
    'Solicitar el acceso a sus datos personales o su rectificación',
    'Solicitar su supresión cuando ya no sean necesarios',
    'Solicitar la limitación de su tratamiento',
    'Solicitar la oposición al tratamiento de sus datos',
    'Solicitar la portabilidad de los datos',
    'Otros derechos reconocidos en las normativas aplicables'
  ];

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
              <Shield className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-cyan-400">
                Protección de Datos
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">Privacidad</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Tu privacidad y seguridad son nuestra prioridad. Conoce cómo protegemos tus datos personales.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Introducción y Responsable */}
            {sections.map((section, index) => (
              <div key={section.id} className="mb-12">
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${index === 0 ? 'bg-cyan-500/20' : 'bg-orange-500/20'} flex items-center justify-center flex-shrink-0`}>
                      <section.icon className={`w-7 h-7 ${index === 0 ? 'text-cyan-400' : 'text-orange-400'}`} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Finalidades del Tratamiento */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-cyan-400" />
                <h2 className="text-4xl font-black text-white">Finalidades del Tratamiento</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {finalidades.map((item, index) => (
                  <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Lock className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Legitimación</p>
                          <p className="text-sm text-gray-300">{item.legitimacion}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Conservación</p>
                          <p className="text-sm text-gray-300">{item.conservacion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tus Derechos */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-8 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="w-8 h-8 text-orange-400" />
                  <h2 className="text-4xl font-black text-white">Tus Derechos</h2>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Como usuario, tienes derecho a ejercer los siguientes derechos sobre tus datos personales:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {derechos.map((derecho, index) => (
                    <div key={index} className="flex items-start gap-3 bg-slate-900/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <p className="text-gray-300 text-sm">{derecho}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Cómo ejercer tus derechos</h3>
                      <p className="text-gray-300 text-sm mb-3">
                        Puedes ejercer tus derechos mediante un escrito dirigido a:
                      </p>
                      <a href="mailto:info@eegerencia.eu" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                        info@eegerencia.eu
                      </a>
                      <p className="text-gray-400 text-xs mt-2">
                        Indicando la referencia "Datos Personales" y especificando el derecho que deseas ejercer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seguridad */}
            <div className="mb-12">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-4">Seguridad de tus Datos</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Con el objetivo de salvaguardar la seguridad de sus datos personales, le informamos que hemos adoptado todas las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de los datos personales suministrados de su alteración, pérdida y tratamientos o accesos no autorizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso Importante */}
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl p-8 border border-orange-500/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Actualización de la Política</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    La presente Política de Privacidad puede ser modificada para adaptarlas a los cambios que se produzcan en nuestra web, así como modificaciones legislativas o jurisprudenciales sobre datos personales que vayan apareciendo.
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-orange-400">Actualizado:</strong> Agosto 2025
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}