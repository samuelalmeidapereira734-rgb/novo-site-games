const modal=document.getElementById('modal');
const closeBtn=document.getElementById('close');
const count=document.getElementById('count');
const bar=document.getElementById('bar');
const title=document.getElementById('modalTitle');
const official=document.getElementById('official');
const countText=document.getElementById('countText');
let timer=null;

document.querySelectorAll('.download').forEach(btn=>{
  btn.addEventListener('click',()=>{
    clearInterval(timer);
    title.textContent='Preparando: '+btn.dataset.game;
    official.href=btn.dataset.url || '#';
    official.classList.add('disabled');
    official.textContent='Aguarde 10 segundos';
    countText.innerHTML='Aguarde <strong id="count">10</strong> segundos...';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    let n=10;
    bar.style.width='0%';
    timer=setInterval(()=>{
      n--;
      count.textContent=n;
      bar.style.width=((10-n)*10)+'%';
      if(n<=0){
        clearInterval(timer);
        countText.textContent='Pronto! Você pode continuar.';
        official.classList.remove('disabled');
        official.textContent='Continuar para o site oficial';
      }
    },1000);
  });
});

function closeModal(){clearInterval(timer);modal.classList.remove('show');modal.setAttribute('aria-hidden','true')}
closeBtn.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

document.getElementById('search').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 document.querySelectorAll('.game-card').forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'':'none');
});
