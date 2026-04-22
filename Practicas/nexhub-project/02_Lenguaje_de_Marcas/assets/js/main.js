// ============================================================
// NexHub Coworking — main.js
// Módulo: Lenguajes de Marcas (0373) / Programación (0485)
// ============================================================

// ---------- MENÚ RESPONSIVE ----------
const navToggle = document.getElementById('navToggle');
const nav       = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Cierra el menú al hacer clic en un enlace
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ---------- VALIDACIÓN FORMULARIO DE CONTACTO ----------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const nombre    = document.getElementById('nombre');
    const email     = document.getElementById('email');
    const motivo    = document.getElementById('motivo');
    const mensaje   = document.getElementById('mensaje');
    const privacidad = document.getElementById('privacidad');

    // Limpiar errores previos
    document.querySelectorAll('.form__error').forEach(el => el.textContent = '');

    // Validar nombre
    if (!nombre.value.trim()) {
      document.getElementById('errNombre').textContent = 'El nombre es obligatorio.';
      valid = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      document.getElementById('errEmail').textContent = 'El email es obligatorio.';
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      document.getElementById('errEmail').textContent = 'Introduce un email válido.';
      valid = false;
    }

    // Validar motivo
    if (!motivo.value) {
      document.getElementById('errMotivo').textContent = 'Selecciona un motivo.';
      valid = false;
    }

    // Validar mensaje
    if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
      document.getElementById('errMensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
      valid = false;
    }

    // Validar privacidad
    if (!privacidad.checked) {
      document.getElementById('errPrivacidad').textContent = 'Debes aceptar la política de privacidad.';
      valid = false;
    }

    if (valid) {
      contactForm.reset();
      const success = document.getElementById('formSuccess');
      success.style.display = 'block';
      setTimeout(() => success.style.display = 'none', 5000);
    }
  });
}

// ---------- ACTUALIZACION DE FECHA ----------
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ---------- SCROLL SUAVE PARA ANCLAS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
