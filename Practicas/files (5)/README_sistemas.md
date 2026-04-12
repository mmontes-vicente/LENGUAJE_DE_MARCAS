# Sistemas Informáticos — Módulo 0483

Informe técnico del entorno de ejecución de NexHub Coworking.

---

## Tipo de sistema

PC de usuario con servidor local mediante XAMPP.

La aplicación Java corre en el mismo equipo desde el que trabaja el administrador. MySQL está instalado localmente con XAMPP. La web no necesita servidor: se abre directamente en el navegador.

Esta configuración es adecuada para un negocio pequeño donde el administrador trabaja desde un único puesto. Si el sistema necesitara escalar o ser accesible desde varios equipos, habría que migrar MySQL a un servidor dedicado y desplegar la web en un hosting.

---

## Requisitos de hardware

| Componente | Mínimo | Recomendado |
|------------|--------|-------------|
| Procesador | Intel Core i3, 2 GHz | Intel Core i5 o superior |
| RAM | 4 GB | 8 GB |
| Almacenamiento | 10 GB libres | SSD con 256 GB |
| Pantalla | 1280 × 720 | 1920 × 1080 |
| Red | No necesaria | WiFi o Ethernet para actualizaciones |

---

## Sistema operativo

Windows 10 o Windows 11 de 64 bits.

Se elige Windows por ser el sistema operativo más extendido en oficinas y porque todas las herramientas necesarias (XAMPP, IntelliJ, JDK) tienen instaladores nativos para Windows que no requieren configuración adicional.

Ubuntu 22.04 LTS es una alternativa válida. El proceso de instalación es diferente pero el resultado final es el mismo.

---

## Software necesario

| Programa | Versión | Para qué se usa |
|----------|---------|-----------------|
| Java JDK | 17 LTS | Compilar y ejecutar la aplicación |
| IntelliJ IDEA Community | Cualquier reciente | Entorno de desarrollo |
| XAMPP | 8.x | Servidor MySQL + phpMyAdmin |
| MySQL Connector/J | 8.x | Driver JDBC para conectar Java con MySQL |

---

## Instalación paso a paso

### Java JDK 17

1. Ve a https://www.oracle.com/java/technologies/downloads/ y descarga el instalador de JDK 17 para Windows.
2. Ejecuta el instalador con las opciones por defecto.
3. Abre el símbolo del sistema y escribe `java -version`. Debe mostrar la versión 17.

### IntelliJ IDEA Community

1. Descarga la edición Community (gratuita) desde https://www.jetbrains.com/idea/download/.
2. Instala con las opciones por defecto.
3. En la pantalla de configuración inicial, marca **Add to PATH** si lo ofrece.

### XAMPP

1. Descarga XAMPP desde https://www.apachefriends.org/.
2. Instala en la ruta por defecto (`C:\xampp`).
3. Abre el Panel de Control de XAMPP y arranca **Apache** y **MySQL**.
4. Verifica que funciona abriendo http://localhost/phpmyadmin en el navegador.

### Base de datos

1. En phpMyAdmin, crea una nueva base de datos llamada `nexhub_db`.
2. Selecciona `nexhub_db` en el panel izquierdo.
3. Pestaña **Importar** → sube `sql/01_crear_tablas.sql` → Continuar.
4. Repite con `sql/02_insertar_datos.sql`.

### Driver JDBC

1. Descarga MySQL Connector/J desde https://dev.mysql.com/downloads/connector/j/.
2. Elige **Platform Independent** y descarga el `.zip`.
3. Extrae el archivo `.jar`.
4. En IntelliJ: **File → Project Structure → Libraries → + → Java** → selecciona el `.jar` → OK.

### Ejecución

1. Abre IntelliJ y carga la carpeta `src/`.
2. Edita `db/Conexion.java` con tu usuario y contraseña de MySQL.
3. Haz clic en **Run** sobre `Main.java`.

---

## Usuarios y permisos

En esta configuración, solo hay un usuario de la aplicación: el administrador del coworking, que tiene acceso completo a todas las funciones.

El usuario de MySQL que usa la aplicación es `root` sin contraseña, que es la configuración por defecto de XAMPP en local. En un entorno de producción habría que crear un usuario MySQL específico con permisos solo sobre `nexhub_db` y con contraseña.

---

## Mantenimiento

| Tarea | Cuándo | Cómo |
|-------|--------|------|
| Copia de seguridad | Semanalmente | phpMyAdmin → Exportar → formato SQL → guardar el archivo |
| Actualizar JDK | Al salir nueva versión LTS | Descargar e instalar sobre la versión anterior |
| Actualizar XAMPP | Una vez al año | Descargar nueva versión desde apachefriends.org |
| Revisar logs MySQL | Si hay errores | XAMPP → Shell → `tail -f C:\xampp\mysql\data\*.err` |

---

## Entregables

- `docs/sistemas/informe_tecnico.md` — este documento
- `docs/sistemas/capturas/` — capturas de pantalla del entorno funcionando
