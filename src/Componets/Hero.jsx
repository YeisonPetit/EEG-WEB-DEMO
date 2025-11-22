import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Globe, Award, Sparkles, Zap, Play } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const [particles] = useState(() => {
    return Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 10}s`,
      size: Math.random() * 3 + 1
    }));
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Parallax Image Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-transparent to-blue-950/90"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950"></div>

        {/* Parallax orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full filter blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #06b6d4, transparent)',
            left: `${-100 + mousePosition.x * 0.03}px`,
            top: `${-100 + mousePosition.y * 0.03}px`,
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full filter blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, #3b82f6, transparent)',
            right: `${-100 + mousePosition.x * 0.02}px`,
            bottom: `${-100 + mousePosition.y * 0.02}px`,
          }}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `perspective(500px) rotateX(60deg) scale(2) translateY(-50%)`
        }} />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400 animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
                opacity: 0.6
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Intro Badge with animation */}
            <div className="animate-fadeIn mt-5">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <Sparkles className="w-5 h-5 text-orange-700 animate-pulse" />
                <span className="text-[10px] md:text-sm font-bold tracking-wider uppercase bg-linear-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Next Level Leadership
                </span>
                <Zap className="w-5 h-5 text-orange-700 animate-pulse" />
              </div>
            </div>

            {/* Main Title with stagger animation */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-8xl font-black leading-none animate-slideUp">
                <span className="text-white">Lidera la</span>
              </h1>
              <h1 className="text-5xl md:text-8xl font-black leading-none animate-slideUp" style={{ animationDelay: '0.1s' }}>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-900 via-blue-400 to-cyan-500 animate-gradient">
                  revolución
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-black leading-none animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <span className="text-white">del mañana</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Formaciónes para líderes que no tienen miedo de 
              <span className="text-cyan-400 font-semibold"> redefinir las reglas del juego</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a href='/Servicios' className="group cursor-pointer relative px-5 py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Transforma tu carrera
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <button className="group cursor-pointer px-8 py-5 bg-white/5 backdrop-blur-xl text-white font-bold rounded-2xl border-2 border-cyan-500/30 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 hover:scale-110 transition-transform cursor-pointer"
                  />
                ))}
              </div>
              <div>
                <p className="text-cyan-400 font-bold text-sm">+8.600 líderes</p>
                <p className="text-gray-400 text-xs">ya transformaron su futuro</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image with 3D effect */}
          <div className="relative lg:block hidden animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
            {/* Main image container with 3D tilt */}
            <div className="relative group">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/meet.jpg"
                  alt="Leadership Team"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/30 via-transparent to-blue-500/30 mix-blend-overlay"></div>
                
                {/* Floating stats cards */}
                <div className="absolute top-8 -left-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-xl transform hover:scale-110 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">7+</p>
                      <p className="text-xs text-gray-400">Países</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 -right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-xl transform hover:scale-110 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">23+</p>
                      <p className="text-xs text-gray-400">Años</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 shadow-xl transform hover:scale-110 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white">+8,6k</p>
                      <p className="text-xs text-gray-400">Graduados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% { 
            transform: translate(10px, -20px) scale(1.1);
            opacity: 0.8;
          }
          50% { 
            transform: translate(-10px, -10px) scale(0.9);
            opacity: 0.4;
          }
          75% { 
            transform: translate(5px, -15px) scale(1.05);
            opacity: 0.7;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}