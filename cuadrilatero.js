function limpiar() {
	document.getElementById("intereres-simple").reset();
	document.getElementById("intereres-compuesto").reset();
	document.getElementById("area-cuadrilatero").reset();
}

function intereresSimple(){ 

	var capital= document.getElementById("altura").value;
	//var t= document.getElementById("plazoPago").value;
	var r= document.getElementById("base").value;
	//var p= r/100;

	interes =(capital*r);
	

	document.write("El Area de su cuadrilatero es:" + interes);
}






