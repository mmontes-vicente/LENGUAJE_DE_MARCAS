# 🖥️ NexHub Coworking — Proyecto Intermodular 1º DAW

Plataforma de gestión para un coworking tecnológico ficticio llamado **NexHub**.

## ¿Qué es este proyecto?

NexHub es una plataforma de gestión para un espacio de coworking tecnológico.  
Permite gestionar reservas de escritorios y salas, altas de socios, pagos y servicios.

Este repositorio contiene **todos los módulos del Proyecto Intermodular de 1º DAW** organizados por carpetas.

---

## 📁 Estructura del repositorio

```
coworking-project/
│
├── web/                        → Módulo: Lenguajes de Marcas (HTML + CSS)
│   ├── index.html
│   ├── servicios.html
│   ├── espacios.html
│   ├── contacto.html
│   ├── tarifas.html
│   ├── css/
│   │   └── style.css
│   └── assets/img/
│
├── src/                        → Módulo: Programación (Java + JDBC)
│   ├── model/
│   ├── service/
│   ├── controller/
│   ├── utils/
│   └── db/
│
├── sql/                        → Módulo: Bases de Datos (SQL)
│   ├── 01_crear_tablas.sql
│   ├── 02_insertar_datos.sql
│   └── 03_consultas.sql
│
├── docs/
│   ├── diagramas/              → Diagrama E/R (imagen + draw.io)
│   │   ├── diagrama_ER.drawio
│   │   └── modelo_relacional.md
│   ├── sistemas/               → Módulo: Sistemas Informáticos
│   │   └── informe_tecnico.md
│   └── empleabilidad/          → Módulo: Itinerario Empleabilidad
│       ├── perfil_profesional.md
│       ├── presentacion_proyecto.md
│       └── reflexion_final.md
│
└── README.md                   ← estás aquí
```

---

## 🧰 Tecnologías usadas

| Tecnología | Para qué |
|---|---|
| HTML5 + CSS3 | Página web de la empresa |
| Java (JDK 17+) | Aplicación de gestión |
| JDBC | Conexión Java ↔ Base de datos |
| MySQL | Base de datos |
| IntelliJ IDEA | IDE de desarrollo |
| Git + GitHub | Control de versiones |

---

## 🚀 Cómo ejecutar el proyecto

### Web
1. Abre la carpeta `/web`
2. Haz doble clic en `index.html`
3. Se abre en el navegador directamente

### Base de datos
1. Abre phpMyAdmin o MySQL Workbench
2. Crea una base de datos llamada `nexhub_db`
3. Ejecuta en orden: `01_crear_tablas.sql` → `02_insertar_datos.sql`

### Aplicación Java
1. Abre IntelliJ IDEA
2. Importa la carpeta `/src` como proyecto Java
3. Edita `src/db/Conexion.java` con tus credenciales MySQL
4. Ejecuta `Main.java`

---

## 📌 Empresa ficticia

**NexHub Coworking** es un espacio de trabajo compartido especializado en tecnología.  
Ofrece escritorios flexibles, salas de reuniones y servicios premium para freelancers y startups.

---

## 👨‍💻 Autor

- Nombre: Miguel Montes Vicente
- Curso: 1º DAW — Prometeo by The Power
- GitHub: [tu-usuario]
