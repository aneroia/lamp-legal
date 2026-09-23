import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

const navigation = [
  { label: "О компании", href: "/#about" },
  { label: "Услуги", href: "/#services" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/#contacts" },
];

export default function Header() {
  return <header className="site-header"><div className="header-inner container">
    <div className="header-brand">
      <Link href="/" className="brand-link" aria-label="Лэмп Лигал — на главную"><Image src={publicPath("/images/logoBlack.png")} alt="Лэмп Лигал" width={292} height={80} priority /></Link>
      <span className="header-tagline">ЮРИДИЧЕСКАЯ КОМПАНИЯ<br />ДЛЯ БИЗНЕСА</span>
    </div>
    <nav className="desktop-nav" aria-label="Основная навигация">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <ContactButton className="button button-primary header-cta">Получить консультацию <ArrowRight size={17} /></ContactButton>
    <details className="mobile-menu"><summary aria-label="Открыть меню"><Menu size={24} /></summary><nav aria-label="Мобильная навигация">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<ContactButton className="mobile-contact">Получить консультацию</ContactButton></nav></details>
  </div></header>;
}
