<div align="center">

<img src="https://img.shields.io/badge/Java-24-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
<img src="https://img.shields.io/badge/JDBC-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/Patrón-DAO-6c63ff?style=for-the-badge" />

# Programación — Módulo 0485 + MPO

*Aplicación de consola en Java 24 · Patrón DAO · Arquitectura en capas*

</div>

---

## Estructura

```
03_Programacion_MPO/src/
│
├── Main.java
├── db/
│   └── Conexion.java          ← Singleton JDBC
├── dao/                       ← acceso a datos (solo SQL aquí)
│   ├── SocioDAO.java
│   ├── EspacioDAO.java
│   ├── ReservaDAO.java
│   └── EmpleadoDAO.java
├── model/                     ← entidades del negocio
│   ├── Persona.java           ← abstract
│   ├── Socio.java             ← extends Persona
│   ├── Empleado.java          ← extends Persona
│   ├── Espacio.java
│   └── Reserva.java           ← calcularPrecio(), esValida()
├── service/                   ← lógica de negocio
│   ├── SocioService.java
│   ├── EspacioService.java
│   ├── ReservaService.java
│   └── EmpleadoService.java
├── controller/
│   └── MenuController.java    ← menús por consola
└── utils/
    ├── CrudService.java       ← interface genérica <T, ID>
    └── Validador.java         ← validaciones centralizadas
```

---

## Flujo de la aplicación

```
MenuController  →  Service  →  DAO  →  MySQL
  (input)         (lógica)    (SQL)    (datos)
```

`SocioService.altaSocio()` valida los datos y llama a `SocioDAO.insertar()`.
El servicio no sabe cómo es el SQL. El DAO no sabe qué validaciones existen.
Cada clase tiene una sola responsabilidad.

---

## Decisiones de diseño — MPO

| Decisión | Por qué |
|----------|---------|
| `Persona` abstract | `Socio` y `Empleado` comparten `id`, `nombre`, `apellidos`, `email`. Sin herencia estarían duplicados en dos sitios. |
| `CrudService<T,ID>` interface | Contrato predecible: `guardar`, `listarTodos`, `buscarPorId`, `eliminar`. Añadir un servicio nuevo es copiar la estructura. |
| `Validador` estático | Un solo lugar para todas las validaciones. Si cambia una regla, se edita un método. |
| Lógica en `Reserva` | `calcularPrecio()` y `esValida()` pertenecen al modelo, no al servicio ni al controlador. |
| `EmpleadoService` como extra | Se añadió sin tocar el código existente. La arquitectura en capas lo permite. |
| Singleton en `Conexion` | Una sola conexión JDBC reutilizada en todos los DAOs. |

---

## Requisitos previos

### 1. Base de datos

#### Opción recomendada — un solo archivo

```
1. XAMPP → Start MySQL
2. phpMyAdmin → Nueva BD: nexhub_db
3. Importar → 04_Base_de_Datos/sql/nexhub_db.sql → Continuar
```

#### Opción alternativa — scripts por separado

```
1. Crear nexhub_db en phpMyAdmin
2. Importar 04_Base_de_Datos/sql/01_crear_tablas.sql
3. Importar 04_Base_de_Datos/sql/02_insertar_datos.sql
```

### 2. Driver JDBC

Descargar `mysql-connector-j-X.X.X.jar` desde https://dev.mysql.com/downloads/connector/j (Platform Independent).

```
IntelliJ → File → Project Structure → Libraries → + → Java → seleccionar el .jar
```

### 3. Credenciales

```java
// src/db/Conexion.java
private static final String URL      = "jdbc:mysql://localhost:3306/nexhub_db";
private static final String USUARIO  = "root";
private static final String PASSWORD = "";   // vacío por defecto en XAMPP
```

---

## Ejecutar

```
1. XAMPP con MySQL activo
2. IntelliJ → File → Open → 03_Programacion_MPO/
3. Clic derecho src/ → Mark Directory as → Sources Root
4. File → Project Structure → Libraries → + → mysql-connector-j.jar
5. File → Project Structure → Project → SDK: Java 24
6. Clic derecho Main.java → Run 'Main'
```
