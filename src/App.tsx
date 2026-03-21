/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';

export default function App() {
  const trackBookingEvent = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('trackCustom', 'Agendar_Asesoria_Lezac');
    }
  };

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          
          // Trigger counter if this section contains one
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
    // Initial call
    reveal();
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="bg-background-dark text-slate-100 antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Lezac Consultoría" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#analisis">Análisis</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#perfil">Para Quién</a>
            <a className="text-sm font-medium hover:text-primary transition-colors text-slate-300" href="#beneficios">Beneficios</a>
            <a href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03" target="_blank" rel="noopener noreferrer" onClick={trackBookingEvent} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 inline-block">
              Agendar Asesoría
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative pt-6 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="relative z-10 reveal active mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-accent-red animate-pulse"></span>
              <span className="text-accent-red text-xs font-bold uppercase tracking-wider">Solo 10 cupos gratuitos por mes</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-[1.1] mb-4 text-white font-display">
              ¿Tu empresa podría vender más… pero no sabes dónde está el problema?
            </h1>
            <p className="text-xl text-slate-400 mb-2 mx-auto max-w-2xl">
              Descubre en 45 minutos cómo optimizar tu gestión comercial con datos reales.
            </p>
            <p className="text-primary font-bold text-sm tracking-wide">
              Más de 100 empresas asesoradas en Latinoamérica.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative rounded-2xl overflow-hidden glass-card group video-glow reveal active stagger-2 shadow-2xl inline-block bg-transparent mx-auto">
              <video 
                className="block h-auto max-h-[50vh] w-auto max-w-full mx-auto" 
                controls 
                autoPlay={false}
                src="/vsl-2026.mp4"
              >
                Tu navegador no soporta el formato de video.
              </video>
            </div>
            
            <div className="flex flex-col items-center gap-6 w-full max-w-xl">
              <div className="reveal stagger-3 w-full">
                 <a href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03" target="_blank" rel="noopener noreferrer" onClick={trackBookingEvent} className="w-full bg-primary hover:bg-primary/80 text-white px-8 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-[1.05] btn-glow animate-pulse-glow inline-block text-center shadow-2xl shadow-primary/30">
                  Agendar asesoría gratuita
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 reveal stagger-4">
                <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="material-symbols-outlined text-accent-green text-sm">check_circle</span>
                  Asesoría de 45 min
                </span>
                <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="material-symbols-outlined text-accent-green text-sm">check_circle</span>
                  100% personalizada
                </span>
                <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="material-symbols-outlined text-accent-green text-sm">check_circle</span>
                  Sin compromiso
                </span>
              </div>
            </div>

            <div className="reveal stagger-5 bg-white/[0.03] border border-white/5 rounded-2xl p-6 w-full max-w-2xl mt-4">
              <p className="text-xs font-bold text-primary mb-4 uppercase tracking-widest text-center">En este video descubrirás:</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-fit mx-auto">
                <li className="flex items-start gap-2 text-sm text-slate-400 list-none">
                  <span className="text-primary mt-0.5 text-lg leading-none">•</span>
                  <span>Cómo detectamos fugas de ingresos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400 list-none">
                  <span className="text-primary mt-0.5 text-lg leading-none">•</span>
                  <span>El método para optimizar portafolio</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400 list-none">
                  <span className="text-primary mt-0.5 text-lg leading-none">•</span>
                  <span>Qué esperar de tu sesión estratégica</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400 list-none">
                  <span className="text-primary mt-0.5 text-lg leading-none">•</span>
                  <span>Casos de éxito reales aplicados</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero / Social Proof Stats */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center reveal">
            <div className="bg-white/[0.02] px-10 py-5 rounded-full border border-white/5 flex items-center gap-10">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-200 counter" data-target="100">+0</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.1em] font-bold">Empresas asesoradas</p>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-200 counter" data-target="11">0</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.1em] font-bold">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee Section */}
      <section className="py-20 overflow-hidden bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center reveal">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Empresas que confían en nosotros</span>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 py-4">
            {/* First set of logos */}
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Bacardi</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Distribuidora Gloria</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Codisa</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Indega</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Pluscar</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">McCain</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Vaca Fría</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Iglú</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Madersa Materiales</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Transporte Bogdan</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Comercial Baci</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Termoplástica</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Vitalcan</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Alco Distribuciones</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Proquim</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Weilen</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Distribuidora Norte</span>
            {/* Second set (duplicated for seamless loop) */}
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Bacardi</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Distribuidora Gloria</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Codisa</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Indega</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Pluscar</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">McCain</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Vaca Fría</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Iglú</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Madersa Materiales</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Transporte Bogdan</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Comercial Baci</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Termoplástica</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Vitalcan</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Alco Distribuciones</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Proquim</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Weilen</span>
            <span className="text-lg font-bold text-slate-400/30 uppercase tracking-widest font-display">Distribuidora Norte</span>
          </div>
        </div>
      </section>

      {/* High Impact Testimonial Section */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">format_quote</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-8 font-sans">
            "Lezac transformó nuestra visión comercial. En una sola sesión identificamos oportunidades de rentabilidad que no habíamos visto en años."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-10 h-1 bg-primary mb-4 rounded-full"></div>
            <p className="text-white font-bold uppercase tracking-widest text-sm">CEO, Madersa</p>
          </div>
        </div>
      </section>

      {/* Analysis Grid */}
      <section className="py-32 bg-white/[0.01]" id="analisis">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Qué vamos a analizar en tu negocio</h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-1">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">trending_up</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Optimización del portafolio</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Analizamos cada producto para detectar oportunidades de rentabilidad y eliminar ineficiencias.</p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-2">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">map</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Rutas comerciales</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Diseñamos rutas comerciales más eficientes para mejorar cobertura y maximizar el tiempo de ventas.</p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-3">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">groups</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Base de clientes</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Estrategias centradas en captar nuevos clientes de alto valor y potenciar el LTV de los actuales.</p>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-1">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">insights</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Inteligencia comercial</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Diagnóstico completo de tu situación comercial basado en datos reales, no en suposiciones.</p>
            </div>
            {/* Card 5 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-2">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">leaderboard</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Indicadores clave</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Definición de KPIs comerciales críticos para tomar decisiones informadas en tiempo real.</p>
            </div>
            {/* Card 6 */}
            <div className="glass-card p-8 rounded-xl reveal stagger-3">
              <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl font-light">smart_toy</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Automatización comercial</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Integración de agentes automatizados y optimización de CRM para escalar tu fuerza de ventas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Para quién es esta asesoría */}
      <section className="py-32 bg-background-dark overflow-hidden" id="perfil">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Perfil Ejecutivo</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Para quién es esta asesoría</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="glass-card flex items-center gap-6 p-7 rounded-round_eight reveal stagger-1">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">person_apron</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Dueños de empresas B2B</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Visión estratégica para profesionalizar la gestión comercial.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="glass-card flex items-center gap-6 p-7 rounded-round_eight reveal stagger-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">engineering</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Gerentes comerciales</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Optimización del equipo de ventas y análisis de resultados.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="glass-card flex items-center gap-6 p-7 rounded-round_eight reveal stagger-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">hub</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Distribuidoras y mayoristas</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Empresas con operaciones complejas que requieren eficiencia logística y comercial.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="glass-card flex items-center gap-6 p-7 rounded-round_eight reveal stagger-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-2xl">monitoring</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-white">Organizaciones Data-Driven</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Equipos que buscan tomar decisiones comerciales basadas en datos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Lo que descubrirás */}
      <section className="py-32 bg-background-dark border-t border-white/5" id="beneficios">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Entregables</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Lo que descubrirás en una sola asesoría</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          <div className="grid gap-4">
            {/* Result 1 */}
            <div className="glass-card flex items-center gap-6 p-6 rounded-round_eight reveal stagger-1">
              <div className="flex-shrink-0 w-10 h-10 border border-primary/20 bg-primary/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">analytics</span>
              </div>
              <span className="font-medium text-lg text-slate-200">Mapa de oportunidades de crecimiento</span>
            </div>
            {/* Result 2 */}
            <div className="glass-card flex items-center gap-6 p-6 rounded-round_eight reveal stagger-2">
              <div className="flex-shrink-0 w-10 h-10 border border-primary/20 bg-primary/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">search_check</span>
              </div>
              <span className="font-medium text-lg text-slate-200">Detección de puntos de fuga de ingresos</span>
            </div>
            {/* Result 3 */}
            <div className="glass-card flex items-center gap-6 p-6 rounded-round_eight reveal stagger-3">
              <div className="flex-shrink-0 w-10 h-10 border border-primary/20 bg-primary/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">target</span>
              </div>
              <span className="font-medium text-lg text-slate-200">Refinamiento del Ideal Customer Profile</span>
            </div>
            {/* Result 4 */}
            <div className="glass-card flex items-center gap-6 p-6 rounded-round_eight reveal stagger-4">
              <div className="flex-shrink-0 w-10 h-10 border border-primary/20 bg-primary/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
              </div>
              <span className="font-medium text-lg text-slate-200">Optimización estratégica de portafolio</span>
            </div>
            {/* Result 5 */}
            <div className="glass-card flex items-center gap-6 p-6 rounded-round_eight reveal stagger-1">
              <div className="flex-shrink-0 w-10 h-10 border border-primary/20 bg-primary/10 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">assignment_turned_in</span>
              </div>
              <span className="font-medium text-lg text-slate-200">Hoja de ruta con acciones inmediatas</span>
            </div>
          </div>
          <div className="mt-16 flex justify-center reveal">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] italic text-center max-w-xs">Sesión ejecutiva de 45 minutos gestionada por consultores senior.</p>
          </div>
        </div>
      </section>

      {/* Social Proof Regions */}
      <section className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-primary/70 font-bold tracking-[0.2em] uppercase mb-16 text-xs reveal">Presencia estratégica en Latinoamérica</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 transition-all duration-700 reveal">
            <span className="text-xl font-display font-bold text-white hover:text-primary transition-colors cursor-default">ARGENTINA</span>
            <span className="text-xl font-display font-bold text-white hover:text-primary transition-colors cursor-default">PARAGUAY</span>
            <span className="text-xl font-display font-bold text-white hover:text-primary transition-colors cursor-default">BOLIVIA</span>
            <span className="text-xl font-display font-bold text-white hover:text-primary transition-colors cursor-default">URUGUAY</span>
            <span className="text-xl font-display font-bold text-white hover:text-primary transition-colors cursor-default">COLOMBIA</span>
          </div>
        </div>
      </section>

      {/* Urgency Block */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 reveal">
          <div className="bg-gradient-to-br from-primary via-[#4834C1] to-primary rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl shadow-primary/20 group">
            <div className="absolute inset-0 shimmer-effect opacity-30"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[150px] text-white">event_busy</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Solo 10 asesorías gratuitas por mes</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10 font-light">
              Garantizamos calidad y profundidad en cada análisis. Por este motivo, los cupos son estrictamente limitados.
            </p>
            <a href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03" target="_blank" rel="noopener noreferrer" onClick={trackBookingEvent} className="inline-block bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-xl text-lg font-bold transition-all relative z-10 shadow-xl hover:shadow-white/20 transform hover:scale-[1.03]">
              Reservar mi lugar ahora
            </a>
            <a className="block mt-6 text-white/60 hover:text-white text-sm relative z-10 underline decoration-white/20 underline-offset-4 transition-colors" href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03" target="_blank" rel="noopener noreferrer" onClick={trackBookingEvent}>
              Ver disponibilidad inmediata
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight text-white reveal">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <details className="group glass-card rounded-xl reveal stagger-1" open>
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white">¿Por qué ofrecen esta asesoría de forma gratuita?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-white">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Porque creemos en demostrar valor antes de pedir cualquier compromiso. Es nuestra mejor carta de presentación y nos permite identificar si somos el aliado adecuado para tu crecimiento.
              </div>
            </details>
            <details className="group glass-card rounded-xl reveal stagger-2">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white">¿Qué incluye la sesión de 45 minutos?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-white">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Un diagnóstico rápido de tu estructura comercial actual, identificación de cuellos de botella y al menos 3 recomendaciones accionables que puedes aplicar de inmediato.
              </div>
            </details>
            <details className="group glass-card rounded-xl reveal stagger-3">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white">¿Qué problemas resuelven?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-white">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Estancamiento de ventas, baja rentabilidad del portafolio, equipos de venta poco productivos, falta de visibilidad de datos y procesos comerciales manuales obsoletos.
              </div>
            </details>
            <details className="group glass-card rounded-xl reveal stagger-4">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-white">¿Qué sucede después de la asesoría?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-white">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                Te llevarás el diagnóstico. Si vemos que hay un "fit" mutuo, podremos discutir cómo una colaboración a largo plazo aceleraría tus resultados, pero no hay ninguna obligación.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-white font-display">Agenda tu asesoría estratégica gratuita</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Mejora tu gestión comercial con un análisis profundo. Reservas gestionadas vía Calendly.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a href="https://calendly.com/lezacconsultoria/asesoria-comercial?month=2026-03" target="_blank" rel="noopener noreferrer" onClick={trackBookingEvent} className="bg-primary hover:bg-primary/80 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 transform hover:scale-[1.05] animate-pulse-glow inline-flex">
              <span className="material-symbols-outlined font-light">calendar_today</span>
              Agendar asesoría ahora
            </a>
            <p className="text-xs text-slate-500 tracking-wider uppercase font-bold">Disponibilidad limitada • Sin compromiso</p>
          </div>
        </div>
        {/* Background accents */}
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-background-dark text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Lezac Consultoría" className="h-8 w-auto opacity-80" />
          </div>
          <p className="font-medium text-xs tracking-wide">© 2024 Lezac Consultoría. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">Privacidad</a>
            <a className="hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
