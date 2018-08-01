
function mostrar()
{
	var base = prompt("ingrese la base");
	base = parseInt(base);
	var altura = prompt("ingrese la altura");
	altura = parseInt(altura);
	var perimetro = base*3;
	var superficie = base*altura/2;
	alert("la superficie es: "+superficie+" y el perimetro es: "+perimetro);
}
