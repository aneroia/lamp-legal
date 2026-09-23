import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";
import { publicPath } from "@/lib/paths";

export function ContactSection() {
  return <section id="contacts" className="contact-section">
    <div className="contact-background-arc scroll-decor" data-scroll-move="20" aria-hidden="true" />
    <div className="contact-background-square scroll-decor" data-scroll-move="-24" aria-hidden="true" />
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
