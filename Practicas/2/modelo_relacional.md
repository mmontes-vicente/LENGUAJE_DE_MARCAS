# Modelo Relacional — NexHub Coworking

Los diagramas en formato `.drawio` de esta carpeta se abren con [app.diagrams.net](https://app.diagrams.net), sin necesidad de instalar nada.

---

## Esquema de tablas

```
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
    id_empleado     INT PRIMARY KEY AUTO_INCREMENT,
    nombre          VARCHAR(100) NOT NULL,
    apellidos       VARCHAR(150) NOT NULL,
    cargo           VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE NOT NULL,
    salario         DECIMAL(8,2),
    fecha_contratacion DATE
)

reserva (
    id_reserva      INT PRIMARY KEY AUTO_INCREMENT,
    id_socio        INT NOT NULL  → FK socio(id_socio),
    id_espacio      INT NOT NULL  → FK espacio(id_espacio),
    id_empleado     INT           → FK empleado(id_empleado),
    fecha_inicio    DATETIME NOT NULL,
    fecha_fin       DATETIME NOT NULL,
    estado          ENUM('PENDIENTE','CONFIRMADA','CANCELADA','COMPLETADA') DEFAULT 'PENDIENTE',
    precio_total    DECIMAL(8,2)
)

pago (
    id_pago         INT PRIMARY KEY AUTO_INCREMENT,
    id_reserva      INT UNIQUE NOT NULL  → FK reserva(id_reserva),
    fecha_pago      DATE NOT NULL,
    importe         DECIMAL(8,2) NOT NULL,
    metodo_pago     ENUM('TRANSFERENCIA','TARJETA','EFECTIVO','BIZUM') NOT NULL
)

servicio (
    id_servicio     INT PRIMARY KEY AUTO_INCREMENT,
    nombre_servicio VARCHAR(100) NOT NULL,
    descripcion     TEXT,
    precio          DECIMAL(6,2) NOT NULL
)

socio_servicio (
    id_socio        INT NOT NULL  → FK socio(id_socio),
    id_servicio     INT NOT NULL  → FK servicio(id_servicio),
    fecha_contratacion DATE NOT NULL,
    PRIMARY KEY (id_socio, id_servicio)
)
```

---

## Relaciones

| Tabla origen | Clave foránea | Tabla destino | Cardinalidad |
|--------------|---------------|---------------|:---:|
| reserva | id_socio | socio | N:1 |
| reserva | id_espacio | espacio | N:1 |
| reserva | id_empleado | empleado | N:1 |
| pago | id_reserva | reserva | 1:1 |
| socio_servicio | id_socio | socio | N:1 |
| socio_servicio | id_servicio | servicio | N:1 |
