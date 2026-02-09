import {
  Brain,
  Puzzle,
  Layers,
  Gamepad2,
  HeartHandshake,
  Baby,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const approaches = [
  {
    icon: Brain,
    title: "TCC - Terapia Cognitivo Comportamental",
    description:
      "Ajuda crianças a identificar e modificar pensamentos negativos, desenvolvendo habilidades para lidar com ansiedade, medos e dificuldades emocionais.",
    benefits: [
      "Manejo da ansiedade",
      "Regulação emocional",
      "Resolução de problemas",
      "Habilidades sociais",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Relacionamento e Inseguranca Emocional",
    description:
      "Trabalho com pessoas que vivenciam insegurança emocional nos relacionamentos, ajudando a compreender sentimentos como medo de rejeição, abandono, ciúmes excessivos e dificuldade em se posicionar dentro da relação.",
    benefits: [
      "Autoconfiança emocional",
      "Vínculos saudáveis",
      "Padrões relacionais",
      "Diálogo e equilíbrio",
    ],
  },
  {
    icon: Baby,
    title: "Ansiedade Infantil",
    description:
      "A ansiedade infantil pode se manifestar por meio de preocupação excessiva, choro frequente, irritabilidade, dificuldades para dormir, medos intensos ou queixas físicas, como dor de barriga e dor de cabeça.",
    benefits: [
      "Regulação emocional",
      "Segurança emocional",
      "Orientação aos pais",
      "Abordagem lúdica",
    ],
  },
  {
    icon: Shield,
    title: "Ambiente Seguro e Acolhedor",
    description:
      "Um espaço sem julgamentos, onde é possível identificar padrões emocionais, compreender comportamentos e se relacionar de forma mais consciente.",
    benefits: [
      "Autoconhecimento",
      "Crescimento pessoal",
      "Resolução de conflitos",
      "Apoio emocional",
    ],
  },
];

export function Approaches() {
  return (
    <section id="abordagens" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Abordagens Terapêuticas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Como Posso Te Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atuo principalmente em duas áreas, oferecendo um atendimento
            acolhedor e individualizado para cada pessoa e família.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {approaches.map((approach) => (
            <Card
              key={approach.title}
              className="group hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <approach.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="font-serif text-xl md:text-2xl">
                  {approach.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {approach.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {approach.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
