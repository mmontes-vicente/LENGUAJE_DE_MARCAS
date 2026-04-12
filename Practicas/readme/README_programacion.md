# Programación — Módulo 0485 + MPO

> NexHub Coworking · Aplicación Java con JDBC y diseño orientado a objetos

---

## Descripción

Aplicación de escritorio en consola que permite al administrador del coworking gestionar
socios, espacios, reservas, pagos y empleados conectándose directamente a la base de datos MySQL.

---

## Arquitectura por capas

```
src/
- Main.java                      <-- Punto de entrada

- controller/
    - MenuController.java        <-- Menús de consola · navegación · input

- service/
    - SocioService.java          <-- CRUD socios · lógica de negocio
    - EspacioService.java        <-- CRUD espacios · disponibilidad
    - ReservaService.java        <-- CRUD reservas · JOIN · ingresos
    - EmpleadoService.java       <-- CRUD empleados (módulo extra MPO)

- model/
    - Persona.java               <-- abstract · base de Socio y Empleado
    - Socio.java                 <-- extends Persona
    - Empleado.java              <-- extends Persona
    - Espacio.java
    - Reserva.java               <-- lógica: calcularPrecio(), esValida()

- utils/
    - CrudService.java           <-- interface genérica <T, ID>
    - Validador.java             <-- validaciones centralizadas (static)

- db/
    - Conexion.java              <-- Singleton JDBC → MySQL
```

---

## Configuración JDBC

Edita `db/Conexion.java` antes de ejecutar:

```java
private static final String URL  = "jdbc:mysql://localhost:3306/nexhub_db";
private static final String USER = "root";
private static final String PASS = "";   // ajusta si tienes contraseña
```

### Añadir el driver en IntelliJ

```
File → Project Structure → Libraries → + → Java
→ selecciona mysql-connector-j-X.X.X.jar → OK → Apply
```

Descarga el driver en: [dev.mysql.com/downloads/connector/j](https://dev.mysql.com/downloads/connector/j)

---

## Funcionalidades implementadas

### Gestión de socios
- Alta con validación de email y membresía
- Baja por ID
- Modificar tipo de membresía
- Buscar por ID o por tipo de membresía
- Estadísticas: total por tipo, socios activos

### Gestión de espacios
- Listar todos los espacios
- Listar solo los disponibles
- Cambiar disponibilidad (abrir / cerrar)

### Gestión de reservas
- Crear reserva con cálculo automático de precio
- Listar reservas con JOIN (nombre del socio + nombre del espacio)
- Cambiar estado de una reserva
- Cancelar reserva
- Calcular ingresos totales del período

### Gestión de empleados _(módulo extra MPO)_
- Alta de empleado
- Listar todos
- Buscar por ID
- Eliminar por ID

---

## MPO — Mejoras de diseño orientado a objetos

### 1 · Clase abstracta `Persona`

`Socio` y `Empleado` extienden `Persona`.
Los campos `id`, `nombre`, `apellidos` y `email` se definen una sola vez.

```java
public abstract class Persona {
    protected int    id;
    protected String nombre;
    protected String apellidos;
    protected String email;

    public String getNombreCompleto() {
        return nombre + " " + apellidos;
    }

    public abstract String getRol();  // cada subclase define su rol
}
```

### 2 · Interfaz genérica `CrudService<T, ID>`

Todos los servicios implementan el mismo contrato.

```java
public interface CrudService<T, ID> {
    boolean guardar(T entidad);
    List<T> listarTodos();
    T       buscarPorId(ID id);
    boolean eliminar(ID id);
}
```

### 3 · Clase `Validador` — sin duplicar código

```java
public class Validador {
    public static boolean esEmailValido(String email) {
        return email != null && email.matches("^[\\w.]+@[\\w.]+\\.[a-z]{2,}$");
    }

    public static boolean esMembresiaValida(String m) {
        return List.of("HOT_DESK","DEDICATED","OFICINA","VIRTUAL").contains(m);
    }

    public static boolean esIdValido(int id) {
        return id > 0;
    }
}
```

### 4 · Lógica de negocio en `Reserva`

El objeto `Reserva` no es solo un contenedor de datos — tiene lógica propia:

```java
public double calcularPrecio(double precioHora) {
    long horas = ChronoUnit.HOURS.between(fechaInicio, fechaFin);
    return horas * precioHora;
}

public boolean esValida() {
    return fechaInicio != null
        && fechaFin != null
        && fechaFin.isAfter(fechaInicio);
}

public boolean estaActiva() {
    return "CONFIRMADA".equals(estado)
        && LocalDateTime.now().isBefore(fechaFin);
}
```

### 5 · Patrón Singleton en `Conexion`

La conexión a la base de datos se crea una sola vez y se reutiliza en todos los servicios:

```java
public class Conexion {
    private static Connection instancia;

    public static Connection getInstancia() throws SQLException {
        if (instancia == null || instancia.isClosed()) {
            instancia = DriverManager.getConnection(URL, USER, PASS);
        }
        return instancia;
    }
}
```

### 6 · Método privado `mapearSocio()`

Centraliza la conversión `ResultSet → Socio` en un solo sitio para no repetirlo en cada consulta:

```java
private Socio mapearSocio(ResultSet rs) throws SQLException {
    Socio s = new Socio();
    s.setId(rs.getInt("id_socio"));
    s.setNombre(rs.getString("nombre"));
    s.setApellidos(rs.getString("apellidos"));
    s.setEmail(rs.getString("email"));
    s.setTipoMembresia(rs.getString("tipo_membresia"));
    return s;
}
```

---

## Cómo ejecutar

```
1. XAMPP abierto → MySQL activo
2. Base de datos importada (ver README_bbdd.md)
3. IntelliJ → abrir carpeta src/
4. Añadir mysql-connector-j.jar como librería
5. Editar db/Conexion.java con tus credenciales
6. Clic ▶ en Main.java
```

---

## Entregables

| Archivo | Descripción |
|---|---|
| `src/Main.java` | Punto de entrada de la aplicación |
| `src/db/Conexion.java` | Singleton JDBC |
| `src/model/*.java` | Clases del modelo con herencia y lógica de negocio |
| `src/service/*.java` | Servicios CRUD que implementan la interfaz genérica |
| `src/controller/MenuController.java` | Menús de consola |
| `src/utils/CrudService.java` | Interfaz genérica `<T, ID>` |
| `src/utils/Validador.java` | Validaciones centralizadas |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW
</p>
