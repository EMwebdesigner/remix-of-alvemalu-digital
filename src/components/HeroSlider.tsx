import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, Award, Shield } from "lucide-react";
import { Button } from "./ui/button";
import heroSplit from "@/assets/hero-split-ac.jpg";
import heroRooftop from "@/assets/hero-rooftop.jpg";
import heroCentral from "@/assets/hero-central.jpg";
import heroVrf from "@/assets/hero-vrf.jpg";
import heroColdStorage from "@/assets/hero-cold-storage.jpg";

const slides = [
  { image: heroSplit, alt: "Sistema Split moderno" },
  { image: heroRooftop, alt: "Rooftop comercial" },
  { image: heroCentral, alt: "Sistema central industrial" },
  { image: heroVrf, alt: "Sistema VRF/VRV" },
  { image: heroColdStorage, alt: "Cámara frigorífica" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col pt-8 md:pt-10">
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-icewhite mb-6 leading-tight">
                  Especialistas en Refrigeración y Climatización{" "}
                  <span className="text-aqua">Industrial y Residencial</span>
              </h1>
              <div className="flex items-start space-x-2.5 bg-petroleum/40 backdrop-blur-sm p-3 rounded-lg border border-aqua/20">
                  <p className="text-xs md:text-sm text-icewhite/90 leading-relaxed">
                    En ALVEMALU S.A. garantizamos rendimiento, seguridad y eficiencia con
                    mantenimiento profesional, instalaciones certificadas y atención inmediata.
                    Expertos en sistemas Split, Rooftop, Centrales, VRF y cámaras de frío.
                  </p>
              </div>
              <Button variant="hero" size="default" asChild>
                <a href="https://em-webdesigner.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="my-5 py-7" >
                  Solicitar Servicio Ahora
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="relative pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl">
              {/* Servicio 24/7 */}
              <div className="flex items-center space-x-2.5 bg-petroleum/40 backdrop-blur-sm p-3 rounded-lg border border-aqua/20">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-aqua" />
                </div>
                <div>
                  <h3 className="text-icewhite font-bold text-xs mb-0">Servicio 24/7</h3>
                  <p className="text-icewhite/80 text-[10px]">Siempre disponibles</p>
                </div>
              </div>

              {/* Técnicos Certificados */}
              <div className="flex items-center space-x-2.5 bg-petroleum/40 backdrop-blur-sm p-3 rounded-lg border border-aqua/20">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-aqua" />
                </div>
                <div>
                  <h3 className="text-icewhite font-bold text-xs mb-0">Técnicos Certificados</h3>
                  <p className="text-icewhite/80 text-[10px]">Personal calificado</p>
                </div>
              </div>

              {/* Garantía Escrita */}
              <div className="flex items-center space-x-2.5 bg-petroleum/40 backdrop-blur-sm p-3 rounded-lg border border-aqua/20">
                <div className="flex-shrink-0">
                  <Shield className="w-6 h-6 text-aqua" />
                </div>
                <div>
                  <h3 className="text-icewhite font-bold text-xs mb-0">Garantía Escrita</h3>
                  <p className="text-icewhite/80 text-[10px]">Trabajo garantizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-petroleum/80 hover:bg-aqua text-icewhite p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-petroleum/80 hover:bg-aqua text-icewhite p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-aqua w-8"
                : "bg-icewhite/50 hover:bg-icewhite/80"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
