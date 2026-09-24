import Image from "next/image";
import { Check, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { publicPath } from "@/lib/paths";

const principles = [
  { title: "Понятные объяснения", icon: Check },
  { title: "Бизнес-мышление", icon: Rocket },
  { title: "Фокус на результате", icon: ShieldCheck },
];

export default function Trust() {
  return <section id="approach" className="section approach-section container">
    <Reveal className="approach-visual">
      <div className="approach-photo"><Image src={publicPath("/images/about-generated.png")} alt="Юрист и клиент обсуждают документы" fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
      <div className="approach-quote">Внимание<br />к деталям.<br />Фокус<br />на результате.<span /></div>
    </Reveal>
    <Reveal className="approach-copy" delay={120}>
      <div className="eyebrow section-kicker"><span>03</span> — НАШ ПОДХОД</div>
      <h2>Больше ясности.<br /><span>Больше уверенности.</span></h2>
      <p>Мы говорим на языке бизнеса, думаем как предприниматели и ищем практические решения, а не усложняем процесс.</p>
      <div className="principles">{principles.map((item) => { const Icon = item.icon; return <div className="principle" key={item.title}><Icon size={29} strokeWidth={1.5} /><span>{item.title}</span></div>; })}</div>
    </Reveal>
    <div className="approach-decor scroll-decor" data-scroll-move="-20" data-scroll-scale="0.03" aria-hidden="true" />
  </section>;
}

