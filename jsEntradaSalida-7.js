/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroDos+numeroDos;
	alert("El resultado en: "+resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroDos-numeroDos;
	alert("El resultado en: "+resultado);
}

function multiplicar()
{ 
var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroDos*numeroDos;
	alert("El resultado en: "+resultado);	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroDos/numeroDos;
	alert("El resultado en: "+resultado);
}

