# NexHub Coworking

Proyecto Intermodular · 1º DAW · Prometeo by The Power · 2025

---

## Qué es

NexHub es una aplicación de gestión para un coworking tecnológico en Madrid. El proyecto cubre tres partes que trabajan juntas: una web pública, una aplicación Java para el administrador y la base de datos que las sostiene.

La idea es que las tres capas sean coherentes entre sí. Lo que aparece en la web (espacios, tarifas, servicios) corresponde exactamente con lo que gestiona la aplicación Java y con lo que almacena la base de datos.

---

## Partes del proyecto

| Módulo | Código | Qué contiene |
|--------|--------|--------------|
| Bases de datos | 0484 | Modelo E-R, 7 tablas SQL, datos de ejemplo, 11 consultas |
| Entornos de desarrollo | 0487 | Repositorio Git, estructura de carpetas, documentación |
| Lenguajes de marcas | 0373 | Web en HTML5 + CSS3, 5 páginas, sin frameworks |
| Programación | 0485 | App Java con JDBC, CRUD completo, menú por consola |
| Sistemas informáticos | 0483 | Informe técnico, hardware, instalación paso a paso |
| Ampliación programación | MPO | Herencia, interfaces, validaciones, arquitectura en capas |
| Empleabilidad | 1709 | Perfil profesional, portfolio, reflexión |

---

## Estructura de carpetas

```
nexhub-project/
├── web/
│   ├── index.html
│   ├── espacios.html
│   ├── tarifas.html
│   ├── comunidad.html
│   ├── contacto.html
│   └── assets/
│       ├── css/style.css
│       └── js/main.js
│
├── src/
│   ├── Main.java
│   ├── db/
│   │   └── Conexion.java
│   ├── model/
│   │   ├── Persona.java
│   │   ├── Socio.java
│   │   ├── Empleado.java
│   │   ├── Espacio.java
│   │   └── Reserva.java
│   ├── service/
│   │   ├── SocioService.java
│   │   ├── EspacioService.java
│   │   ├── ReservaService.java
│   │   └── EmpleadoService.java
│   ├── controller/
│   │   └── MenuController.java
│   └── utils/
│       ├── CrudService.java
│       └── Validador.java
│
├── sql/
│   ├── 01_crear_tablas.sql
│   ├── 02_insertar_datos.sql
│   └── 03_consultas.sql
│
└── docs/
    ├── diagramas/
    ├── sistemas/
    └── empleabilidad/
```

---

## Puesta en marcha

**Base de datos**

Abre phpMyAdmin, crea una base de datos llamada `nexhub_db` e importa los archivos SQL en orden: primero `01_crear_tablas.sql`, después `02_insertar_datos.sql`.

**Aplicación Java**

Abre la carpeta `src/` con IntelliJ IDEA. Añade `mysql-connector-j.jar` como librería del proyecto (File → Project Structure → Libraries). Edita `db/Conexion.java` con tu usuario y contraseña de MySQL. Ejecuta `Main.java`.

**Web**

Abre la carpeta `web/` y haz doble clic en `index.html`. No necesita servidor.

---

## Empresa ficticia

**NexHub Coworking** — Calle Innovación 42, Madrid.

Espacio de trabajo para freelancers, startups y equipos. Ofrece escritorios flexibles, oficinas privadas, salas de reuniones y servicios adicionales por suscripción mensual.

---

## Contacto académico

- Tutor técnico: Francisco Molpeceres — francisco.molpeceres@thepower.education
- Tutor sistemas: Miguel Ángel Alayón — miguel.alayon@thepower.education
