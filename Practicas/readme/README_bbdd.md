# Bases de Datos — Módulo 0484

> NexHub Coworking · Diseño y construcción de la base de datos relacional

---

## Empresa ficticia

**NexHub Coworking** — Espacio tecnológico en Madrid.

Gestiona socios, escritorios, reservas, pagos, empleados y servicios adicionales.
La base de datos modela el funcionamiento interno del negocio de forma completa y realista.

---

## Modelo Entidad-Relación

El diagrama E-R está disponible en `docs/diagramas/diagrama_ER.drawio`.

### Entidades principales

| Entidad | Descripción |
|---|---|
| **SOCIO** | Clientes del coworking con tipo de membresía |
| **ESPACIO** | Escritorios y salas disponibles para reservar |
| **RESERVA** | Reservas de espacios realizadas por socios |
| **PAGO** | Pagos asociados a cada reserva |
| **EMPLEADO** | Personal del coworking que gestiona las reservas |
| **SERVICIO** | Servicios adicionales contratables (impresión, parking, taquilla…) |
| **SOCIO_SERVICIO** | Tabla intermedia que resuelve la relación N:M entre SOCIO y SERVICIO |

### Relaciones y cardinalidades

| Entidad 1 | Cardinalidad | Entidad 2 | Descripción |
|---|:---:|---|---|
| SOCIO | 1:N | RESERVA | Un socio puede hacer muchas reservas |
| ESPACIO | 1:N | RESERVA | Un espacio puede tener muchas reservas |
| EMPLEADO | 1:N | RESERVA | Un empleado gestiona muchas reservas |
| RESERVA | 1:1 | PAGO | Cada reserva genera exactamente un pago |
| SOCIO | N:M | SERVICIO | Resuelta con la tabla intermedia SOCIO_SERVICIO |

---

## Modelo Relacional

### `socio`

```sql
socio (
  id_socio        INT          PRIMARY KEY AUTO_INCREMENT,
  nombre          VARCHAR(100) NOT NULL,
  apellidos       VARCHAR(150) NOT NULL,
  email           VARCHAR(150) UNIQUE NOT NULL,
  telefono        VARCHAR(15),
  tipo_membresia  ENUM('HOT_DESK','DEDICATED','OFICINA','VIRTUAL') NOT NULL,
  fecha_alta      DATE         NOT NULL
)
```

### `espacio`

```sql
espacio (
  id_espacio      INT           PRIMARY KEY AUTO_INCREMENT,
  nombre_espacio  VARCHAR(100)  NOT NULL,
  tipo            ENUM('OPEN_SPACE','OFICINA_PRIVADA','SALA_REUNIONES','CABINA') NOT NULL,
  capacidad       INT           NOT NULL,
  precio_hora     DECIMAL(6,2)  NOT NULL,
  disponible      TINYINT(1)    DEFAULT 1
)
```

### `empleado`

```sql
empleado (
  id_empleado          INT          PRIMARY KEY AUTO_INCREMENT,
  nombre               VARCHAR(100) NOT NULL,
  apellidos            VARCHAR(150) NOT NULL,
  cargo                VARCHAR(100) NOT NULL,
  email                VARCHAR(150) UNIQUE NOT NULL,
  salario              DECIMAL(8,2),
  fecha_contratacion   DATE
)
```

### `reserva`

```sql
reserva (
  id_reserva    INT           PRIMARY KEY AUTO_INCREMENT,
  id_socio      INT           NOT NULL,
  id_espacio    INT           NOT NULL,
  id_empleado   INT,
  fecha_inicio  DATETIME      NOT NULL,
  fecha_fin     DATETIME      NOT NULL,
  estado        ENUM('PENDIENTE','CONFIRMADA','CANCELADA','COMPLETADA') DEFAULT 'PENDIENTE',
  precio_total  DECIMAL(8,2),

  FOREIGN KEY (id_socio)    REFERENCES socio(id_socio),
  FOREIGN KEY (id_espacio)  REFERENCES espacio(id_espacio),
  FOREIGN KEY (id_empleado) REFERENCES empleado(id_empleado)
)
```

### `pago`

```sql
pago (
  id_pago       INT           PRIMARY KEY AUTO_INCREMENT,
  id_reserva    INT           UNIQUE NOT NULL,
  fecha_pago    DATE          NOT NULL,
  importe       DECIMAL(8,2)  NOT NULL,
  metodo_pago   ENUM('TRANSFERENCIA','TARJETA','EFECTIVO','BIZUM') NOT NULL,

  FOREIGN KEY (id_reserva) REFERENCES reserva(id_reserva)
)
```

### `servicio`

```sql
servicio (
  id_servicio      INT           PRIMARY KEY AUTO_INCREMENT,
  nombre_servicio  VARCHAR(100)  NOT NULL,
  descripcion      TEXT,
  precio           DECIMAL(6,2)  NOT NULL
)
```

### `socio_servicio` <-- tabla intermedia N:M

```sql
socio_servicio (
  id_socio             INT  NOT NULL,
  id_servicio          INT  NOT NULL,
  fecha_contratacion   DATE NOT NULL,

  PRIMARY KEY (id_socio, id_servicio),
  FOREIGN KEY (id_socio)    REFERENCES socio(id_socio),
  FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio)
)
```

---

## Scripts SQL

### `01_crear_tablas.sql` — DDL

Crea las 7 tablas con claves primarias, foráneas y restricciones.

```sql
-- Ejemplo de uso
-- phpMyAdmin → selecciona nexhub_db → Importar → 01_crear_tablas.sql
```

### `02_insertar_datos.sql` — DML

Inserta datos de ejemplo realistas:

- 8 socios con distintos tipos de membresía
- 10 espacios (open space, oficinas, salas, cabinas)
- 4 empleados del coworking
- 6 servicios adicionales
- 8 reservas en distintos estados
- 6 pagos con métodos variados

### `03_consultas.sql` — DQL

11 consultas útiles para el negocio:

```sql
-- 1. Todos los socios ordenados por apellido
SELECT * FROM socio ORDER BY apellidos;

-- 2. Reservas con nombre de socio y espacio (JOIN)
SELECT r.id_reserva, s.nombre, s.apellidos, e.nombre_espacio,
       r.fecha_inicio, r.fecha_fin, r.estado, r.precio_total
FROM reserva r
JOIN socio   s ON r.id_socio   = s.id_socio
JOIN espacio e ON r.id_espacio = e.id_espacio
ORDER BY r.fecha_inicio DESC;

-- 3. Espacios disponibles ahora mismo
SELECT * FROM espacio WHERE disponible = 1 ORDER BY tipo, precio_hora;

-- 4. Total de ingresos por mes
SELECT DATE_FORMAT(p.fecha_pago, '%Y-%m') AS mes,
       COUNT(*)            AS num_pagos,
       SUM(p.importe)      AS total_ingresos
FROM pago p
GROUP BY mes
ORDER BY mes DESC;

-- 5. Socios con su tipo de membresía y número de reservas
SELECT s.nombre, s.apellidos, s.tipo_membresia,
       COUNT(r.id_reserva) AS total_reservas
FROM socio s
LEFT JOIN reserva r ON s.id_socio = r.id_socio
GROUP BY s.id_socio
ORDER BY total_reservas DESC;

-- ... y 6 consultas más en el archivo
```

---

## Cómo importar en phpMyAdmin

```
1. Abre XAMPP → Start Apache + MySQL
2. Ve a http://localhost/phpmyadmin
3. Nueva → Nombre: nexhub_db → Crear
4. Selecciona nexhub_db en el panel izquierdo
5. Importar → Subir archivo → 01_crear_tablas.sql → Continuar
6. Importar → Subir archivo → 02_insertar_datos.sql → Continuar
7. Pestaña SQL → pega las consultas de 03_consultas.sql → Ejecutar
```

---

## Entregables

| Archivo | Descripción |
|---|---|
| `docs/diagramas/diagrama_ER.drawio` | Diagrama E-R con entidades, atributos y cardinalidades |
| `docs/diagramas/modelo_relacional.drawio` | Modelo relacional con tablas y FK |
| `sql/01_crear_tablas.sql` | DDL completo — 7 tablas con claves foráneas |
| `sql/02_insertar_datos.sql` | DML con datos de ejemplo realistas |
| `sql/03_consultas.sql` | 11 consultas útiles con JOIN, GROUP BY, ORDER BY |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW
</p>
