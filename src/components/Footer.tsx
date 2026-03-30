import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-petroleum text-icewhite">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              ALVEMALU <span className="text-aqua">S.A.</span>
            </div>
            <p className="text-icewhite/80 leading-relaxed">
              Especialistas en refrigeración y climatización industrial y residencial con más
              de 20 años de experiencia en el mercado argentino.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-aqua">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-icewhite/80 hover:text-aqua transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-icewhite/80 hover:text-aqua transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#equipos" className="text-icewhite/80 hover:text-aqua transition-colors">
                  Equipos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-icewhite/80 hover:text-aqua transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-aqua">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aqua/10 p-3 rounded-full hover:bg-aqua hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-aqua hover:text-petroleum" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aqua/10 p-3 rounded-full hover:bg-aqua hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-aqua hover:text-petroleum" />
              </a>
              <a
                href="https://wa.me/5491152483469"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aqua/10 p-3 rounded-full hover:bg-aqua hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-aqua hover:text-petroleum" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-aqua/10 p-3 rounded-full hover:bg-aqua hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-aqua hover:text-petroleum" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-icewhite/20 pt-8 text-center">
          <p className="text-icewhite/70">
            &copy; {currentYear} ALVEMALU S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
