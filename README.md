# MyFirstTelegramBot

## ¿Qué es?

Consiste en un bot para Telegram, desarrollado sobre Node.js, que permite 
conocer la estación de [**Valenbisi**](http://cas.valenbisi.es/) más cercana al 
usuario que interactúa con el bot, así como los datos relativos a la estación: 
bicis disponibles, aparcabicis libres, calle donde está ubicada, etc. Dicho bot 
se ha desarrollado durante el transcurso del [**Taller Creando bots, la nueva 
interfaz de usuario**]
(https://mugi.webs.upv.es/taller-creando-bots-la-nueva-interfaz-usuario/) sobre 
este tema.

## ¿Cómo ejecutarlo?

### Registro del bot en BotFather

El primer paso será disponer de una cuenta de Telegram. Tras registrarte, 
deberas acceder a tu BotFather e introducir el siguiente comando:

``` 
/start 
```

Seguidamente, BotFather te mostrará todos los comandos disponibles para 
administrar tus bots de Telegram. Introduce el siguiente comando para 
crear un nuevo bot:


``` 
/newbot 
```

Tras esto, te solicitará un nombre para el nuevo bot, en este caso se ha 
escogido `miprimerbot`. A continuación, te solicitará el usuario asociado, aquí 
puede introducir el nombre que desee. Finalmente, BotFather te confirmará 
la creación del bot, proporcionándonte una url de enlace al bot y lo más 
importante, el `TOKEN` que se debe introducir en el bot para que pueda 
identificarse y así poder recibir y enviar mensajes.

![alt Imagen de ejemplo de la creación del bot con BotFather]
(/img/BotFather_bot_creation.png)

### Setup 

La aplicación está desarrollada sobre Node.js, por lo que será necesario 
instalar dicho entorno de ejecución previamente. Consulte y descargue la 
distribución disponible para su plataforma 
([https://nodejs.org/es/download/](https://nodejs.org/es/download/)). Por 
ejemplo, para Ubuntu sería:

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
```

Después de la instalación, abriremos una terminal y accederemos a la carpeta 
donde hayamos descargado el repositorio. Instalaremos las librerías necesarias
para la correcta ejecución del bot de la siguiente forma:

```bash
npm install 
```

Finalmente, y tras terminar la instalación de las librerías, ya se podrá 
ejecutar el bot a través del siguiente comando:

```bash
node index.js 
```

Ya solo nos quedará buscar nuestro bot a través de Telegram, filtrando por el 
nombre de usuario que le hayamos indicado a nuestro BotFather. Desde cualquier 
dispositivo con servicio de ubicación, podremos mandar nuestra posición y el 
bot nos responderá con la estación de Valenbisi más cercana recibiendo su 
ubicación por medio de un mapa de Google Maps, junto con los datos básicos de 
la misma.

![alt Imagen con la respuesta de la estación más cercana devuelta por el bot]
(/img/bot_response.png)

