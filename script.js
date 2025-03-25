// let nome = "Anderson"
// let numeros = [ 0,1,2,3 ]
// console.log(nome)
// console.log(nome.length)

// LAÇO FOR - LAÇO DE REPETIÇÃO
// < MENOR QUE
// > MAIOR QUE

// FOR PERCORRE UMA LISTA.
// [ 1,2,3 ]
// index = 0 até o último elemento da lista.
// let contadorVogais = 0
// for(let i= 0; i < nome.length; i++){
//     console.log(nome[i],i)
//     if(nome[i].toLowerCase() === "a" || nome[i].toLowerCase()==="e" || nome[i].toLowerCase()==="i"|| nome[i].toLowerCase()==="o" || nome[i].toLowerCase()==="u"){
//         contadorVogais++
//     }
//     // console.log(nome[10])
// }

// console.log(contadorVogais,"Seu nome possui esse numero de vogais")

// let numeros = [ 0,1,2,3,4,5,6,7,10,43,50 ] 
// let pares = []
// let impares = []
// for(let i = 0; i< numeros.length;i++){
//     if(numeros[i] % 2 == 0){
//         pares.push(numeros[i])
//     }else{
//         impares.push(numeros[i])
//     }
// }

// console.log(numeros)
// console.log(pares)
// console.log(impares)

// Exercício 1

// function inverterPalavra() {

//     let palavra = prompt("Digite uma palavra para inverter:");
//     let palavraInvertida = '';
//     for (let i = palavra.length - 1; i >= 0; i--) {
//         palavraInvertida += palavra[i]; 
//     }
//     alert("Palavra invertida: " + palavraInvertida);
// }

// inverterPalavra();


// Exercício 2

// let palavra = "algoritmo"
// let resultado = ""

// for(let i = 0; i < palavra.length; i++) {
//     if(i % 2 === 0){
//         resultado += palavra[i].toUpperCase();
//     }else {
//         resultado += palavra[i].toLowerCase();
//     }
// }

// console.log("Resultado: ", resultado);

// Exercício 3

let lista = [1,2,3,4,5,6,7,8,9,15]
let resultado = []

for(let i =0; i<lista.length; i++){
    if(lista[i] % 3 == 0 && lista[i] % 5 ==0){
        resultado.push("boom")
    }else if(lista[i] % 3 == 0){
        resultado.push("plic")
    }else if(lista[i] % 5 ==0){
        resultado.push("plac")
    }else {
        resultado.push(lista[i])
    }
}   
console.log(resultado)