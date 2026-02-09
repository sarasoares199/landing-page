"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Star, MessageCircle } from "lucide-react";
import { useExperienceYears } from "@/hooks/useExperienceYears";

export function Hero() {
  const years = useExperienceYears(2022);

  return (
    <section
      id="inicio"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Psicologia Clinica | TCC
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Cuidando da Sua Saude Mental com Acolhimento
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Sou Sara Soares, psicóloga clínica com atuação em Terapia
              Cognitivo-Comportamental (TCC). Especializada em relacionamentos,
              insegurança emocional e ansiedade infantil, oferecendo um
              atendimento acolhedor e individualizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="text-base">
                <Link
                  href="https://wa.me/5587996297153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base bg-transparent hover:bg-[#B2C6D1]"
              >
                <Link href="#sobre">
                  <Play className="w-5 h-5 mr-2" />
                  Conheça Meu Trabalho
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {years} anos
                  </span>{" "}
                  de experiência clínica
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-4/5 max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-psychologist.jpg"
                  alt="Sara Soares - Psicóloga Infantil"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Atendimento Clínico
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Presencial para adultos e crianças
                      </p>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm font-medium text-foreground">
                        Atendimento Online
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Consultas por videochamada (Exclusivo para adultos)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">CRP</p>
                  <p className="text-xs text-muted-foreground">
                    Registro Ativo
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
