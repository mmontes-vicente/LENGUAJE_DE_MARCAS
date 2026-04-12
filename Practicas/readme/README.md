# NexHub Coworking

> Plataforma de gestión para un coworking tecnológico en Madrid.
> Proyecto Intermodular · 1º DAW · Prometeo by The Power · 2025

---

## Qué es este proyecto?

NexHub integra tres capas técnicas trabajadas durante el curso en un mismo sistema coherente:

- **Web corporativa** — HTML5 + CSS3 dark mode, 5 páginas, diseño responsive sin frameworks
- **Aplicación Java** — Gestión de socios, espacios, reservas y pagos desde consola con JDBC
- **Base de datos** — MySQL con 7 tablas relacionales, FK y 11 consultas útiles para el negocio

El objetivo es demostrar cómo se conectan todos los módulos de 1º DAW en un proyecto real.

---

## Stack tecnológico

| Capa | Tecnología | Descripción |
|---|---|---|
| Frontend | HTML5 + CSS3 + JS | Dark mode · variables CSS · Flexbox · Grid · responsive |
| Backend | Java 17 + JDBC | CRUD · POO por capas · conexión MySQL · consola |
| Base de datos | MySQL + XAMPP | 7 tablas · claves foráneas · datos de ejemplo |
| Control de versiones | Git + GitHub | Commits semánticos · ramas · README |
| Entorno de desarrollo | IntelliJ IDEA Community | JDK 17 · driver JDBC · depuración |

---

## Módulos integrados

| Código | Módulo | Entregables clave |
|---|---|---|
| 0484 | Bases de Datos | E-R · Modelo relacional · SQL DDL/DML/DQL |
| 0487 | Entornos de Desarrollo | GitHub · commits · documentación |
| 0373 | Lenguajes de Marcas | HTML5 semántico · CSS3 · JS vanilla |
| 0485 | Programación | Java · JDBC · CRUD · POO |
| 0483 | Sistemas Informáticos | Informe técnico · hardware · guía instalación |
| MPO | Ampliación Programación | Herencia · interfaces · validaciones · capas |
| 1709 | Empleabilidad | Perfil profesional · portfolio · reflexión |

---

## Estructura del repositorio

```
nexhub-project/

- web/                          # Módulo Lenguajes de Marcas
    - index.html
    - espacios.html
    - tarifas.html
    - comunidad.html
    - contacto.html
    - assets/
        - css/style.css
        - js/main.js

- src/                          # Módulo Programación + MPO
    - Main.java
    - db/Conexion.java
    - model/
        - Persona.java          <-- abstract
        - Socio.java
        - Empleado.java
        - Espacio.java
        - Reserva.java
    - service/
        - SocioService.java
        - EspacioService.java
        - ReservaService.java
        - EmpleadoService.java
    - controller/
        - MenuController.java
    - utils/
        - CrudService.java      <-- interface genérica
        - Validador.java

- sql/                          # Módulo Bases de Datos
    - 01_crear_tablas.sql
    - 02_insertar_datos.sql
    - 03_consultas.sql

- docs/
    - diagramas/
        - diagrama_ER.drawio
        - modelo_relacional.drawio
    - sistemas/
        - informe_tecnico.md
    - empleabilidad/
        - perfil_profesional.md
        - presentacion_proyecto.md
        - reflexion_final.md

- README.md
```

---

## Cómo ejecutar

### 1 · Base de datos

```bash
# En phpMyAdmin:
# Nueva → nombre: nexhub_db → Crear
# Importar → 01_crear_tablas.sql → Continuar
# Importar → 02_insertar_datos.sql → Continuar
```

### 2 · Aplicación Java

```bash
# IntelliJ IDEA:
# File → Project Structure → Libraries → + → añade mysql-connector-j.jar
# Edita db/Conexion.java con tu usuario/contraseña de MySQL
# Run → Main.java
```

### 3 · Web

```bash
# Sin servidor necesario:
# Abre la carpeta web/ → doble clic en index.html
```

---

## Empresa ficticia

**NexHub Coworking** es un espacio de trabajo tecnológico ubicado en Calle Innovación 42, Madrid.
Ofrece escritorios flexibles, oficinas privadas, salas de reuniones y servicios adicionales para
freelancers, startups y equipos distribuidos.

---

## Tutores

| Módulo | Tutor | Contacto |
|---|---|---|
| Técnico (Programación · BBDD · Web · MPO) | Francisco Molpeceres | francisco.molpeceres@thepower.education |
| Sistemas Informáticos | Miguel Ángel Alayón | miguel.alayon@thepower.education |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW · Prometeo by The Power
</p>
