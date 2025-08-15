
function toggleMenu(){
  const menu = document.getElementById('mobile-menu');
  const btn = document.querySelector('.mobile-toggle');
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  menu.style.display = expanded ? 'none' : 'flex';
  menu.style.flexDirection = 'column';
  menu.style.gap = '12px';
}
// Simple form validation and submit handler
function validateForm(e){
  const form = e.target;
  const name = form.querySelector('[name=name]').value.trim();
  const email = form.querySelector('[name=email]').value.trim();
  const msg = form.querySelector('[name=message]').value.trim();
  if(!name || !email || !msg){
    alert('Please complete all required fields.');
    e.preventDefault();
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
  const contactForm = document.getElementById('contact-form');
  if(contactForm){ contactForm.addEventListener('submit', validateForm); }
});
