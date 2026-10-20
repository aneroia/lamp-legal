import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { ContactButton } from "./ContactDialog";

const audiences = [
  "стартап или IT-проект на любой стадии — от идеи до масштабирования",
  "компания, которая запускает цифровой продукт, сайт, сервис или платформу",
  "команда, которой нужна юридическая поддержка рядом с продуктом, а не раз в год",
  "бизнес, который хочет понимать риски и принимать решения, а не получать только заключения",
];

export default function Audience() {
  return <section id="clients" className="section audience-section section-divider">
    <div className="audience-shape scroll-decor" data-scroll-move="-20" data-scroll-scale="0.03" aria-hidden="true" />
    <div className="container audience-layout">
      <Reveal className="audience-heading">
        <div className="eyebrow section-kicker"><span>07</span> — КЛИЕНТЫ</div>
        <h2>С кем мы <span className="accent-word">работаем</span></h2>
        <p>Нам подходит, если вы:</p>
      </Reveal>
      <div className="audience-list">{audiences.map((item, index) => <Reveal className="audience-item" key={item} delay={index * 65}><Check size={21} strokeWidth={2} /><span>{item}</span></Reveal>)}</div>
      <Reveal className="audience-footer"><p>Не уверены, подходим ли мы? Напишите — честно скажем, сможем ли помочь.</p><ContactButton className="inline-link">Обсудить задачу <ArrowRight size={17} /></ContactButton></Reveal>
    </div>
  </section>;
}
