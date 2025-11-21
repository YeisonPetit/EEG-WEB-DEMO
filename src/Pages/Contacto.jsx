import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle, 
  User, Building2, FileText, CheckCircle, Sparkles
} from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    interes: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        interes: '',
        mensaje: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1-809-937-9410",
      link: "tel:+18099379410",
      color: "orange"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eeg.edu",
      link: "mailto:info@eeg.edu",
      color: "cyan"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Santo Domingo, República Dominicana",
      link: null,
      color: "orange"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 8:00 AM - 6:00 PM",
      link: null,
      color: "cyan"
    }
  ];

  const whatsappContacts = [
    {
      name: "Doris Villarreal",
      role: "Directora de Negocios y Operaciones",
      phone: "+18099379410"
    },
    {
      name: "Patricia Armas",
      role: "Directora Comercial",
      phone: "+18099379410"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-orange-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-orange-400">
                Comprometidos con tu éxito
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">futuro</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Nuestro equipo está listo para ayudarte a dar el siguiente paso en tu carrera profesional
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${item.color === 'orange' ? 'bg-orange-500/20' : 'bg-cyan-500/20'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color === 'orange' ? 'text-orange-400' : 'text-cyan-400'}`} />
                </div>
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">
                  {item.title}
                </h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-lg font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-white">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-3xl font-black text-white mb-2">Envíanos un mensaje</h2>
                <p className="text-gray-400 mb-8">Completa el formulario y te responderemos pronto</p>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 font-semibold">¡Mensaje enviado con éxito!</p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-colors"
                          placeholder="+1 809 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                          placeholder="Tu empresa"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Interés *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <select
                        name="interes"
                        value={formData.interes}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Selecciona una opción</option>
                        <option value="maestria" className="bg-slate-900">Maestría</option>
                        <option value="diplomado" className="bg-slate-900">Diplomado</option>
                        <option value="certificacion" className="bg-slate-900">Certificación</option>
                        <option value="incompany" className="bg-slate-900">Formación In-Company</option>
                        <option value="consultoria" className="bg-slate-900">Consultoría</option>
                        <option value="otro" className="bg-slate-900">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Contacts */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-black text-white mb-2">Contacto directo</h2>
                <p className="text-gray-400 mb-8">Escríbenos por WhatsApp para atención inmediata</p>
              </div>

              {/* Doris Villarreal */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-[1.02] transition-all duration-500">
                {/* Background Image con overlay */}
                <div className="relative h-96">
                  {/* Imagen de la persona como fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/doris"
                      alt="Doris Villarreal"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Overlay gradient mejorado - más suave */}
                  <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/60 to-slate-950/80"></div>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/100 via-slate-950/70 to-transparent"></div>
                  
                  {/* Overlay sólido en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-slate-950 to-transparent"></div>

                  {/* Logo pequeño */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      <span className="text-white font-black text-xl">EEG</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    {/* Nombre y cargo */}
                    <div className="mb-6">
                      <h3 className="text-5xl font-black text-white mb-2 leading-tight">
                        Doris<br/>Villarreal
                      </h3>
                      <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                      <p className="text-orange-400 font-bold text-sm uppercase tracking-wider">
                        Directora de Negocios y Operaciones
                      </p>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 text-sm mb-6 max-w-md leading-relaxed">
                      Especialista en estrategia empresarial con más de 15 años de experiencia en consultoría y desarrollo organizacional.
                    </p>

                    {/* WhatsApp Button */}
                    <a
                      href="https://api.whatsapp.com/send/?phone=18293202284&text=Contacto+Web+EEG+Saludos&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 w-fit"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="text-sm">+1 (829) 320-2284</span>
                    </a>

                    {/* Website/Email pequeño */}
                    <p className="text-gray-500 text-xs mt-4">
                      dvillarreal@eeg.edu
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/20 to-transparent rounded-tl-full"></div>
                </div>
              </div>

              {/* Patricia Armas */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group hover:scale-[1.02] transition-all duration-500">
                {/* Background Image con overlay */}
                <div className="relative h-96">
                  {/* Imagen de la persona como fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src="/patricia"
                      alt="Patricia Armas"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Overlay gradient mejorado - más suave */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-slate-950/80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/100 via-slate-950/70 to-transparent"></div>
                  
                  {/* Overlay sólido en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-950 to-transparent"></div>

                  {/* Logo pequeño */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                      <span className="text-white font-black text-xl">EEG</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    {/* Nombre y cargo */}
                    <div className="mb-6">
                      <h3 className="text-5xl font-black text-white mb-2 leading-tight">
                        Patricia<br/>Armas
                      </h3>
                      <div className="w-16 h-1 bg-cyan-500 mb-4"></div>
                      <p className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
                        Directora Comercial
                      </p>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 text-sm mb-6 max-w-md leading-relaxed">
                      Experta en desarrollo comercial y gestión de relaciones corporativas, enfocada en crear alianzas estratégicas de valor.
                    </p>

                    {/* WhatsApp Button */}
                    <a
                      href="https://api.whatsapp.com/send/?phone=18099311204&text=Contacto+Web+EEG+Saludos&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 w-fit"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span className="text-sm">+1 (809) 931-1204</span>
                    </a>

                    {/* Website/Email pequeño */}
                    <p className="text-gray-500 text-xs mt-4">
                      parmas@eeg.edu
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-tl-full"></div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Visítanos</h3>
                <div className="aspect-video bg-slate-800/50 rounded-xl flex items-center justify-center border border-white/10">
                  <MapPin className="w-12 h-12 text-gray-600" />
                </div>
                <p className="text-gray-400 mt-4 text-sm">
                  Santo Domingo, República Dominicana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}