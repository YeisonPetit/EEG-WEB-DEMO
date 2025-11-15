import React from 'react';
import Empresas from './Empresas.jsx';
import { 
  Award, Users, Globe, TrendingUp, BookOpen, Briefcase, 
  Target, Star, CheckCircle, ArrowRight, Quote, Zap,
  GraduationCap, Building2, Lightbulb, Heart
} from 'lucide-react';

export default function LandingSections() {
  // const stats = [
  //   { icon: GraduationCap, number: "15,000+", label: "Profesionales Formados" },
  //   { icon: Globe, number: "12+", label: "Países en Latinoamérica" },
  //   { icon: Award, number: "35+", label: "Años de Experiencia" },
  //   { icon: Star, number: "98%", label: "Satisfacción" }
  // ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Maestrías",
      description: "Programas de posgrado con validez internacional y enfoque práctico en gerencia moderna.",
      features: ["Online y presencial", "18-24 meses", "Doble titulación"]
    },
    {
      icon: Briefcase,
      title: "Formación Ejecutiva",
      description: "Capacitación in-company diseñada para las necesidades específicas de tu organización.",
      features: ["Metodología activa", "Facilitadores expertos", "ROI medible"]
    },
    {
      icon: Target,
      title: "Consultoría",
      description: "Asesoría estratégica para transformar tu empresa y alcanzar tus objetivos de negocio.",
      features: ["Diagnóstico 360°", "Plan de acción", "Acompañamiento"]
    },
    {
      icon: Lightbulb,
      title: "Certificaciones",
      description: "Programas especializados en áreas clave del management con reconocimiento global.",
      features: ["Certificación oficial", "Flexible", "Actualizado"]
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechCorp",
      image: "https://i.pravatar.cc/150?img=1",
      text: "EEG transformó mi visión de liderazgo. Los conocimientos que adquirí me permitieron llevar mi empresa al siguiente nivel."
    },
    {
      name: "Carlos Méndez",
      role: "Director de Operaciones",
      image: "https://i.pravatar.cc/150?img=3",
      text: "La calidad académica y el enfoque práctico de EEG son incomparables. Una inversión que cambió mi carrera."
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Proyectos",
      image: "https://i.pravatar.cc/150?img=5",
      text: "El networking y las conexiones que hice en EEG son invaluables. Ahora formo parte de una comunidad de líderes."
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Proyectos",
      image: "https://i.pravatar.cc/150?img=5",
      text: "El networking y las conexiones que hice en EEG son invaluables. Ahora formo parte de una comunidad de líderes."
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Proyectos",
      image: "https://i.pravatar.cc/150?img=5",
      text: "El networking y las conexiones que hice en EEG son invaluables. Ahora formo parte de una comunidad de líderes."
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Proyectos",
      image: "https://i.pravatar.cc/150?img=5",
      text: "El networking y las conexiones que hice en EEG son invaluables. Ahora formo parte de una comunidad de líderes."
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Metodología innovadora basada en casos reales" },
    { icon: CheckCircle, text: "Profesores con experiencia ejecutiva comprobada" },
    { icon: CheckCircle, text: "Red de contactos en toda Latinoamérica" },
    { icon: CheckCircle, text: "Flexibilidad para profesionales activos" },
    { icon: CheckCircle, text: "Certificaciones con validez internacional" },
    { icon: CheckCircle, text: "Seguimiento personalizado de tu desarrollo" }
  ];

  return (
    <div className="bg-slate-900">
      
      {/* Stats Section */}
      {/* <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 mb-4 group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Por qué EEG</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Más que una escuela de negocios
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Somos el ecosistema donde líderes visionarios se preparan para crear impacto real. 
              Durante más de 35 años, hemos formado a los profesionales que están transformando 
              empresas e industrias en toda Latinoamérica.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <benefit.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br overflow-hidden from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                <img 
                  src="/src/assets/FORMAL.png" 
                  alt="EEG Campus" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-2xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Nuestros Programas</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Transforma tu carrera
            </h2>
            <p className="text-xl text-gray-300">
              Programas diseñados para profesionales que buscan marcar la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors mb-6">
                  <program.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Heart className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Testimonios</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Historias de éxito
            </h2>
            <p className="text-xl text-gray-300">
              Conoce a algunos de los líderes que han transformado sus carreras con EEG
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                <Quote className="w-10 h-10 text-cyan-400/30 mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
      <Empresas />
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Únete a la comunidad de líderes que están transformando el futuro. 
              Tu historia de éxito comienza aquí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Agenda una asesoría</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
                Descargar brochure
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}