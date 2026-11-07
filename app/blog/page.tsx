import TemplatePage from '@/components/TemplatePage';
import {homeParts} from '@/lib/site-content';
export const metadata={title:'Блог — Лэмп Лигал',description:'Право для стартапов и IT-проектов простыми словами.'};
export default function Blog(){
 const {header,footer}=homeParts();
 return <TemplatePage allArticles html={`${header}<main class="blog-page">
 <div class="container"><nav class="crumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span aria-hidden="true">/</span><span aria-current="page">Блог</span></nav></div>
 <section class="blog-intro" data-reveal><div class="container blog-intro-grid">
 <div class="blog-intro-copy"><h1>Право — без сложных слов</h1><p class="lead">Пишем для фаундеров и продуктовых команд о том, что сделать до запуска, как защитить код и бренд и где искать господдержку.</p><a class="tg-link" href="https://t.me/lamp_room_legal" target="_blank" rel="noopener noreferrer">Новые разборы сначала выходят в Telegram-канале →</a></div>
 <div id="blogFeatured" class="blog-intro-feature"></div>
 </div></section>
 <section class="blog-catalog" data-reveal><div class="container"><h2 class="blog-catalog-title">Статьи и разборы</h2><div class="blog-filter" id="blogFilter" role="group" aria-label="Темы статей"></div><div class="posts" id="blogPosts"></div></div></section>
 </main>${footer}`}/>;
}
