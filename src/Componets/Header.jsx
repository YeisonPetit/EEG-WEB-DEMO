import React, { Component } from 'react';
import { LockKeyhole, Menu, X } from "lucide-react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ isMobileMenuOpen: !prevState.isMobileMenuOpen }));
  }

  render() {
    const { isMobileMenuOpen, scrolled } = this.state;

    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/20' 
          : 'bg-liniar-to-r from-slate-900 via-cyan-950/50 to-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center z-50">
              <a href="/"><img 
                src="/Logo-blanco.png" 
                alt="EEG Logo" 
                className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
              /></a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200 relative group">
                Quiénes Somos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              
              <a href="#" className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200 relative group">
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>

              <a href="#" className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200 relative group">
                Noticias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/Contacto" className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200 relative group">
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-sm font-medium text-white hover:text-orange-400 transition-colors duration-200 relative group">
                Ayuda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a href="https://campus.uceegerencia.eu/login/index.php" target="_blank" rel="noopener noreferrer" className="hidden xl:block">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg overflow-hidden hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
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
                <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Quiénes Somos
                </a>
                
                <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Servicios
                </a>

                <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Noticias
                </a>
                <a href="/Contacto" className="text-white hover:text-orange-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Contacto
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 px-4 rounded-lg hover:bg-white/5">
                  Ayuda
                </a>
                
                <a href="https://campus.uceegerencia.eu/login/index.php" target="_blank" rel="noopener noreferrer" className="mt-4">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2">
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