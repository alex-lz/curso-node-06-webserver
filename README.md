## WebServer

Código fuente de un servidor en Express con Handlebars(hbs) y desplegado en Heroku


Ejecuta este comando para instalar 
las dependecias de la aplicación

```
npm install
```

* Inicia el servidor

```
npm start
node server
```

* Inicia el servidor con nodemon(focus files)

```
nodemon server -e js,hbs,html,css
```

* Abrir en heroku

```
heroku open
```

* Middleware - /public

```
http://localhost:3000/index-old.html
http://localhost:3000/about-old.html
http://localhost:3000/assets/(file_or_dir)
```

* Rutas a los views

```
http://localhost:3000/
http://localhost:3000/about
```

