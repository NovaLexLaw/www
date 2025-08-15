
function toggleMenu(){
  const m=document.getElementById('menu'); const btn=document.querySelector('.mobile');
  const exp=btn.getAttribute('aria-expanded')==='true'; btn.setAttribute('aria-expanded',!exp);
  m.style.display = exp? 'none':'flex'; m.style.flexDirection='column'; m.style.gap='12px';
}
function calc(){
  const amt=+document.getElementById('amt').value||0;
  const term=+document.getElementById('term').value||1;
  const apr=(+document.getElementById('apr').value||0)/100/12;
  const m = apr ? (amt*apr)/(1-Math.pow(1+apr,-term)) : amt/term;
  const total = m*term;
  document.getElementById('out').textContent = `Est. instalment: R${m.toFixed(2)} • Total repayable: R${total.toFixed(2)}`;
}
document.addEventListener('DOMContentLoaded',()=>{
  ['amt','term','apr'].forEach(id=>{const el=document.getElementById(id); if(el){el.addEventListener('input',calc)}});
  if(document.getElementById('out')) calc();
});
