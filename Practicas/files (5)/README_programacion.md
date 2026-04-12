# Programación — Módulo 0485 + MPO

Aplicación Java por consola para gestionar NexHub Coworking.

---

## Qué hace la aplicación

El administrador del coworking ejecuta el programa y accede a un menú desde el que puede gestionar socios, espacios, reservas y empleados. Todos los cambios se guardan directamente en MySQL a través de JDBC.

No hay interfaz gráfica. Todo funciona por consola.

---

## Arquitectura

El proyecto está dividido en cuatro capas con responsabilidades separadas:

```
src/
├── Main.java                        punto de entrada
├── controller/
│   └── MenuController.java          menús y navegación
├── service/
│   ├── SocioService.java
│   ├── EspacioService.java
│   ├── ReservaService.java
│   └── EmpleadoService.java         (añadido para MPO)
├── model/
│   ├── Persona.java                 clase abstracta
│   ├── Socio.java
│   ├── Empleado.java
│   ├── Espacio.java
│   └── Reserva.java
├── utils/
│   ├── CrudService.java             interfaz genérica
│   └── Validador.java
└── db/
    └── Conexion.java                Singleton JDBC
```

`MenuController` recoge el input del usuario y llama a los servicios. Los servicios ejecutan el SQL y devuelven objetos del modelo. El modelo solo contiene datos y lógica de negocio. `Conexion` gestiona la conexión a la base de datos.

---

## Configuración

Antes de ejecutar, edita `db/Conexion.java`:

```java
private static final String URL  = "jdbc:mysql://localhost:3306/nexhub_db";
private static final String USER = "root";
private static final String PASS = "";  // deja vacío si usas XAMPP sin contraseña
```

Para añadir el driver JDBC en IntelliJ: File → Project Structure → Libraries → `+` → selecciona `mysql-connector-j-X.X.X.jar`.

Descarga el driver en: https://dev.mysql.com/downloads/connector/j/

---

## Funcionalidades

**Socios**
- Alta con validación de email y tipo de membresía
- Baja por ID
- Modificar tipo de membresía
- Buscar por ID o por tipo de membresía
- Estadísticas: cuántos socios hay por tipo

**Espacios**
- Listar todos
- Filtrar por disponibilidad
- Cambiar disponibilidad

**Reservas**
- Crear reserva con precio calculado automáticamente
- Listar con JOIN (muestra nombre del socio y del espacio)
- Cambiar estado (pendiente → confirmada → completada / cancelada)
- Calcular ingresos del período

**Empleados** *(módulo extra para MPO)*
- Alta, listado, búsqueda por ID y baja

---

## MPO — Diseño del código

El MPO no evalúa que el programa funcione, sino cómo está escrito. Estas son las decisiones de diseño aplicadas:

### Clase abstracta `Persona`

`Socio` y `Empleado` tienen los mismos campos básicos: `id`, `nombre`, `apellidos`, `email`. En lugar de repetirlos en las dos clases, se definen una vez en `Persona` y cada subclase añade solo lo que le es propio.

```java
public abstract class Persona {
    protected int    id;
    protected String nombre;
    protected String apellidos;
    protected String email;

    public String getNombreCompleto() {
        return nombre + " " + apellidos;
    }

    public abstract String getRol();
}

public class Socio extends Persona {
    private String tipoMembresia;
    private Date   fechaAlta;

    @Override
    public String getRol() { return "SOCIO"; }
}
```

### Interfaz genérica `CrudService<T, ID>`

Los cuatro servicios tienen las mismas operaciones básicas. Definirlas en una interfaz obliga a que todos las implementen de la misma forma y hace el código predecible.

```java
public interface CrudService<T, ID> {
    boolean guardar(T entidad);
    List<T> listarTodos();
    T       buscarPorId(ID id);
    boolean eliminar(ID id);
}

public class SocioService implements CrudService<Socio, Integer> {
    // implementación de los cuatro métodos
}
```

### `Validador` — validaciones en un solo sitio

En lugar de validar el formato del email en cada sitio donde se pide, hay una clase con métodos estáticos. Si la regla cambia, se cambia en un solo lugar.

```java
public class Validador {

    public static boolean esEmailValido(String email) {
        return email != null &&
               email.matches("^[\\w.]+@[\\w.]+\\.[a-z]{2,}$");
    }

    public static boolean esMembresiaValida(String m) {
        return List.of("HOT_DESK", "DEDICATED", "OFICINA", "VIRTUAL")
                   .contains(m);
    }

    public static boolean esIdValido(int id) {
        return id > 0;
    }
}
```

### Lógica de negocio en `Reserva`

El objeto `Reserva` no es un simple contenedor de datos. Sabe calcular su precio y validarse a sí mismo.

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
```

### Singleton en `Conexion`

La conexión a la base de datos se crea una sola vez y todos los servicios la reutilizan.

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

### `mapearSocio()` privado en `SocioService`

La conversión de `ResultSet` a objeto `Socio` se repite en varios métodos (listar, buscar, filtrar). En lugar de copiar ese bloque de código, hay un método privado que lo hace.

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

1. XAMPP abierto con MySQL activo.
2. Base de datos importada (ver `README_bbdd.md`).
3. IntelliJ → abrir carpeta `src/`.
4. Añadir `mysql-connector-j.jar` como librería.
5. Editar `db/Conexion.java` con tus credenciales.
6. Run → `Main.java`.
