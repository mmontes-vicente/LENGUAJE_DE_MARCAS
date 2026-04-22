# Bases de Datos — Módulo 0484

Base de datos relacional de NexHub Coworking. Siete tablas para gestionar socios, espacios, reservas, pagos, empleados y servicios.

---

## Estructura

```
04_Base_de_Datos/

- diagramas/
    - diagrama_ER.drawio
    - modelo_relacional.drawio
- sql/
    - 01_crear_tablas.sql       DDL: crea las 7 tablas con claves primarias y foráneas
    - 02_insertar_datos.sql     DML: 8 socios, 10 espacios, 4 empleados, 8 reservas, 6 pagos
    - 03_consultas.sql          11 consultas con SELECT, JOIN, GROUP BY y ORDER BY
- README.md
```

Los archivos `.drawio` se abren con https://app.diagrams.net (gratuito, sin instalación).

---

## Modelo de datos

### Tablas

| Tabla | Qué guarda |
|-------|-----------|
| `socio` | Clientes del coworking con su tipo de membresía |
| `espacio` | Escritorios, oficinas, salas y cabinas |
| `empleado` | Personal que gestiona las reservas |
| `reserva` | Cada reserva de un espacio por un socio |
| `pago` | El pago que genera cada reserva (relación 1:1) |
| `servicio` | Servicios adicionales: parking, taquilla, impresión |
| `socio_servicio` | Qué servicios tiene contratados cada socio (N:M) |

### Relaciones

| Entidades | Cardinalidad | Por qué |
|-----------|:---:|---------|
| SOCIO — RESERVA | 1:N | Un socio puede tener varias reservas a lo largo del tiempo |
| ESPACIO — RESERVA | 1:N | Un espacio puede reservarse en distintas fechas |
| EMPLEADO — RESERVA | 1:N | Un empleado gestiona varias reservas |
| RESERVA — PAGO | 1:1 | Cada reserva genera exactamente un pago |
| SOCIO — SERVICIO | N:M | Un socio puede contratar varios servicios; un servicio puede tenerlo varios socios |

La relación N:M entre SOCIO y SERVICIO se resuelve con la tabla intermedia `socio_servicio`, cuya clave primaria es compuesta: `(id_socio, id_servicio)`.

---

## Scripts SQL

**`01_crear_tablas.sql`** — DDL

Crea las siete tablas con sus claves primarias, foráneas y restricciones. Hay que ejecutarlo primero sobre `nexhub_db` vacía.

**`02_insertar_datos.sql`** — DML

Inserta datos de ejemplo realistas. Están pensados para que las consultas del script siguiente devuelvan resultados con sentido, no filas vacías.

**`03_consultas.sql`** — DQL

Once consultas útiles para el negocio: socios por membresía, reservas activas con JOIN, ingresos agrupados por mes, espacios disponibles filtrados por tipo y más.

---

## Importar en phpMyAdmin

1. Abre XAMPP y arranca MySQL.
2. Entra en `http://localhost/phpmyadmin`.
3. Crea una nueva base de datos llamada `nexhub_db`.
4. Selecciona `nexhub_db` en el panel izquierdo.
5. Pestaña **Importar** → sube `01_crear_tablas.sql` → Continuar.
6. Pestaña **Importar** → sube `02_insertar_datos.sql` → Continuar.
7. Para probar las consultas: pestaña **SQL** → pega el contenido de `03_consultas.sql` → Ejecutar.
