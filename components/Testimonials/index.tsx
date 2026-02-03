"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe do Pedro, 7 anos",
    content:
      "A Sara mudou a vida do meu filho. Ele era uma criança muito ansiosa e depois de alguns meses de terapia, consegue lidar muito melhor com suas emoções. Sou muito grata!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Pai da Ana, 5 anos",
    content:
      "Profissional incrível! A Ana tinha dificuldades de socialização e hoje é outra criança. A abordagem lúdica da Sara fez toda diferença no tratamento.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Mãe do Lucas, 9 anos",
    content:
      "A orientação aos pais foi fundamental. Aprendemos muito sobre como apoiar nosso filho em casa. O trabalho da Sara é completo e muito profissional.",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Pai da Sofia, 6 anos",
    content:
      "O atendimento online foi uma surpresa positiva. Mesmo à distância, a Sara conseguiu criar um vínculo forte com nossa filha. Recomendo muito!",
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
              O que as famílias dizem sobre nosso trabalho
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A confiança das famílias é o que nos motiva a continuar oferecendo
              o melhor atendimento para cada criança.
            </p>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Depoimento anterior"
                className="bg-transparent hover:bg-[#B2C6D1]"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Próximo depoimento"
                className="bg-transparent hover:bg-[#B2C6D1]"
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
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
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
