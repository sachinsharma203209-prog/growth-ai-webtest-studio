document.addEventListener('DOMContentLoaded',function(){
  var btn=document.getElementById('mobile-menu-btn');
  var menu=document.getElementById('mobile-menu');
  if(btn&&menu){btn.addEventListener('click',function(){menu.classList.toggle('open');});}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});
  document.querySelectorAll('.reveal').forEach(function(el,i){
    el.style.transitionDelay=((i%6)*60)+'ms';io.observe(el);});
  var counters=document.querySelectorAll('[data-count]');
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){var el=e.target,target=parseFloat(el.getAttribute('data-count')),
      dur=1500,start=performance.now();
      var tick=function(now){var p=Math.min((now-start)/dur,1),v=1-Math.pow(1-p,3);
        el.textContent=Math.round(target*v).toLocaleString();if(p<1)requestAnimationFrame(tick);};
      requestAnimationFrame(tick);cio.unobserve(el);}});},{threshold:.5});
  counters.forEach(function(c){cio.observe(c);});
  var form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();form.reset();
    var s=document.getElementById('form-success');if(s)s.classList.add('show');});}
  if(window.lucide)lucide.createIcons();
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
});