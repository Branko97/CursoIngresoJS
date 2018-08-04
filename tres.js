function mostrar()
{
	var precio = prompt("ingrese precio");
	precio = parseInt(precio);
	var descuento = prompt("ingrese descuento");
	descuento = parseInt(descuento);
	var precioFinal = precio * descuento;
	document.getElementById('precio final').value = precioFinal / 100;
}
