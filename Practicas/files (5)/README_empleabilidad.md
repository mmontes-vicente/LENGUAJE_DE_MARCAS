# Empleabilidad — Módulo 1709

---

## Perfil profesional

Estudio el Ciclo Superior de Desarrollo de Aplicaciones Web en modalidad virtual en Prometeo by The Power. Estoy en primero.

Antes de empezar este curso no había programado nada. A lo largo del año he trabajado con HTML, CSS, JavaScript, Java, SQL y Git. Este proyecto integra todo lo que he aprendido en algo que tiene sentido como sistema completo.

Me interesa el desarrollo web. Me gusta que el resultado final se pueda ver y usar, no solo que el código compile.

---

## Sobre el proyecto

NexHub es una aplicación de gestión para un coworking en Madrid. No es un ejercicio teórico: está modelado como si fuera un encargo real, con una empresa concreta, unos precios reales y un flujo de trabajo que tiene lógica.

**El problema que resuelve.** El administrador del coworking necesita gestionar altas y bajas de socios, reservas de espacios, pagos y servicios adicionales. Lo hace desde una aplicación Java que conecta con una base de datos MySQL.

**Lo que puede ver un cliente.** La web corporativa muestra los espacios disponibles, los planes de precio y un formulario de contacto. Está pensada para que alguien que llega por primera vez entienda qué ofrece el espacio.

**Lo que no está conectado.** La web y la aplicación Java son independientes. La web no consume la API de la aplicación. Esto se podría resolver con una API REST, que sería el siguiente paso natural.

---

## Tecnologías que uso en el proyecto

- **HTML5 y CSS3** — la web entera, sin frameworks, con variables CSS y diseño responsive
- **JavaScript** — validación de formulario y menú móvil, sin librerías
- **Java 17** — aplicación de consola con JDBC, orientada a objetos
- **MySQL** — base de datos relacional con siete tablas y claves foráneas
- **Git y GitHub** — control de versiones durante todo el desarrollo

---

## Portfolio

El repositorio está en GitHub con el código organizado por módulo, un README por sección y commits descriptivos.

Para ver la web: abre `web/index.html` en el navegador. No necesita servidor.

Para ver la aplicación: arranca XAMPP, importa la base de datos siguiendo el README de BBDD y ejecuta `Main.java` desde IntelliJ.

Los diagramas E-R y el modelo relacional están en `docs/diagramas/` en formato `.drawio`.

---

## Reflexión

**Lo que más me costó.** La separación en capas en Java. Entender por qué el servicio no debe saber cómo se muestra el resultado, y por qué el modelo no debe saber cómo se guarda en la base de datos, me llevó tiempo. Cuando lo entendí, el código se volvió mucho más fácil de seguir.

**Lo que más aprendí.** Diseñar la base de datos antes de escribir código. Hacer el diagrama E-R primero y traducirlo al modelo relacional me obligó a pensar en el problema antes de empezar a implementar. El código Java fue mucho más sencillo porque ya tenía claro qué entidades existían y cómo se relacionaban.

**Lo que haría diferente.** Conectaría la web con la aplicación mediante una API REST. Ahora mismo son dos piezas separadas que representan lo mismo pero no se comunican. También añadiría tests unitarios a los servicios Java.

**Lo que me llevo.** Que un proyecto coherente, aunque sea pequeño, comunica mucho mejor que varios ejercicios sueltos. Cuando alguien puede abrir la web, entender qué hace el negocio y luego ver el código que lo gestiona, todo tiene más sentido.
