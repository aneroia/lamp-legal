"use client";

import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import type {Article} from '@/lib/site-content';
import {publicPath} from '@/lib/paths';

export default function ArticleReader({articles}:{articles:Article[]}) {
  const [article,setArticle]=useState<Article|null>(null);
  const [copied,setCopied]=useState(false);
  const [shareLink,setShareLink]=useState('');
  const panel=useRef<HTMLDivElement>(null);
  const previousUrl=useRef('');
  const trigger=useRef<HTMLElement|null>(null);

  useEffect(()=>{
    function open(slug:string) {
      const found=articles.find(a=>a.slug===slug&&a.status==='published');
      if(!found)return false;
      trigger.current=document.activeElement as HTMLElement;
      setArticle(found);setCopied(false);
      setShareLink(location.href.split('#')[0]+'#a-'+slug);
      return true;
    }
    function route(){
      if(location.hash.startsWith('#a-'))open(location.hash.slice(3));
      else setArticle(null);
    }
    function onClick(event:MouseEvent){
      if(event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      const anchor=(event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if(!anchor||anchor.target==='_blank')return;
      const url=new URL(anchor.href,location.href);
      if(url.origin!==location.origin)return;
      const slug=url.hash.startsWith('#a-')?url.hash.slice(3):url.pathname.match(/\/blog\/([^/]+)\/?$/)?.[1];
      if(!slug||!articles.some(a=>a.slug===slug&&a.status==='published'))return;
      event.preventDefault();
      previousUrl.current=location.href;
      history.pushState(null,'','#a-'+slug);
      open(slug);
    }
    previousUrl.current=location.href.split('#a-')[0];
    route();
    document.addEventListener('click',onClick);
    window.addEventListener('hashchange',route);
    window.addEventListener('popstate',route);
    return ()=>{document.removeEventListener('click',onClick);window.removeEventListener('hashchange',route);window.removeEventListener('popstate',route);};
  },[articles]);

  function close(){
    history.replaceState(null,'',previousUrl.current||location.pathname+'#blog');
    setArticle(null);
  }

  useEffect(()=>{
    if(!article)return;
    document.body.classList.add('reading');
    const reader=panel.current;
    const closeButton=reader?.querySelector<HTMLButtonElement>('.reader-close');
    closeButton?.focus();
    if(reader)reader.scrollTop=0;
    const siblings=[...document.body.children].filter(el=>el!==reader) as HTMLElement[];
    const inertBefore=siblings.map(el=>el.inert);
    siblings.forEach(el=>{el.inert=true;});
    function keydown(event:KeyboardEvent){
      if(event.key==='Escape'){event.preventDefault();history.replaceState(null,'',previousUrl.current||location.pathname);setArticle(null);}
      if(event.key!=='Tab'||!reader)return;
      const elements=[...reader.querySelectorAll<HTMLElement>('button,a[href],input')];
      const first=elements[0],last=elements.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
    }
    document.addEventListener('keydown',keydown);
    return ()=>{document.body.classList.remove('reading');siblings.forEach((el,i)=>{el.inert=inertBefore[i];});document.removeEventListener('keydown',keydown);trigger.current?.focus();};
  },[article]);

  if(!article)return null;
  return createPortal(<div className="reader" ref={panel} role="dialog" aria-modal="true" aria-labelledby="readerTitle" onClick={event=>{if(event.target===event.currentTarget)close();}}>
    <div className="reader-panel">
      <div className="reader-top"><span className="eyebrow">Лэмп Лигал / Блог</span><button className="reader-close" type="button" aria-label="Закрыть статью" onClick={close}>✕</button></div>
      <article>
        <span className="r-cat">{article.category}</span>
        <h1 id="readerTitle">{article.title}</h1>
        <div className="meta" style={{marginBottom:18}}><span>{article.minutes} мин чтения</span>{article.date&&<time dateTime={article.date}>{new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(article.date+'T12:00:00Z'))}</time>}</div>
        {article.lead&&<p className="r-lead">{article.lead}</p>}
        <div dangerouslySetInnerHTML={{__html:article.body}}/>
        {article.cta&&<div className="r-cta"><span className="badge">Услуга Лэмп Лигал</span><h3>{article.cta.title}</h3><p>{article.cta.text}</p><a className="btn btn-primary" href={publicPath('/#contact')} onClick={close}>{article.cta.button} <span className="arr">→</span></a></div>}
        <div className="r-share"><label htmlFor="shareLink">Ссылка на статью</label><input id="shareLink" type="text" readOnly value={shareLink}/><button type="button" onClick={async()=>{try{await navigator.clipboard.writeText(shareLink);setCopied(true);}catch{const input=document.getElementById('shareLink') as HTMLInputElement;input.focus();input.select();}}}>{copied?'Скопировано':'Скопировать'}</button></div>
      </article>
    </div>
  </div>,document.body);
}
