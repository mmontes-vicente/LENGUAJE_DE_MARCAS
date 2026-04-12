# Empleabilidad — Módulo 1709

> NexHub Coworking · Itinerario Personal para la Empleabilidad I

---

## Perfil profesional

Estudiante de 1º del Ciclo Superior de Desarrollo de Aplicaciones Web (DAW)
en Prometeo by The Power, modalidad virtual.

Me interesan los proyectos que conectan diseño y funcionalidad. A lo largo de este año
he aprendido a modelar datos antes de escribir código, a separar responsabilidades
en capas y a construir interfaces que se ven bien en cualquier dispositivo.

### Tecnologías aprendidas este curso

| Área | Tecnologías |
|---|---|
| Frontend | HTML5 · CSS3 · JavaScript vanilla |
| Backend | Java 17 · JDBC · POO |
| Datos | MySQL · SQL DDL/DML/DQL · Diseño E-R |
| Herramientas | Git · GitHub · IntelliJ IDEA · XAMPP · draw.io |

---

## Presentación del proyecto

### Qué es NexHub?

Plataforma de gestión para un coworking tecnológico ficticio ubicado en Madrid.
Pensada como si fuera un encargo real de un cliente que necesita digitalizar su negocio.

### Qué problema resuelve?

El administrador del coworking necesitaba una herramienta para gestionar:

- El alta y baja de socios con distintos tipos de membresía
- Las reservas de escritorios y salas con control de disponibilidad
- Los pagos asociados a cada reserva
- Los servicios adicionales que contratan los socios

### Cómo está construido?

El proyecto tiene tres capas que trabajan juntas:

```
Web (HTML/CSS/JS)  →  muestra la oferta al público
App Java           →  gestión interna del administrador
Base de datos      →  almacena y relaciona toda la información
```

### Qué demuestra?

Que sé diseñar un sistema desde cero: modelar los datos en E-R,
traducirlo a SQL, conectarlo con Java mediante JDBC, y construir
una web que lo representa públicamente con buen diseño.

---

## Portfolio

### Repositorio GitHub

Repositorio organizado con:

- `README.md` claro con instrucciones de instalación
- Carpetas separadas por módulo
- Commits descriptivos con prefijos semánticos (`feat:`, `fix:`, `docs:`)
- Historial limpio que cuenta la evolución del proyecto

### Web en el navegador

```
web/index.html → doble clic → se ve completa sin servidor
```

Dark mode con sistema de diseño propio, responsive en móvil, tablet y escritorio.
Formulario de contacto con validación en tiempo real.

### Aplicación Java en consola

```
Main.java → menú interactivo → CRUD completo → JDBC funcionando
```

Gestión de socios, espacios, reservas y empleados.
Separación en capas: modelo, servicio, controlador, utilidades.

### Diagramas de diseño

```
docs/diagramas/diagrama_ER.drawio
docs/diagramas/modelo_relacional.drawio
```

E-R y Modelo Relacional completos — demuestran que modelé los datos
antes de escribir una sola línea de SQL.

---

## Reflexión personal

### Lo que más aprendí

Ver cómo se conectan los módulos. Antes los veía como asignaturas separadas.
Con este proyecto entendí que la BBDD, Java y la web son capas del mismo sistema,
y que una decisión en el diseño de datos afecta a todo lo demás.

### Lo que mejor me salió

El diseño de la base de datos. Modelar el negocio en E-R antes de escribir SQL
me ahorró mucho trabajo después. Cuando llegué a crear las tablas,
ya sabía exactamente qué necesitaba.

### Lo que más me costó

La conexión JDBC y la separación en capas. Entender por qué no mezclar
la lógica de base de datos con el modelo, y cómo la interfaz genérica
`CrudService<T,ID>` hace que todos los servicios sean predecibles.

### Lo que mejoraría con más tiempo

- Interfaz gráfica con JavaFX en lugar de consola
- Conectar la web al backend con una API REST
- Tests unitarios para los servicios Java con JUnit
- Despliegue de la web en GitHub Pages

---

## Entregables

| Archivo | Descripción |
|---|---|
| `docs/empleabilidad/perfil_profesional.md` | Este documento |
| `docs/empleabilidad/presentacion_proyecto.md` | Presentación orientada a empleabilidad |
| `docs/empleabilidad/reflexion_final.md` | Reflexión detallada del proceso de aprendizaje |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW
</p>
