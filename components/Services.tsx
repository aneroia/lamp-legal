import { ArrowRight, Copyright, FileText, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { title: "Договоры", text: "Подготовка, аудит и сопровождение сделок.", icon: FileText },
  { title: "Интеллектуальная собственность", text: "Товарные знаки, лицензии, авторские права.", icon: Copyright },
  { title: "Конфликты", text: "Переговоры и защита интересов бизнеса.", icon: ShieldCheck },
  { title: "Стартапы и Digital", text: "Юридическое сопровождение IT-команд.", icon: Rocket },
];

export default function Services() {
  return <section id="services" className="section services-section">
    <div className="services-background-shape scroll-decor" data-scroll-move="-24" data-scroll-scale="0.025" aria-hidden="true" />
    <div className="services-background-dots scroll-decor" data-scroll-move="20" data-scroll-scale="0.035" aria-hidden="true" />
    <div className="container">
      <Reveal className="services-heading">
        <div className="eyebrow section-kicker"><span>02</span> — ПРАКТИКИ</div>
        <h2>Чем мы <span className="accent-word">занимаемся</span></h2>
        <p>От первого договора до защиты интересов компании — юридическая поддержка в нужный момент.</p>
      </Reveal>
      <div className="service-grid">{services.map((service, i) => {
        const Icon = service.icon;
        return <Reveal className="service-card" key={service.title} delay={i * 75}>
          <div className="service-icon"><Icon size={27} strokeWidth={1.8} /></div>
          <h3>{service.title}</h3><p>{service.text}</p>
          <span className="service-arrow"><ArrowRight size={17} /></span>
        </Reveal>;
      })}</div>
    </div>
  </section>;
}
