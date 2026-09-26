const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const email = document.getElementById('email').value;
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Alinita Partners - ${topic} - ${name}`);
  const body = encodeURIComponent(
    `Full Name: ${name}\nCompany: ${company}\nEmail: ${email}\nArea of Interest: ${topic}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:info@alinitapartners.com?subject=${subject}&body=${body}`;
});
