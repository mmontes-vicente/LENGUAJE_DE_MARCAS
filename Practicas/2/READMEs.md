# Bases de Datos — Módulo 0484

Base de datos relacional de NexHub Coworking. Siete tablas para gestionar socios, espacios, reservas, pagos, empleados y servicios.

---

## Estructura

```
sql/

- 01_crear_tablas.sql           DDL: crea las 7 tablas con claves primarias y foráneas
- 02_insertar_datos.sql         DML: 8 socios, 10 espacios, 4 empleados, 8 reservas, 6 pagos
- 03_consultas.sql              11 consultas con SELECT, JOIN, GROUP BY y ORDER BY
```

---

## Tablas

| Tabla | Qué guarda |
|-------|-----------|
| `socio` | Clientes del coworking con su tipo de membresía |
| `espacio` | Escritorios, oficinas, salas y cabinas |
| `empleado` | Personal que gestiona las reservas |
| `reserva` | Cada reserva de un espacio por un socio |
| `pago` | El pago que genera cada reserva (1:1) |
| `servicio` | Servicios adicionales: parking, taquilla, impresión... |
| `socio_servicio` | Qué servicios tiene contratados cada socio (N:M) |

## Relaciones

| | Tipo |
|--|------|
| SOCIO — RESERVA | 1:N |
| ESPACIO — RESERVA | 1:N |
| EMPLEADO — RESERVA | 1:N |
| RESERVA — PAGO | 1:1 |
| SOCIO — SERVICIO | N:M via `socio_servicio` |

---

## Los tres scripts

`01_crear_tablas.sql` crea las tablas vacías con todas las restricciones. Hay que ejecutarlo primero con `nexhub_db` ya seleccionada.

`02_insertar_datos.sql` añade datos de ejemplo. Están pensados para que las consultas del script siguiente devuelvan resultados con sentido, no filas vacías.

`03_consultas.sql` tiene 11 consultas reales: socios por membresía, reservas activas con JOIN, ingresos por mes, espacios disponibles filtrados por tipo y alguna más.

---

## Importar en phpMyAdmin

1. Abre XAMPP y arranca MySQL.
2. Entra en `http://localhost/phpmyadmin`.
3. Nueva base de datos: `nexhub_db`.
4. Selecciona `nexhub_db` en el panel izquierdo.
5. Pestaña Importar → sube `01_crear_tablas.sql` → Continuar.
6. Pestaña Importar → sube `02_insertar_datos.sql` → Continuar.
7. Para probar consultas: pestaña SQL → pega el contenido de `03_consultas.sql` → Ejecutar.

Los diagramas E-R y el modelo relacional están en `docs/diagramas/`. Se abren con https://app.diagrams.net.
