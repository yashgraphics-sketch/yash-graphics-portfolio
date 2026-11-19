(function(){
  var buttons=document.querySelectorAll('.filter');
  var cards=document.querySelectorAll('.project-card');
  buttons.forEach(function(button){button.addEventListener('click',function(){
    buttons.forEach(function(b){b.classList.remove('active')});
    button.classList.add('active');
    var filter=button.getAttribute('data-filter');
    cards.forEach(function(card){card.style.display=(filter==='All'||card.getAttribute('data-category')===filter)?'':'none'});
  })});
  var lightbox=document.getElementById('lightbox');
  var lightboxImage=document.getElementById('lightboxImage');
  var lightboxTitle=document.getElementById('lightboxTitle');
  document.querySelectorAll('.project-image').forEach(function(item){item.addEventListener('click',function(){
    lightboxImage.src=item.getAttribute('data-image');
    lightboxTitle.textContent=item.getAttribute('data-title');
    lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');
  })});
  function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src=''}
  document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',function(e){if(e.target===lightbox)closeLightbox()});
  document.getElementById('menuToggle').addEventListener('click',function(){document.getElementById('mainNav').classList.toggle('open')});
  document.querySelectorAll('#mainNav a').forEach(function(a){a.addEventListener('click',function(){document.getElementById('mainNav').classList.remove('open')})});
  document.getElementById('year').textContent=new Date().getFullYear();
})();