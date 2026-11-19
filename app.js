(function(){var d=document,h=d.documentElement,t=d.getElementById('theme');
if(t){t.addEventListener('click',function(){var n=h.dataset.theme==='light'?'dark':'light';h.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}})}
var m=d.getElementById('menu'),n=d.getElementById('links');
if(m&&n){m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',o?'true':'false')})}
d.querySelectorAll('[data-lang]').forEach(function(a){a.addEventListener('click',function(){try{localStorage.setItem('lang',a.getAttribute('data-lang'))}catch(e){}})});
var r=d.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});r.forEach(function(e){io.observe(e)})}else{r.forEach(function(e){e.classList.add('in')})}
})();