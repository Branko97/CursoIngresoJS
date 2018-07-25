function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngrasado;
	var numeroMaximo= -999999;
	var numeroMinimo= 999999;
	// declarar variables

	
	var respuesta='si';

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



}//FIN DE LA FUNCIÓN