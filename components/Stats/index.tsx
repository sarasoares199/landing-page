"use client";

import { useExperienceYears } from "@/hooks/useExperienceYears";
import { Users, Clock, Award, Heart } from "lucide-react";

export function Stats() {
  const yearsExperience = useExperienceYears(2022);
  const yearsPSocial = useExperienceYears(2023);

  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Pacientes",
      description: "atendidos",
    },
    {
      icon: Clock,
      value: yearsExperience,
      label: "Anos",
      description: "de experiência",
    },
    {
      icon: Award,
      value: yearsPSocial,
      label: "Anos",
      description: "como Psicóloga Social",
    },
    {
      icon: Heart,
      value: "98%",
      label: "Satisfação",
      description: "dos pacientes",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif text-2xl md:text-3xl text-foreground font-medium max-w-3xl mx-auto text-balance">
            Sara Soares tem experiência em psicologia clínica e social,
            auxiliando no desenvolvimento de estratégias mais saudáveis para
            lidar com dificuldades emocionais e relacionais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-1">
                <span className="text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-lg font-medium text-muted-foreground ml-1">
                  {stat.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
