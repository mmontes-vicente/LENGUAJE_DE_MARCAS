# Reflexión final

1.º DAW · NexHub Coworking · 2025

---

Antes de este proyecto veía las asignaturas como compartimentos separados. Bases de datos era una cosa, Java era otra, la web era otra. Con el proyecto intermodular se entiende que son capas del mismo sistema. Cambiar el modelo de datos obliga a cambiar los servicios Java, que a su vez afectan a lo que puede mostrar la web. Tenerlo todo junto hace que eso sea evidente de una manera que no lo es cuando trabajas cada módulo por separado.

---

## Lo que mejor me salió

El diseño de la base de datos. Empecé por el diagrama E-R antes de abrir phpMyAdmin, y eso fue la mejor decisión del proyecto. Pensar en las entidades y en cómo se relacionan antes de escribir SQL me obligó a entender el problema primero. Cuando llegué a crear las tablas, ya sabía exactamente qué necesitaba: los nombres de los campos, los tipos de datos y dónde iban las claves foráneas. El DDL salió bien a la primera y no tuve que volver a tocarlo.

El CSS también me salió bastante bien. Usar variables desde el principio en lugar de poner colores y medidas sueltos me ahorró mucho tiempo cuando tuve que ajustar el diseño en las cinco páginas a la vez.

---

## Lo que más me costó

La conexión JDBC fue lo más difícil. Entender el flujo `Connection → PreparedStatement → ResultSet` no es complicado en teoría, pero cuando empecé a tener problemas con recursos que se quedaban abiertos o excepciones que no capturaba bien, tardé bastante en encontrar la causa. El patrón try-with-resources lo entendí tarde, y ojalá lo hubiera aplicado desde el principio.

Separar el código en capas también requirió varios intentos. Al principio mezclaba la lógica de base de datos con la de presentación en el controlador. Cuando lo leía al día siguiente no entendía bien qué hacía cada parte. Refactorizarlo para que cada clase tuviera una responsabilidad clara fue tedioso pero mereció la pena.

---

## Lo que haría diferente

Haría tests de cada servicio Java antes de integrar el controlador. Varias veces encontré bugs que venían de un método concreto del servicio y los descubrí tarde, cuando ya tenía todo conectado. Con un test básico los habría pillado antes.

También haría commits más pequeños y más frecuentes. Al principio hacía un commit grande cuando terminaba una sección entera. Al final del proyecto había aprendido que un commit pequeño con un mensaje claro es mucho más útil cuando tienes que buscar cuándo dejó de funcionar algo.

---

Lo que me llevo del proyecto es que la parte técnica es la más fácil de explicar pero no es la más importante. Lo importante es saber qué problema resuelves antes de escribir la primera línea de código.
