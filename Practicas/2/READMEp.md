# Programación — Módulo 0485 + MPO

Aplicación de consola en Java 24. Gestiona socios, espacios, reservas y empleados de NexHub conectándose a MySQL mediante JDBC.

---

## Estructura

```
src/

- Main.java
- db/
    - Conexion.java             <-- Singleton JDBC
- model/
    - Persona.java              <-- abstract
    - Socio.java
    - Empleado.java
    - Espacio.java
    - Reserva.java              <-- calcularPrecio(), esValida()
- service/
    - SocioService.java
    - EspacioService.java
    - ReservaService.java
    - EmpleadoService.java
- controller/
    - MenuController.java
- utils/
    - CrudService.java          <-- interface genérica <T, ID>
    - Validador.java            <-- validaciones centralizadas
```

El flujo es: `MenuController` recibe el input del usuario y llama al servicio correspondiente. El servicio ejecuta el SQL y devuelve objetos del modelo. `Conexion` abre y reutiliza la misma conexión en todos los servicios.

---

## Antes de ejecutar

Edita `db/Conexion.java` con tus credenciales de MySQL:

```java
private static final String URL      = "jdbc:mysql://localhost:3306/nexhub_db";
private static final String USUARIO  = "root";
private static final String PASSWORD = "";   // en XAMPP suele estar vacío
```

Añade el driver en IntelliJ: File > Project Structure > Libraries > + > selecciona `mysql-connector-j.jar`.  
Descarga: https://dev.mysql.com/downloads/connector/j/

---

## MPO — por qué el código está así

El MPO no evalúa que funcione, sino cómo está construido. Estas son las decisiones tomadas y el motivo de cada una:

**`Persona` es abstracta.** `Socio` y `Empleado` tienen `id`, `nombre`, `apellidos` y `email` en común. Sin la clase abstracta, esos cuatro campos estarían duplicados en dos sitios. Si cambia algo, se cambia una sola vez.

**`CrudService<T, ID>` es una interfaz.** Define el contrato: `guardar`, `listarTodos`, `buscarPorId` y `eliminar`. Los cuatro servicios la implementan. Añadir `EmpleadoService` fue copiar la estructura y rellenarla, sin tocar nada de lo que ya existía.

**`Validador` es estático.** La lógica de validar un email o un tipo de membresía vive en un único lugar. Si mañana cambia el formato permitido de email, se edita un método en un archivo.

**`Reserva` tiene lógica propia.** `calcularPrecio()` y `esValida()` están en la clase `Reserva` porque pertenecen al modelo, no al servicio ni al controlador. Un objeto debería saber gestionarse a sí mismo.

**`Conexion` es un Singleton.** Una sola conexión JDBC para toda la aplicación. No se abre y cierra en cada operación.

---

## Ejecutar

1. XAMPP con MySQL activo.
2. Base de datos importada (ver `sql/README.md`).
3. IntelliJ > File > Open > carpeta `src/`.
4. Añadir `mysql-connector-j.jar` como librería.
5. Editar `db/Conexion.java` con tus credenciales.
6. Clic derecho en `Main.java` > Run.
