const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const email = document.getElementById('email').value;
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`Alinita Partners - ${topic} - ${name}`);
  const body = encodeURIComponent(`Ad Soyad: ${name}\nŞirket: ${company}\nE-posta: ${email}\nKonu: ${topic}\n\nMesaj:\n${message}`);
  window.location.href = `mailto:info@alinitapartners.com?subject=${subject}&body=${body}`;
});
