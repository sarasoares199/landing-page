import { Users, Clock, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Famílias",
    description: "atendidas",
  },
  {
    icon: Clock,
    value: "8",
    label: "Anos",
    description: "de experiência",
  },
  {
    icon: Award,
    value: "4",
    label: "Especializações",
    description: "em terapia infantil",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfação",
    description: "dos pais",
  },
];

export function Stats() {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif text-2xl md:text-3xl text-foreground font-medium max-w-3xl mx-auto text-balance">
            Sara Soares tem experiência em psicologia infantil, ajudando
            crianças a desenvolverem habilidades emocionais e comportamentais
            saudáveis.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
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
