# Empleabilidad — Módulo 1709

Estudio 1.º DAW en Prometeo by The Power en modalidad virtual. Es el primer año que programo.

---

## Lo que sé hacer después de este curso

Antes de empezar no sabía qué era un `JOIN` ni había escrito una línea de Java. Ahora tengo un proyecto que junta una base de datos relacional, una aplicación con arquitectura en capas y una web responsive con diseño propio. No es perfecto, pero funciona y está documentado.

| Área | Tecnologías |
|------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Java 24, JDBC |
| Base de datos | MySQL, diseño E-R, SQL |
| Herramientas | Git, GitHub, IntelliJ IDEA, XAMPP |

---

## Sobre NexHub

NexHub es un sistema de gestión para un coworking en Madrid. El administrador usa la aplicación Java para gestionar socios, reservas y pagos. La web muestra la oferta al público.

Decidí empezar por el diagrama E-R antes de tocar la base de datos. Eso hizo que cuando llegué a crear las tablas ya tuviera claro qué necesitaba. Y cuando empecé con los servicios Java, el modelo de datos era estable y no tuve que volver a cambiarlo.

---

## Qué hay en el repositorio

El repositorio está en GitHub con el código organizado por módulo y commits descriptivos.

- `web/index.html` — se abre con doble clic, sin servidor, en cualquier navegador
- `Main.java` — aplicación Java que arranca con XAMPP activo
- `docs/diagramas/` — diagramas E-R y modelo relacional en `.drawio`

---

## Lo que mejoraría

Conectar la web con la aplicación Java mediante una API REST, porque ahora mismo son dos piezas independientes que representan lo mismo pero no se comunican. También añadir tests unitarios a los servicios con JUnit.
