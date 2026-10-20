import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { ContactButton } from "./ContactDialog";

const situations = [
  "Запускаем сайт, приложение или сервис — нужны пользовательские документы и политика обработки персональных данных",
  "Нужно привести обработку персональных данных в порядок: уведомление Роскомнадзора, локальные акты, согласия",
  "Заключаем договор с заказчиком, подрядчиком или партнёром — нужно составить или проверить, понять риски",
  "Хотим защитить бренд и продукт: товарный знак, права на ПО и контент, лицензионная модель",
  "Оформляем стартап: создаём компанию, распределяем доли, партнёрские отношения, опционы",
  "Хотим включить продукт в реестр российского ПО и понять, подходит ли он под требования",
  "Ищем гранты и меры поддержки и хотим понять, на что реально можно рассчитывать",
  "Получили претензию или готовимся к спору — нужна позиция и план действий",
];

export default function About() {
  return <section id="tasks" className="section needs-section">
    <div className="needs-orbit scroll-decor" data-scroll-move="18" data-scroll-scale="0.025" aria-hidden="true" />
    <div className="container needs-variant-editorial">
      <Reveal className="needs-heading section-heading">
        <div className="eyebrow section-kicker"><span>01</span> — ЗАДАЧИ</div>
        <div><h2>С чем к нам <span className="accent-word">приходят</span></h2><p>Чаще всего — с вопросами, которые появляются на запуске продукта, в сделке или на росте. Вот типовые ситуации:</p></div>
      </Reveal>
      <div className="needs-editorial-list">{situations.map((situation, index) => <Reveal className="needs-editorial-item" key={situation} delay={(index % 4) * 45}><span aria-hidden="true" /><p>{situation}</p></Reveal>)}</div>
      <Reveal className="needs-cta"><p>Не нашли свою ситуацию? Опишите задачу — рассмотрим и индивидуальный случай.</p><ContactButton className="inline-link">Расскажите о своей задаче <ArrowRight size={17} /></ContactButton></Reveal>
    </div>
  </section>;
}
