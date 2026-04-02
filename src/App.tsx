/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const trackBookingEvent = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('trackCustom', 'Agendar_Asesoria_Lezac');
    }
  };

  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");

          const counters = reveals[i].querySelectorAll('.counter');
          counters.forEach(counter => {
            if (!counter.classList.contains('counted')) {
              const target = +(counter.getAttribute('data-target') || 0);
              const isPlus = (counter as HTMLElement).innerText.includes('+');
              let count = 0;
              const speed = 2000 / target;

              const updateCount = () => {
                if (count < target) {
                  count++;
                  (counter as HTMLElement).innerText = (isPlus ? '+' : '') + count;
                  setTimeout(updateCount, speed);
                } else {
                  (counter as HTMLElement).innerText = (isPlus ? '+' : '') + target;
                  counter.classList.add('counted');
                }
              };
              updateCount();
            }
          });
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="bg-[#0A0A0F] text-slate-100 antialiased overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0F]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Lezac Consultoría" className="h-9 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a className="text-sm font-medium hover:text-violet-400 transition-colors text-slate-300" href="#analisis">Análisis</a>
            <a className="text-sm font-medium hover:text-violet-400 transition-colors text-slate-300" href="#perfil">Para Quién</a>
            <a className="text-sm font-medium hover:text-violet-400 transition-colors text-slate-300" href="#beneficios">Beneficios</a>
            <a
              href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackBookingEvent}
              className="bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 animate-pulse-subtle"
            >
              Agendar Asesoría
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-4 space-y-3">
              <a className="block text-sm font-medium text-slate-300 hover:text-violet-400 py-2" href="#analisis" onClick={() => setMobileMenuOpen(false)}>Análisis</a>
              <a className="block text-sm font-medium text-slate-300 hover:text-violet-400 py-2" href="#perfil" onClick={() => setMobileMenuOpen(false)}>Para Quién</a>
              <a className="block text-sm font-medium text-slate-300 hover:text-violet-400 py-2" href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
              <a
                href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackBookingEvent}
                className="block bg-gradient-to-r from-emerald-500 to-emerald-400 text-black px-5 py-3 rounded-lg text-sm font-bold text-center animate-pulse-subtle"
              >
                Agendar Asesoría Gratuita
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-10 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          {/* Urgency Badge */}
          <div className="reveal active mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider">Solo 10 cupos gratuitos por mes</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="reveal active text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 text-white font-display">
            ¿Tu empresa podría vender más…<br className="hidden sm:block" /> pero no sabes dónde está el problema?
          </h1>

          {/* Subheadline */}
          <p className="reveal active text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Descubre en <span className="text-emerald-400 font-semibold">45 minutos</span> cómo optimizar tu gestión comercial con datos reales.
          </p>

          {/* Video Container */}
          <div className="reveal active mb-8">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-white/10 shadow-2xl shadow-violet-500/5 max-w-4xl mx-auto group cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                className="block w-full aspect-video"
                controls
                playsInline
                autoPlay
                muted
                loop
                poster="/video-poster.jpg"
                src="/vsl-2026.mp4"
              >
                Tu navegador no soporta el formato de video.
              </video>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 flex items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span className="text-white text-xs font-bold uppercase tracking-wider">Hacer clic para escuchar</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="reveal active mb-6">
            <a
              href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackBookingEvent}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] shadow-xl shadow-emerald-500/30 animate-pulse-subtle"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar asesoría gratuita
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal active flex flex-wrap justify-center gap-6 mb-8">
            {['Asesoría de 45 min', '100% personalizada', 'Sin compromiso'].map((text, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {text}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="reveal animate-bounce opacity-50">
            <svg className="w-6 h-6 mx-auto text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-violet-950/30 to-emerald-950/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center reveal">
            <div className="bg-white/5 backdrop-blur-sm px-10 py-6 rounded-2xl border border-white/10 flex items-center gap-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white counter" data-target="100">+0</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Empresas asesoradas</p>
              </div>
              <div className="h-10 w-px bg-white/10"></div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white counter" data-target="11">0</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Años de experiencia</p>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
              <div className="text-center hidden sm:block">
                <p className="text-3xl md:text-4xl font-bold text-emerald-400">5</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">Países</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-6 text-center reveal">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Empresas que confían en nosotros</span>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-12 py-2">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                {['Bacardi', 'Distribuidora Gloria', 'Codisa', 'Indega', 'Pluscar', 'McCain', 'Vaca Fría', 'Iglú', 'Madersa', 'Transporte Bogdan', 'Comercial Baci', 'Vitalcan', 'Proquim', 'Weilen'].map((name, i) => (
                  <span key={i} className="text-base font-bold text-slate-600 uppercase tracking-wider font-display hover:text-violet-400 transition-colors">{name}</span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Grid - Mejorado */}
      <section className="py-20" id="analisis">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 011 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 014 18v-5H0a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Metodología
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Qué vamos a analizar en tu negocio</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Un diagnóstico completo basado en datos reales para detectar oportunidades ocultas.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📈', title: 'Optimización del portafolio', desc: 'Analizamos cada producto para detectar oportunidades de rentabilidad y eliminar ineficiencias.', gradient: 'from-violet-500/20 to-violet-600/5' },
              { icon: '🗺️', title: 'Rutas comerciales', desc: 'Diseñamos rutas más eficientes para maximizar el tiempo de ventas y mejorar cobertura.', gradient: 'from-emerald-500/20 to-emerald-600/5' },
              { icon: '👥', title: 'Base de clientes', desc: 'Estrategias para captar clientes de alto valor y potenciar el LTV de los actuales.', gradient: 'from-blue-500/20 to-blue-600/5' },
              { icon: '📊', title: 'Inteligencia comercial', desc: 'Diagnóstico completo basado en datos reales, no en suposiciones.', gradient: 'from-amber-500/20 to-amber-600/5' },
              { icon: '🎯', title: 'Indicadores clave', desc: 'Definición de KPIs comerciales críticos para decisiones en tiempo real.', gradient: 'from-rose-500/20 to-rose-600/5' },
              { icon: '🤖', title: 'Automatización comercial', desc: 'Optimización de CRM y agentes automatizados para escalar tu fuerza de ventas.', gradient: 'from-cyan-500/20 to-cyan-600/5' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal stagger-${(i % 3) + 1} group relative overflow-hidden bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-5 text-3xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="py-20 bg-gradient-to-b from-violet-950/10 to-transparent" id="perfil">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              Perfil ideal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Para quién es esta asesoría</h2>
            <p className="text-slate-400">Si te identificas con alguno de estos perfiles, podemos ayudarte.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '👔', title: 'Dueños de empresas B2B', desc: 'Visión estratégica para profesionalizar la gestión comercial.', color: 'violet' },
              { icon: '📊', title: 'Gerentes comerciales', desc: 'Optimización del equipo de ventas y análisis de resultados.', color: 'emerald' },
              { icon: '🏢', title: 'Distribuidoras y mayoristas', desc: 'Operaciones complejas que requieren eficiencia logística.', color: 'violet' },
              { icon: '📈', title: 'Organizaciones Data-Driven', desc: 'Decisiones comerciales basadas en datos, no intuición.', color: 'emerald' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal stagger-${(i % 3) + 1} group flex items-start gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-${item.color}-500/30 hover:bg-white/[0.04] transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-xl flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20" id="beneficios">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.642.174 1.265.406 1.833.27.72.66 1.383 1.152 1.964a3.066 3.066 0 01.723 1.745v.938a3.066 3.066 0 01-.723 1.745 6.847 6.847 0 00-1.152 1.964c-.232.568-.355 1.19-.406 1.833a3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 6.847 6.847 0 00-.406-1.833 6.847 6.847 0 00-1.152-1.964 3.066 3.066 0 01-.723-1.745v-.938c0-.642.174-1.265.406-1.833.27-.72.66-1.383 1.152-1.964a3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm4.822 3.017a1 1 0 00-1.414-.041L8.293 8.293a1 1 0 001.414 1.414l2.382-2.382a1 1 0 00.041-1.414z" clipRule="evenodd" />
              </svg>
              Entregables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Lo que descubrirás en la asesoría</h2>
          </div>

          <div className="space-y-3">
            {[
              { icon: '🗺️', text: 'Mapa de oportunidades de crecimiento', color: 'violet' },
              { icon: '🔍', text: 'Detección de puntos de fuga de ingresos', color: 'emerald' },
              { icon: '🎯', text: 'Refinamiento del Ideal Customer Profile', color: 'violet' },
              { icon: '📦', text: 'Optimización estratégica de portafolio', color: 'emerald' },
              { icon: '✅', text: 'Hoja de ruta con acciones inmediatas', color: 'violet' },
            ].map((item, i) => (
              <div
                key={i}
                className={`reveal stagger-${(i % 3) + 1} group flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-${item.color}-500/30 transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-medium text-white text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal">
            <p className="text-xs text-slate-500 font-medium bg-white/[0.02] inline-block px-4 py-2 rounded-full">
              Sesión ejecutiva de 45 minutos gestionada por consultores senior.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial - Movido aquí */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-emerald-500/20 border border-white/10 mb-8">
            <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.459L23.998 2c-5.294.585-9.1 4.263-9.1 9.959V21h-.81zM.018 21v-7.391c0-5.704 3.731-9.57 8.983-10.459L9.998 2C4.704 2.585.9 6.263.9 11.959V21h-.882z"/>
            </svg>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
            "Lezac transformó nuestra visión comercial. En una sola sesión identificamos oportunidades de rentabilidad que no habíamos visto en años."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">JM</span>
            </div>
            <p className="text-white font-bold uppercase tracking-wider text-sm">Juan Martínez</p>
            <p className="text-slate-400 text-sm">CEO, Madersa Materiales</p>
          </div>
        </div>
      </section>

      {/* Presencia */}
      <section className="py-12 border-y border-white/5 bg-gradient-to-r from-emerald-950/10 via-violet-950/10 to-emerald-950/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-6 reveal">Presencia estratégica en Latinoamérica</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 reveal">
            {['🇦🇷 ARGENTINA', '🇵🇾 PARAGUAY', '🇧🇴 BOLIVIA', '🇺🇾 URUGUAY', '🇨🇴 COLOMBIA'].map((country, i) => (
              <span key={i} className="text-sm font-bold text-slate-400 hover:text-white transition-colors cursor-default">{country}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-700 to-emerald-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solo 10 asesorías gratuitas por mes</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Garantizamos calidad y profundidad en cada análisis. Los cupos son estrictamente limitados.
          </p>
          <a
            href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBookingEvent}
            className="inline-block bg-white text-violet-700 hover:bg-slate-100 px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl transform hover:scale-[1.02]"
          >
            Reservar mi lugar ahora
          </a>
          <a
            className="block mt-4 text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
            href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackBookingEvent}
          >
            Ver disponibilidad →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white reveal">Preguntas Frecuentes</h2>

          <div className="space-y-3">
            {[
              { q: '¿Por qué ofrecen esta asesoría de forma gratuita?', a: 'Porque creemos en demostrar valor antes de pedir cualquier compromiso. Es nuestra mejor carta de presentación y nos permite identificar si somos el aliado adecuado para tu crecimiento.' },
              { q: '¿Qué incluye la sesión de 45 minutos?', a: 'Un diagnóstico rápido de tu estructura comercial actual, identificación de cuellos de botella y al menos 3 recomendaciones accionables que puedes aplicar de inmediato.' },
              { q: '¿Qué problemas resuelven?', a: 'Estancamiento de ventas, baja rentabilidad del portafolio, equipos de venta poco productivos, falta de visibilidad de datos y procesos comerciales manuales obsoletos.' },
              { q: '¿Qué sucede después de la asesoría?', a: 'Te llevarás el diagnóstico. Si vemos que hay un "fit" mutuo, podremos discutir cómo una colaboración a largo plazo aceleraría tus resultados, pero no hay ninguna obligación.' },
            ].map((faq, i) => (
              <details
                key={i}
                className={`group bg-white/[0.02] rounded-xl border border-white/5 hover:border-violet-500/20 transition-colors reveal stagger-${(i % 3) + 1}`}
                open={i === 0}
              >
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none">
                  <span className="font-semibold text-white">{faq.q}</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">Agenda tu asesoría estratégica gratuita</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Mejora tu gestión comercial con un análisis profundo. Reservas gestionadas vía Calendly.
          </p>
          <div className="flex flex-col items-center gap-5">
            <a
              href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackBookingEvent}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black px-12 py-5 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-emerald-500/30 transform hover:scale-[1.02] animate-pulse-subtle"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar asesoría ahora
            </a>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              {['Disponibilidad limitada', 'Sin compromiso', '100% gratuito'].map((text, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 bg-[#050508]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Lezac Consultoría" className="h-7 w-auto opacity-70" />
          </div>
          <p className="font-medium text-xs text-slate-500">© 2024 Lezac Consultoría. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="text-xs font-semibold text-slate-500 hover:text-violet-400 transition-colors uppercase tracking-wider" href="#">Privacidad</a>
            <a className="text-xs font-semibold text-slate-500 hover:text-violet-400 transition-colors uppercase tracking-wider" href="#">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}