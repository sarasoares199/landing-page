import Image from "next/image";
import { Video, Users, BookOpen, CheckCircle, Sparkles } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Consulta Online",
    description:
      "Consultas por videochamada com a mesma qualidade do presencial, proporcionando comodidade e acessibilidade.",
  },
  {
    icon: Users,
    title: "Orientação aos Pais",
    description:
      "Suporte para que a família compreenda os sinais emocionais e contribua para um ambiente mais seguro e saudável.",
  },
  {
    icon: Sparkles,
    title: "Abordagem Ludica Infantil",
    description:
      "Utilizo brincadeiras, jogos e atividades expressivas para auxiliar a criança a reconhecer e comunicar seus sentimentos.",
  },
  {
    icon: BookOpen,
    title: "Atendimento Individual Adulto",
    description:
      "Trabalho com inseguranças emocionais, padrões de relacionamento e desenvolvimento de autoconfiança.",
  },
];

const features = [
  "Ambiente acolhedor e sem julgamentos",
  "Atendimento individualizado",
  "Parceria com a família",
  "Olhar ético e humanizado",
  "Abordagem baseada em TCC",
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
              Atendimento psicologico com qualidade e acolhimento
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ofereço um espaço seguro onde é possível identificar padrões
              emocionais, compreender comportamentos repetitivos e aprender a se
              relacionar de forma mais consciente, tanto com o outro quanto
              consigo mesmo.
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
                    Atendimento Humanizado
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Olhar sensível às diferentes realidades de cada pessoa
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
