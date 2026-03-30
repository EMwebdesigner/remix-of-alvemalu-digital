import { Zap, Clock, Wind, AlertTriangle, ShieldCheck, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Ahorro Energético",
    description: "Optimización del consumo con mantenimiento regular",
  },
  {
    icon: Clock,
    title: "Mayor Vida Útil",
    description: "Equipos que duran más con cuidado profesional",
  },
  {
    icon: Wind,
    title: "Aire Más Limpio",
    description: "Limpieza de filtros y sistemas para ambiente saludable",
  },
  {
    icon: AlertTriangle,
    title: "Menos Fallas",
    description: "Prevención proactiva de problemas técnicos",
  },
  {
    icon: ShieldCheck,
    title: "Garantía en Cada Servicio",
    description: "Respaldo total en todos nuestros trabajos",
  },
  {
    icon: Award,
    title: "Técnicos Certificados",
    description: "Personal capacitado y con experiencia comprobada",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-coldgray">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beneficios de Trabajar con <span className="text-aqua">Nosotros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calidad, eficiencia y confianza en cada servicio que brindamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-aqua/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-aqua/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-aqua" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-aqua transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
