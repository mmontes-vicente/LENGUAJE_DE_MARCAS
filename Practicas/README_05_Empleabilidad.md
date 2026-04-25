<div align="center">

<img src="https://img.shields.io/badge/1.º_DAW-Prometeo-6c63ff?style=for-the-badge" />
<img src="https://img.shields.io/badge/Módulo-1709-22d9a0?style=for-the-badge" />
<img src="https://img.shields.io/badge/2026-Madrid-b06bff?style=for-the-badge" />

# Itinerario Personal para la Empleabilidad

**Módulo 1709 · Prometeo by The Power · 1.º DAW · 2026**

</div>

---

## Perfil profesional

Estudio 1.º DAW en Prometeo by The Power, modalidad virtual. Es el primer año que programo.

Antes de empezar no sabía qué era un `JOIN` ni había escrito una línea de Java. Ahora tengo un proyecto que integra una base de datos relacional, una aplicación con arquitectura en capas y una web responsive con diseño propio.

| Área | Tecnologías |
|------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Java 24, JDBC, patrón DAO |
| Base de datos | MySQL, diseño E-R, SQL DDL/DML/DQL |
| Herramientas | Git, GitHub, IntelliJ IDEA, XAMPP |

---

## El proyecto

**Qué es NexHub.** Un sistema de gestión para un coworking tecnológico ficticio en Madrid. Tres partes que trabajan juntas: web pública, aplicación Java y base de datos MySQL.

**Qué problema resuelve.** Sin herramienta de gestión, el administrador lleva socios y reservas en papel. NexHub automatiza el alta de socios, la consulta de disponibilidad y el registro de reservas con precio calculado automáticamente.

**Arquitectura.**

```
MenuController  →  Service  →  DAO  →  MySQL
                  (lógica)   (SQL)
```

Cada capa tiene una responsabilidad. El servicio valida y decide. El DAO ejecuta el SQL y devuelve objetos.

**Qué demuestra.** Diseñar un sistema desde cero: E-R antes de SQL, SQL antes de Java, validaciones separadas del acceso a datos, web coherente con el modelo de negocio y documentación que otra persona puede seguir para ejecutar el proyecto.

---

## Portfolio

| Entregable | Cómo abrirlo |
|-----------|-------------|
| Web | Doble clic en `02_Lenguaje_de_Marcas/index.html` |
| App Java | `Main.java` desde IntelliJ con XAMPP activo |
| Diagramas | `04_Base_de_Datos/diagramas/` con app.diagrams.net |
| Repositorio | GitHub — código por módulo, commits descriptivos |

---

## Reflexión personal

**Lo que más me costó.** Separar el código en capas. Al principio mezclaba la lógica de negocio con el SQL. Cuando lo leía al día siguiente no entendía qué hacía cada parte. Refactorizarlo fue tedioso pero mereció la pena.

**Lo que mejor me salió.** El diseño de la base de datos. Empezar por el diagrama E-R me obligó a pensar en el problema antes de escribir SQL. El DDL salió bien a la primera y no tuve que volver a tocarlo.

**Lo que haría diferente.** Tests de cada servicio Java antes de integrar el controlador. Y commits más pequeños y frecuentes desde el principio.

**Lo que me llevo.** Las asignaturas del curso no son piezas independientes. La base de datos, Java y la web son capas del mismo sistema, y una decisión en el modelo de datos afecta a todo lo demás. Verlo funcionando junto cambió cómo pienso sobre el desarrollo de software.
