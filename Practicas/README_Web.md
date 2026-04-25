<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# Lenguajes de Marcas — Módulo 0373

*Web corporativa de NexHub Coworking · Sin frameworks externos*

</div>

---

## Estructura

```
02_Lenguaje_de_Marcas/
│
├── index.html          → hero + servicios + planes preview
├── espacios.html       → Open Space A/B, Oficinas S/M, Salas, Cabinas
├── tarifas.html        → 6 planes + tabla comparativa
├── comunidad.html      → perfiles, eventos, testimonios
├── contacto.html       → formulario validado por JS
│
└── assets/
    ├── css/style.css   → sistema de diseño completo
    ├── images/favicon.svg
    └── js/main.js      → menú, validación, scroll suave, animaciones
```

---

## Sistema de diseño

Todo el sistema visual está en variables CSS en `:root`. Cambiar el color de acento de toda la web es una sola línea.

```css
:root {
  --color-bg:      #0a0b0f;   /* fondo principal */
  --color-surface: #10131a;   /* tarjetas */
  --color-accent:  #6c63ff;   /* violeta accent */
  --color-green:   #22d9a0;   /* verde secundario */
  --color-text:    #eceef4;   /* texto principal */
  --color-muted:   #7a8599;   /* texto secundario */
}
```

---

## Funcionalidades JS

`main.js` hace exactamente tres cosas:

| Función | Qué hace |
|---------|---------|
| Menú hamburguesa | Toggle clase `open` en `<nav>`, muestra/oculta cruz con SVG inline |
| Validación formulario | Regex email, campos obligatorios, mínimo 10 chars, política privacidad |
| Animaciones scroll | `IntersectionObserver` activa clase `.visible` al entrar en viewport |

---

## Animaciones de scroll

Los elementos tienen clase `.reveal`, `.reveal--left`, `.reveal--right` o `.reveal--scale`.
Empiezan con `opacity: 0` y se animan al entrar en pantalla. Los delays `.reveal-delay-1` a `.reveal-delay-6` escalonan rejillas.

---

## Responsive

| Breakpoint | Cambios |
|------------|---------|
| `≤ 1024px` | Rejillas 3→2 columnas |
| `≤ 768px` | Menú hamburguesa, rejillas a 1 columna |
| `≤ 480px` | Hero compacto, botones apilados |

---

## Imágenes

Todas las fotos vienen de [Unsplash](https://unsplash.com) (licencia libre) y se cargan desde su CDN. No hay nada que descargar. Todas usan `loading="lazy"` excepto el hero (`eager`).

---

## Abrir

Doble clic en `index.html`. Funciona en cualquier navegador moderno sin servidor.
