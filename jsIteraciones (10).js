
function mostrar()




{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var contador=0;
	var acumulador=0;
	var contadorPositivo;
	var contadorNegativo;
	var acumuladorPositivo;
	var acumuladorNegativo;
	var numeroIngrasado;
	var numeroMaximo= -999999;
	var numeroMinimo= 999999;
	// declarar variables

	


	while(respuesta!='no')
	{
		numeroIngrasado = prompt("ingrese un valor");
			numeroIngrasado = parseInt(numeroIngrasado);
			if (numeroIngrasado > numeroMaximo) 
			{
				numeroMaximo = numeroIngrasado;
			}
			if (numeroIngrasado < numeroMinimo) 
			{
				numeroMinimo = numeroIngrasado;
			}

				respuesta = prompt("ingrese 'no' para salir");
	
	}

		document.getElementById('minimo').value = numeroMinimo;
		document.getElementById('maximo').value = numeroMaximo;
}









































/*
	while(respuesta!="no")
	{
		
	
	}




}//FIN DE LA FUNCIÓN