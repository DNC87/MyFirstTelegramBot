const Telegraf = require("telegraf");
const ObtenerEstaciones = require("get-json");
const GeolocalizacionEstaciones = require("geolib");

// Introducir aquí el TOKEN proporcionado por BotFather
const Token = "";

// Mirar wit.ai para añadir procesamiento y análisis de contenido enviado al bot

const bot = new Telegraf(Token);

bot.command("start", (ctx) => {
	var nombre = ctx.from.first_name;
	ctx.reply("Hola, "+nombre);
});


bot.on("location", (ctx) => {
	var localizacion = ctx.message.location;
	//ctx.reply("Tu ubicación es: "+JSON.stringify(localizacion));
	var url_bicis = "https://api.citybik.es/v2/networks/valenbisi?fields=stations"
	ObtenerEstaciones(url_bicis, function(error, resultado) {
		var estacion_mas_cercana = GeolocalizacionEstaciones.findNearest(localizacion, 
			resultado.network.stations,
			0);
		var indice = estacion_mas_cercana.key;
		var estacion = resultado.network.stations[indice];
		var latitud = estacion.latitude;
		var longitud = estacion.longitude;
		var direccion = estacion.extra.address;
		var bicis_disponibles = estacion.free_bikes;
		var bornetas_libres = estacion.extra.slots;
		ctx.reply("La estación más cercana"
			+"\n"+"-----------------------"
			+"\n - Direccion: "+direccion
			+"\n - Bicis Disponibles: "+bicis_disponibles
			+"\n - Bornetas Libre: "+bornetas_libres
			+"\n - Latitud: "+latitud
			+"\n - Longitud: "+longitud);

		ctx.replyWithLocation(latitud,longitud);

	});
});



bot.startPolling();