function mostrar()
{
	var producto;
	var temperatura;
	var peso;
	var contadorTempPar = 0;
	var contadorBajoCero = 0;
	var pesoMax = 0;
	var productoPesoMax;
	var temperaturaMax;
	var sumatotal = 0;
	var cantidad = 0;
	var pesoMaxBajoCero = 0;
	var pesoMinBajoCero = 0;
	var respuesta = "si";

	while(respuesta!="no"){
			producto = prompt("ingrese producto");

			peso = prompt("ingrese peso");
			peso = parseInt(peso);

			while(peso < 1 || peso > 100){
				peso = prompt("el peso debe estar entre 1 y 100");
			}
			temperatura = prompt("ingrese temperatura");
			temperatura = parseInt(temperatura);
			while(temperatura < -30 || temperatura > 30){
				temperatura = prompt("La temperatutçra debe estar entre -30 y 30");
				temperatura = parseInt(temperatura);
			}

			if (temperatura%2==0) {
				contadorTempPar++;
			}
			if (pesoMax < peso) {
				pesoMax = peso;
				productoPesoMax = peso;
				temperaturaMax = temperatura;
			}
			if (temperatura < 0) {
				contadorBajoCero++;
				if (pesoMaxBajoCero < peso) {
					pesoMaxBajoCero = pesoMaxBajoCero + peso;
				}
			}
			else{

			}
	}

}
