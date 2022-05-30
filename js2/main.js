//1.	Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor


const num1 = prompt("Escribe el primer numero: ");
const num2 = prompt("Escribe el segundo numero: ");
const num3 = prompt("Escribe el tercer numero: ");

const mayor = Math.max(num1, num2, num3);

console.log("El numero mayor es: " + mayor);

//2.	Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
const num4 = prompt("Escribe el primer numero: ");
const num13 = prompt("Escribe el segundo numero: ");
const num14 = prompt("Escribe el tercer numero: ");

const menor = Math.min(num4, num13, num14);

console.log("El numero menor es: " + menor);


//4.	Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3


let numero = parseInt(prompt("Ingrese un numero entre el 100 y el 200:")); //capturamos el valor

if (numero > 0 && numero % 3 == 0) {
    console.log("El numero " + numero + " es múltiplo de 3")
} else {
    console.log("El numero " + numero + " no es múltiplo de 3");


}


//5.	Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let num5 = parseFloat(prompt("Dame el primer número para comprobar si uno es la suma de los otros: ", ""));
let num6 = parseFloat(prompt("Dame el segundo número para comprobar si uno es la suma de los otros: ", ""));
let num7 = parseFloat(prompt("Dame el tercer número para comprobar si uno es la suma de los otros: ", ""));


if (num5 == (num6 + num7)) {
    alert("El número " + num5 + " es la suma de " + num6 + " y " + num7 + ".")
} else if (num6 == (num5 + num7)) {
    alert("El número " + num6 + " es la suma de " + num5 + " y " + num7 + ".")
} else if (num7 == (num5 + num6)) {
    alert("El número " + num7 + " es la suma de " + num5 + " y " + num6 + ".")
} else {
    alert("Ningun numero es la suma de los otros dos")
}

/*const num8 = prompt("Escribe el  numero A: ");
const num9 = prompt("Escribe el  numero B: ");
const num10 = prompt("Escribe el  numero C: ");

if (numero8 == (numero9 + numero10)) {
    console.log("El numero A" + numero8 + "es la suma de B+C ")
} else {
    console.log("El numero A" + numero8 + " no es la suma de B+C ")

}
if (numero9 == (numero10 + numero8)) {
    console.log("El numero B" + numero9 + "es la suma de A+C ")
} else {
    console.log("El numero B" + numero9 + " no es la suma de A+C ")

}
if (numero10 == (numero9 + numero8)) {
    console.log("El numero C" + numero10 + "es la suma de A+B ")
} else {
    console.log("El numero C" + numero10 + " no es la suma de A+B ")

}*/


//6.	Elabora un algoritmo para leer un número y determinar si es par o impar



let numero11 = parseInt(prompt("Ingrese un numero:")); //capturamos el valor


if (numero11 % 2 == 0) {

    alert("El número " + numero11 + " es par");

} else {

    alert("El número " + numero11 + " es impar");

}
// 3. 

function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while (noEncontrado) {
        let mid = parseInt(inferior + ((superior - inferior) / 2));
        console.log(mid);
        console.log(((superior - inferior) / 2));
        if (((superior - inferior) / 2) < 1) {
            noEncontrado = false;
            alert("Tu numero es el " + (parseInt(mid) + a));
            break;
        } //if
        let res = confirm("Tu numero es menor o igual a " + mid);
        if (res) {
            superior = mid;
        } else {
            inferior = mid;
        } //if
        console.log(inferior, superior);
    } //while
} //adivinar

Adivinar();