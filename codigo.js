var app = angular.module("miApp",[]);
app.controller("miController", function(){
	var vm = this;
	
	vm.inputPalabra=true;
	vm.btLetras = true;
	vm.btReiniciar = true;
	vm.txtResultado = true;
	vm.resultadoFinal = false;
	vm.winLost = false;

	vm.image = "img/im1.jpg";

	vm.contadorFallos = 0;

	vm.changeImg = function(){
		switch(vm.contadorFallos){
			case 0: vm.image = "img/im1.jpg"; break;
			case 1: vm.image = "img/im2.jpg"; break;
			case 2: vm.image = "img/im3.jpg"; break;
			case 3: vm.image = "img/im4.jpg"; break;
			case 4: vm.image = "img/im5.jpg"; break;
			case 5: vm.image = "img/im6.jpg"; break;
			case 6: vm.image = "img/im7.jpg"; break;
		}
	}


	
	vm.introducirPalabra = function(palabra){
		vm.inputPalabra=false;
		vm.btLetras = false;
 		vm.btReiniciar = false;
 		vm.txtResultado = false;

		vm.palabraIntroducida = palabra.toUpperCase();
		vm.listaLetras=vm.palabraIntroducida.split("");
		vm.tamanoPalabra = vm.listaLetras.length;

	 	vm.palabraAdivinar = [];

		for(var i=0; i<vm.tamanoPalabra; i++){
			
			if(vm.listaLetras[i]==" "){
				vm.palabraAdivinar[i] = "-";
			}else{
				vm.palabraAdivinar[i] = "_";

			}

		}
		

	}

	
	vm.pulsarLetra = function(letra){
		vm.letraSeleccionada = letra;
		vm.comprobarLetra(vm.letraSeleccionada);
		switch (vm.letraSeleccionada){
			case 'A': vm.visibleA = false; break;
			case 'B': vm.visibleB = false; break;
			case 'C': vm.visibleC = false; break;
			case 'D': vm.visibleD = false; break;
			case 'E': vm.visibleE = false; break;
			case 'F': vm.visibleF = false; break;
			case 'G': vm.visibleG = false; break;
			case 'H': vm.visibleH = false; break;
			case 'I': vm.visibleI = false; break;
			case 'J': vm.visibleJ = false; break;
			case 'K': vm.visibleK = false; break;
			case 'L': vm.visibleL = false; break;
			case 'M': vm.visibleM = false; break;
			case 'N': vm.visibleN = false; break;
			case 'Ñ': vm.visibleNN = false; break;
			case 'O': vm.visibleO = false; break;
			case 'P': vm.visibleP = false; break;
			case 'Q': vm.visibleQ = false; break;
			case 'R': vm.visibleR = false; break;
			case 'S': vm.visibleS = false; break;
			case 'T': vm.visibleT = false; break;
			case 'U': vm.visibleU = false; break;
			case 'V': vm.visibleV = false; break;
			case 'W': vm.visibleW = false; break;
			case 'X': vm.visibleX = false; break;
			case 'Y': vm.visibleY = false; break;
			case 'Z': vm.visibleZ = false; break;
		}	
		
	}

	

	vm.comprobarLetra = function(letra){
		var palabraAdivinada = false;
		var aciertaLetra = false;
		for(var i=0; i<vm.tamanoPalabra; i++){
			if(letra == vm.listaLetras[i]){
				vm.palabraAdivinar[i]=letra;
				aciertaLetra=true;	
			}
		}

		if(vm.palabraAdivinar.join("")==vm.palabraIntroducida){
			vm.inputPalabra=false;
			vm.btLetras = true;
			vm.btReiniciar = false;
			vm.txtResultado = false;
			vm.winLost = true;
			vm.resultadoFinal = true;;
			vm.body = "win";
			//alert("Has acertado la palabra");


		}

		if(aciertaLetra == false){
			vm.contadorFallos++;
			vm.changeImg();
			
		}

		if(vm.contadorFallos==5){
			vm.inputPalabra=false;
			vm.btLetras = true;
			vm.btReiniciar = false;
			vm.txtResultado = false;
			vm.resultadoFinal = true;
			vm.winLost = false;

			vm.body = "lost";
			//alert("Fin del juego, pulsa reiniciar para comenzar otra vez");
			
		}

		

	}


	vm.reiniciar = function(){
		vm.inputPalabra=true;
		vm.btLetras = true;
		vm.btReiniciar = true;
		vm.txtResultado = true;
		vm.resultadoFinal=false;

		vm.body="";

		vm.image = "img/im1.jpg";
		
		vm.contadorFallos = 0;
		
		vm.palabra="";
		
		vm.visibleA = "true";
		vm.visibleB = "true";
		vm.visibleC = "true";
		vm.visibleD = "true";
		vm.visibleE = "true";
		vm.visibleF = "true";
		vm.visibleG = "true";
		vm.visibleH = "true";
		vm.visibleI = "true";
		vm.visibleJ = "true";
		vm.visibleK = "true";
		vm.visibleL = "true";
		vm.visibleM = "true";
		vm.visibleN = "true";
		vm.visibleNN = "true";
		vm.visibleO = "true";
		vm.visibleP = "true";
		vm.visibleQ = "true";
		vm.visibleR = "true";
		vm.visibleS = "true";
		vm.visibleT = "true";
		vm.visibleU = "true";
		vm.visibleV = "true";
		vm.visibleW = "true";
		vm.visibleX = "true";
		vm.visibleY = "true";
		vm.visibleZ = "true";
		

	}
	
	
});