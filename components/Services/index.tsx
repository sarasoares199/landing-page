import Image from "next/image";
import { Video, Users, BookOpen, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Consulta Online",
    description:
      "Atendimento por videochamada para maior comodidade da família, mantendo a qualidade do trabalho presencial.",
  },
  {
    icon: Users,
    title: "Orientação aos Pais",
    description:
      "Sessões dedicadas aos pais para orientação e acompanhamento do desenvolvimento da criança.",
  },
  {
    icon: BookOpen,
    title: "Avaliação Psicológica",
    description:
      "Avaliação completa para compreender as necessidades específicas de cada criança.",
  },
];

const features = [
  "Ambiente acolhedor e seguro",
  "Abordagem personalizada",
  "Parceria com a família",
  "Acompanhamento contínuo",
];

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Oferecemos os melhores serviços de psicologia infantil
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com atendimento de alta qualidade e padrão internacional, ajudamos
              crianças a desenvolverem todo seu potencial emocional e cognitivo.
            </p>

            <div className="space-y-6 mb-8">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/therapy-session.jpg"
                alt="Sessão de terapia infantil"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute -bottom-6 md:-right-6 -right-1 bg-background rounded-xl shadow-lg p-6 border border-border max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Confiança das Famílias
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Mais de 500 famílias confiam em nosso trabalho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
