# Itinerario Personal para la Empleabilidad — Módulo 1709

Estudio 1.º DAW en Prometeo by The Power, modalidad virtual. Es el primer año que programo.

---

## Perfil profesional

Antes de empezar este curso no sabía qué era un `JOIN` ni había escrito una línea de Java. Ahora tengo un proyecto que integra una base de datos relacional, una aplicación con arquitectura en capas y una web responsive con diseño propio.

| Área | Tecnologías |
|------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Java 24, JDBC, patrón DAO |
| Base de datos | MySQL, diseño E-R, SQL DDL/DML/DQL |
| Herramientas | Git, GitHub, IntelliJ IDEA, XAMPP |

---

## Presentación del proyecto

**Qué es NexHub.** Un sistema de gestión para un coworking tecnológico ficticio en Madrid. Tiene tres partes que trabajan juntas: una web pública para los clientes, una aplicación Java para el administrador y una base de datos MySQL que conecta ambas.

**Qué problema resuelve.** Sin una herramienta de gestión, el administrador lleva socios y reservas en papel o en una hoja de cálculo. NexHub automatiza el alta de socios, la consulta de disponibilidad de espacios y el registro de reservas con su precio calculado automáticamente.

**Para quién es cada parte.** La web es para clientes potenciales: pueden ver los espacios, los precios y enviar un mensaje de contacto. La aplicación Java es para el administrador: gestión interna desde consola.

**Arquitectura.** El proyecto usa el patrón DAO para separar el acceso a datos de la lógica de negocio:

```
MenuController  →  Service  →  DAO  →  MySQL
                  (lógica)   (SQL)
```

Cada capa tiene una única responsabilidad. El servicio valida y decide; el DAO ejecuta el SQL y devuelve objetos.

**Qué demuestra.** Saber diseñar un sistema desde cero: E-R antes de SQL, SQL antes de Java, validaciones separadas del acceso a datos, web coherente con el modelo de negocio y documentación que otra persona puede seguir para ejecutar el proyecto.

---

## Portfolio

**Repositorio GitHub** — código organizado por módulo, un README por carpeta y commits con mensajes descriptivos.

**Web** — `02_Lenguaje_de_Marcas/index.html` se abre con doble clic, sin servidor, en cualquier navegador.

**Aplicación Java** — ejecutar `Main.java` desde IntelliJ con XAMPP activo. Menú interactivo con gestión completa de socios, espacios, reservas y empleados.

**Diagramas** — E-R y modelo relacional en `04_Base_de_Datos/diagramas/` en formato `.drawio`, editables en app.diagrams.net.

---

## Reflexión personal

Lo que más me costó fue separar el código en capas. Al principio mezclaba la lógica de negocio con el SQL en el mismo sitio. Cuando lo leía al día siguiente no entendía qué hacía cada parte. Refactorizarlo para que cada clase tuviera una responsabilidad clara fue tedioso, pero mereció la pena: el código se volvió mucho más fácil de seguir y de ampliar.

Lo que mejor me salió fue el diseño de la base de datos. Empezar por el diagrama E-R me obligó a pensar en el problema antes de escribir una sola línea de SQL. Cuando llegué a crear las tablas ya tenía claro qué necesitaba. El DDL salió bien a la primera y no tuve que volver a tocarlo.

Lo que haría diferente: tests de cada servicio Java antes de integrar el controlador, para detectar antes los errores que luego cuesta horas encontrar. Y commits más pequeños y frecuentes desde el principio, en lugar de uno grande por cada sección.

Lo que me llevo del proyecto: entender que las asignaturas del curso no son piezas independientes. La base de datos, Java y la web son capas del mismo sistema, y una decisión en el modelo de datos afecta a todo lo demás. Verlo funcionando junto cambió cómo pienso sobre el desarrollo de software.
