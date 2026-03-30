import { Wind, Home, Building2, Factory, Snowflake, Container, Warehouse, Refrigerator, Cog } from "lucide-react";

const equipment = [
  { icon: Wind, name: "Split e Inverter", description: "Unidades individuales residenciales" },
  { icon: Home, name: "Multisplit", description: "Sistemas multi-zona para hogares" },
  { icon: Building2, name: "Rooftop", description: "Equipos comerciales de azotea" },
  { icon: Factory, name: "Centrales de Aire", description: "Sistemas centralizados industriales" },
  { icon: Cog, name: "VRF/VRV", description: "Flujo de refrigerante variable" },
  { icon: Snowflake, name: "Chillers", description: "Enfriadores industriales" },
  { icon: Container, name: "Cámaras Frigoríficas", description: "Almacenamiento en frío" },
  { icon: Refrigerator, name: "Freezers Comerciales", description: "Congelación comercial" },
  { icon: Warehouse, name: "Sistemas Industriales", description: "Soluciones a gran escala" },
];

const EquipmentSection = () => {
  return (
    <section id="equipos" className="section-padding bg-graphite">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-icewhite mb-4">
            Equipos que <span className="text-aqua">Atendemos</span>
          </h2>
          <p className="text-lg text-icewhite/80 max-w-2xl mx-auto">
            Experiencia certificada en todo tipo de sistemas de climatización y refrigeración
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group bg-petroleum/50 backdrop-blur-sm rounded-xl p-6 border border-aqua/20 hover:border-aqua hover:bg-petroleum/70 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,200,215,0.3)] animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-aqua/10 p-3 rounded-lg group-hover:bg-aqua/20 transition-colors">
                  <item.icon className="w-8 h-8 text-aqua" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-icewhite mb-2 group-hover:text-aqua transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-icewhite/70 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
