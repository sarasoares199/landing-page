import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full gap-2">
      <h3 className="text-2xl font-semibold tracking-wider">
        Página não encontrada.
      </h3>
      <p>A página que você procura não existe!</p>
      <Frown size={100} className="mt-8 text-primary" />
      <Link href={"/"} className="mt-8 cursor-pointer">
        <Button className="cursor-pointer">Voltar para o início</Button>
      </Link>
    </section>
  );
};

export default notFound;
