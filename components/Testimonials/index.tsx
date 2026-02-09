"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Paciente Anônimo",
    content:
      "Por muito tempo eu não reconhecia meu próprio valor. Achava que minhas necessidades e sentimentos não eram importantes. Foi na terapia que comecei a me enxergar de verdade. Aprendi a me respeitar, a me colocar em primeiro lugar e a valorizar minha própria felicidade.",
    rating: 5,
  },
  {
    name: "Paciente Anônimo",
    content:
      "Oi, Sara! Quero lhe agradecer imensamente pela força e por todo o apoio que você nos deu no momento em que eu mais precisava. Sou muito grata pelo suporte da última sessão.",
    rating: 5,
  },
  {
    name: "Paciente Anônimo",
    content:
      "Muito obrigado por tudo! Você me fez enxergar coisas em mim que eu não via antes e me ajudou a entender muita coisa. Hoje acredito que a terapia vai muito além de apenas 'pagar alguém'; é sobre buscar ajuda de verdade e se transformar.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              O que dizem sobre meu trabalho
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A confiança dos meus pacientes e suas famílias é o que me motiva a
              continuar oferecendo um atendimento acolhedor e de qualidade.
            </p>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Depoimento anterior"
                className="bg-transparent hover:bg-[#B2C6D1] cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Próximo depoimento"
                className="bg-transparent hover:bg-[#B2C6D1] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>

          <div className="relative">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary/20 mb-4" />

                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
