import React, { Component } from 'react';
import { LockKeyhole, Menu, X, ChevronDown } from "lucide-react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isServicesOpen: false,
      isMobileMenuOpen: false,
      scrolled: false
    };
    this.servicesRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.servicesRef.current && !this.servicesRef.current.contains(event.target)) {
      this.setState({ isServicesOpen: false });
    }
  }

  toggleServices = () => {
    this.setState(prevState => ({ isServicesOpen: !prevState.isServicesOpen }));
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
  }

  render() {
    const { isServicesOpen, isMobileMenuOpen, scrolled } = this.state;

    const services = [
      { name: "Programas de Postgrado", desc: "Maestrías y especializaciones" },
      { name: "Formación Empresarial", desc: "Capacitación in-company" },
      { name: "Consultoría Gerencial", desc: "Asesoría estratégica" },
      { name: "Liderazgo Ejecutivo", desc: "Desarrollo directivo" },
      { name: "Certificaciones", desc: "Validez internacional" }
    ];

    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20' 
          : 'bg-gradient-to-r from-slate-900/80 via-blue-950/80 to-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center z-50">
              <img 
                src="/public/HD-LOGO-COLOR.png" 
                alt="EEG Logo" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 relative group">
                Somos EEG
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              {/* Services Dropdown */}
              <div className="relative" ref={this.servicesRef}>
                <button 
                  onClick={this.toggleServices}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <span>Servicios</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {/* Dropdown Menu - Simplificado */}
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-80 animate-fadeInUp">
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rotate-45 border-l border-t border-cyan-500/20"></div>
                    
                    <div className="relative bg-slate-800/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden">
                      {/* Header del dropdown */}
                      <div className="px-6 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20">
                        <h3 className="text-sm font-bold text-cyan-400">Nuestros Servicios</h3>
                      </div>

                      {/* Lista de servicios */}
                      <div className="p-3">
                        {services.map((service, index) => (
                          <a 
                            key={index}
                            href="#" 
                            className="block px-4 py-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-400 mt-0.5 group-hover:text-cyan-300 transition-colors">
                              {service.desc}
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Footer del dropdown */}
                      <div className="px-4 py-3 bg-slate-900/50 border-t border-cyan-500/10">
                        <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center gap-2 transition-colors">
                          Ver todos los programas →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 relative group">
                Noticias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors duration-200 relative group">
                Ayuda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a href="https://campus.uceegerencia.eu/login/index.php" target="_blank" rel="noopener noreferrer" className="hidden xl:block">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    <LockKeyhole className="w-4 h-4" />
                    <span>Acceso Campus</span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={this.toggleMobileMenu}
                className="xl:hidden p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="xl:hidden border-t border-white/10 py-4 animate-fadeInUp">
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-white hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Somos EEG
                </a>
                
                <div>
                  <button 
                    onClick={this.toggleServices}
                    className="w-full text-left text-white hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5 flex items-center justify-between"
                  >
                    <span>Servicios</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {services.map((service, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="block py-2 px-4 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#" className="text-white hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Noticias
                </a>
                <a href="#" className="text-white hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Contacto
                </a>
                <a href="#" className="text-white hover:text-cyan-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Ayuda
                </a>
                
                <a href="https://campus.uceegerencia.eu/login/index.php" target="_blank" rel="noopener noreferrer" className="mt-4">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                    <LockKeyhole className="w-4 h-4" />
                    <span>Acceso Campus</span>
                  </button>
                </a>
              </nav>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.3s ease-out;
          }
        `}</style>
      </header>
    );
  }
}