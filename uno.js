
function mostrar()
{
	var ancho = prompt("ingrese lo ancho");
	ancho = parseInt(ancho);
	var largo = prompt("ingrese lo largo");
	largo = parseInt(largo);
	var perimetro = (ancho + largo) * 2;
	alert("el perimetro es: "+perimetro);
}
