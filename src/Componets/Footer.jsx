import React from 'react';
import { 
  Facebook, Instagram, Youtube, MessageCircle, ChevronRight, 
  Sparkles, Mail, MapPin, Award, BookOpen, Briefcase, Users,
  Globe, GraduationCap, Building2, HelpCircle, ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sobreEEG = [
    { name: "Nuestra Historia", href: "/QuienesSomos", icon: Award },
    { name: "Misión y Visión", href: "#", icon: Sparkles },
    { name: "Acreditaciones", href: "#", icon: ShieldCheck },
    { name: "Alianzas Estratégicas", href: "#", icon: Globe },
    { name: "Facilitadores", href: "/Facilitadores", icon: Users }
  ];

  const programasAcademicos = [
    { name: "Maestrías", href: "#", icon: GraduationCap },
    { name: "Especialidades", href: "#", icon: Award },
    { name: "Diplomados", href: "#", icon: BookOpen },
    { name: "Certificaciones", href: "#", icon: ShieldCheck },
    { name: "Cursos Ejecutivos", href: "#", icon: Briefcase }
  ];

  const servicios = [
    { name: "Formación In-Company", href: "#", icon: Building2 },
    { name: "Consultoría Gerencial", href: "#", icon: Briefcase },
    { name: "Coaching Ejecutivo", href: "#", icon: Users },
    { name: "Universidad Corporativa", href: "#", icon: GraduationCap },
    { name: "Club de Negocios", href: "#", icon: Globe }
  ];

  const recursos = [
    { name: "Campus Virtual", href: "#" },
    { name: "Biblioteca Digital", href: "#" },
    { name: "Noticias y Blog", href: "#" },
    { name: "Eventos", href: "#" }
  ];

//   const soporte = [
//     { name: "Centro de Ayuda", href: "#" },
//     { name: "Preguntas Frecuentes", href: "#" },
//     { name: "Contacto", href: "#" },
//     { name: "Admisiones", href: "#" }
//   ];

  const legal = [
    { name: "FAQs", href: "/FAQs" },
    { name: "Política de Cookies", href: "/cookies" },
    { name: "Política de Privacidad", href: "/privacidad" }
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-orange-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top section with bold orange accent */}
        <div className="bg-linear-to-r from-orange-600 via-orange-500 to-orange-600 py-2">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Transformando líderes desde 1988</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Column 1 - Brand (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="mb-6">
                  <img 
                    src="/Logo-blanco.png" 
                    alt="EEG Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Formando líderes de excelencia que transforman organizaciones y sociedades en toda Latinoamérica.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="mailto:info@eeg.edu" 
                  className="group flex items-center gap-3 text-sm hover:text-orange-400 transition-colors"
                >
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-4 h-4 text-orange-400" />
                  </div>
                  <span>info@eeg.edu</span>
                </a>
                
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span>Santo Domingo, República Dominicana</span>
                </div>
              </div>
            </div>

            {/* Column 2 - Sobre EEG (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold tracking-wider text-orange-400 mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
                SOBRE EEG
              </h3>
              <nav className="space-y-2">
                {sobreEEG.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <ChevronRight className="w-4 h-4 text-orange-400/50 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3 - Programas (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-cyan-400 rounded-full"></div>
                PROGRAMAS
              </h3>
              <nav className="space-y-2">
                {programasAcademicos.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 4 - Servicios (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold tracking-wider text-orange-400 mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
                SERVICIOS
              </h3>
              <nav className="space-y-2">
                {servicios.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <ChevronRight className="w-4 h-4 text-orange-400/50 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 5 - Recursos y Soporte (3 cols) */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Recursos */}
                <div>
                  <h3 className="text-sm font-bold tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
                    <div className="w-1 h-4 bg-cyan-400 rounded-full"></div>
                    RECURSOS
                  </h3>
                  <nav className="space-y-2">
                    {recursos.map((item, index) => (
                      <a 
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Soporte */}
                {/* <div>
                  <h3 className="text-sm font-bold tracking-wider text-orange-400 mb-6 flex items-center gap-2">
                    <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
                    SOPORTE
                  </h3>
                  <nav className="space-y-2">
                    {soporte.map((item, index) => (
                      <a 
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2"
                      >
                        <ChevronRight className="w-4 h-4 text-orange-400/50 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 mr-4">Síguenos:</span>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-500/10"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/20 blur-xl transition-all duration-300"></div>
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:bg-pink-500/10"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                  <div className="absolute inset-0 rounded-xl bg-pink-500/0 group-hover:bg-pink-500/20 blur-xl transition-all duration-300"></div>
                </a>
                <a 
                  href="https://www.youtube.com/@escuelaeuropeadegerencia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-red-500/10"
                >
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  <div className="absolute inset-0 rounded-xl bg-red-500/0 group-hover:bg-red-500/20 blur-xl transition-all duration-300"></div>
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                {legal.map((item, index) => (
                  <React.Fragment key={index}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.name}
                    </a>
                    {index < legal.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400">
                  © {currentYear} <span className="text-white font-semibold">Escuela Europea de Gerencia</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}