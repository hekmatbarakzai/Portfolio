const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const NAME='YOUR NAME',ROLE='Senior Web Developer & UI/UX Designer';
/* ---------- i18n (English / Dari) ---------- */
const T={fa:{nav_about:'درباره من',nav_services:'خدمات',nav_work:'نمونه کارها',nav_exp:'تجربه',nav_contact:'تماس',hire:'استخدامم کنید',hi:'سلام، من',
lead:'من محصولات سریع، زیبا و قابل‌دسترس طراحی و توسعه می‌دهم.',viewwork:'مشاهده کارها',cv:'دانلود رزومه',s1:'پروژه تکمیل‌شده',s2:'مشتری راضی',s3:'سال تجربه',avail:'آماده برای کار',
t_about:'درباره من',bio:'من توسعه‌دهنده ارشد وب و طراح UI/UX با بیش از ۸ سال تجربه هستم. طراحی و برنامه‌نویسی را از تحقیق تا کد نهایی به هم پیوند می‌دهم.',
t_services:'خدمات',sv1:'توسعه وب',sv1d:'ساخت وب‌سایت‌های تمیز و مقیاس‌پذیر.',sv2:'طراحی UI/UX',sv2d:'رابط‌هایی مبتنی بر تحقیق و جذاب.',sv3:'طراحی ریسپانسیو',sv3d:'بی‌نقص روی همه دستگاه‌ها.',sv4:'فروشگاه آنلاین',sv4d:'فروشگاه‌های سریع با پرداخت آسان.',
t_work:'نمونه کارها',t_exp:'تجربه کاری',t_test:'نظرات مشتریان',t_contact:'بیایید صحبت کنیم',send:'ارسال پیام',together:'بیایید با هم کار کنیم'}};
const en={};$$('[data-i18n]').forEach(e=>en[e.dataset.i18n]=e.textContent);
let lang=localStorage.lang||'en';
function setLang(l){lang=l;localStorage.lang=l;document.documentElement.lang=l;document.documentElement.dir=l==='fa'?'rtl':'ltr';
 $$('[data-i18n]').forEach(e=>e.textContent=(l==='fa'&&T.fa[e.dataset.i18n])||en[e.dataset.i18n]);$('#lang').textContent=l==='fa'?'EN':'FA';typeText()}
$('#lang').onclick=()=>setLang(lang==='en'?'fa':'en');
/* ---------- theme ---------- */
const root=document.documentElement;
function setTheme(t){root.dataset.theme=t;localStorage.theme=t;$('#theme').textContent=t==='dark'?'☾':'☀'}
$('#theme').onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');
setTheme(localStorage.theme||'dark');
/* ---------- typing ---------- */
let typeTimer;
function typeText(){clearInterval(typeTimer);const txt=lang==='fa'?`سلام، من ${NAME} — توسعه‌دهنده ارشد وب و طراح UI/UX`:`Hi, I'm ${NAME} — ${ROLE}`;let i=0;
 typeTimer=setInterval(()=>{$('#typed').textContent=txt.slice(0,++i);if(i>=txt.length)clearInterval(typeTimer)},45)}
/* ---------- data ---------- */
const skills=[['HTML',95],['CSS',92],['JavaScript',90],['React',88],['UI/UX Design',93],['Figma',90]];
$('#skills').innerHTML=skills.map(([n,v])=>`<div class="skill"><div><span>${n}</span><span>${v}%</span></div><div class="bar"><i data-w="${v}"></i></div></div>`).join('');
const projects=[['Fintech Dashboard','web','React, D3, Node','#2f7bff,#1a2a6c'],['Travel Booking App','app','React Native, Firebase','#8b5cf6,#2b1055'],['Banking UX Redesign','ui','Figma, Research','#06b6d4,#8b5cf6'],
['Fashion Store','web','Shopify, JS, GSAP','#f472b6,#8b5cf6'],['Fitness Tracker','app','Flutter, API','#22d3ee,#2f7bff'],['Design System','ui','Figma, Storybook','#a78bfa,#2f7bff']];
$('#projects').innerHTML=projects.map(([t,c,tags,g])=>`<article class="card proj tilt" data-c="${c}"><div class="thumb"><i style="background:linear-gradient(135deg,${g})"></i></div><div class="body"><h3>${t}</h3><div class="tags">${tags.split(', ').map(x=>`<span>${x}</span>`).join('')}</div><div class="links"><a href="#" target="_blank" rel="noopener">Live Demo</a><a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener">GitHub</a></div></div></article>`).join('');
$('#filters').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;$$('.chip').forEach(x=>x.classList.toggle('on',x===b));$$('.proj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='all'&&p.dataset.c!==b.dataset.f))};
const reviews=[['Sara K.','CEO, Lumo','Delivered ahead of schedule — our conversions jumped 30%.'],['James R.','Founder, Orbit','Rare mix of great design taste and rock-solid engineering.'],['Amina T.','PM, Nexa','Communication was superb and the result was stunning.']];
$('#track').innerHTML=reviews.map(([n,r,q])=>`<div class="slide"><div class="card"><div class="av">${n[0]}</div><div class="stars">★★★★★</div><p>“${q}”</p><p class="muted"><b>${n}</b> · ${r}</p></div></div>`).join('');
$('#dots').innerHTML=reviews.map((_,i)=>`<button aria-label="Slide ${i+1}"></button>`).join('');
let cur=0;const go=i=>{cur=(i+reviews.length)%reviews.length;$('#track').style.transform=`translateX(${(lang==='fa'?1:-1)*cur*100}%)`;$$('#dots button').forEach((d,j)=>d.classList.toggle('on',j===cur))};
$$('#dots button').forEach((d,i)=>d.onclick=()=>go(i));go(0);setInterval(()=>go(cur+1),5000);
/* ---------- scroll effects ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');
 $$('.bar i',e.target).forEach(b=>b.style.width=b.dataset.w+'%');io.unobserve(e.target)}),{threshold:.15});
$$('.reveal').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=+el.dataset.count;let n=0;
 const t=setInterval(()=>{n+=Math.ceil(end/60);if(n>=end){n=end;clearInterval(t)}el.textContent=n},25);co.unobserve(el)}));
$$('[data-count]').forEach(el=>co.observe(el));
addEventListener('scroll',()=>{$('#nav').classList.toggle('scrolled',scrollY>40);$('#top').classList.toggle('show',scrollY>600)},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
$('#burger').onclick=()=>$('#links').classList.toggle('open');$$('#links a').forEach(a=>a.onclick=()=>$('#links').classList.remove('open'));
/* ---------- interactions ---------- */
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect(),s=document.createElement('span');
 s.className='ripple';s.style.cssText=`width:${r.width}px;height:${r.width}px;left:${e.clientX-r.left-r.width/2}px;top:${e.clientY-r.top-r.width/2}px`;b.append(s);setTimeout(()=>s.remove(),600)});
if(matchMedia('(hover:hover)').matches){
 $$('.magnetic').forEach(m=>{m.addEventListener('mousemove',e=>{const r=m.getBoundingClientRect();m.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px) scale(1.06)`});m.addEventListener('mouseleave',()=>m.style.transform='')});
 document.addEventListener('mousemove',e=>{const c=e.target.closest('.tilt');$$('.tilt').forEach(t=>{if(t!==c)t.style.transform=''});if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  c.style.transform=`perspective(700px) rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-6px)`})}
/* ---------- contact form ---------- */
$('#form').addEventListener('submit',async e=>{e.preventDefault();const f=e.target,s=$('#status');s.textContent='Sending…';
 try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
  if(r.ok){s.textContent='Thanks! Your message was sent.';f.reset()}else throw 0}
 catch{s.textContent='Could not send. Please email me directly.'}});
$('#yr').textContent=new Date().getFullYear();
setLang(lang);
