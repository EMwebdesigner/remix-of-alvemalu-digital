import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Operaciones",
    image: testimonial1,
    rating: 5,
    text: "Excelente servicio de mantenimiento preventivo. Nuestros equipos funcionan perfectamente y hemos reducido costos significativamente.",
  },
  {
    name: "María González",
    role: "Directora de Administración",
    image: testimonial2,
    rating: 5,
    text: "Profesionales altamente capacitados. La instalación de nuestro sistema VRF fue impecable y en tiempo récord.",
  },
  {
    name: "Roberto Fernández",
    role: "Jefe de Planta Industrial",
    image: testimonial3,
    rating: 5,
    text: "Confío plenamente en ALVEMALU para el mantenimiento de nuestras cámaras frigoríficas. Servicio excepcional 24/7.",
  },
  {
    name: "Ana Martínez",
    role: "Gerente de Facilities",
    image: testimonial4,
    rating: 5,
    text: "El contrato empresarial nos ha dado tranquilidad total. Respuesta rápida y soluciones efectivas siempre.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo que Dicen Nuestros <span className="text-aqua">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor respaldo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-aqua"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-aqua text-aqua" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
