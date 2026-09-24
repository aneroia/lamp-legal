import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

export function ContactSection() {
  return <section id="contacts" className="contact-section">
    <div className="contact-decor contact-decor-left scroll-decor" data-scroll-move="18" data-scroll-scale="0.035" aria-hidden="true" />
    <div className="contact-decor contact-decor-right scroll-decor" data-scroll-move="-20" data-scroll-scale="0.045" aria-hidden="true" />
    <div className="contact-decor contact-decor-peach scroll-decor" data-scroll-move="14" data-scroll-scale="0.04" aria-hidden="true" />
    <div className="contact-decor contact-decor-lower scroll-decor" data-scroll-move="-16" data-scroll-scale="0.03" aria-hidden="true" />
    <div className="contact-dots contact-dots-left scroll-decor" data-scroll-move="15" aria-hidden="true" />
    <div className="contact-dots contact-dots-right scroll-decor" data-scroll-move="-15" aria-hidden="true" />
    <div className="contact-orange-orbit" aria-hidden="true">
      <svg viewBox="0 0 320 520" preserveAspectRatio="none" focusable="false"><path d="M 24 -16 C 172 112 224 282 198 548" /></svg>
      <span className="contact-orbit-dot" data-scroll-path />
    </div>
    <svg className="contact-blue-orbit scroll-decor" data-scroll-move="-13" viewBox="0 0 520 250" preserveAspectRatio="none" aria-hidden="true"><path d="M -20 214 C 172 38 356 34 546 226" /></svg>
    <div className="container contact-section-inner">
      <div className="contact-photo"><Image src={publicPath("/images/skyscrapers.png")} alt="Современные деловые здания" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
      <div className="contact-section-copy"><span className="contact-rule" /><h2>Готовы обсудить<br /><span>вашу задачу?</span></h2><p>Оставьте заявку, и мы свяжемся с вами в ближайшее время.</p><ContactButton className="button button-primary">Получить консультацию <ArrowRight size={17} /></ContactButton></div>
      <div className="contact-aside">Бизнес растёт<br />там, где есть<br />надёжная<br />правовая основа.<span /></div>
    </div>
  </section>;
}

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-content">
    <div className="footer-brand"><Link href="/" aria-label="Лэмп Лигал — на главную" className="footer-logo"><Image src={publicPath("/images/logoWhite.png")} alt="Лэмп Лигал" width={250} height={68} /></Link><p>ЮРИДИЧЕСКАЯ КОМПАНИЯ<br />ДЛЯ БИЗНЕСА</p></div>
    <nav aria-label="Навигация в подвале"><Link href="/#about">О компании</Link><Link href="/#services">Услуги</Link><Link href="/blog">Блог</Link><Link href="/#contacts">Контакты</Link><Link href="/privacy">Политика данных</Link></nav>
    <div className="footer-details"><span>Лэмп Лигал</span><span>Москва</span></div>
    <ContactButton className="footer-contact">Оставьте заявку<br />на консультацию <span><ArrowRight size={20} /></span></ContactButton>
    <div className="footer-bottom-line"><span>© 2026 Лэмп Лигал</span><span>ЯСНО. СПОКОЙНО. ПО-ДЕЛОВОМУ.</span></div>
  </div></footer>;
}
