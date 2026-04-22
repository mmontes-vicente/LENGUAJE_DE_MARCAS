# Sistemas Informáticos — Módulo 0483

---

## Entorno de ejecución

Todo corre en local, en el mismo equipo. MySQL se gestiona con XAMPP, la aplicación Java se lanza desde IntelliJ y la web se abre directamente en el navegador.

Si fuera un sistema en producción, MySQL estaría en un servidor dedicado, la aplicación Java expondría una API REST y la web estaría desplegada en un hosting. Para desarrollar y evaluar el proyecto, todo en local es lo más práctico.

---

## Hardware mínimo

| Componente | Mínimo |
|------------|--------|
| Procesador | Intel Core i5 / Apple M1 o equivalente |
| RAM | 8 GB |
| Almacenamiento | 10 GB libres |
| Pantalla | 1280 × 800 px |

---

## Software

| Programa | Versión | Para qué |
|----------|---------|----------|
| Java JDK | 24 | Compilar y ejecutar la aplicación |
| IntelliJ IDEA Community | Reciente | IDE de desarrollo |
| XAMPP | 8.x | MySQL local + phpMyAdmin |
| MySQL Connector/J | 9.x | Driver JDBC para conectar Java con MySQL |

Compatible con Windows 10/11, macOS Ventura o posterior y Ubuntu 22.04.

---

## Instalación paso a paso

**1. Java JDK 24**

Descarga en oracle.com/java. Elige tu sistema operativo y arquitectura (ARM64 para Apple Silicon, x64 para Intel y Windows). Instala con las opciones por defecto. Para verificar:

```
java -version
```

Debe mostrar `java version "24.x.x"`.

**2. IntelliJ IDEA Community**

Descarga en jetbrains.com/idea. En macOS arrastra a Aplicaciones. En Windows ejecuta el `.exe`. La edición Community es gratuita.

**3. XAMPP**

Descarga en apachefriends.org. Instala y abre el panel de control. Arranca Apache y MySQL. Verifica en `http://localhost/phpmyadmin`.

En macOS puede que el sistema lo bloquee la primera vez: Ajustes del sistema → Privacidad y seguridad → permite XAMPP.

**4. Base de datos**

En phpMyAdmin crea `nexhub_db` e importa los scripts SQL. Pasos detallados en `04_Base_de_Datos/README.md`.

**5. Driver JDBC**

Descarga en dev.mysql.com/downloads/connector/j → Platform Independent → descarga el `.zip` → extrae el `.jar`. En IntelliJ: File → Project Structure → Libraries → + → Java → selecciona el `.jar`.

**6. Ejecutar la aplicación**

Abre IntelliJ, carga `03_Programacion_MPO/src/`, edita `db/Conexion.java` con tu usuario y contraseña de MySQL y haz clic derecho en `Main.java` → Run.

---

## Capturas de pantalla

La carpeta `capturas/` contiene evidencias del sistema funcionando:

```
01_Sistemas_Informaticos/capturas/

- 01_xampp_activo.png           XAMPP con Apache y MySQL arrancados
- 02_phpmyadmin_nexhub_db.png   Base de datos nexhub_db en phpMyAdmin
- 03_tabla_socio.png            Estructura de la tabla socio
- 04_consulta_join.png          Resultado de una consulta con JOIN
- 05_app_menu_principal.png     Menú principal de la aplicación Java
- 06_app_lista_socios.png       Listado de socios en consola
- 07_web_index.png              Página de inicio en el navegador
```

Para hacer las capturas: una vez el proyecto esté funcionando, haz una captura de cada pantalla con `Windows + Shift + S` (Windows) o `Cmd + Shift + 4` (macOS) y guárdalas en esta carpeta con los nombres indicados.

---

## Usuarios y permisos

Un único usuario: el administrador, con acceso total a la aplicación. En XAMPP el usuario MySQL es `root` sin contraseña por defecto. En producción se crearía un usuario con permisos limitados solo a `nexhub_db`.

---

## Mantenimiento

Copia de seguridad: phpMyAdmin → selecciona `nexhub_db` → Exportar → formato SQL → Guardar.
