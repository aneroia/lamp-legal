"use client";

import { useEffect, useState } from "react";
import {
  BadgeCheck,
  ChevronDown,
  Copyright,
  Database,
  FileText,
  Handshake,
  Laptop2,
  Scale,
  Search,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    title: "Юридическое сопровождение бизнеса",
    short: "Внешняя юридическая команда — от точечных задач до проектов под ключ.",
    detail: "Берём на себя текущую юридическую работу компании: консультации, документы, согласование решений, участие в переговорах. Работаем разово, по проекту или по абонентской модели — как удобнее вам.",
    icon: Handshake,
  },
  {
    title: "Договоры и сделки",
    short: "Разработка и экспертиза договоров, сопровождение переговоров.",
    detail: "Готовим договоры с заказчиками, подрядчиками и партнёрами, проверяем чужие проекты и показываем, где риск и что с ним делать. Сопровождаем переговоры так, чтобы условия защищали вас и не тормозили сделку.",
    icon: FileText,
  },
  {
    title: "IT и digital",
    short: "Сайты, сервисы, платформы, пользовательские документы.",
    detail: "Собираем пакет документов под цифровой продукт или сайт: политика конфиденциальности, пользовательское соглашение, оферта, согласия. Проверяем продукт на юридические риски до запуска и после.",
    icon: Laptop2,
  },
  {
    title: "Интеллектуальная собственность",
    short: "Товарные знаки, права на ПО и контент, лицензионные модели.",
    detail: "Регистрируем товарные знаки, оформляем права на код, дизайн и контент, выстраиваем лицензионную модель продукта и договоры с разработчиками, чтобы права принадлежали компании.",
    icon: Copyright,
  },
  {
    title: "Персональные данные",
    short: "Приводим обработку персональных данных в соответствие с требованиями закона.",
    detail: "Проводим аудит процессов, готовим локальные акты и согласия, сопровождаем уведомление Роскомнадзора и настраиваем документы под ваш сервис. Помогаем с вопросами по утечкам и проверкам.",
    icon: Database,
  },
  {
    title: "Реестр российского ПО",
    short: "Оценка продукта и подготовка заявки на включение в реестр.",
    detail: "Проверяем, подходит ли продукт под требования, готовим комплект документов и сопровождаем заявку на всех этапах.",
    icon: BadgeCheck,
  },
  {
    title: "Споры и претензионная работа",
    short: "Претензии, досудебное урегулирование, позиция в споре.",
    detail: "Готовим претензии и ответы на них, оцениваем перспективы спора, выстраиваем позицию и понятный план дальнейших действий.",
    icon: Scale,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeIndex]);

  return <section id="services" className="section services-section services-editorial">
    <div className="services-background-shape scroll-decor" data-scroll-move="-24" data-scroll-scale="0.025" aria-hidden="true" />
    <div className="services-background-dots scroll-decor" data-scroll-move="20" data-scroll-scale="0.035" aria-hidden="true" />
    <div className="container">
      <Reveal className="services-heading section-heading">
        <div className="eyebrow section-kicker"><span>02</span> — УСЛУГИ</div>
        <div><h2>Чем мы <span className="accent-word">помогаем</span></h2><p>Направления, которые закрывают путь продукта от запуска до масштабирования. Нажмите на карточку, чтобы увидеть подробности.</p></div>
      </Reveal>
      <div className="service-tiles">{services.map((service, index) => {
        const Icon = service.icon;
        const isActive = activeIndex === index;
        return <Reveal key={service.title} delay={(index % 4) * 45}>
          <button type="button" className={`service-tile${isActive ? " is-expanded" : ""}`} onClick={() => setActiveIndex(isActive ? null : index)} aria-expanded={isActive} aria-controls={`service-detail-${index}`}>
            <span className="service-tile-icon"><Icon size={39} strokeWidth={1.45} /></span>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <span className="service-tile-toggle">{isActive ? "Свернуть" : "Подробнее"} <ChevronDown size={17} strokeWidth={1.6} aria-hidden="true" /></span>
            <span id={`service-detail-${index}`} className="service-tile-detail" aria-hidden={!isActive}><span><span>{service.detail}</span></span></span>
          </button>
        </Reveal>;
      })}</div>
      <Reveal className="grant-banner">
        <span className="grant-icon"><Search size={24} strokeWidth={1.7} /></span>
        <div><span>ОТДЕЛЬНЫЙ ПРОДУКТ</span><h3>Аналитика по грантам и мерам поддержки</h3><p>Подберём программы, под которые подходит ваш проект, и составим понятный план подготовки.</p></div>
      </Reveal>
    </div>
  </section>;
}
