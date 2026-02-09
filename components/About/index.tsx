"use client";

import Image from "next/image";
import { GraduationCap, Award, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useExperienceYears } from "@/hooks/useExperienceYears";

const qualifications = [
  {
    icon: GraduationCap,
    title: "Formação Acadêmica",
    description: "Psicologia | Pós-graduanda em Psicologia Hospitalar",
  },
  {
    icon: Award,
    title: "Especializações",
    description:
      "PNL aplicada a Gestão de Pessoas | Psicologia do Trânsito | TCC",
  },
  {
    icon: Heart,
    title: "Missão",
    description:
      "Atendimento ético, humanizado e sensível às diferentes realidades de cada pessoas",
  },
];

export function About() {
  const yearsExperience = useExperienceYears(2022);
  const yearsPSocial = useExperienceYears(2023);

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-sara.jpg"
                alt="Sara Soares - Psicóloga"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <p className="text-2xl font-bold">{yearsExperience}+</p>
                <p className="text-xs">Anos</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre Mim
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Olá, eu sou Sara Soares
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou psicóloga, com atuação clínica há {yearsExperience} anos,
              trabalhando a partir da Terapia Cognitivo-Comportamental (TCC),
              uma abordagem focada na compreensão da relação entre pensamentos,
              emoções e comportamentos, auxiliando no desenvolvimento de
              estratégias mais saudáveis para lidar com dificuldades emocionais
              e relacionais.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tenho especialização em Programação Neurolinguística aplicada à
              Gestão de Pessoas, formação em Psicologia do Trânsito e sou
              pós-graduanda em Psicologia Hospitalar. Além da prática clínica,
              atuo há {yearsPSocial} anos como psicóloga social, o que contribui
              para um olhar ético, humanizado e sensível às diferentes
              realidades, priorizando um atendimento acolhedor e
              individualizado.
            </p>

            <div className="space-y-4 mb-8">
              {qualifications.map((qual) => (
                <div key={qual.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <qual.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {qual.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {qual.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="#contato">
                Entre em Contato
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
