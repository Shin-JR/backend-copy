# grupo_Web-Ada_backend

## Información para levntar el servidor de backend

Bienvenidos al Readme del Backend de ComPups.

Para esta entrega 3 se completaron los CRUD de usuarios, modulo y reservas, además de staff que ya se había implementado en la entrega 2.

Los CRUD permiten agregar, verificar, actualizar y eliminar recursos de la aplicación cuando es necesario a través de las vistas.

En la documentación que se ve a continuación, hecha con Postman, se pueden encontrar los outputs de código y como se ve el input, 
[Documentación API postman](https://documenter.getpostman.com/view/26361254/2s9Ye8eu92).


De todas formas, está construído en base a lo explicitado en el diagrama E/R actualizado que se encuentra en ese mismo repositorio bajo el nombre "diagram_er.png".

Pasos para correr el código:
1. Levantar la base de datos:
Para esto, se utilizó la capsula extra que fué subida [en el siguiente link](https://www.loom.com/share/f648d62b3f304b839728e189f9583ef3). Donde luego de instalar postgres, y crear nuestro superuser con contraseña. Debemos crear una base de datos que se llame "compupsdb_development", con el siguiente comando  en la consola de ubuntu.

```
sudo -u postgres createdb compupsdb_development
```
Luego levantamos el servicio de postgres para que seamos capaces de conectarnos desde el backend con 

```
sudo service postgresql start
```
2. Creación .env

Una vez hecho esto, procedemos a crear un archivo .env en el root del backend (misma ruta donde se encuentra por ejemplo el .gitignore). En este archivo, debemos ingresar los siguientes datos, reemplazando con el usuario y contraseña anteriormente creados:

```
DB_USERNAME = <SUPERUSUARIO CREADO EN EL TUTORIAL>
DB_PASSWORD = <CONTRASEÑA ASIGNADA AL SUPERUSUARIO>
DB_NAME = compupsdb
DB_HOST = 'localhost'
JWT_SECRET = jwt_secret
```

3.- Correr el backend
Una vez realizado todo esto, por fin podremos correr el backend. Luego de instalar todas las dependencias correspondientes utilizando el gestór de paquetes a elección, por ejemplo "npm install", debemos utilizar el siguiente comando para correr las migraciones necesarias "npx sequelize-cli db:migrate" y luego "pnpm sequelize-cli db:seed:all" para ejecutar la semilla definida para cargar información la tabla de técnicos y la de usuarios. Esta última nos creará un usuario con admin y otro sin admin, esto debido a que el admin tiene privilegios para crear módulos del calendario como tal y la capacidad de acceder a todos los usuarios desde el backend.
Finalmente corremos "pnpm run dev" para que el backend quede escuchando en el puerto 3000, con esto hecho, ya podemos testear la API con Postman o correr el Front-end e interactuar con el endpoint "/staff".

4.- ¿Cómo interactuar con el Frontend?
Después de que dejamos corriendo nuestro backend, nos abrimos el proyecto correspondiente al front-end, instalamos las dependencias necesarias nuevas como antes con "npm install" y luego hacemos npm run dev para iniciar el front. Una vez en la página, nos dirijimos a Equipo en la navbar, donde nos encontraremos con unas tarjetas que representan al actual equipo de compups (debido a que no estabamos enfocados en el front, buscamos que cumplan su funcion por sobre lo estético). Y debiese de verse así : <img width="837" alt="image" src="https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/280e0c19-f23f-48ec-b4b4-998e4d5d6e0e">

Podemos acceder a esto, debido a que cualquier persona puede ver el equipo técnico de compups. Ahora si queremos interactuar con el resto de la página, debemos logearnos. Nos vamos conectar como administrador, para ello cliqueamos iniciar sesión, y en correo rellenamos "admin@compups.cl" y en contraseña "admin_compups", nos logeamos y nos va a cambiar la barra de navegación a la siguiente :
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/39e22a1e-f694-4eea-8eed-7df4da40d150)

Donde podremos ver nuestro nombre en el botón del desplegable y tendremos acceso a nuestro perfil, reservas y a cerrar sesión. Si apretamos mi perfil, tendremos la información del perfil, junto con un botón que redirecciona a nuestras reservas de módulos y bajo este se encuentra una vista simple y resumida de nuestros módulos solicitados. Si queremos más detalle, nos dirigimos a mis reservas o clickeando en el botón que se encuentra en el perfil o en el dropdown. 
En este endpoint, tenemos acceso al detalle de nuestras reservas, ya que se muestran botones con cada una de las reservas, y si se interactúa con ellas nos despliega información extra. Podemos ver además que tenemos la capacidad de eliminar las reservas creadas.
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/905428b3-661f-482a-8c6c-698922944349)

Luego cuando nos dirijimos a los tecnicos con el botón de Equipo mientras somos administradores tenemos acceso al eliminar, actualizar y agregar nuevos técnicos. Además de las funcionalidades implementadas anteriormente donde si hacemos Hover con el mouse, se despliega mas información.

Finalmente para ver todo el sistema de calendarización, podemos primero crear 2 modulos en días cualquiera del mes, desde la pestaña reservar. 
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/6ce60a77-839e-4968-9439-8a7633f34c84)
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/bbc75516-1ee0-4070-91a5-b1f9e5f2fffe)
Una vez que se vea el mensaje de que el módulo fue correctamente creado, volvemos a la página del calendario.
Y al hacer click en el día que fué creado el módulo, se verá un nuevo módulo disponible listo para ser reservado con un simple click.
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/e720926e-df8f-428b-b907-12d64bc1fecd)

Para reservar, vamos a cerrar nuestra sesión actual, y nos vamos a logear como un usuario, con las credenciales  "user@compups.cl" y en contraseña "user_compups". Con la sesión ya iniciada, nos dirigimos a "Reservar" y seleccionamos el módulo que creamos anteriormente con la sesión de administrador. Luego de clickear el módulo a reservar, este desaparece debido a que ya no se encuentra disponible y para saber si efectivamente se reservó, podemos revisar mis reservas desde el dropdown o desde mi perfil.
![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/23971ada-bf2b-4bd5-b748-060c3e5e8574)

![imagen](https://github.com/IIC2513/grupo_Web-Ada_backend/assets/97924118/fe1406d0-a71a-4e19-9165-2fcf854c65e5)
Donde podremos cancelar la reserva en caso de ser necesario.

Y así concluye nuestra entrega 3 de la página de ComPups.








