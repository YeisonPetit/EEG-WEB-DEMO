import React, { useState } from "react";
import {
  Briefcase,
  Users,
  GraduationCap,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  Brain,
  Rocket,
  Building2,
  UserCheck,
  BarChart,
  MessageSquare,
  ChevronRight,
  Star,
  Globe,
} from "lucide-react";

export default function ServiciosEEG() {
  const [selectedService, setSelectedService] = useState(0);

  const mainServices = [
    {
      icon: GraduationCap,
      title: "Programas de Formación",
      subtitle: "Desarrollo profesional continuo",
      color: "orange",
      description:
        "Diplomados, maestrías y programas de actualización profesional diseñados para impulsar tu carrera.",
      features: [
        "Diplomados certificados",
        "Maestrías propias y en alianza",
        "Programas ejecutivos",
        "Certificaciones internacionales",
      ],
      stats: { number: "+42", label: "Programas" },
    },
    {
      icon: Building2,
      title: "Servicios In Company",
      subtitle: "Soluciones personalizadas",
      color: "cyan",
      description:
        "Capacitación, coaching y consultoría diseñados específicamente para las necesidades de tu organización.",
      features: [
        "Diagnóstico organizacional",
        "Capacitación personalizada",
        "Coaching ejecutivo",
        "Consultoría estratégica",
      ],
      stats: { number: "+480", label: "Empresas" },
    },
    {
      icon: Brain,
      title: "Metodología MATROP®",
      subtitle: "Transformación real",
      color: "orange",
      description:
        "Metodología dinámica enfocada en generar cambios conductuales y resultados medibles.",
      features: [
        "Enfoque en resultados",
        "Cambio conductual",
        "Estilos de aprendizaje",
        "Contexto empresarial",
      ],
      stats: { number: "100%", label: "Práctico" },
    },
    {
      icon: Target,
      title: "Consultoría Estratégica",
      subtitle: "Soluciones integrales",
      color: "cyan",
      description:
        "Acompañamiento experto para alcanzar tus objetivos organizacionales con soluciones holísticas.",
      features: [
        "Análisis estratégico",
        "Plan de acción",
        "Implementación",
        "Seguimiento y mejora",
      ],
      stats: { number: "23+", label: "Años" },
    },
  ];

  const servicioDetallado = [
    {
      category: "Capacitación",
      icon: BookOpen,
      services: [
        {
          name: "Liderazgo y Gestión",
          description: "Desarrolla habilidades de liderazgo efectivo",
          duration: "3-6 meses",
        },
        {
          name: "Ventas y Negociación",
          description: "Técnicas avanzadas de ventas consultivas",
          duration: "2-4 meses",
        },
        {
          name: "Servicio al Cliente",
          description: "Excelencia en la experiencia del cliente",
          duration: "1-3 meses",
        },
      ],
    },
    {
      category: "Coaching",
      icon: UserCheck,
      services: [
        {
          name: "Coaching Ejecutivo",
          description: "Acompañamiento personalizado para líderes",
          duration: "6-12 sesiones",
        },
        {
          name: "Coaching de Equipos",
          description: "Fortalecimiento de dinámicas grupales",
          duration: "8-16 sesiones",
        },
        {
          name: "Coaching de Carrera",
          description: "Desarrollo profesional estratégico",
          duration: "4-8 sesiones",
        },
      ],
    },
    {
      category: "Consultoría",
      icon: BarChart,
      services: [
        {
          name: "Transformación Digital",
          description: "Digitalización de procesos empresariales",
          duration: "Proyecto",
        },
        {
          name: "Gestión del Cambio",
          description: "Implementación efectiva de cambios",
          duration: "Proyecto",
        },
        {
          name: "Clima Organizacional",
          description: "Diagnóstico y mejora del ambiente laboral",
          duration: "Proyecto",
        },
      ],
    },
  ];

  const beneficios = [
    {
      icon: Award,
      title: "Certificación ISO 21001",
      description: "Calidad garantizada en educación",
    },
    {
      icon: Globe,
      title: "Presencia Internacional",
      description: "7 países en Iberoamérica",
    },
    {
      icon: Users,
      title: "+8,600 Egresados",
      description: "Profesionales transformados",
    },
    {
      icon: Rocket,
      title: "Metodología Única",
      description: "MATROP® probado y efectivo",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,var(--tw-linear-stops))] from-orange-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-linear-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-linear-to-r from-orange-500/20 to-cyan-500/20 rounded-full border border-orange-500/30 text-orange-300 text-sm font-bold uppercase tracking-wider">
                Nuestros Servicios
              </span>
            </div>
            <h1 className="text-3xl md:text-7xl font-black text-white mb-6 leading-tight">
              Soluciones que
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-900 via-blue-400 to-cyan-500 animate-linear">
                transforman
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Diseñamos experiencias de aprendizaje que generan resultados
              reales y cambios duraderos en personas y organizaciones
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales - Cards Interactivas */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-linear-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedService(index)}
                >
                  {/* Icono */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${
                      service.color === "orange"
                        ? "from-orange-500/20 to-orange-600/10"
                        : "from-cyan-500/20 to-cyan-600/10"
                    } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        service.color === "orange"
                          ? "text-orange-400"
                          : "text-cyan-400"
                      }`}
                    />
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                    <span className="text-3xl font-black text-white">
                      {service.stats.number}
                    </span>
                    <span className="text-xs text-gray-400 uppercase">
                      {service.stats.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-linear-to-b from-slate-950 to-blue-950/50">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="bg-linear-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* CONTENIDO */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${
                  mainServices[selectedService].color === "orange"
                    ? "from-orange-500/20 to-orange-600/10"
                    : "from-cyan-500/20 to-cyan-600/10"
                } flex items-center justify-center`}
              >
                {React.createElement(mainServices[selectedService].icon, {
                  className: `w-8 h-8 md:w-10 md:h-10 ${
                    mainServices[selectedService].color === "orange"
                      ? "text-orange-400"
                      : "text-cyan-400"
                  }`,
                })}
              </div>

              <div>
                <h2 className="text-2xl md:text-4xl font-black text-white">
                  {mainServices[selectedService].title}
                </h2>
                <p className="text-cyan-400 text-sm md:text-base">
                  {mainServices[selectedService].subtitle}
                </p>
              </div>
            </div>

            <p className="text-base md:text-xl text-gray-300 mb-6 leading-relaxed">
              {mainServices[selectedService].description}
            </p>

            {/* FEATURES */}
            <div className="space-y-3">
              {mainServices[selectedService].features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-orange-500 to-cyan-500 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SELECTOR DE SERVICIOS */}
          <div className="space-y-3">
            {mainServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 ${
                  selectedService === index
                    ? "bg-linear-to-r from-orange-500/20 to-cyan-500/20 border border-orange-500/50"
                    : "bg-slate-800/30 border border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <service.icon
                      className={`w-6 h-6 ${
                        selectedService === index
                          ? "text-orange-400"
                          : "text-gray-400"
                      }`}
                    />
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">
                        {service.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      selectedService === index
                        ? "text-orange-400"
                        : "text-gray-600"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* Servicios Detallados por Categoría */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">
              Explora nuestro
              <span className="block text-transparent bg-linear-to-r from-orange-400 to-cyan-400 bg-clip-text">
                portafolio completo
              </span>
            </h2>

            <div className="space-y-12">
              {servicioDetallado.map((categoria, catIndex) => (
                <div key={catIndex}>
                  {/* Header de categoría */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center">
                      <categoria.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {categoria.category}
                    </h3>
                  </div>

                  {/* Grid de servicios */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {categoria.services.map((servicio, servIndex) => (
                      <div
                        key={servIndex}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <Star className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full">
                            {servicio.duration}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                          {servicio.name}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {servicio.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-white text-center mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              Calidad, experiencia e innovación en cada servicio
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <beneficio.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {beneficio.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {beneficio.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl p-12 border border-orange-500/20 text-center">
              <Sparkles className="w-12 h-12 text-orange-400 mx-auto mb-6" />
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                ¿Listo para transformar tu organización?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Conversemos sobre cómo nuestros servicios pueden impulsar tu
                crecimiento
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Solicitar información
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a
                  href="/programas"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-800/50 text-white font-bold rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Ver programas
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
