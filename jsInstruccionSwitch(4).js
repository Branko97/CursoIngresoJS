function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("este mes tiene 31 dias");
	break; 
	case "Junio":
	case "Abril":
	case "Septiembre":
	case "Noviembre":
	alert("este mes tiene 30 dias");
	break;
	case "Febrero":
	alert("este mes tiene 28 dias");
	break;
}
}//FIN DE LA FUNCIÓN


