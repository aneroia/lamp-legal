import {assetPaths,blogMarkup,getPage,getArticles,homeParts,withServiceMenu} from '@/lib/site-content';
import SiteBehavior from './SiteBehavior';
import ArticleReader from './ArticleReader';
import {parseFragment,serialize} from 'parse5';
export default function TemplatePage({name='index',html,allArticles=false}:{name?:string;html?:string;allArticles?:boolean}){
 const page=getPage(name),blog=blogMarkup(allArticles);
 const body=(html??page.body).replace('<div class="blog-filter" id="blogFilter" role="group" aria-label="Темы статей"></div>',`<div class="blog-filter" id="blogFilter" role="group" aria-label="Темы статей">${blog.filter}</div>`).replace(/(<div\b[^>]*\bid="blogFeatured"[^>]*>)\s*<\/div>/,(_,open:string)=>`${open}${blog.feature}</div>`).replace('<div class="posts" id="blogPosts"></div>',`<div class="posts" id="blogPosts">${blog.cards}</div>`).replace('<a href="#" id="promoLink"></a>','<a href="/blog/launch-minimum/" id="promoLink">Юридический минимум перед запуском продукта →</a>');
 const plain=(value:string)=>value.replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
 const faq=[...body.matchAll(/<details class="svc"><summary>[\s\S]*?<span class="svc-title">([\s\S]*?)<\/span>[\s\S]*?<div class="svc-body">([\s\S]*?)<\/div><\/details>/g)].map(m=>({'@type':'Question',name:plain(m[1]),acceptedAnswer:{'@type':'Answer',text:plain(m[2])}}));
 const schema=[{'@context':'https://schema.org','@type':'Organization',name:'Лэмп Лигал',url:'https://aneroia.github.io/lamp-legal/',email:'legal@lamp-legal.ru',telephone:'+79165323978'},...(name!=='index'?[{'@context':'https://schema.org','@type':'Service',name:page.title,description:page.description,provider:{'@type':'Organization',name:'Лэмп Лигал'}}]:[]),...(faq.length?[{'@context':'https://schema.org','@type':'FAQPage',mainEntity:faq}]:[])];
 const sharedHeaderBody = name === 'index'
   ? body
   : body.replace(/<header\b[\s\S]*?<\/header>/, () => homeParts().header);
 const normalizedBody=serialize(parseFragment(assetPaths(withServiceMenu(sharedHeaderBody, name))));
 return <><style dangerouslySetInnerHTML={{__html:page.css}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><div dangerouslySetInnerHTML={{__html:normalizedBody}}/><SiteBehavior/><ArticleReader articles={getArticles().filter(a=>a.status==='published')}/></>;
}
