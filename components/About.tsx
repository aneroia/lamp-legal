import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

export default function About() {
  return <section id="about" className="section about-section container">
    <div className="about-decor scroll-decor" data-scroll-move="24" data-scroll-scale="0.035" aria-hidden="true" />
    <Reveal className="about-copy">
      <div className="eyebrow section-kicker"><span>01</span> — О КОМПАНИИ</div>
      <h2>Тут <span className="accent-word">договариваются</span></h2>
      <p>Мы помогаем бизнесу, стартапам и digital-командам находить решения в правовых вопросах — без сложных формулировок и лишней бюрократии. Наша задача — чтобы вы могли развиваться, а мы позаботимся о юридической стороне.</p>
      <ContactButton className="inline-link">Расскажите о своей задаче <ArrowRight size={17} /></ContactButton>
    </Reveal>
    <Reveal className="about-visual" delay={120}>
      <div className="photo-frame"><Image src={publicPath("/images/boardroom.png")} alt="Переговорная комната юридической компании" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="photo-stamp">Партнёрство.<br />Экспертность.<br />Результат.<span /></div>
    </Reveal>
  </section>;
}
