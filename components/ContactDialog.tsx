"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

const ContactContext = createContext<(() => void) | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const firstInput = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInput.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = [...dialog.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]'
      )];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [open]);

  function close() {
    setOpen(false);
    setMessage("");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setMessage("Спасибо! Мы получили заявку и свяжемся с вами в ближайшее время. Форма пока работает в демонстрационном режиме, поэтому данные никуда не отправлены.");
  }

  return (
    <ContactContext.Provider value={() => { setMessage(""); setOpen(true); }}>
      {children}
      {open && (
        <div className="contact-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="contact-dialog" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <button type="button" className="contact-close" onClick={close} aria-label="Закрыть окно"><X size={22} /></button>
            <div className="eyebrow">СВЯЗАТЬСЯ С НАМИ</div>
            <h2 id="contact-title">Расскажите<br /><span>о задаче.</span></h2>
            <p className="contact-description">Предложим понятный формат работы, сроки и стоимость. Первое обсуждение ни к чему вас не обязывает.</p>
            {message ? (
              <div className="contact-message" role="status">
                <p>{message}</p>
                <button type="button" className="button button-outline" onClick={close}>Закрыть</button>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <label htmlFor="contact-name">Как к вам обращаться</label>
                <input id="contact-name" ref={firstInput} name="name" type="text" autoComplete="name" placeholder="Ваше имя" minLength={2} maxLength={80} required />
                <label htmlFor="contact-channel">Telegram, телефон или email</label>
                <input id="contact-channel" name="contact" type="text" autoComplete="email" placeholder="Ваши контакты" minLength={3} maxLength={100} required />
                <label htmlFor="contact-company">Название компании или проекта <span className="form-optional">необязательно</span></label>
                <input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={120} />
                <label htmlFor="contact-task">Что нужно сделать</label>
                <textarea id="contact-task" name="task" placeholder="Коротко: что произошло и что хотите получить" minLength={10} maxLength={1200} required />
                <label className="contact-consent">
                  <input type="checkbox" name="consent" required />
                  <span>Я согласен на обработку персональных данных и ознакомлен с <Link href="/privacy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</Link>.</span>
                </label>
                <button type="submit" className="button button-primary contact-submit">Отправить заявку <ArrowUpRight size={18} /></button>
              </form>
            )}
            <p className="contact-alt">Или напишите нам в Telegram: <a href="https://t.me/lamp_room_legal" target="_blank" rel="noopener noreferrer">@lamp_room_legal</a></p>
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}

export function ContactButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const open = useContext(ContactContext);
  return <button type="button" className={className} onClick={() => open?.()}>{children}</button>;
}
