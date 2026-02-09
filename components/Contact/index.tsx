"use client";

import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(87) 99629-7153",
    detail: "WhatsApp disponível",
    link: "https://wa.me/5587996297153",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@psi_sarasoares",
    detail: "Siga nosso perfil",
    link: "https://www.instagram.com/psi_sarasoares/",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "sarasoares.199@hotmail.com",
    detail: "Resposta em até 24h",
    link: "mailto:sarasoares.199@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Dr. Carlos Howard Bradley, 35 - Centro",
    detail: "Arcoverde, PE",
    link: "https://maps.app.goo.gl/djeZsow9YjgJ2LP46",
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta ou tirar suas dúvidas.
            Estou aqui para te ajudar a cuidar da sua saúde emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna de Informações (Cartões) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:col-span-1">
            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  key={info.label}
                  className="border-border overflow-hidden"
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Coluna do Mapa */}
          <div className="lg:col-span-2 h-400px lg:h-full min-h-350px rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8062113831234!2d-37.05654094916338!3d-8.420684006240332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a81bea249fc7e7%3A0x9d13210b77e2ce0e!2sRua%20Dr.%20Carlos%20Howard%20Bradiley%2C%2035%20-%20Centro%2C%20Arcoverde%20-%20PE%2C%2056506-580!5e0!3m2!1spt-BR!2sbr!4v1770654243983!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização de Sara Soares"
              className="grayscale-20% contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
