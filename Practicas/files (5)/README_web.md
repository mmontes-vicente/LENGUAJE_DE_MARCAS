# Lenguajes de Marcas — Módulo 0373

Web corporativa de NexHub Coworking en HTML5 y CSS3.

---

## Páginas

| Archivo | Qué contiene |
|---------|-------------|
| `index.html` | Página principal: presentación del espacio, resumen de servicios y planes |
| `espacios.html` | Open Space A y B, oficinas privadas, salas de reuniones y cabinas |
| `tarifas.html` | Seis planes de precio con tabla comparativa |
| `comunidad.html` | Perfiles de miembros, eventos periódicos y testimonios |
| `contacto.html` | Formulario de contacto con validación y datos del local |

---

## Estructura

```
web/
├── index.html
├── espacios.html
├── tarifas.html
├── comunidad.html
├── contacto.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

---

## Decisiones técnicas

**Sin frameworks CSS.** Todo el diseño está en `style.css` usando variables de CSS, Flexbox y Grid. No hay Bootstrap, Tailwind ni ninguna librería externa.

**Un solo archivo CSS.** Todas las páginas usan la misma hoja de estilos. Los componentes están definidos con nomenclatura BEM para que sea fácil saber a qué pertenece cada regla.

**JavaScript solo donde hace falta.** `main.js` tiene dos cosas: el toggle del menú en móvil y la validación del formulario de contacto. Nada más.

---

## Sistema de variables CSS

Las variables están definidas en `:root` al principio de `style.css`. Si se quiere cambiar el color de acento o el fondo de toda la web, basta con editar un valor aquí.

```css
:root {
    --color-bg:        #0d0f14;
    --color-surface:   #13161e;
    --color-surface2:  #1a1e29;
    --color-border:    #252a38;
    --color-text:      #e8eaf0;
    --color-muted:     #8892a4;
    --color-accent:    #6c63ff;
    --color-green:     #22d9a0;
    --color-blue:      #3b9eff;
    --color-purple:    #b06bff;
    --font-main:       'Segoe UI', system-ui, sans-serif;
    --radius:          10px;
    --radius-lg:       16px;
}
```

---

## Responsive

Se usan tres breakpoints:

| Punto de corte | Cambios |
|----------------|---------|
| `max-width: 1024px` | Las rejillas de 3-4 columnas pasan a 2 |
| `max-width: 768px` | El menú se oculta y aparece el botón hamburguesa. Las rejillas pasan a 1 columna |
| `max-width: 480px` | El hero se compacta, los botones se apilan verticalmente |

---

## Validación del formulario

El formulario de contacto no usa el submit nativo del navegador. `main.js` intercepta el evento, comprueba cada campo y muestra mensajes de error inline si algo falla.

Los campos obligatorios son: nombre, email (validado con regex), motivo de contacto, mensaje (mínimo 10 caracteres) y aceptación de la política de privacidad.

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.value.trim())) {
    document.getElementById('errEmail').textContent = 'Introduce un email válido.';
    valid = false;
}
```

Si todo es correcto, el formulario se resetea y aparece un mensaje de confirmación que desaparece a los 5 segundos.

---

## Cómo ver la web

Abre la carpeta `web/` y haz doble clic en `index.html`. No necesita servidor, funciona directamente en el navegador.
