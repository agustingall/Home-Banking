//Declaración de variables
var nombreUsuario = "Agustín Galleguillo";
var saldoCuenta = 10000;
var limiteExtraccion = 2000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function haySaldoDisponible(dinero){
	if(dinero < saldoCuenta){
		return true;
	}
	else{
		return false;
	}
}

function sePuedeExtraer(dinero){
	if(dinero <= 2000){
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

}

function extraerDinero() {
	dineroE = parseInt(prompt("Ingrese el dinero a extraer"));
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
				alert("Solo se pueden extraer billetes de 100.")
			}
		}
		else{
			alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extración.")
		}
	}
	else{
		alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero")
	}
	
}

function depositarDinero() {
	var dineroB = saldoCuenta;
	var dineroD = parseInt(prompt("Ingrese cuanto dinero va a depositar."));
	agregarSaldo(dineroD); 
	actualizarSaldoEnPantalla();
	alert("Saldo anterior: $" + dineroB +"\nDinero depositado: $" + dineroD + 
	        "\nSaldo actual: $" + saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

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

