import { Wrench, AlertCircle, Hammer, ClipboardCheck, FileText, Factory } from "lucide-react";
import servicePreventive from "@/assets/service-preventive.jpg";
import serviceCorrective from "@/assets/service-corrective.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceContract from "@/assets/service-contract.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Inspecciones programadas para evitar fallas y maximizar la vida útil de sus equipos de climatización.",
    image: servicePreventive,
  },
  {
    icon: AlertCircle,
    title: "Mantenimiento Correctivo",
    description: "Reparaciones rápidas y efectivas para resolver problemas técnicos y restaurar el funcionamiento óptimo.",
    image: serviceCorrective,
  },
  {
    icon: Hammer,
    title: "Instalaciones Certificadas",
    description: "Instalación profesional de sistemas Split, Rooftop, Centrales y VRF con garantía y certificación técnica.",
    image: serviceInstallation,
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías y Diagnósticos",
    description: "Evaluación técnica completa del estado de sus equipos con informes detallados y recomendaciones.",
    image: serviceAudit,
  },
  {
    icon: FileText,
    title: "Contratos Empresariales",
    description: "Planes de mantenimiento personalizados para empresas con atención prioritaria y tarifas preferenciales.",
    image: serviceContract,
  },
  {
    icon: Factory,
    title: "Servicios Industriales",
    description: "Especialistas en Chillers, cámaras frigoríficas y sistemas de refrigeración industrial de gran escala.",
    image: serviceIndustrial,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-aqua">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales en refrigeración y climatización con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-10 h-10 text-aqua" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-aqua transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
