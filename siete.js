function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador=0;

	while(contador<3)
	{
		nombre=prompt("ingrese un nombre");

		sexo=prompt("ingrese un sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("error, ingrese un sexo");
		}

		edad=prompt("ingrese la edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad>100||edad<0)
		{
			edad=prompt("error, edad invalidad");
			edad=parseInt(edad);
		}
			contador++;	
	}
			var promedio=edad/3;

			promedio=parseInt(promedio);

		alert("el promedio de las edades es: "+promedio);

}
