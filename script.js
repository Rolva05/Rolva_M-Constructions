
document.documentElement.style.scrollBehavior='smooth';
document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{
 const id=a.getAttribute('href');
 const el=document.querySelector(id);
 if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
});
const obs=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('active')}),{threshold:.15});
document.querySelectorAll('section,.card,.service,.about,.contact').forEach(el=>{el.classList.add('reveal');obs.observe(el);});
