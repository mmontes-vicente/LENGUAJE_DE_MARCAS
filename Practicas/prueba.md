<div align="center">

<img src="https://img.shields.io/badge/Java-24-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
<img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

# NexHub Coworking

**Proyecto Intermodular · 1.º DAW · Prometeo by The Power · 2025**

*Plataforma de gestión para un coworking tecnológico en Madrid*

</div>

---

## Sobre el proyecto

NexHub reúne los cinco módulos del curso en un sistema que funciona como un todo. Lo que aparece en la web — espacios, tarifas, servicios — coincide exactamente con lo que gestiona la aplicación Java y con lo que hay en la base de datos. Eso es lo que lo hace intermodular.

```
Web pública  ←——→  App Java  ←——→  MySQL (nexhub_db)
  (cliente)         (admin)         (datos)
```

---

## Estructura

```
nexhub-project/
│
├── 01_Sistemas_Informaticos/
│   ├── capturas/                  ← screenshots del sistema funcionando
│   └── README.md
│
├── 02_Lenguaje_de_Marcas/         ← módulo 0373
│   ├── index.html
│   ├── espacios.html
│   ├── tarifas.html
│   ├── comunidad.html
│   ├── contacto.html
│   └── assets/
│       ├── css/style.css
│       ├── images/favicon.svg
│       └── js/main.js
│
├── 03_Programacion_MPO/           ← módulo 0485 + MPO
│   └── src/
│       ├── Main.java
│       ├── db/Conexion.java
│       ├── dao/                   ← patrón DAO
│       ├── model/                 ← herencia: Persona → Socio / Empleado
│       ├── service/               ← lógica de negocio
│       ├── controller/
│       └── utils/                 ← CrudService<T,ID>, Validador
│
├── 04_Base_de_Datos/              ← módulo 0484
│   ├── diagramas/                 ← .drawio (app.diagrams.net)
│   └── sql/
│       ├── nexhub_db.sql          ← exportación completa (recomendado)
│       ├── 01_crear_tablas.sql
│       ├── 02_insertar_datos.sql
│       └── 03_consultas.sql
│
└── 05_Itinerario_Empleabilidad/   ← módulo 1709
    └── README.md
```

---

## Stack

| Capa | Tecnología | Uso |
|------|-----------|-----|
| Frontend | HTML5 · CSS3 · JS vanilla | Web pública, sin frameworks |
| Backend | Java 24 · JDBC | Aplicación de consola con patrón DAO |
| Base de datos | MySQL · XAMPP | 7 tablas relacionales |
| Versiones | Git · GitHub | Control de cambios y entrega |
| IDE | IntelliJ IDEA Community | Desarrollo y ejecución |

---

## Inicio rápido

### 1 — Base de datos

```bash
# 1. Abre XAMPP y arranca MySQL
# 2. En phpMyAdmin → Nueva BD: nexhub_db
# 3. Importar → 04_Base_de_Datos/sql/nexhub_db.sql
```

### 2 — Aplicación Java

```bash
# 1. IntelliJ → File → Open → 03_Programacion_MPO/
# 2. Clic derecho src/ → Mark Directory as → Sources Root
# 3. File → Project Structure → Libraries → + → mysql-connector-j.jar
# 4. Clic derecho Main.java → Run
```

### 3 — Web

```bash
# Doble clic en 02_Lenguaje_de_Marcas/index.html
# No necesita servidor
```

---

## Empresa ficticia

**NexHub Coworking** · Calle Innovación 42, Madrid · 28001  
Espacio tech para freelancers, startups y equipos. Escritorios flexibles, oficinas privadas y salas de reuniones.

---

## Tutores

| Módulo | Tutor | Email |
|--------|-------|-------|
| Técnico | Francisco Molpeceres | francisco.molpeceres@thepower.education |
| Sistemas | Miguel Ángel Alayón | miguel.alayon@thepower.education |
