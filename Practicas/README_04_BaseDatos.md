<div align="center">

<img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=apache&logoColor=white" />
<img src="https://img.shields.io/badge/7_tablas-relacional-22d9a0?style=for-the-badge" />

# Bases de Datos — Módulo 0484

*Base de datos relacional de NexHub Coworking · 7 tablas · MySQL*

</div>

---

## Estructura

```
04_Base_de_Datos/
│
├── diagramas/
│   ├── diagrama_ER.drawio          ← añadir manualmente
│   └── modelo_relacional.drawio    ← abrir con app.diagrams.net
│
└── sql/
    ├── nexhub_db.sql               ← EXPORTACIÓN COMPLETA (recomendado)
    ├── 01_crear_tablas.sql         ← DDL: 7 tablas con FK
    ├── 02_insertar_datos.sql       ← DML: datos de ejemplo realistas
    └── 03_consultas.sql            ← 11 consultas SELECT/JOIN/GROUP BY
```

---

## Archivo principal

**`nexhub_db.sql`** es la exportación completa generada desde phpMyAdmin: incluye estructura y datos en un solo archivo. Es la forma más cómoda de restaurar todo de una vez.

---

## Modelo de datos

### Tablas

| Tabla | Qué guarda | Registros de ejemplo |
|-------|-----------|----------------------|
| `socio` | Clientes con tipo de membresía | 8 |
| `espacio` | Escritorios, oficinas, salas, cabinas | 10 |
| `empleado` | Personal que gestiona reservas | 4 |
| `reserva` | Cada reserva de un espacio por un socio | 8 |
| `pago` | Un pago por reserva (1:1) | 6 |
| `servicio` | Extras: parking, taquilla, impresión | 6 |
| `socio_servicio` | Qué extras tiene contratados cada socio (N:M) | — |

### Relaciones

```
socio ──< reserva >── espacio
             │
          empleado
             │
           pago (1:1)

socio >──── socio_servicio ────< servicio
```

| Relación | Cardinalidad |
|----------|:---:|
| SOCIO — RESERVA | 1:N |
| ESPACIO — RESERVA | 1:N |
| EMPLEADO — RESERVA | 1:N |
| RESERVA — PAGO | 1:1 |
| SOCIO — SERVICIO | N:M |

---

## Importar en phpMyAdmin

### Opción recomendada — un archivo

```
1. XAMPP → Start MySQL
2. http://localhost/phpmyadmin
3. Nueva base de datos: nexhub_db
4. Selecciona nexhub_db → Importar → nexhub_db.sql → Continuar
```

### Opción alternativa — paso a paso

```
1. Crear nexhub_db
2. Importar 01_crear_tablas.sql
3. Importar 02_insertar_datos.sql
4. Para consultas: pestaña SQL → pegar 03_consultas.sql
```

---

## Scripts SQL

**`01_crear_tablas.sql`** — DDL. Crea las 7 tablas con PK, FK y restricciones. Ejecutar primero sobre `nexhub_db` vacía.

**`02_insertar_datos.sql`** — DML. Datos realistas diseñados para que `03_consultas.sql` devuelva resultados con sentido.

**`03_consultas.sql`** — DQL. 11 consultas útiles para el negocio: socios por membresía, reservas activas con JOIN, ingresos por mes, espacios disponibles y más.
