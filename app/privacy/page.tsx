import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных — Лэмп Лигал",
  description: "Страница для будущего текста политики обработки персональных данных.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-placeholder">
        <div className="container">
          <Link href="/" className="inline-link"><ArrowLeft size={17} /> На главную</Link>
          <div className="eyebrow">ЛЭМП ЛИГАЛ / ДОКУМЕНТЫ</div>
          <h1>Политика обработки<br />персональных данных</h1>
          <div className="legal-placeholder-card">
            <span>ТЕКСТ В ПОДГОТОВКЕ</span>
            <p>Здесь будет размещён согласованный текст политики обработки персональных данных. Сейчас форма обратной связи работает только как макет и не отправляет введённые сведения.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
