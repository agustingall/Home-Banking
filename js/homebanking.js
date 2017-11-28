//Declaración de variables
var nombreUsuario = "Agustín Galleguillo";
var saldoCuenta = 10000;
var limiteExtraccion = 2000;
var servicio = {agua : 350,
				telefono : 425,
				luz : 210,
				internet : 570
}
var cuentaAmiga = {NCuenta1 : 1234567,
				   NCuenta2 : 7654321
					 }
var codSeguridad = 5678;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();
 
//Funciones que tenes que completar
function validar(R){
	if (R == null  || isNaN(R) || R ==  0 ){
		alert("El dato introducido es inválido.");
		reload();
	}
	else{
		return R;
	}

}

function pagar(dinero,servicio){
	if (dinero < saldoCuenta){
		var dineroB = saldoCuenta;
		saldoCuenta -= dinero;
		alert("Has pagado el servicio " + servicio + ".\n Saldo anterior: $" + dineroB + "\nDinero descontado: $" + 
			   dinero + "\nSaldo actual: $" + saldoCuenta);
		actualizarSaldoEnPantalla();
	}
	else{
		alert("No hay saldo disponible para realizar la operación.");
	}
}

function haySaldoDisponible(dinero){
	if(dinero < saldoCuenta){
		return true;
	}
	else{
		return false;
	}
}

function sePuedeExtraer(dinero){
	if(dinero <= limiteExtraccion){
		return true;
	}
	else{
		return false;
	}
}

function billetes100(dinero){
	if(dinero % 100 == 0){
		return true;
	}
	else{
		return false;
	}
}

function agregarSaldo(dinero){
	saldoCuenta += dinero;
}
function cambiarLimiteDeExtraccion() {
	var NLimite = validar(prompt("Ingrese el nuevo límite de extración"));
	limiteExtraccion = NLimite;
	actualizarLimiteEnPantalla();

}

function extraerDinero() {
	var dineroE = validar(parseInt(prompt("Ingrese el dinero a extraer")));
	var dineroB = saldoCuenta;
	if (haySaldoDisponible(dineroE)){
		if(sePuedeExtraer(dineroE)){
			if(billetes100(dineroE)){
				saldoCuenta -= dineroE;
				actualizarSaldoEnPantalla();
				alert("Has retirado $" + dineroE + "\nSaldo anterior: $" + dineroB +
				"\nSaldo actual: $" + saldoCuenta);
			}
			else{
				alert("Solo se pueden extraer billetes de 100.");
			}
		}
		else{
			alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extración.");
		}
	}
	else if ( dineroE > saldoCuenta){
		alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
	}
	else{
		alert("La característica ingresada no existe")
	}
	
}

function depositarDinero() {
	var dineroB = saldoCuenta;
	var dineroD = validar(parseInt(prompt("Ingrese cuanto dinero va a depositar.")));
	agregarSaldo(dineroD); 
	actualizarSaldoEnPantalla();
	alert("Saldo anterior: $" + dineroB +"\nDinero depositado: $" + dineroD + 
	        "\nSaldo actual: $" + saldoCuenta);
}

function pagarServicio() {
	var eleccion = prompt("Ingrese el número que corresponda con el servicio que quieres pagar" + "\n1- Agua" +
	 							   "\n2- Luz" + "\n3- Internet" + "\n4- Teléfono");

	switch (eleccion) {
		case 1:
			pagar(servicio.agua, "Agua");
			break;
		case 2:
			pagar(servicio.luz, "Luz");
			break;
		case 3:
			pagar(servicio.internet, "Internet");
			break;
		case 4:
			pagar(servicio.telefono, "Telefono");
			break;
		default:
			alert("No existe el servicio que se ha seleccionado.");
			break;
	}

}

function transferirDinero() {
	var monto = validar(parseInt(prompt("Ingrese el monto que desea transferir.")));
	if(haySaldoDisponible(monto)){
		var NCuenta = validar(parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero.")));
		if (NCuenta == cuentaAmiga.NCuenta1 || NCuenta == cuentaAmiga.NCuenta2){
			saldoCuenta -= monto;
			actualizarSaldoEnPantalla();
			alert("Se han transferido $" + monto + "\nCuenta destino: " + NCuenta);
		}
		else{
			alert("Solo puede transferir dinero a una cuenta amiga.");
		}
	}
}

function iniciarSesion() {

	var codUser = prompt("Ingrese el código de su cuenta");
	if (codUser == codSeguridad){
		alert("Bienvenido/a Agustín Galleguillo ya puede comenzar a realizar operaciones ");
	}
	else{
		alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
		saldoCuenta = 0;
		actualizarSaldoEnPantalla();
	}


}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

