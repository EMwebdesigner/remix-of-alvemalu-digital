import { ExternalLink } from "lucide-react";
import productSpareParts from "@/assets/product-spare-parts.jpg";
import productFilters from "@/assets/product-filters.jpg";
import productTools from "@/assets/product-tools.jpg";
import mercadoLibreBg from "@/assets/mercadolibre-bg.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Repuestos Originales",
      description: "Compresores, válvulas y componentes certificados",
      image: productSpareParts,
      link: "https://www.mercadolibre.com.ar",
    },
    {
      title: "Filtros y Accesorios",
      description: "Filtros de aire, refrigerantes y kits de mantenimiento",
      image: productFilters,
      link: "https://www.mercadolibre.com.ar",
    },
    {
      title: "Herramientas y Equipos",
      description: "Manómetros, herramientas profesionales y equipamiento técnico",
      image: productTools,
      link: "https://www.mercadolibre.com.ar",
    },
  ];

  return (
    <section 
      id="productos" 
      className="py-20 bg-coldgray relative"
      style={{
        backgroundImage: `url(${mercadoLibreBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-coldgray/85" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-petroleum mb-4">
            Nuestros Productos
          </h2>
          <p className="text-graphite text-lg max-w-3xl mx-auto">
            Comercializamos repuestos originales y accesorios de las mejores marcas para sistemas de refrigeración y climatización. 
            Garantizamos calidad, disponibilidad inmediata y precios competitivos para mantener tu equipo funcionando al máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-[0_8px_30px_rgb(255,196,0,0.3)] transition-all duration-300 hover:scale-105 block h-80 border-2 border-transparent hover:border-[#FFC400]"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-petroleum/90 via-petroleum/50 to-transparent group-hover:from-petroleum/95 group-hover:via-petroleum/60 transition-all duration-300" />
              
              <div className="relative h-full flex flex-col justify-end p-6 text-icewhite">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {product.title}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-icewhite/90 text-sm">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-4 inline-flex items-center text-[#FFC400] group-hover:text-icewhite font-semibold transition-colors duration-300">
                  Ver en Mercado Libre
                  <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;