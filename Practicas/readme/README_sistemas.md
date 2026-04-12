# 🖥 Sistemas Informáticos — Módulo 0483

> NexHub Coworking · Informe técnico del entorno de ejecución

---

## Tipo de sistema

**PC de usuario + servidor local (XAMPP)**

La aplicación Java corre en el PC del administrador del coworking.
MySQL corre en el mismo equipo mediante XAMPP en `localhost`.
La web se abre directamente en el navegador sin servidor adicional.

**Justificación:** opción más adecuada para 1º DAW. IntelliJ IDEA, XAMPP y el JDK tienen
instaladores nativos simples para Windows. No requiere infraestructura cloud ni configuración
de red. Es completamente reproducible en cualquier PC de oficina.

---

## Requisitos de hardware

| Componente | Mínimo | Recomendado |
|---|---|---|
| CPU | Intel Core i3 · 2 GHz | Intel Core i5 / i7 · 2.5 GHz+ |
| RAM | 4 GB | 8 GB o más |
| Almacenamiento | 10 GB libres | SSD 256 GB |
| Pantalla | 1280 × 720 px | 1920 × 1080 px |
| Red | No requerida (local) | Ethernet o WiFi estable |

---

## Sistema operativo

**Windows 10 / 11 Pro — 64 bits**

Alternativa válida: Ubuntu 22.04 LTS

Windows elegido por ser el SO más extendido en entornos de oficina.
Todas las herramientas del proyecto tienen instaladores `.exe` nativos
sin pasos adicionales de configuración.

---

## Software necesario

| Software | Versión | Uso | Descarga |
|---|---|---|---|
| Java JDK | 17 LTS | Compilar y ejecutar la aplicación | oracle.com/java |
| IntelliJ IDEA | Community (gratis) | IDE de desarrollo Java | jetbrains.com/idea |
| XAMPP | 8.x | Servidor MySQL local + phpMyAdmin | apachefriends.org |
| MySQL Connector/J | 8.x | Driver JDBC para conectar Java con MySQL | dev.mysql.com |
| Navegador web | Cualquier moderno | Visualizar la web y usar phpMyAdmin | — |

---

## Guía de instalación paso a paso

### Paso 1 — Java JDK 17

```
1. Ve a oracle.com/java/technologies/downloads
2. Descarga JDK 17 para Windows (installer .exe)
3. Ejecuta el instalador con opciones por defecto
4. Verifica la instalación:
   → Abre cmd → escribe: java -version
   → Debe mostrar: java version "17.x.x"
```

### Paso 2 — IntelliJ IDEA Community

```
1. Ve a jetbrains.com/idea/download
2. Descarga la edición Community (gratuita)
3. Ejecuta el instalador
4. En opciones: marca "Add to PATH" y "Create Desktop Shortcut"
5. Reinicia el equipo si lo pide
```

### Paso 3 — XAMPP

```
1. Ve a apachefriends.org
2. Descarga XAMPP para Windows
3. Ejecuta el instalador — deja la ruta por defecto (C:\xampp)
4. Abre XAMPP Control Panel
5. Pulsa Start en Apache y en MySQL
6. Verifica: abre el navegador → http://localhost/phpmyadmin
```

### Paso 4 — Base de datos

```
1. En phpMyAdmin: clic en "Nueva"
2. Nombre de la BD: nexhub_db → clic en Crear
3. Selecciona nexhub_db en el panel izquierdo
4. Pestaña Importar → Subir archivo → 01_crear_tablas.sql → Continuar
5. Pestaña Importar → Subir archivo → 02_insertar_datos.sql → Continuar
```

### Paso 5 — Driver JDBC

```
1. Ve a dev.mysql.com/downloads/connector/j
2. Selecciona Platform Independent → descarga el .zip
3. Extrae el archivo .jar (mysql-connector-j-X.X.X.jar)
4. En IntelliJ: File → Project Structure → Libraries → + → Java
5. Selecciona el .jar descargado → OK → Apply
```

### Paso 6 — Ejecutar la aplicación

```
1. Abre IntelliJ → File → Open → selecciona la carpeta src/
2. Edita db/Conexion.java:
   - URL: jdbc:mysql://localhost:3306/nexhub_db
   - USER: root
   - PASS: (vacío o tu contraseña de MySQL)
3. Clic derecho en Main.java → Run 'Main'
4. El menú principal aparece en la consola de IntelliJ
```

---

## Usuarios y permisos

| Rol | Usuario | Acceso | Descripción |
|---|---|---|---|
| Administrador | root (XAMPP) | Total | Gestión completa de la BD y la aplicación |
| Administrador coworking | root (app) | CRUD completo | Opera la aplicación Java — único usuario real |

> En un entorno de producción se crearía un usuario MySQL con permisos limitados
> solo a la BD `nexhub_db` y sin acceso al resto del servidor.

---

## Mantenimiento básico

| Tarea | Frecuencia | Cómo hacerlo |
|---|---|---|
| Copia de seguridad BD | Semanal | phpMyAdmin → Exportar → SQL → Guardar |
| Actualizar JDK | Cuando salga LTS nueva | oracle.com/java → descargar e instalar sobre la anterior |
| Actualizar XAMPP | Anual | apachefriends.org → descargar nueva versión |
| Revisar logs MySQL | Mensual | XAMPP → Shell → `tail -f /xampp/mysql/data/*.err` |

---

## Entregables

| Archivo | Descripción |
|---|---|
| `docs/sistemas/informe_tecnico.md` | Este documento |
| `docs/sistemas/capturas/` | Capturas de pantalla del entorno funcionando |

---

<p align="center">
  © 2025 NexHub Coworking · Proyecto Intermodular DAW
</p>
