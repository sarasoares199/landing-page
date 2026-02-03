import { Brain, Puzzle, Layers, Gamepad2 } from "lucide-react";
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
    ],
  },
  {
    icon: Puzzle,
    title: "Terapia ABA",
    description:
      "Análise do Comportamento Aplicada, especialmente eficaz para crianças com TEA, focando no desenvolvimento de habilidades sociais e comunicação.",
    benefits: [
      "Desenvolvimento social",
      "Comunicação",
      "Habilidades adaptativas",
    ],
  },
  {
    icon: Layers,
    title: "Terapia do Esquema",
    description:
      "Abordagem que trabalha padrões emocionais profundos, ajudando crianças a desenvolver autoestima saudável e relações interpessoais positivas.",
    benefits: ["Autoestima", "Vínculos afetivos", "Padrões emocionais"],
  },
  {
    icon: Gamepad2,
    title: "Ludoterapia",
    description:
      "Utiliza o brincar como ferramenta terapêutica, permitindo que a criança expresse emoções e trabalhe conflitos de forma natural e acolhedora.",
    benefits: [
      "Expressão emocional",
      "Criatividade",
      "Desenvolvimento integral",
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
            Questões que Trabalhamos Juntos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizo diferentes abordagens terapêuticas, escolhendo a mais
            adequada para cada criança e sua família.
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
