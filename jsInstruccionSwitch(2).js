function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("todavia falta para el frio");
	break; 
	case "Julio":
	case "Agosto":
	alert("abrigate bien");
	break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert("ya paso el frio ahora calor!!!");
	break;
}
alert (mesDelAño);




}//FIN DE LA FUNCIÓN