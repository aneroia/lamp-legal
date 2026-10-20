import Image from "next/image";
import { BriefcaseBusiness, CircleAlert, Flag, Route, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import { publicPath } from "@/lib/paths";

const principles = [
  { title: "Погружаемся в бизнес-модель", text: "Сначала разбираемся, как устроен ваш продукт и на чём вы зарабатываете, — и только потом даём рекомендации.", icon: BriefcaseBusiness },
  { title: "Предлагаем варианты решения", text: "Не просто называем риск, а показываем рабочие пути и помогаем выбрать подходящий.", icon: Route },
  { title: "Объясняем риски и последствия", text: "Простым языком: что может случиться, насколько это вероятно и во что обойдётся.", icon: CircleAlert },
  { title: "Берём задачу до результата", text: "Доводим работу до подписанного договора, зарегистрированного знака или закрытого вопроса.", icon: Flag },
  { title: "Работаем как внешняя юридическая команда", text: "Знаем ваш проект, помним контекст и подключаемся к задачам так, как это делал бы штатный юрист.", icon: UsersRound },
];

export default function Trust() {
  return <section id="approach" className="section approach-section container approach-expanded">
    <Reveal className="approach-visual">
      <div className="approach-photo"><Image src={publicPath("/images/about-generated.png")} alt="Юрист и клиент обсуждают документы" fill sizes="(max-width: 760px) 100vw, 40vw" /></div>
      <div className="approach-quote">Юридическая работа,<br />встроенная в бизнес.<span /></div>
    </Reveal>
    <Reveal className="approach-copy" delay={120}>
      <div className="eyebrow section-kicker"><span>03</span> — ПОЧЕМУ ЛЭМП ЛИГАЛ</div>
      <h2>Как мы <span>работаем</span></h2>
      <p>Юридическая работа, которая встроена в бизнес, а не стоит рядом с ним.</p>
      <div className="method-list">{principles.map((item) => { const Icon = item.icon; return <div className="method-item" key={item.title}><Icon size={31} strokeWidth={1.45} /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>; })}</div>
      <p className="approach-closing">Юридические вопросы не должны тормозить бизнес. Наша задача — чтобы так и было.</p>
    </Reveal>
    <div className="approach-decor scroll-decor" data-scroll-move="-20" data-scroll-scale="0.03" aria-hidden="true" />
  </section>;
}
