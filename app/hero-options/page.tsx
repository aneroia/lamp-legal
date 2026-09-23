import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import { ContactButton } from "@/components/ContactDialog";
import { publicPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Варианты первого экрана — Лэмп Лигал",
  description: "Три визуальных направления первого экрана для выбора.",
};

const heroText = "Помогаем компаниям и командам уверенно двигаться вперёд: договариваться, защищать идеи и находить решения в сложных ситуациях.";

function PreviewCopy({ light = false }: { light?: boolean }) {
  return <div className={"option-copy" + (light ? " option-copy-light" : "")}>
    <div className="eyebrow"><span className="eyebrow-line" /> ЮРИДИЧЕСКАЯ КОМПАНИЯ ДЛЯ БИЗНЕСА</div>
    <h3>Право, которое <span>работает</span> на бизнес.</h3>
    <p>{heroText}</p>
    <ContactButton className="button button-primary">Обсудить задачу <ArrowUpRight size={17} /></ContactButton>
  </div>;
}

export default function HeroOptionsPage() {
  return <>
    <Header />
    <main className="options-page">
      <section className="options-intro container">
        <Link href="/" className="options-back"><ArrowLeft size={17} /> На главную</Link>
        <div className="eyebrow">НАПРАВЛЕНИЯ ДЛЯ ПЕРВОГО ЭКРАНА</div>
        <h1>Три варианта.<br /><span>Один выбор.</span></h1>
        <p>Ниже — разные способы оформить первый экран в цветах бренд-гайда. Текущий вариант на главной пока сохранён; выбранное направление перенесу туда после вашего решения.</p>
        <nav aria-label="Перейти к варианту"><a href="#option-1">01 / Фото</a><a href="#option-2">02 / Типографика</a><a href="#option-3">03 / Линии</a></nav>
      </section>

      <section id="option-1" className="option-section container">
        <div className="option-heading"><span>ВАРИАНТ 01</span><div><h2>Фотография и воздух</h2><p>Человечное, спокойное первое впечатление. Фото занимает правую часть, фирменная графика работает как тонкий акцент.</p></div></div>
        <div className="option-preview option-photo">
          <PreviewCopy />
          <div className="option-photo-visual" aria-hidden="true"><Image src={publicPath("/images/about-generated.png")} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" /><span className="option-photo-line" /><span className="option-photo-label">ЛЭМП ЛИГАЛ / ЯСНО. СПОКОЙНО.</span></div>
        </div>
      </section>

      <section id="option-2" className="option-section container">
        <div className="option-heading"><span>ВАРИАНТ 02</span><div><h2>Типографика и контраст</h2><p>Выразительный графитовый фон, большое слово как графический элемент и один оранжевый штрих.</p></div></div>
        <div className="option-preview option-type">
          <div className="option-type-word" aria-hidden="true">ПРАВО</div>
          <PreviewCopy light />
          <div className="option-type-graphic" aria-hidden="true"><span /><i /></div>
          <div className="option-type-caption" aria-hidden="true">ТЕХНОЛОГИИ.<br />ЛЮДИ. ПРАВО. РОСТ.</div>
        </div>
      </section>

      <section id="option-3" className="option-section container">
        <div className="option-heading"><span>ВАРИАНТ 03</span><div><h2>Линии и цветовые плоскости</h2><p>Самый графичный вариант: архитектурная сетка, диагональный ритм и спокойные голубые плоскости.</p></div></div>
        <div className="option-preview option-lines">
          <PreviewCopy />
          <div className="option-lines-visual" aria-hidden="true"><div className="option-lines-sheet sheet-a" /><div className="option-lines-sheet sheet-b" /><div className="option-lines-grid" /><div className="option-lines-stroke" /><span>ПРАВО / БИЗНЕС</span></div>
        </div>
      </section>
      <div className="options-end container"><p>Напишите номер варианта — 01, 02 или 03. Я перенесу его на главную и подстрою под остальные разделы.</p></div>
    </main>
  </>;
}
