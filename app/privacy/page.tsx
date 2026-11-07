import TemplatePage from '@/components/TemplatePage';
import {homeParts} from '@/lib/site-content';
export const metadata={title:'Политика обработки персональных данных — Лэмп Лигал'};
export default function Privacy(){const {header,footer}=homeParts();return <TemplatePage html={`${header}<main class="article-page"><h1>Политика обработки персональных данных</h1><p>Здесь будет размещён согласованный текст политики обработки персональных данных.</p><p>Формы пока не отправляют введённые сведения. Для обращения напишите нам в Telegram.</p><a class="btn btn-primary" href="/">На главную</a></main>${footer}`}/>;}
