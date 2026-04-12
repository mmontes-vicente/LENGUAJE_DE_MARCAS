# Bases de Datos — Módulo 0484

Diseño y construcción de la base de datos de NexHub Coworking.

---

## El modelo

La base de datos representa el funcionamiento real de un coworking. Hay socios que reservan espacios, empleados que gestionan esas reservas, pagos asociados a cada reserva y servicios adicionales que los socios pueden contratar mensualmente.

### Tablas

| Tabla | Descripción | Campos |
|-------|-------------|--------|
| `socio` | Clientes del coworking | id, nombre, apellidos, email, telefono, tipo_membresia, fecha_alta |
| `espacio` | Escritorios y salas | id, nombre_espacio, tipo, capacidad, precio_hora, disponible |
| `empleado` | Personal del coworking | id, nombre, apellidos, cargo, email, salario |
| `reserva` | Reservas de espacios | id, id_socio, id_espacio, id_empleado, fecha_inicio, fecha_fin, estado, precio_total |
| `pago` | Pagos por reserva | id, id_reserva, fecha_pago, importe, metodo_pago |
| `servicio` | Servicios adicionales | id, nombre_servicio, descripcion, precio |
| `socio_servicio` | Qué servicios tiene cada socio | id_socio, id_servicio, fecha_contratacion |

`socio_servicio` es una tabla intermedia que resuelve la relación N:M entre `socio` y `servicio`. Su clave primaria es compuesta: `(id_socio, id_servicio)`.

### Relaciones

| Relación | Tipo | Nota |
|----------|------|------|
| SOCIO → RESERVA | 1:N | Un socio puede tener varias reservas |
| ESPACIO → RESERVA | 1:N | Un espacio puede reservarse varias veces |
| EMPLEADO → RESERVA | 1:N | Un empleado gestiona varias reservas |
| RESERVA → PAGO | 1:1 | Cada reserva tiene exactamente un pago |
| SOCIO ↔ SERVICIO | N:M | Resuelta con `socio_servicio` |

---

## Modelo relacional

```sql
socio (
    id_socio        INT PRIMARY KEY AUTO_INCREMENT,
    nombre          VARCHAR(100) NOT NULL,
    apellidos       VARCHAR(150) NOT NULL,
    email           VARCHAR(150) UNIQUE NOT NULL,
    telefono        VARCHAR(15),
    tipo_membresia  ENUM('HOT_DESK','DEDICATED','OFICINA','VIRTUAL') NOT NULL,
    fecha_alta      DATE NOT NULL
)

espacio (
    id_espacio      INT PRIMARY KEY AUTO_INCREMENT,
    nombre_espacio  VARCHAR(100) NOT NULL,
    tipo            ENUM('OPEN_SPACE','OFICINA_PRIVADA','SALA_REUNIONES','CABINA') NOT NULL,
    capacidad       INT NOT NULL,
    precio_hora     DECIMAL(6,2) NOT NULL,
    disponible      TINYINT(1) DEFAULT 1
)

empleado (
    id_empleado         INT PRIMARY KEY AUTO_INCREMENT,
    nombre              VARCHAR(100) NOT NULL,
    apellidos           VARCHAR(150) NOT NULL,
    cargo               VARCHAR(100) NOT NULL,
    email               VARCHAR(150) UNIQUE NOT NULL,
    salario             DECIMAL(8,2),
    fecha_contratacion  DATE
)

reserva (
    id_reserva    INT PRIMARY KEY AUTO_INCREMENT,
    id_socio      INT NOT NULL,
    id_espacio    INT NOT NULL,
    id_empleado   INT,
    fecha_inicio  DATETIME NOT NULL,
    fecha_fin     DATETIME NOT NULL,
    estado        ENUM('PENDIENTE','CONFIRMADA','CANCELADA','COMPLETADA') DEFAULT 'PENDIENTE',
    precio_total  DECIMAL(8,2),
    FOREIGN KEY (id_socio)    REFERENCES socio(id_socio),
    FOREIGN KEY (id_espacio)  REFERENCES espacio(id_espacio),
    FOREIGN KEY (id_empleado) REFERENCES empleado(id_empleado)
)

pago (
    id_pago      INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva   INT UNIQUE NOT NULL,
    fecha_pago   DATE NOT NULL,
    importe      DECIMAL(8,2) NOT NULL,
    metodo_pago  ENUM('TRANSFERENCIA','TARJETA','EFECTIVO','BIZUM') NOT NULL,
    FOREIGN KEY (id_reserva) REFERENCES reserva(id_reserva)
)

servicio (
    id_servicio      INT PRIMARY KEY AUTO_INCREMENT,
    nombre_servicio  VARCHAR(100) NOT NULL,
    descripcion      TEXT,
    precio           DECIMAL(6,2) NOT NULL
)

socio_servicio (
    id_socio            INT NOT NULL,
    id_servicio         INT NOT NULL,
    fecha_contratacion  DATE NOT NULL,
    PRIMARY KEY (id_socio, id_servicio),
    FOREIGN KEY (id_socio)    REFERENCES socio(id_socio),
    FOREIGN KEY (id_servicio) REFERENCES servicio(id_servicio)
)
```

---

## Scripts

**`01_crear_tablas.sql`**

Crea las siete tablas con sus claves primarias y foráneas. Hay que ejecutarlo primero y con la base de datos `nexhub_db` ya seleccionada.

**`02_insertar_datos.sql`**

Inserta datos de ejemplo: 8 socios, 10 espacios, 4 empleados, 6 servicios, 8 reservas y 6 pagos. Los datos están pensados para que las consultas del siguiente script tengan resultados con sentido.

**`03_consultas.sql`**

Contiene 11 consultas útiles para el negocio. Algunas de las más relevantes:

```sql
-- Reservas activas con nombre de socio y espacio
SELECT r.id_reserva, s.nombre, s.apellidos,
       e.nombre_espacio, r.fecha_inicio, r.estado
FROM   reserva r
JOIN   socio   s ON r.id_socio   = s.id_socio
JOIN   espacio e ON r.id_espacio = e.id_espacio
WHERE  r.estado IN ('PENDIENTE', 'CONFIRMADA')
ORDER  BY r.fecha_inicio;

-- Ingresos por mes
SELECT DATE_FORMAT(fecha_pago, '%Y-%m') AS mes,
       COUNT(*)       AS num_pagos,
       SUM(importe)   AS total_eur
FROM   pago
GROUP  BY mes
ORDER  BY mes DESC;

-- Socios ordenados por número de reservas
SELECT s.nombre, s.apellidos, s.tipo_membresia,
       COUNT(r.id_reserva) AS reservas
FROM   socio s
LEFT   JOIN reserva r ON s.id_socio = r.id_socio
GROUP  BY s.id_socio
ORDER  BY reservas DESC;
```

---

## Cómo importar en phpMyAdmin

1. Abre XAMPP y arranca Apache y MySQL.
2. Ve a `http://localhost/phpmyadmin`.
3. Crea una nueva base de datos llamada `nexhub_db`.
4. Selecciona `nexhub_db` en el panel izquierdo.
5. Pestaña **Importar** → sube `01_crear_tablas.sql` → Continuar.
6. Pestaña **Importar** → sube `02_insertar_datos.sql` → Continuar.
7. Pestaña **SQL** → pega el contenido de `03_consultas.sql` → Ejecutar.

---

## Entregables

- `docs/diagramas/diagrama_ER.drawio` — diagrama entidad-relación
- `docs/diagramas/modelo_relacional.drawio` — modelo relacional con FK
- `sql/01_crear_tablas.sql`
- `sql/02_insertar_datos.sql`
- `sql/03_consultas.sql`
