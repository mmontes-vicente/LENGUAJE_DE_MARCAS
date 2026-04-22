# Programación — Módulo 0485 + MPO

Aplicación de consola en Java 24. Gestiona socios, espacios, reservas y empleados de NexHub conectándose a MySQL mediante JDBC con patrón DAO.

---

## Estructura

```
03_Programacion_MPO/src/

- Main.java
- db/
    - Conexion.java             <-- Singleton JDBC
- dao/
    - SocioDAO.java             <-- SQL de socios
    - EspacioDAO.java           <-- SQL de espacios
    - ReservaDAO.java           <-- SQL de reservas
    - EmpleadoDAO.java          <-- SQL de empleados
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

---

## Patrón DAO

El patrón DAO (Data Access Object) separa el SQL del resto de la lógica. Cada DAO habla con la base de datos y devuelve objetos. El servicio usa el DAO y no toca JDBC directamente.

```
MenuController  →  Service  →  DAO  →  MySQL
                  (lógica)   (SQL)
```

`SocioService.altaSocio()` valida los datos y llama a `SocioDAO.insertar()`. El servicio no sabe cómo es el SQL; el DAO no sabe qué validaciones existen. Cada clase tiene una única responsabilidad.

---

## Configuración

Edita `src/db/Conexion.java` con tus credenciales de MySQL:

```java
private static final String URL      = "jdbc:mysql://localhost:3306/nexhub_db";
private static final String USUARIO  = "root";
private static final String PASSWORD = "";   // en XAMPP suele estar vacío
```

Añade el driver en IntelliJ: File > Project Structure > Libraries > + > selecciona `mysql-connector-j.jar`.  
Descarga: https://dev.mysql.com/downloads/connector/j/

---

## Decisiones de diseño — MPO

**`Persona` es abstracta.** `Socio` y `Empleado` tienen `id`, `nombre`, `apellidos` y `email` en común. Sin la clase abstracta, esos cuatro campos estarían duplicados en dos sitios. Si cambia algo, se cambia en un solo lugar.

**`CrudService<T, ID>` es una interfaz.** Define el contrato: `guardar`, `listarTodos`, `buscarPorId` y `eliminar`. Los servicios que la implementan tienen un comportamiento predecible. Añadir uno nuevo es copiar la estructura y rellenarla.

**`Validador` es estático.** La lógica de validar email, membresía o IDs vive en un único lugar. Si cambia una regla de negocio, se edita un método en un archivo.

**`Reserva` tiene lógica propia.** `calcularPrecio()` y `esValida()` están en el modelo porque pertenecen al negocio, no a la base de datos ni a la consola.

**`EmpleadoService` es el módulo extra.** Se añadió sin tocar el código existente, demostrando que la arquitectura en capas permite extender la aplicación sin romper lo que ya funciona.

---

## Ejecutar

1. XAMPP con MySQL activo.
2. Base de datos importada (ver `04_Base_de_Datos/README.md`).
3. IntelliJ > File > Open > carpeta `03_Programacion_MPO/src/`.
4. File > Project Structure > Libraries > + > añadir `mysql-connector-j.jar`.
5. Editar `db/Conexion.java` con tus credenciales.
6. Clic derecho en `Main.java` > Run.
