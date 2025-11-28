document.addEventListener('DOMContentLoaded', function(){
  function wireToggle(buttonId, navId){
    const btn = document.getElementById(buttonId);
    const nav = document.getElementById(navId);
    if(!btn || !nav) return;
    btn.addEventListener('click', ()=> nav.classList.toggle('show'));
  }
  wireToggle('navToggle', 'mainNav');
  wireToggle('navToggle2', 'mainNav2');
  wireToggle('navToggle3', 'mainNav3');

  const links = document.querySelectorAll('.main-nav a');
  if(links.length){
    links.forEach(a => {
      const href = a.getAttribute('href');
      if(href && location.pathname.endsWith(href)) a.classList.add('active');
    });
  }
});