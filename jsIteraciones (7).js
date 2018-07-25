function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngrasado;
	var numeroMaximo= -999999;
	var numeroMinimo= 999999;

	while (respuesta='no')
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
				
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN