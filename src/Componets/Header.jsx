import React, { Component } from 'react'
import { LockKeyhole } from "lucide-react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopoverOpen: false
    };
    this.popoverRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.popoverRef.current && !this.popoverRef.current.contains(event.target)) {
      this.setState({ isPopoverOpen: false });
    }
  }

  togglePopover = () => {
    this.setState(prevState => ({ isPopoverOpen: !prevState.isPopoverOpen }));
  }

  render() {
    const { isPopoverOpen } = this.state;

    return (
      <div className="bg-gradient-to-br from-amber-900 bg-white/30 backdrop-blur-sm via-blue-950 to-slate-900 border-none text-white p-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/HD LOGO COLOR.png" alt="Logo" className="h-12 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-8 gap-7">
            <li><a href="#" className="hover:text-gray-200 text-xl">Somos EEG</a></li>
            <li>
              <div className="relative" ref={this.popoverRef}>
                <button 
                  onClick={this.togglePopover}
                  className="inline-flex items-center gap-x-1 text-xl font-semibold text-white hover:text-gray-200"
                >
                  <span>Servicios</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-5 transition-transform ${isPopoverOpen ? 'rotate-180' : ''}`}>
                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                </button>

                {isPopoverOpen && (
                  <div className="absolute top-full left-0 mt-2 z-50 transition-all duration-200 ease-out">
                    <div className="w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 text-sm shadow-lg ring-1 ring-white/10">
                      <div className="p-4">
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white">
                              <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <a href="#" className="font-semibold text-white">
                              Programas de Postgrado
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-400">Maestrías y especializaciones de alto nivel</p>
                          </div>
                        </div>
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white">
                              <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <a href="#" className="font-semibold text-white">
                              Formación Empresarial
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-400">Capacitación in-company para tu organización</p>
                          </div>
                        </div>
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white">
                              <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <a href="#" className="font-semibold text-white">
                              Consultoría Gerencial
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-400">Asesoría estratégica para tu negocio</p>
                          </div>
                        </div>
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white">
                              <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <a href="#" className="font-semibold text-white">
                              Liderazgo Ejecutivo
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-400">Desarrollo de habilidades directivas</p>
                          </div>
                        </div>
                        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white">
                              <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <a href="#" className="font-semibold text-white">
                              Certificaciones
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-400">Programas especializados con validez internacional</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700/50">
                          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-gray-500">
                            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" clipRule="evenodd" fillRule="evenodd" />
                            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                          Ver programas
                        </a>
                        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700/50">
                          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 flex-none text-gray-500">
                            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                          </svg>
                          Contactar
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li><a href="#" className="hover:text-gray-200 text-xl">Noticias</a></li>
            <li><a href="#" className="hover:text-gray-200 text-xl">Contacto</a></li>
          </ul>
        </nav>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 flex space-x-2 rounded">
          <LockKeyhole /> <span>Acceso</span>
        </button>
      </div>
    )
  }
}