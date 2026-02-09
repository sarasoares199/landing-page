import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/public/images/logo-footer.png";

const socialLinks = [
  { icon: Phone, href: "https://wa.me/5587996297153", label: "WhatsApp" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/psi_sarasoares/",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:sarasoares.199@hotmail.com", label: "E-mail" },
];

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#abordagens", label: "Abordagens" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image
                src={logo.src}
                alt="Logo Sara Soares"
                width={250}
                height={20}
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Psicóloga clínica especializada em TCC, dedicada ao acolhimento e
              bem-estar emocional de adultos e crianças.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-[#B2C6D1] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Rua Dr. Carlos Howard Bradley, 35 - Centro</li>
              <li>Arcoverde, PE</li>
              <li>(87) 99629-7153</li>
              <li>sarasoares.199@hotmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Sara Soares Psicologia. Todos os
            direitos reservados.
          </p>
          <p className="text-sm text-background/60">CRP 02/27331</p>
        </div>
      </div>
    </footer>
  );
}
