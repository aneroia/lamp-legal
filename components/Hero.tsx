import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

const heroPrinciples = [
  { title: "Понимаем бизнес", text: "Смотрим на задачу не только с позиции права." },
  { title: "Ищем решение", text: "Не просто называем риск, а предлагаем рабочий путь." },
  { title: "Помогаем двигаться", text: "Чтобы юридические вопросы не тормозили бизнес." },
];

export default function Hero() {
  return <section className="home-hero" aria-labelledby="hero-title">
    <div className="hero-decor hero-decor-peach scroll-decor" data-scroll-move="20" data-scroll-scale="0.025" aria-hidden="true" />
    <div className="hero-curve scroll-decor" data-scroll-move="15" data-scroll-scale="0.018" aria-hidden="true" />
    <div className="hero-dots scroll-decor" data-scroll-move="-16" aria-hidden="true" />
    <div className="container home-hero-inner">
      <div className="home-hero-copy">
        <div className="eyebrow">ПРАВО, КОТОРОЕ РАБОТАЕТ НА БИЗНЕС</div>
        <h1 id="hero-title">Юридические решения<br />для <span>бизнеса</span> и IT</h1>
        <p>Помогаем компаниям и технологическим проектам запускать продукты, заключать сделки и масштабироваться. Выстраиваем юридическую защиту и процессы, которые работают на цели бизнеса.</p>
        <div className="hero-actions">
          <ContactButton className="button button-primary">Обсудить задачу <ArrowRight size={17} /></ContactButton>
          <Link href="/#services" className="inline-link">Посмотреть услуги <ArrowRight size={17} /></Link>
        </div>
        <p className="hero-microcopy">Расскажите в двух словах, что у вас происходит, — вернёмся с понятным следующим шагом.</p>
      </div>
      <div className="home-hero-visual">
        <div className="home-hero-photo"><Image src={publicPath("/images/hero-office.png")} alt="Рабочее место с видом на город" fill priority sizes="(max-width: 760px) 100vw, 46vw" /></div>
        {heroPrinciples.map((principle, index) => <div className={`hero-note hero-principle-note hero-principle-note-${index + 1}`} key={principle.title}><h2>{principle.title}</h2><p>{principle.text}</p><span /></div>)}
        <div className="hero-glass hero-glass-one scroll-decor" data-scroll-move="-20" data-scroll-scale="0.04" aria-hidden="true" />
        <div className="hero-glass hero-glass-two scroll-decor" data-scroll-move="18" data-scroll-scale="0.03" aria-hidden="true" />
      </div>
    </div>
  </section>;
}
