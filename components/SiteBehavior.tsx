"use client";
import {useEffect} from 'react';
export default function SiteBehavior(){useEffect(()=>{
 const controller=new AbortController(),signal=controller.signal;
 const header=document.querySelector('.site-header');const update=()=>header?.classList.toggle('scrolled',window.scrollY>8);
 window.addEventListener('scroll',update,{passive:true,signal});update();
 const menu=document.getElementById('menuBtn'),nav=document.getElementById('nav');
 const servicesMenu=nav?.querySelector<HTMLElement>('.services-menu');
 const servicesToggle=servicesMenu?.querySelector<HTMLButtonElement>('.services-menu-toggle');
 const serviceLinks=servicesMenu?.querySelector<HTMLElement>('.services-menu-links');
 const desktopHover=window.matchMedia('(min-width: 1021px) and (any-hover: hover)');
 function setServicesOpen(open:boolean){
   if(!serviceLinks || !servicesToggle)return;
   serviceLinks.hidden=!open;
   servicesToggle.setAttribute('aria-expanded',String(open));
 }
 const close=()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Меню';setServicesOpen(false);};
 servicesMenu?.addEventListener('pointerenter',event=>{
   if(desktopHover.matches && event.pointerType==='mouse')setServicesOpen(true);
 },{signal});
 servicesMenu?.addEventListener('pointerleave',event=>{
   if(desktopHover.matches && event.pointerType==='mouse' && !serviceLinks?.contains(document.activeElement))setServicesOpen(false);
 },{signal});
 servicesToggle?.addEventListener('click',()=>setServicesOpen(serviceLinks?.hidden ?? false),{signal});
 servicesMenu?.addEventListener('focusout',event=>{
   if(!(event.relatedTarget instanceof Node) || !servicesMenu.contains(event.relatedTarget))setServicesOpen(false);
 },{signal});
 menu?.addEventListener('click',()=>{
   if(nav?.classList.contains('open')){close();return;}
   nav?.classList.add('open');
   menu.setAttribute('aria-expanded','true');
   menu.textContent='Закрыть';
 },{signal});
 nav?.addEventListener('click',e=>{if((e.target as Element).closest('a'))close();},{signal});
 document.addEventListener('click',event=>{
   if(servicesMenu && event.target instanceof Node && !servicesMenu.contains(event.target))setServicesOpen(false);
 },{signal});
 document.addEventListener('keydown',event=>{
   if(event.key!=='Escape')return;
   if(serviceLinks && !serviceLinks.hidden){
     if(serviceLinks.contains(document.activeElement))servicesToggle?.focus();
     setServicesOpen(false);
   }else if(nav?.classList.contains('open')){
     close();
     menu?.focus();
   }
 },{signal});
 document.getElementById('leadForm')?.addEventListener('submit',e=>{e.preventDefault();const form=e.target as HTMLFormElement;const valid=form.checkValidity();form.reportValidity();const err=document.getElementById('formErr');if(err)err.hidden=valid;if(valid){form.hidden=true;const ok=document.getElementById('formOk');if(ok){ok.hidden=false;ok.setAttribute('role','status');ok.innerHTML='<h3>Спасибо за интерес!</h3><p>Отправка формы пока не подключена. Напишите нам в <a href="https://t.me/lamp_room_legal">Telegram</a>, чтобы обсудить задачу.</p>';}}},{signal});
 document.getElementById('blogFilter')?.addEventListener('click',e=>{const button=(e.target as Element).closest<HTMLButtonElement>('button[data-category]');if(!button)return;document.querySelectorAll('#blogFilter button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll<HTMLElement>('[data-topic]').forEach(card=>{card.hidden=button.dataset.category!=='Все'&&card.dataset.topic!==button.dataset.category;});},{signal});
 const promo=document.getElementById('promoBar');if(promo){try{promo.hidden=localStorage.getItem('promo-closed')==='launch-minimum';}catch{promo.hidden=false;}}
 document.getElementById('promoClose')?.addEventListener('click',()=>{if(promo)promo.hidden=true;try{localStorage.setItem('promo-closed','launch-minimum');}catch{}},{signal});
 let observer:IntersectionObserver|undefined;
 let frame=0;
 const graphics=document.querySelectorAll<HTMLElement>('.path .pt');
 const move=()=>{frame=0;graphics.forEach(el=>{const rect=el.getBoundingClientRect();const progress=Math.min(1,Math.max(0,(innerHeight-rect.top)/(innerHeight+rect.height)));el.style.transform=`translateY(${Math.round((progress-.5)*10)}px) scale(${1+Math.sin(progress*Math.PI)*.025})`;});};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(move);};
 if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer?.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('reveal');observer?.observe(el);});window.addEventListener('scroll',schedule,{passive:true,signal});window.addEventListener('resize',schedule,{signal});schedule();}
 return ()=>{controller.abort();observer?.disconnect();if(frame)cancelAnimationFrame(frame);};
},[]);return null;}
