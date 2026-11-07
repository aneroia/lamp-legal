import fs from 'node:fs';
import path from 'node:path';
import { publicPath } from './paths';
export type Article = {slug:string;title:string;summary:string;category:string;minutes:number;date?:string;status:string;featured?:boolean;pinned?:boolean;lead?:string;checklist?:string[];body:string;cta?:{title:string;text:string;button:string}};
export function getArticles():Article[]{return fs.readdirSync('content/articles').filter(f=>f.endsWith('.mdx')).map(file=>{const m=fs.readFileSync(path.join('content/articles',file),'utf8').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)!;return {...JSON.parse(m[1]),body:m[2]};}).sort((a,b)=>Number(!!b.featured)-Number(!!a.featured)||a.title.localeCompare(b.title,'ru'));}
export function getPage(name:string){return JSON.parse(fs.readFileSync(path.join('content/pages',name+'.json'),'utf8')) as {title:string;description:string;body:string;css:string};}
export function assetPaths(html:string){return html.replace(/(src|href)="\/(?!\/)([^"]*)"/g,(_,a,v)=>`${a}="${publicPath('/'+v)}"`);}
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
export function blogMarkup(all=false){
 const articles=getArticles(), featured=articles.find(a=>a.featured&&a.status==='published');
 const filter=['Все',...new Set(articles.map(a=>a.category))].map((c,i)=>`<button type="button" aria-pressed="${i===0}" data-category="${esc(c)}">${esc(c)}</button>`).join('');
 const cards=articles.filter(a=>a!==featured).slice(0,all?99:6).map(a=>`<${a.status==='published'?'a':'div'} class="post ${a.status==='published'?'':'soon'}" data-topic="${esc(a.category)}" ${a.status==='published'?`href="/blog/${a.slug}/"`:''}><span class="cat">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p><div class="meta">${a.minutes} мин чтения</div><span class="go">${a.status==='published'?'Читать →':'Материал готовится'}</span></${a.status==='published'?'a':'div'}>`).join('');
 const feature=featured?`<a class="featured" data-topic="${esc(featured.category)}" href="/blog/${featured.slug}/"><div class="featured-copy"><span class="badge">Рекомендуем</span><h3>${esc(featured.title)}</h3><p>${esc(featured.summary)}</p><div class="meta">${featured.minutes} мин чтения</div><span class="btn btn-primary">Читать статью →</span></div><div class="featured-cover">${(featured.checklist||[]).slice(0,5).map(c=>`<span class="check">${esc(c)}</span>`).join('')}</div></a>`:'';
 return {filter,cards,feature};
}
export function homeParts(){const p=getPage('index');return {header:p.body.match(/<header[\s\S]*?<\/header>/)![0].replace(/href="#/g,'href="/#'),footer:p.body.match(/<footer[\s\S]*?<\/footer>/)![0].replace(/href="#/g,'href="/#')};}
