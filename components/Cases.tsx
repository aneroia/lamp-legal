import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const cases = [
  {
    label: "ЦИФРОВОЙ ПРОДУКТ",
    title: "Запуск цифрового сервиса",
    situation: "IT-стартап готовит к запуску сервис с регистрацией пользователей.",
    task: "Запустить продукт без юридических рисков, в том числе по персональным данным.",
    work: "Подготовили пакет пользовательских документов, настроили процессы обработки персональных данных, проверили интерфейс и сценарии сбора согласий.",
    result: "Сформирована юридическая основа для безопасного запуска сервиса.",
  },
  {
    label: "ПРАВА НА ПРОДУКТ",
    title: "Работа с внешней командой разработки",
    situation: "Компания заказывает разработку ПО у внешней команды.",
    task: "Закрепить права на код и результаты работы за заказчиком, согласовать условия приёмки и ответственности.",
    work: "Разработали договор, провели переговоры и оформили передачу прав.",
    result: "Права на продукт закреплены за компанией, риски при смене подрядчика учтены.",
  },
  {
    label: "МЕРЫ ПОДДЕРЖКИ",
    title: "Аналитика по грантам",
    situation: "Проект на ранней стадии ищет финансирование.",
    task: "Понять, на какие программы поддержки можно претендовать и что для этого нужно.",
    work: "Проанализировали доступные программы, сопоставили их с проектом, подготовили рекомендации и перечень документов.",
    result: "Команда получила понятный план подачи на подходящие программы.",
  },
];

export default function Cases() {
  return <section id="cases" className="section cases-section section-divider">
    <div className="case-shape scroll-decor" data-scroll-move="22" data-scroll-scale="0.025" aria-hidden="true" />
    <div className="container">
      <Reveal className="section-heading cases-heading">
        <div className="eyebrow section-kicker"><span>04</span> — КЕЙСЫ</div>
        <div><h2>Как это выглядит<br /><span className="accent-word">на практике</span></h2><p>Без названий и деталей, защищённых NDA, — только суть задач и результат.</p></div>
      </Reveal>
      <div className="case-accordion">{cases.map((item, index) => <Reveal key={item.title} delay={index * 60}>
        <details className="case-detail">
          <summary>
            <span className="case-detail-marker" aria-hidden="true" />
            <span className="case-detail-heading"><small>{item.label} · ОБОБЩЁННЫЙ ПРИМЕР</small><strong>{item.title}</strong></span>
            <ChevronDown size={21} />
          </summary>
          <div className="case-detail-body"><dl>
            <div><dt>Ситуация</dt><dd>{item.situation}</dd></div>
            <div><dt>Задача</dt><dd>{item.task}</dd></div>
            <div><dt>Что сделали</dt><dd>{item.work}</dd></div>
            <div><dt>Результат</dt><dd>{item.result}</dd></div>
          </dl></div>
        </details>
      </Reveal>)}</div>
      <Reveal className="cases-note">Названия клиентов не раскрываем — это условие нашей работы по NDA.</Reveal>
    </div>
  </section>;
}
