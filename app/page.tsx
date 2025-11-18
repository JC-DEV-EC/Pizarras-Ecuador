"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import Icons from "@/components/Icons";
import Logo from "@/components/Logo";
import Loader from "@/components/Loader";
import { TypewriterChalk } from "@/components/TypewriterChalk";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: "pizarra-vidrio",
      name: "Pizarras de Vidrio",
      description: "Elegantes y modernas, perfectas para oficinas",
      image: "/images/pizarra_vidrio.png",
      category: "Premium",
      gallery: [
        "/images/products/pizarra-vidrio/pizarra.V1.png",
        "/images/products/pizarra-vidrio/pizarra.V2.png",
        "/images/products/pizarra-vidrio/pizarra.V3.png"
      ]
    },
    {
      id: "pizarra-pedestal",
      name: "Pizarras de Pedestal",
      description: "Móviles y versátiles para cualquier espacio",
      image: "/images/pizarra_pedestal.png",
      category: "Profesional",
      gallery: [
        "/images/products/pizarra-pedestal/pedestal.P1.png",
        "/images/products/pizarra-pedestal/pedestal.P2.png",
        "/images/products/pizarra-pedestal/pedestal.P3.png"
      ]
    },
    {
      id: "pizarra-tiza",
      name: "Pizarras de Tiza",
      description: "Clásicas y duraderas para educación",
      image: "/images/pizarra_tiza.png",
      category: "Educación",
      gallery: [
        "/images/products/pizarra-tiza/pizarra.T1.jpg",
        "/images/products/pizarra-tiza/pizarra.T2.jpg",
        "/images/products/pizarra-tiza/pizarra.T3.jpg"
      ]
    },
    {
      id: "pizarra-diseno",
      name: "Pizarras de Diseño",
      description: "Personalizadas según tus necesidades",
      image: "/images/pizarra_diseño.png",
      category: "Personalizado",
      gallery: [
        "/images/products/pizarra-diseño/pizarra.D1.png",
        "/images/products/pizarra-diseño/pizarra.D2.png",
        "/images/products/pizarra-diseño/pizarra.D3.png"
      ]
    },
    {
      id: "pizarra-pared",
      name: "Pizarras de Pared",
      description: "Solución fija para espacios permanentes",
      image: "/images/pizarra_pared.png",
      category: "Estándar",
      gallery: [
        "/images/products/pizarra-pared/pizarra.P1.png",
        "/images/products/pizarra-pared/pizarra.P2.png",
        "/images/products/pizarra-pared/pizarra.P3.png"
      ]
    },
    {
      id: "caballete",
      name: "Caballetes",
      description: "Ideales para presentaciones y arte",
      image: "/images/caballete.png",
      category: "Móvil",
      gallery: [
        "/images/products/caballete/CABALLETE NEW.png",
        "/images/products/caballete/PARA RESTAURANTES.png",
        "/images/products/caballete/Publicacion_pizarracaballete2v2_FB.jpg"
      ]
    },
    {
      id: "rotafolio",
      name: "Rotafolios",
      description: "Para presentaciones dinámicas",
      image: "/images/rotafolio.png",
      category: "Presentación",
      gallery: [
        "/images/products/rotafolio/rotafolio.P1.png",
        "/images/products/rotafolio/rotafolio.P2.png",
        "/images/products/rotafolio/rotafolio.P3.png"
      ]
    },
    {
      id: "pedestal-vidrio",
      name: "Pedestal de Vidrio",
      description: "Elegancia y funcionalidad premium",
      image: "/images/pedestal_vidrio.png",
      category: "Premium",
      gallery: [
        "/images/products/pedestal-vidrio/pedestal.V1.png",
        "/images/products/pedestal-vidrio/pedestal.V2.png",
        "/images/products/pedestal-vidrio/pedestal.V3.png"
      ]
    },
    {
      id: "caballete-ninos",
      name: "Caballetes para Niños",
      description: "Perfectos para el aprendizaje creativo",
      image: "/images/products/caballete-ninos/caballete.P1.png",
      category: "Infantil",
      gallery: [
        "/images/products/caballete-ninos/caballete.P1.png",
        "/images/products/caballete-ninos/caballete.P2.png",
        "/images/products/caballete-ninos/caballete.P3.png"
      ]
    },
    {
      id: "mesa-ninos",
      name: "Mesas para Niños",
      description: "Espacios didácticos y divertidos",
      image: "/images/products/mesa-niños/mesa.P1.png",
      category: "Infantil",
      gallery: [
        "/images/products/mesa-niños/mesa.P1.png",
        "/images/products/mesa-niños/mesa.P2.png",
        "/images/products/mesa-niños/mesa.P3.png"
      ]
    },
    {
      id: "carchografo",
      name: "Carchógrafo",
      description: "Exhibición profesional de documentos",
      image: "/images/carchigrafos.jpg",
      category: "Profesional",
      gallery: [
        "/images/products/carchografo/carchografo.P1.png",
        "/images/products/carchografo/carchografo.P2.jpg"
      ]
    },
  ];

  const openGallery = (product: any) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.gallery.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#222224]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 liquid-glass-dark border-b border-[#E1B261]/20 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:scale-105 transition-transform">
            <Logo className="h-10" />
          </Link>

          {/* Social Icons - Center Left */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://www.facebook.com/PizarrasEcuador.ec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-[#E1B261] transition-all group shadow-md">
              <Icons.facebook className="w-5 h-5 text-[#1A1A1C] group-hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/pizarrasecuador.ec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-[#E1B261] transition-all group shadow-md">
              <Icons.instagram className="w-5 h-5 text-[#1A1A1C] group-hover:text-white transition" />
            </a>
            <a href="https://www.tiktok.com/@pizarrasecuadorec" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-[#E1B261] transition-all group shadow-md">
              <svg className="w-5 h-5 text-[#1A1A1C] group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/pizarrasecuador" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white hover:bg-[#E1B261] transition-all group shadow-md">
              <Icons.pinterest className="w-5 h-5 text-[#1A1A1C] group-hover:text-white transition" />
            </a>
          </div>

          {/* Navigation Menu - Center Right */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#hero" className="text-white hover:text-[#E1B261] transition font-medium">
              Inicio
            </Link>
            <Link href="#products" className="text-white hover:text-[#E1B261] transition font-medium">
              Productos
            </Link>
            <Link href="#services" className="text-white hover:text-[#E1B261] transition font-medium">
              Servicios
            </Link>
            <Link href="#contact" className="text-white hover:text-[#E1B261] transition font-medium">
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <a 
            href="https://wa.me/59399529697?text=Hola%2C%20me%20gustaría%20solicitar%20una%20cotización" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#1A1A1C] transition-all font-semibold group"
          >
            Cotiza Aquí
            <Icons.arrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>
      <div className="h-20"></div>

      {/* Hero Section */}
      <section id="hero" className="relative text-white overflow-hidden min-h-screen" style={{
        backgroundImage: 'url(/images/c_header.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Dark overlay on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1C] via-[#1A1A1C]/80 to-transparent"></div>
        
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex items-center justify-center min-h-screen">
          <div className="w-full text-center">
            <div className="z-10 space-y-8">
              {/* Typewriter Effect with Chalk */}
              <TypewriterChalk
                words={[
                  { text: "Bienvenidos" },
                  { text: "a" },
                  { text: "la" },
                  { text: "fábrica" },
                  { text: "de" },
                  { text: "pizarras", className: "bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent" },
                ]}
                className="mb-8"
              />
              
              {/* Aparecen inmediatamente después de la escritura */}
              <AnimatedSection delay={1500}>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mt-8">
                  Transformamos tus espacios educativos y profesionales con pizarras premium diseñadas para durar.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={1700}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Link href="#products" className="group bg-gradient-to-r from-[#E1B261] to-[#CBA058] text-[#1A1A1C] px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#E1B261]/50 transition-all text-center font-bold hover:scale-105 flex items-center justify-center gap-2">
                    Ver Catálogo
                    <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/59399529697" target="_blank" rel="noopener noreferrer" className="border-2 border-[#E1B261] text-[#E1B261] px-8 py-4 rounded-full hover:bg-[#E1B261] hover:text-[#1A1A1C] transition-all text-center font-bold hover:scale-105 flex items-center justify-center gap-2">
                    <Icons.whatsapp className="w-5 h-5" />
                    Solicitar Cotización
                  </a>
                </div>
              </AnimatedSection>
              
              {/* Stats */}
              <AnimatedSection delay={1900}>
                <div className="grid grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
                  <div className="liquid-glass p-6 rounded-2xl text-center hover:border-[#E1B261]/40 transition hover:scale-105">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">500+</div>
                    <div className="text-sm text-[#A7A7A7] mt-2 font-medium">Proyectos</div>
                  </div>
                  <div className="liquid-glass p-6 rounded-2xl text-center hover:border-[#E1B261]/40 transition hover:scale-105">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">15+</div>
                    <div className="text-sm text-[#A7A7A7] mt-2 font-medium">Años</div>
                  </div>
                  <div className="liquid-glass p-6 rounded-2xl text-center hover:border-[#E1B261]/40 transition hover:scale-105">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">98%</div>
                    <div className="text-sm text-[#A7A7A7] mt-2 font-medium">Satisfacción</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Horizontal Scroll Section */}
      <section className="relative bg-[#1A1A1C] py-16 overflow-hidden">
        <div className="relative">
          {/* Subtle gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1C] via-[#1A1A1C]/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1C] via-[#1A1A1C]/80 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex gap-16 animate-scroll">
            {/* First set */}
            <div className="flex gap-16 flex-shrink-0">
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.school className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Escuelas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Colegios</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7m4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5h-4V4h4v3z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Laboratorios</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.business className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Oficinas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Salas de Conferencias</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Aulas Virtuales</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Empresas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.tools className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Talleres</span>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-16 flex-shrink-0">
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.school className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Escuelas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Colegios</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7m4 14c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m2-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1m1-5h-4V4h4v3z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Laboratorios</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.business className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Oficinas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Salas de Conferencias</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Aulas Virtuales</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <svg className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Empresas</span>
              </div>
              <div className="flex items-center gap-4 px-8 py-4 group">
                <Icons.tools className="w-8 h-8 text-[#E1B261] group-hover:text-[#CBA058] transition" />
                <span className="text-xl text-[#A7A7A7] group-hover:text-white font-medium whitespace-nowrap transition">Talleres</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos Section */}
      <section id="services" className="relative py-20 bg-[#1A1A1C] overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#E1B261]/10 to-[#CBA058]/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E1B261]/20 to-[#CBA058]/20 rounded-full text-sm font-semibold text-[#E1B261] mb-4">
                Lo Que Ofrecemos
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ¿Por qué <span className="gradient-text">elegirnos?</span>
              </h2>
              <p className="text-xl text-[#A7A7A7] max-w-2xl mx-auto">
                Soluciones integrales para todas tus necesidades en pizarras
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <AnimatedSection delay={100}>
              <div className="group relative bg-gradient-to-br from-red-500/20 via-orange-500/20 to-[#E1B261]/20 p-8 rounded-3xl border border-[#E1B261]/30 hover:border-[#E1B261]/60 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Icons.paintBrush className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Diseñamos tu Pizarra</h3>
                  <p className="text-[#A7A7A7] leading-relaxed mb-6 flex-grow">
                    Creamos diseños únicos y personalizados que se adaptan perfectamente a tu espacio, marca y necesidades específicas.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Diseño personalizado</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Renders 3D incluidos</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Asesoría profesional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Service 2 */}
            <AnimatedSection delay={200}>
              <div className="group relative bg-gradient-to-br from-orange-500/20 via-[#E1B261]/20 to-[#CBA058]/20 p-8 rounded-3xl border border-[#E1B261]/30 hover:border-[#E1B261]/60 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-[#E1B261]/0 group-hover:from-orange-500/10 group-hover:to-[#E1B261]/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-[#E1B261] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Icons.tools className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Instalación y Transporte</h3>
                  <p className="text-[#A7A7A7] leading-relaxed mb-6 flex-grow">
                    Nos encargamos de todo el proceso: desde el transporte seguro hasta la instalación profesional en tu ubicación.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Transporte asegurado</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Instalación certificada</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Cobertura nacional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Service 3 */}
            <AnimatedSection delay={300}>
              <div className="group relative bg-gradient-to-br from-[#E1B261]/20 via-[#CBA058]/20 to-yellow-500/20 p-8 rounded-3xl border border-[#E1B261]/30 hover:border-[#E1B261]/60 transition-all duration-500 hover:scale-105 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1B261]/0 to-yellow-500/0 group-hover:from-[#E1B261]/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E1B261] to-[#CBA058] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Icons.refresh className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Restauración</h3>
                  <p className="text-[#A7A7A7] leading-relaxed mb-6 flex-grow">
                    Damos nueva vida a tus pizarras antiguas con nuestro servicio de restauración y mantenimiento especializado.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Reparación experta</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Cambio de superficie</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1B261]"></div>
                      <span>Mantenimiento preventivo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-20 bg-[#1A1A1C] overflow-hidden">
        {/* Decorative overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E1B261] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#CBA058] to-transparent"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#E1B261]/20 to-[#CBA058]/20 rounded-full text-sm font-semibold text-[#A7A7A7] mb-4">
                Catálogo 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nuestros <span className="gradient-text">Productos</span>
              </h2>
              <p className="text-xl text-[#A7A7A7] max-w-2xl mx-auto">
                Amplio catálogo de pizarras y soluciones para oficinas, escuelas y espacios profesionales
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group relative liquid-glass-dark rounded-3xl overflow-hidden card-hover">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 z-10 pointer-events-none"></div>
                  
                  {/* Image - Opens Gallery */}
                  <div 
                    className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
                    onClick={() => openGallery(product)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                    />
                  </div>
                  
                  <div className="p-6 relative z-20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-bold rounded-full">
                        {product.category.toUpperCase()}
                      </div>
                      {/* Eye Icon - Opens Gallery */}
                      <button
                        onClick={() => openGallery(product)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                      >
                        <Icons.eye className="w-5 h-5 text-[#E1B261]" />
                      </button>
                    </div>
                    
                    {/* Title - Goes to Page */}
                    <Link href={`/productos/${product.id}`}>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-[#E1B261] transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-[#A7A7A7] text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Button - Goes to Page */}
                    <Link href={`/productos/${product.id}`}>
                      <button className="w-full bg-gradient-to-r from-[#E1B261] to-[#CBA058] text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group/btn">
                        Ver Detalles
                        <Icons.arrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="animate-shimmer"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section className="relative py-20 bg-[#171719] overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-20 right-20 grid grid-cols-4 gap-4 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#E1B261]"></div>
          ))}
        </div>
        <div className="absolute bottom-20 left-20 grid grid-cols-3 gap-3 opacity-10">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-[#CBA058]"></div>
          ))}
        </div>
        
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <div className="relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E1B261] to-[#CBA058] px-6 py-3 rounded-full mb-6">
                  <Icons.trophy className="w-5 h-5 text-[#1A1A1C]" />
                  <span className="font-bold text-[#1A1A1C]">10+ Años de Experiencia</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Nos Adaptamos A <span className="gradient-text">Tu Necesidad</span>
                </h2>
                
                <p className="text-[#A7A7A7] text-lg mb-8 leading-relaxed">
                  En Pizarras Ecuador, entendemos que cada espacio es único. Por eso, ofrecemos soluciones personalizadas que se ajustan perfectamente a tus requerimientos.
                </p>
                
                {/* Checklist */}
                <div className="space-y-4">
                  {[
                    "Diseños 100% personalizados según tu espacio",
                    "Materiales de la más alta calidad importados",
                    "Instalación profesional garantizada",
                    "Servicio post-venta y mantenimiento incluido"
                  ].map((item, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#E1B261] to-[#CBA058] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icons.check className="w-5 h-5 text-[#1A1A1C] font-bold" />
                        </div>
                        <p className="text-white text-lg pt-1">{item}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Right Image/Visual */}
            <AnimatedSection delay={300}>
              <div className="relative">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-4 border-[#E1B261]/30 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-4 border-[#CBA058]/20"></div>
                
                <div className="relative liquid-glass-dark p-12 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="liquid-glass p-6 rounded-2xl hover:border-[#E1B261]/50 transition-all duration-500 group">
                      <Icons.lightBulb className="w-10 h-10 text-[#E1B261] mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Innovación</h4>
                      <p className="text-[#A7A7A7] text-sm">Últimas tecnologías</p>
                    </div>
                    <div className="liquid-glass p-6 rounded-2xl hover:border-[#E1B261]/50 transition-all duration-500 group">
                      <Icons.shield className="w-10 h-10 text-[#CBA058] mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Garantía</h4>
                      <p className="text-[#A7A7A7] text-sm">Total respaldo</p>
                    </div>
                    <div className="liquid-glass p-6 rounded-2xl hover:border-[#E1B261]/50 transition-all duration-500 group">
                      <Icons.users className="w-10 h-10 text-[#E1B261] mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Equipo Pro</h4>
                      <p className="text-[#A7A7A7] text-sm">Expertos certificados</p>
                    </div>
                    <div className="liquid-glass p-6 rounded-2xl hover:border-[#E1B261]/50 transition-all duration-500 group">
                      <Icons.clock className="w-10 h-10 text-[#CBA058] mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold text-lg mb-2">Rapidez</h4>
                      <p className="text-[#A7A7A7] text-sm">Entrega puntual</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Promociones Especiales Section */}
      <section className="relative py-20 bg-[#171719] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#E1B261]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#CBA058]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#222224] to-[#1A1A1C] rounded-[3rem] border-2 border-[#E1B261]/30 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Auto-scrolling Promo Images */}
              <AnimatedSection>
                <div className="relative p-12 flex items-center justify-center bg-gradient-to-br from-[#1A1A1C] to-[#171719] overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 border-4 border-[#E1B261]/30 rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#E1B261] to-[#CBA058] rounded-lg rotate-12"></div>
                  <div className="absolute top-1/2 left-8 w-8 h-8 border-2 border-[#CBA058]/40 rounded-lg -rotate-12"></div>
                  
                  {/* Auto-scrolling container */}
                  <div className="relative z-10 w-full h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="animate-scroll-vertical space-y-6 max-w-md mx-auto">
                      {/* First set */}
                      <div className="space-y-6">
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo1.png"
                            alt="Promoción 1"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo2.png"
                            alt="Promoción 2"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo3.png"
                            alt="Promoción 3"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo4.png"
                            alt="Promoción 4"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      {/* Duplicate set for seamless loop */}
                      <div className="space-y-6">
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo1.png"
                            alt="Promoción 1"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo2.png"
                            alt="Promoción 2"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo3.png"
                            alt="Promoción 3"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative h-[350px] w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src="/images/products/promo4.png"
                            alt="Promoción 4"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Right - Promo Details */}
              <AnimatedSection delay={200}>
                <div className="p-12 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2 rounded-full mb-6 w-fit animate-pulse">
                    <Icons.tag className="w-5 h-5 text-white" />
                    <span className="font-bold text-white text-sm">PROMOCIÓN LIMITADA</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    ¡Grandes Descuentos En <span className="gradient-text">Pizarras De Vidrio!</span>
                  </h2>
                  
                  <p className="text-[#A7A7A7] text-lg mb-8 leading-relaxed">
                    Aprovecha nuestras ofertas especiales en pizarras de vidrio premium. Elegancia y funcionalidad para tu espacio.
                  </p>
                  
                  {/* Promo Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 liquid-glass p-4 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#E1B261] to-[#CBA058] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.tag className="w-6 h-6 text-[#1A1A1C]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">20% de Descuento</p>
                        <p className="text-[#A7A7A7] text-sm">En toda nuestra línea de vidrio</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 liquid-glass p-4 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#E1B261] to-[#CBA058] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.truck className="w-6 h-6 text-[#1A1A1C]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">Envío Gratis</p>
                        <p className="text-[#A7A7A7] text-sm">A toda la ciudad de Quito</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 liquid-glass p-4 rounded-2xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#E1B261] to-[#CBA058] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icons.creditCard className="w-6 h-6 text-[#1A1A1C]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">Financiamiento</p>
                        <p className="text-[#A7A7A7] text-sm">Hasta 6 meses sin intereses</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href="https://wa.me/59399529697?text=Hola! Me interesa la promoción de pizarras de vidrio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group bg-gradient-to-r from-[#E1B261] to-[#CBA058] text-[#1A1A1C] px-8 py-5 rounded-2xl hover:shadow-xl hover:shadow-[#E1B261]/50 transition-all font-bold text-lg hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Icons.whatsapp className="w-6 h-6" />
                    ¡Aprovecha la Promoción!
                    <Icons.arrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <p className="text-[#A7A7A7] text-sm text-center mt-4">
                    *Promoción válida hasta fin de mes. Aplican términos y condiciones.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-[#222224] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#E1B261] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#CBA058] rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Lo Que Dicen <span className="gradient-text">Nuestros Clientes</span>
              </h2>
              <p className="text-xl text-[#A7A7A7] max-w-2xl mx-auto">
                Miles de clientes satisfechos confían en nosotros para sus proyectos
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Méndez",
                role: "Director, Escuela San Francisco",
                content: "Excelente calidad y servicio. Las pizarras han transformado nuestras aulas. Los estudiantes están más motivados.",
                rating: 5,
              },
              {
                name: "María González",
                role: "Gerente de Oficina, TechCorp",
                content: "Instalación rápida y profesional. Las pizarras de vidrio le dieron un toque moderno a nuestra oficina.",
                rating: 5,
              },
              {
                name: "Roberto Silva",
                role: "Arquitecto",
                content: "Trabajo con Pizarras Ecuador en múltiples proyectos. Siempre entregan calidad premium y a tiempo.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="liquid-glass-dark p-8 rounded-3xl card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icons.star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#A7A7A7] mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E1B261] to-[#CBA058] flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-[#A7A7A7]">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#1A1A1C] via-[#222224] to-[#E1B261] py-20 overflow-hidden animate-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#222224]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#222224]/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar tu espacio?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y recibe una cotización personalizada para tu proyecto. ¡Sin compromiso!
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/59399529697" target="_blank" rel="noopener noreferrer" className="group bg-white text-[#1A1A1C] px-10 py-4 rounded-full hover:bg-[#222224] transition-all font-bold shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                <Icons.whatsapp className="w-5 h-5" />
                Solicitar Cotización Gratis
              </a>
              <a href="tel:+59399529697" className="glass border-2 border-white/30 text-white px-10 py-4 rounded-full hover:bg-[#222224]/20 transition-all font-bold hover:scale-105 flex items-center justify-center gap-2">
                <Icons.phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Google Maps Section - Creative Design */}
      <section id="contact" className="relative bg-gradient-to-br from-[#1A1A1C] to-[#222224] py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#E1B261]/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-[#E1B261]/10 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-16 h-16 border-4 border-dashed border-[#CBA058]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#E1B261]/5 rounded-full blur-xl"></div>
        
        {/* Location Pin Icon - Top Right */}
        <div className="absolute top-10 right-10 text-[#E1B261] animate-bounce">
          <Icons.location className="w-12 h-12" />
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <AnimatedSection>
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1B261]/10 border border-[#E1B261]/30 rounded-full mb-6">
                  <Icons.sparkles className="w-4 h-4 text-[#E1B261] animate-pulse" />
                  <span className="text-[#E1B261] font-semibold text-sm">Showroom en Quito</span>
                </div>
                
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  ¡Encúentranos!
                </h2>
                
                {/* Yellow Box with Message */}
                <div className="bg-gradient-to-r from-[#E1B261] to-[#CBA058] p-8 rounded-2xl mb-8 shadow-xl glass-glow">
                  <p className="text-2xl md:text-3xl font-bold text-[#1A1A1C] italic leading-relaxed">
                    Visita nuestro showroom y descubre la pizarra perfecta!
                  </p>
                </div>
                
                <p className="text-lg text-[#A7A7A7] mb-8">
                  Te esperamos con más de 15 años de experiencia y las mejores soluciones en pizarras para tu espacio.
                </p>
                
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 liquid-glass p-4 rounded-xl hover:border-[#E1B261]/40 transition">
                    <Icons.location className="w-6 h-6 text-[#E1B261] flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold mb-1">Dirección</div>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Av.+Crist%C3%B3bal+Col%C3%B3n+E4-149+y,+Quito+170102" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#A7A7A7] text-sm hover:text-[#E1B261] transition"
                      >
                        Av. Cristóbal Colón E4-149 y, Quito 170102
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 liquid-glass p-4 rounded-xl hover:border-[#E1B261]/40 transition">
                    <Icons.phone className="w-6 h-6 text-[#E1B261] flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold mb-1">Teléfono</div>
                      <a href="tel:+59399529697" className="text-[#A7A7A7] text-sm hover:text-[#E1B261] transition">
                        +593 99 529 697
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 liquid-glass p-4 rounded-xl hover:border-[#E1B261]/40 transition">
                    <Icons.mail className="w-6 h-6 text-[#E1B261] flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold mb-1">Correo</div>
                      <a href="mailto:pizarrasecuador.ec@gmail.com" className="text-[#A7A7A7] text-sm hover:text-[#E1B261] transition">
                        pizarrasecuador.ec@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Badge at bottom */}
                <div className="mt-8 inline-block liquid-glass-gold px-6 py-3 rounded-full glass-glow">
                  <span className="text-white font-bold text-sm">#1 Pizarras en Ecuador</span>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Right Side - Map in Circle */}
            <AnimatedSection delay={200}>
              <div className="relative">
                {/* Decorative circles around map */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E1B261]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#CBA058]/20 rounded-full blur-2xl"></div>
                
                {/* Map Container - Circular */}
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-[#E1B261] shadow-2xl shadow-[#E1B261]/50 overflow-hidden animate-float">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.72426590569154!2d-78.49281886730539!3d-0.19952946059611815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a6b7e43ff93%3A0xea2f750e48799679!2sPizarras%20Ecuador!5e0!3m2!1ses!2sec!4v1740752554787!5m2!1ses!2sec"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  {/* Decorative Dashed Line */}
                  <div className="absolute top-1/2 -left-20 w-16 h-0.5 border-t-2 border-dashed border-[#E1B261]/50"></div>
                  <div className="absolute top-1/4 -right-16 w-12 h-0.5 border-t-2 border-dashed border-[#E1B261]/50"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1A1A1C] via-[#222224] to-[#171719] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E1B261]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#CBA058]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E1B261]/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E1B261]/10 border border-[#E1B261]/30 rounded-full mb-6">
                <Icons.users className="w-5 h-5 text-[#E1B261]" />
                <span className="text-[#E1B261] font-semibold uppercase tracking-wider text-sm">Nuestros Clientes</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Algunos de <span className="bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent">Nuestros Clientes</span>
              </h2>
              <p className="text-[#A7A7A7] text-lg max-w-2xl mx-auto">
                Empresas e instituciones líderes confían en nuestras soluciones profesionales
              </p>
            </div>
          </AnimatedSection>

          {/* Clients Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {[
              { name: 'TU', image: '/images/clients/tu.png' },
              { name: 'Universidad Casa Grande', image: '/images/clients/U-CASA-GRANDE.png' },
              { name: 'Hospital Metropolitano', image: '/images/clients/METRO.png' },
              { name: 'Presidencia de la República', image: '/images/clients/presidencia.png' },
              { name: 'Fybeca', image: '/images/clients/fybeca.png' },
            ].map((client, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group relative liquid-glass-dark hover:border-[#E1B261]/50 p-8 rounded-2xl transition-all duration-500 hover:scale-105">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E1B261]/0 to-[#CBA058]/0 group-hover:from-[#E1B261]/10 group-hover:to-[#CBA058]/10 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative h-16 filter brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Trust Badge */}
          <AnimatedSection delay={500}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 liquid-glass-gold px-8 py-4 rounded-full shadow-xl shadow-[#E1B261]/20">
                <Icons.shield className="w-6 h-6 text-white" />
                <span className="text-white font-bold">Más de 500+ proyectos completados con éxito</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#171719] to-[#1A1A1C] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#E1B261] to-[#CBA058] bg-clip-text text-transparent mb-4">Pizarras Ecuador</h3>
              <p className="text-[#5C5C5E] mb-6">Soluciones profesionales en pizarras desde 2009.</p>
              
              {/* Social Media */}
              <div className="flex gap-3">
                <a href="https://wa.me/59399529697" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Icons.whatsapp className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/PizarrasEcuador/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Icons.facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/pizarrasecuador/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <Icons.instagram className="w-5 h-5" />
                </a>
                <a href="https://www.pinterest.com/pizarrasecuador/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Icons.cube className="w-5 h-5" />
                Productos
              </h4>
              <ul className="space-y-3 text-[#5C5C5E]">
                <li>
                  <Link href="/productos/pizarra-vidrio" className="hover:text-white transition flex items-center gap-2">
                    <Icons.chevronRight className="w-4 h-4" />
                    Pizarras de Vidrio
                  </Link>
                </li>
                <li>
                  <Link href="/productos/pizarra-pared" className="hover:text-white transition flex items-center gap-2">
                    <Icons.chevronRight className="w-4 h-4" />
                    Pizarras de Pared
                  </Link>
                </li>
                <li>
                  <Link href="/productos/pizarra-tiza" className="hover:text-white transition flex items-center gap-2">
                    <Icons.chevronRight className="w-4 h-4" />
                    Pizarras de Tiza
                  </Link>
                </li>
                <li>
                  <Link href="/productos/caballete" className="hover:text-white transition flex items-center gap-2">
                    <Icons.chevronRight className="w-4 h-4" />
                    Caballetes
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Icons.tools className="w-5 h-5" />
                Servicios
              </h4>
              <ul className="space-y-3 text-[#5C5C5E]">
                <li>
                  <Link href="/#services" className="hover:text-white transition flex items-center gap-2">
                    <Icons.checkCircle className="w-4 h-4" />
                    Instalación
                  </Link>
                </li>
                <li>
                  <Link href="/productos/pizarra-diseno" className="hover:text-white transition flex items-center gap-2">
                    <Icons.checkCircle className="w-4 h-4" />
                    Diseño Personalizado
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition flex items-center gap-2">
                    <Icons.checkCircle className="w-4 h-4" />
                    Mantenimiento
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/59399529697?text=Hola%2C%20necesito%20consultor%C3%ADa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2">
                    <Icons.checkCircle className="w-4 h-4" />
                    Consultoría
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contáctanos</h4>
              <ul className="space-y-4 text-[#5C5C5E]">
                <li className="flex items-start gap-3">
                  <Icons.mail className="w-5 h-5 text-[#E1B261] flex-shrink-0 mt-0.5" />
                  <a href="mailto:pizarrasecuador.ec@gmail.com" className="text-sm hover:text-[#E1B261] transition">
                    pizarrasecuador.ec@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.phone className="w-5 h-5 text-[#E1B261] flex-shrink-0 mt-0.5" />
                  <a href="tel:+59399529697" className="text-sm hover:text-[#E1B261] transition">
                    +593 99 529 697
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.location className="w-5 h-5 text-[#E1B261] flex-shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Crist%C3%B3bal+Col%C3%B3n+E4-149+y,+Quito+170102" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#E1B261] transition"
                  >
                    Av. Cristóbal Colón E4-149 y, Quito 170102
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5C5C5E] text-sm">&copy; 2025 Pizarras Ecuador. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 text-[#5C5C5E] text-sm">
              <span>Hecho con</span>
              <Icons.heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>en Ecuador</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in"
          onClick={closeGallery}
        >
          <div className="relative w-full max-w-6xl mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition z-50"
            >
              <Icons.close className="w-6 h-6 text-white" />
            </button>

            {/* Product Info Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-40 rounded-t-3xl">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h3>
              <p className="text-[#E1B261]">{selectedProduct.description}</p>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video bg-[#1A1A1C] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={selectedProduct.gallery[currentImageIndex]}
                alt={`${selectedProduct.name} - Imagen ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E1B261] backdrop-blur-sm flex items-center justify-center transition group"
              >
                <Icons.chevronRight className="w-6 h-6 text-white rotate-180" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E1B261] backdrop-blur-sm flex items-center justify-center transition group"
              >
                <Icons.chevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
                <span className="text-white font-semibold">
                  {currentImageIndex + 1} / {selectedProduct.gallery.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {selectedProduct.gallery.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition ${
                    idx === currentImageIndex
                      ? 'border-[#E1B261] scale-105'
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-contain bg-[#222224]"
                  />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center">
              <a
                href={`https://wa.me/59399529697?text=Hola%2C%20me%20interesa%20${encodeURIComponent(selectedProduct.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E1B261] to-[#CBA058] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#E1B261]/50 transition-all hover:scale-105"
              >
                <Icons.whatsapp className="w-5 h-5" />
                Solicitar Cotización
                <Icons.arrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
