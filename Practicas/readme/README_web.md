# 🌐 Lenguajes de Marcas — Módulo 0373

> NexHub Coworking · Portal web corporativo · HTML5 + CSS3 + JavaScript

---

## Descripción

Web corporativa dark mode para el coworking NexHub.
Sin frameworks CSS externos — todo el diseño está construido con variables CSS, Flexbox y Grid nativos.

---

## Páginas

| Archivo | Título | Contenido |
|---|---|---|
| `index.html` | Inicio | Hero · Features · Planes preview · CTA |
| `espacios.html` | Nuestros espacios | Open Space · Oficinas Privadas · Salas · Cabinas |
| `tarifas.html` | Planes y tarifas | 6 planes + tabla comparativa de características |
| `comunidad.html` | Comunidad | Perfiles de miembros · Eventos · Testimonios |
| `contacto.html` | Contacto | Formulario con validación JS + datos de contacto |

---

## Estructura de archivos

```
web/
├── index.html
├── espacios.html
├── tarifas.html
├── comunidad.html
├── contacto.html
└── assets/
    ├── css/
    │   └── style.css        ← hoja de estilos única con variables
    └── js/
        └── main.js          ← menú responsive + validación formulario
```

---

## Sistema de diseño

Todas las páginas comparten el mismo sistema de tokens definido en `:root`:

```css
:root {
  /* Fondos */
  --color-bg:       #0d0f14;   /* fondo principal */
  --color-surface:  #13161e;   /* cards y componentes */
  --color-surface2: #1a1e29;   /* elevación secundaria */
  --color-border:   #252a38;   /* bordes y separadores */

  /* Tipografía */
  --color-text:     #e8eaf0;   /* texto principal */
  --color-muted:    #8892a4;   /* texto secundario */

  /* Colores de acento */
  --color-accent:   #6c63ff;   /* primario — botones, badges */
  --color-green:    #22d9a0;   /* éxito, bases de datos */
  --color-blue:     #3b9eff;   /* información, espacios */
  --color-purple:   #b06bff;   /* secundario, empleabilidad */

  /* Layout */
  --radius:         10px;
  --radius-lg:      16px;
  --shadow:         0 4px 24px rgba(0,0,0,.35);
  --max-width:      1200px;
}
```

---

## Características técnicas

### HTML5 semántico

Cada página usa la estructura semántica correcta:

```html
<header>   → navegación principal sticky
<main>     → contenido único de la página
<section>  → bloques de contenido con significado propio
<article>  → tarjetas de espacio, testimonios
<footer>   → pie de página con enlaces y datos de contacto
<form>     → formulario de contacto con atributos de accesibilidad
<nav>      → menú principal con aria-label
```

### CSS3 — sin frameworks

| Técnica | Uso en el proyecto |
|---|---|
| Variables CSS | Sistema de diseño consistente en todos los archivos |
| Flexbox | Header, nav, footer, hero, cards con botones |
| CSS Grid | Features, planes, pricing, espacios, perfiles, eventos |
| Transitions | Hover en cards, botones, enlaces de navegación |
| Radial gradient | Fondo del hero y sección CTA con glow accent |
| Media queries | Breakpoints en 1024px, 768px y 480px |

### JavaScript vanilla — `main.js`

```javascript
// 1. Menú hamburguesa responsive
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// 2. Validación formulario de contacto
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // valida: nombre · email (regex) · motivo · mensaje (min 10 chars) · privacidad
  // si todo ok → muestra mensaje de éxito durante 5 segundos
});

// 3. Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## Responsive design

| Breakpoint | Cambios aplicados |
|---|---|
| `≤ 1024px` | Features y events pasan de 3/4 cols a 2 cols |
| `≤ 768px` | Menú hamburguesa · hero en 1 col · todos los grids en 1 col |
| `≤ 480px` | Hero title más pequeño · botones apilados · footer centrado |

---

## Componentes reutilizables

Cada componente tiene clase BEM propia, se puede reconocer y reutilizar en cualquier página:

```
.header / .header__inner / .header__inner > .logo
.nav / .nav__link / .nav__link--active / .nav__toggle
.btn / .btn--primary / .btn--outline / .btn--sm
.badge / .badge--green / .badge--blue / .badge--purple
.section / .section--alt / .section__title / .section__subtitle
.feature-card / .plan-card / .plan-card--featured
.pricing-card / .pricing-card--featured
.space-card / .space-card--sm
.profile-card / .event-card / .testimonial
.contact-form / .form__group / .form__error / .form__success
.footer / .footer__inner / .footer__brand / .footer__links
```

---

## Cómo visualizar

```
1. Descarga o clona el repositorio
2. Abre la carpeta web/
3. Doble clic en index.html
4. Se abre directamente en el navegador — no necesita servidor
```

---

## Entregables

| Archivo | Descripción |
|---|---|
| `web/index.html` | Página principal con todas las secciones |
| `web/espacios.html` | Catálogo completo de espacios |
| `web/tarifas.html` | 6 planes de precios + tabla comparativa |
| `web/comunidad.html` | Comunidad, eventos y testimonios |
| `web/contacto.html` | Formulario funcional con validación JS |
| `web/assets/css/style.css` | Hoja de estilos única — sistema de diseño completo |
| `web/assets/js/main.js` | Menú responsive + validación de formulario |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW
</p>
