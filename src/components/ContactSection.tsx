import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-coldgray">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-aqua">Contáctanos</span> Hoy Mismo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para atender sus necesidades de refrigeración y climatización
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in">
            <div className="bg-graphite rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-aqua/20 p-3 rounded-lg">
                  <MapPin className="w-4 h-4 text-aqua" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-icewhite">Dirección</h3>
                  <p className="text-xs text-icewhite/80">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-graphite rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-aqua/20 p-3 rounded-lg">
                  <Phone className="w-4 h-4 text-aqua" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-icewhite">Teléfono</h3>
                  <a
                    href="https://wa.me/5491152483469"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-icewhite/80 hover:text-aqua transition-colors"
                  >
                    +54 9 11 5248-3469
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-graphite rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-aqua/20 p-3 rounded-lg">
                  <Mail className="w-4 h-4 text-aqua" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-icewhite mb-2">Email</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@alvemalu.com"
                      className="text-sm block text-icewhite/80 hover:text-aqua transition-colors"
                    >
                      info@alvemalu.com
                    </a>
                    <a
                      href="mailto:ventas@alvemalu.com"
                      className="text-xs block text-icewhite/80 hover:text-aqua transition-colors"
                    >
                      ventas@alvemalu.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-graphite rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-aqua/20 p-3 rounded-lg">
                  <Clock className="w-4 h-4 text-aqua" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-icewhite mb-2">Horarios</h3>
                  <div className="text-xs text-icewhite/80 space-y-1">
                    <p>Lunes – Viernes: 8:00 AM – 6:00 PM</p>
                    <p>Sábados: 9:00 AM – 2:00 PM</p>
                    <p className="text-aqua font-semibold mt-2">Emergencias 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[430px] rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47476061104!2d-58.573439!3d-34.615662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ALVEMALU S.A."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
