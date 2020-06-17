

var buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	iterar: function(registroTemp){
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
		buclePrincipal.actualizar(registroTemp);
		buclePrincipal.dibujar();

		if (registroTemp - buclePrincipal.ultimoRegistro > 999) {
			buclePrincipal.ultimoRegistro = registroTemp;
			//console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
		}

	},
	detener: function(){

	},
	actualizar: function(registroTemp){
		teclado.reiniciar();
		mando.actualizar();
		buclePrincipal.aps++;
	},
	dibujar: function(registroTemp){
		buclePrincipal.fps++;
	}
}
