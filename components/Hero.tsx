import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

export default function Hero() {
  return <section className="home-hero" aria-labelledby="hero-title">
    <div className="hero-decor hero-decor-peach scroll-decor" data-scroll-move="20" aria-hidden="true" />
    <div className="hero-decor hero-decor-blue scroll-decor" data-scroll-move="-26" aria-hidden="true" />
    <div className="hero-curve scroll-decor" data-scroll-move="15" aria-hidden="true" />
    <div className="hero-dots scroll-decor" data-scroll-move="-16" aria-hidden="true" />
    <div className="container home-hero-inner">
      <div className="home-hero-copy">
        <div className="eyebrow">ЮРИДИЧЕСКАЯ КОМПАНИЯ<br />ДЛЯ БИЗНЕСА</div>
        <h1 id="hero-title">Право,<br />которое <span>работает</span><br />на бизнес</h1>
        <p>Юридическая поддержка для бизнеса,<br />стартапов и digital-команд.<br />Договоры, конфликты, интеллектуальная собственность.<br />Говорим на языке бизнеса.</p>
        <div className="hero-actions">
          <ContactButton className="button button-primary">Получить консультацию <ArrowRight size={17} /></ContactButton>
          <Link href="/#about" className="inline-link">Узнать больше <ArrowRight size={17} /></Link>
        </div>
      </div>
      <div className="home-hero-visual">
        <div className="home-hero-photo"><Image src={publicPath("/images/hero-office.png")} alt="Рабочее место с видом на город" fill priority sizes="(max-width: 760px) 100vw, 46vw" /></div>
        <div className="hero-note hero-note-top">ЯСНО.<br />СПОКОЙНО.<br />ПО-ДЕЛОВОМУ.<span /></div>
        <div className="hero-note hero-note-bottom">ТЕХНОЛОГИИ.<br />ЛЮДИ.<br />ПРАВО.<br />РОСТ.<span /></div>
        <div className="hero-glass hero-glass-one scroll-decor" data-scroll-move="-20" aria-hidden="true" />
        <div className="hero-glass hero-glass-two scroll-decor" data-scroll-move="18" aria-hidden="true" />
      </div>
    </div>
  </section>;
}
