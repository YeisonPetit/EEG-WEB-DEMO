import React from 'react';
import { 
  Phone, Facebook, Instagram, Youtube, MessageCircle, ChevronRight, 
  Sparkles, Mail, MapPin, Award
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mapaSitio = [
    { name: "Sobre la Escuela", href: "#", icon: Award },
    { name: "Oferta Académica", href: "#", icon: Sparkles },
    { name: "Servicios In Company", href: "#", icon: Sparkles },
    { name: "Club de Negocios", href: "#", icon: Sparkles },
    { name: "Universidad Corporativa", href: "#", icon: Sparkles },
    { name: "FAQs", href: "#", icon: Sparkles },
    { name: "Política de Cookies", href: "#", icon: Sparkles },
    { name: "Política de Privacidad", href: "#", icon: Sparkles }
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-cyan-600/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
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
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-2">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Transformando líderes desde 1988</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Column 1 - Brand & Contact */}
            <div className="space-y-8">
              {/* Logo/Brand */}
              <div>
                <div className="mb-6">
                  <img 
                    src="/Logo-blanco.png" 
                    alt="EEG Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Formando líderes de excelencia que transforman organizaciones y sociedades.
                </p>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-gray-400">TELÉFONO</h3>
                </div>
                <a 
                  href="tel:+18099379410" 
                  className="text-2xl font-black text-white hover:text-orange-400 transition-colors block ml-13"
                >
                  +1-809-937-9410
                </a>
              </div>

              {/* Email (opcional) */}
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-gray-400">EMAIL</h3>
                </div>
                <a 
                  href="mailto:info@eeg.edu" 
                  className="text-lg text-white hover:text-cyan-400 transition-colors block ml-13"
                >
                  info@eeg.edu
                </a>
              </div>
            </div>

            {/* Column 2 - WhatsApp Contacts */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-sm font-bold tracking-wider text-gray-400">WHATSAPP</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Contact 1 */}
                  <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:bg-white/10">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Directora de Negocios y Operaciones</p>
                    <a 
                      href="https://wa.me/18099379410" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors flex items-center gap-2"
                    >
                      Doris Villarreal
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Contact 2 */}
                  <div className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Directora Comercial</p>
                    <a 
                      href="https://wa.me/18099379410" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      Patricia Armas
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Sitemap */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-sm font-bold tracking-wider text-gray-400">MAPA | CONTENIDO</h3>
              </div>
              
              <nav className="grid grid-cols-1 gap-2">
                {mapaSitio.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors flex-1">
                      {item.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Social Media Bar */}
          <div className="mt-20 pt-12 border-t border-white/10">
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
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-red-500/10"
                >
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  <div className="absolute inset-0 rounded-xl bg-red-500/0 group-hover:bg-red-500/20 blur-xl transition-all duration-300"></div>
                </a>
                <a 
                  href="https://wa.me/18099379410" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:bg-green-500/10"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  <div className="absolute inset-0 rounded-xl bg-green-500/0 group-hover:bg-green-500/20 blur-xl transition-all duration-300"></div>
                </a>
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