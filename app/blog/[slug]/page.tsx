import {notFound} from 'next/navigation';
import TemplatePage from '@/components/TemplatePage';
import {getArticles,homeParts} from '@/lib/site-content';
export const dynamicParams=false;
export function generateStaticParams(){return getArticles().filter(a=>a.status==='published').map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getArticles().find(a=>a.slug===slug);return {title:a?.title+' — Лэмп Лигал',description:a?.summary,openGraph:{title:a?.title,description:a?.summary,type:'article',images:['https://aneroia.github.io/lamp-legal/images/guide-cover.jpg']}};}
export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=getArticles().find(a=>a.slug===slug&&a.status==='published');if(!a)notFound();const {header,footer}=homeParts();return <TemplatePage html={`${header}<main class="article-page"><a href="/blog/">← Все статьи</a><p class="eyebrow">${a.category}</p><h1>${a.title}</h1><p>${a.minutes} мин чтения · ${a.date??''}</p><p class="lead">${a.lead??a.summary}</p>${a.body}${a.cta?`<aside class="r-cta"><h2>${a.cta.title}</h2><p>${a.cta.text}</p><a class="btn btn-primary" href="/#contact">${a.cta.button}</a></aside>`:''}</main>${footer}`}/>;}
