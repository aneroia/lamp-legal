import { UserRound } from "lucide-react";
import Reveal from "./Reveal";

const team = [
  { role: "Партнёр, руководитель практики IT", bio: "Помогает командам увидеть правовые риски продукта до запуска и превратить их в понятный план действий." },
  { role: "Руководитель договорной практики", bio: "Собирает сложные договорные конструкции в ясные условия и уверенно ведёт переговоры на стороне клиента." },
  { role: "Юрист по интеллектуальной собственности", bio: "Защищает бренды, код и контент, выстраивает передачу прав без пробелов и двусмысленностей." },
  { role: "Юрист по персональным данным", bio: "Понимает логику цифровых сервисов и помогает встроить требования закона в реальные процессы команды." },
  { role: "Юрист по корпоративным проектам", bio: "Сопровождает создание компаний, договорённости партнёров и изменения, которые появляются вместе с ростом бизнеса." },
  { role: "Операционный директор, партнёр", bio: "Организует работу команды и следит, чтобы клиент понимал статус задачи, сроки и следующий шаг." },
];

export default function Team() {
  return <section id="team" className="section team-section section-divider">
    <div className="team-arc scroll-decor" data-scroll-move="20" data-scroll-scale="0.02" aria-hidden="true" />
    <div className="container">
      <Reveal className="section-heading team-heading">
        <div className="eyebrow section-kicker"><span>06</span> — КОМАНДА</div>
        <div><h2>Люди, с которыми<br /><span className="accent-word">вы будете работать</span></h2><p>Небольшая команда практикующих юристов и специалистов, которые разбираются в IT и стартапах.</p></div>
      </Reveal>
      <div className="team-grid">{team.map((person, index) => <Reveal className="team-card" key={index} delay={(index % 3) * 70}>
        <div className="team-photo-placeholder" aria-label="Место для фотографии сотрудника"><UserRound size={76} strokeWidth={1.15} /></div>
        <div className="team-card-copy"><h3>Фамилия Имя Отчество</h3><span>{person.role}</span><p>{person.bio}</p></div>
      </Reveal>)}</div>
    </div>
  </section>;
}
