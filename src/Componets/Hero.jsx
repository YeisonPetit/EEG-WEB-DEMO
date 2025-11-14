import React from 'react';
import { ArrowRight, Users, Globe, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-blue-950 to-slate-900">
        {/* Efectos visuales de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-400 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl">
          {/* Texto introductorio */}
          <div className="mb-6 animate-fadeIn">
            <p className="text-amber-400 text-sm tracking-[0.3em] font-semibold uppercase">
              EL LIDERAZGO DEL MAÑANA SE FORJA HOY
            </p>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
            Construye el legado que quieres dejar
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-amber-300 italic font-light mb-8 animate-fadeInUp delay-100">
            Lidera con propósito, impacta con excelencia
          </p>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl animate-fadeInUp delay-200">
            EEG es más que una escuela de negocios: es el ecosistema donde líderes visionarios se preparan para crear impacto real. Fusionamos estrategia, innovación y desarrollo humano para que tu liderazgo trascienda las fronteras del presente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fadeInUp delay-300">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              Explora nuestros programas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
              Solicita orientación
            </button>
          </div>

          {/* Credibilidad */}
          <div className="flex items-center gap-3 text-gray-400 animate-fadeInUp delay-400">
            <Users className="w-5 h-5 text-amber-400" />
            <p className="text-sm">
              Formando líderes de impacto desde hace más de 3 décadas
            </p>
          </div>

          {/* Stats decorativos */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl animate-fadeInUp delay-500">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-sm text-gray-400">Países</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-white">35+</p>
              <p className="text-sm text-gray-400">Años</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-white">15K+</p>
              <p className="text-sm text-gray-400">Graduados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}