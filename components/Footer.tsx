import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

export function ContactSection() {
  return <section id="contacts" className="contact-section">
    <div className="contact-decor contact-decor-left scroll-decor" data-scroll-move="18" data-scroll-scale="0.035" aria-hidden="true" />
    <div className="contact-decor contact-decor-peach scroll-decor" data-scroll-move="14" data-scroll-scale="0.04" aria-hidden="true" />
    <div className="contact-decor contact-decor-lower scroll-decor" data-scroll-move="-16" data-scroll-scale="0.03" aria-hidden="true" />
    <svg className="contact-right-orbit scroll-decor" data-scroll-move="10" data-scroll-scale="0.012" viewBox="0 0 520 500" preserveAspectRatio="none" aria-hidden="true"><path d="M 516 70 C 350 40 226 174 205 476" /></svg>
    <div className="contact-dots contact-dots-left scroll-decor" data-scroll-move="15" aria-hidden="true" />
    <div className="contact-orange-orbit" aria-hidden="true">
      <svg viewBox="0 0 320 520" preserveAspectRatio="none" focusable="false"><path d="M 24 -16 C 172 112 224 282 198 548" /></svg>
      <span className="contact-orbit-dot" data-scroll-path />
    </div>
    <svg className="contact-blue-orbit scroll-decor" data-scroll-move="-13" viewBox="0 0 520 250" preserveAspectRatio="none" aria-hidden="true"><path d="M -20 214 C 172 38 356 34 546 226" /></svg>
    <div className="container contact-section-inner">
      <div className="contact-photo"><Image src={publicPath("/images/skyscrapers.png")} alt="Современные деловые здания" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
      <div className="contact-section-copy"><div className="eyebrow section-kicker"><span>09</span> — ОБСУДИМ ВАШУ ЗАДАЧУ</div><span className="contact-rule" /><h2>Расскажите о задаче —<br /><span>предложим решение</span></h2><p>Оставьте заявку, и мы вернёмся с понятным форматом работы, сроками и стоимостью. Первое обсуждение ни к чему вас не обязывает.</p><ContactButton className="button button-primary">Отправить заявку <ArrowRight size={17} /></ContactButton></div>
      <div className="contact-aside">Понятный формат.<br />Сроки.<br />Стоимость.<br />Следующий шаг.<span /></div>
    </div>
  </section>;
}

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-content">
    <div className="footer-brand"><Link href="/" aria-label="Лэмп Лигал — на главную" className="footer-logo"><Image src={publicPath("/images/logoWhite.png")} alt="Лэмп Лигал" width={250} height={68} /></Link><p>ПРАВО, КОТОРОЕ РАБОТАЕТ<br />НА БИЗНЕС</p><span>Юридические решения для бизнеса и IT.</span></div>
    <nav aria-label="Навигация в подвале"><Link href="/#tasks">Задачи</Link><Link href="/#services">Услуги</Link><Link href="/#approach">Как мы работаем</Link><Link href="/#cases">Кейсы</Link><Link href="/#workflow">Форматы</Link><Link href="/#team">Команда</Link><Link href="/#contacts">Контакты</Link><Link href="/blog">Блог</Link></nav>
    <div className="footer-details"><a href="https://t.me/lamp_room_legal" target="_blank" rel="noopener noreferrer">t.me/lamp_room_legal</a><a href="mailto:legal@lamp-legal.ru">legal@lamp-legal.ru</a><a href="tel:+79165323978">+7 (916) 532-39-78</a><Link href="/privacy">Политика конфиденциальности</Link></div>
    <ContactButton className="footer-contact">Оставить заявку<br />на консультацию <span><ArrowRight size={20} /></span></ContactButton>
    <div className="footer-bottom-line"><span>© 2026 Лэмп Лигал. Все права защищены.</span><span>ПРАВО, КОТОРОЕ РАБОТАЕТ НА БИЗНЕС</span></div>
  </div></footer>;
}
