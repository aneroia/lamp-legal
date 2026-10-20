import { ArrowRight, FileCheck2, Layers3, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";
import { ContactButton } from "./ContactDialog";

const formats = [
  { title: "Разовая задача", text: "Один чётко очерченный вопрос: договор, пакет документов, проверка продукта или аналитика по грантам.", icon: FileCheck2 },
  { title: "Проектное сопровождение", text: "Запуск продукта, сделка или оформление прав: несколько этапов и понятный результат.", icon: Layers3 },
  { title: "Абонентское обслуживание", text: "Постоянная юридическая поддержка: консультации, документы и согласования по мере появления задач.", icon: RefreshCw },
];

const steps = [
  { title: "Оставляете заявку", text: "Коротко опишите задачу." },
  { title: "Обсуждаем задачу", text: "Уточняем детали и цели." },
  { title: "Предлагаем формат", text: "Оцениваем объём, стоимость и сроки." },
  { title: "Фиксируем условия", text: "Согласовываем нюансы и подписываем договор." },
  { title: "Двигаемся к результату", text: "Вы всегда знаете, что сделано и что дальше." },
];

export default function Workflow() {
  return <section id="workflow" className="section workflow-section section-divider">
    <div className="workflow-dots scroll-decor" data-scroll-move="-18" data-scroll-scale="0.02" aria-hidden="true" />
    <div className="container">
      <Reveal className="section-heading workflow-heading">
        <div className="eyebrow section-kicker"><span>05</span> — ФОРМАТЫ</div>
        <div><h2>Как с нами <span className="accent-word">работать</span></h2><p>Стоимость зависит от объёма задачи. После заявки обсудим её и назовём цену до начала работы — без сюрпризов.</p></div>
      </Reveal>
      <div className="formats-grid">{formats.map((format, index) => {
        const Icon = format.icon;
        return <Reveal className="format-card" key={format.title} delay={index * 70}><div className="format-title-row"><Icon className="format-icon" size={34} strokeWidth={1.45} aria-hidden="true" /><h3>{format.title}</h3></div><p>{format.text}</p></Reveal>;
      })}</div>

      <div className="process-block">
        <Reveal className="process-title"><span>ПЯТЬ ШАГОВ</span><h3>От первого сообщения до результата</h3></Reveal>
        <div className="process-steps">{steps.map((step, index) => <Reveal className="process-step" key={step.title} delay={index * 60}><span>{index + 1}</span>{index < steps.length - 1 && <ArrowRight className="process-arrow" size={80} strokeWidth={1.25} aria-hidden="true" />}<h4>{step.title}</h4><p>{step.text}</p></Reveal>)}</div>
      </div>

      <Reveal className="workflow-action"><ContactButton className="button button-primary">Оставить заявку <ArrowRight size={17} /></ContactButton></Reveal>
    </div>
  </section>;
}
