<div align="center">

<img src="https://img.shields.io/badge/XAMPP-FB7A24?style=for-the-badge&logo=apache&logoColor=white" />
<img src="https://img.shields.io/badge/Java-24-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
<img src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white" />

# Sistemas Informáticos — Módulo 0483

*Entorno de desarrollo local · Windows / macOS / Ubuntu*

</div>

---

## Entorno

Todo corre en local en el mismo equipo. MySQL se gestiona con XAMPP, la aplicación Java se lanza desde IntelliJ y la web se abre directamente en el navegador. No hay ningún servidor externo involucrado.

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

Compatible con **Windows 10/11**, **macOS Ventura** o posterior y **Ubuntu 22.04**.

---

## Instalación

**Java JDK 24**

Descarga en oracle.com/java. Para verificar:
```
java -version
```
Debe mostrar `java version "24.x.x"`.

**IntelliJ IDEA Community**

Descarga en jetbrains.com/idea. En macOS arrastra a Aplicaciones. En Windows ejecuta el `.exe`.

**XAMPP**

Descarga en apachefriends.org. Arranca Apache y MySQL desde el panel de control. Verifica en `http://localhost/phpmyadmin`.

En macOS puede que el sistema lo bloquee: Ajustes del sistema → Privacidad y seguridad → permite XAMPP.

**Driver JDBC**

Descarga en dev.mysql.com/downloads/connector/j → Platform Independent → extrae el `.jar`.
```
IntelliJ → File → Project Structure → Libraries → + → Java → seleccionar el .jar
```

---

## Capturas de pantalla

Guardar en `01_Sistemas_Informaticos/capturas/` con estos nombres:

| Archivo | Qué capturar |
|---------|-------------|
| `01_xampp_activo.png` | Panel XAMPP con Apache y MySQL en verde |
| `02_phpmyadmin_nexhub_db.png` | 7 tablas visibles en el panel izquierdo |
| `03_estructura_tabla_socio.png` | Tabla socio → pestaña Estructura |
| `04_datos_tabla_socio.png` | Tabla socio → pestaña Examinar |
| `05_consulta_join.png` | Resultado de la consulta JOIN en phpMyAdmin |
| `06_app_menu_principal.png` | Consola IntelliJ con el menú de NexHub |
| `07_app_lista_socios.png` | Listado de socios en consola |
| `08_web_inicio.png` | index.html abierto en el navegador |

**Cómo capturar:**
- Windows: `Win + Shift + S`
- macOS: `Cmd + Shift + 4`

**Consulta JOIN para la captura 05:**
```sql
SELECT r.id_reserva, CONCAT(s.nombre,' ',s.apellidos) AS socio,
       e.nombre_espacio, r.fecha_inicio, r.estado, r.precio_total
FROM reserva r
JOIN socio s   ON r.id_socio   = s.id_socio
JOIN espacio e ON r.id_espacio = e.id_espacio
ORDER BY r.fecha_inicio DESC;
```

---

## Mantenimiento

Copia de seguridad: phpMyAdmin → selecciona `nexhub_db` → Exportar → SQL → Guardar.
