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

// let lista = [1,2,3,4,5,6,7,8,9,15]
// let resultado = []

// for(let i =0; i<lista.length; i++){
//     if(lista[i] % 3 == 0 && lista[i] % 5 ==0){
//         resultado.push("boom")
//     }else if(lista[i] % 3 == 0){
//         resultado.push("plic")
//     }else if(lista[i] % 5 ==0){
//         resultado.push("plac")
//     }else {
//         resultado.push(lista[i])
//     }
// }   
// console.log(resultado)

// 1 - DESENVOLVA UM ALGORITMO QUE SIMULE UM EMPRÉSTIMO
//   - O USUÁRIO DEVE INSERIR O VALOR DESEJADO DE EMPRÉSTIMO
//   - O NÚMERO DE PARCELAS
//   - OS JUROS EM CADA PARCELA

// let palavra = prompt("Digite uma palavra que queira inverter")
// let palavraInvertida = ""
// for (let i = palavra.length -1; i >= 0; i--){
//     palavraInvertida += palavra[i];
// }
// alert(`Sua palavavra invertida é: ${palavraInvertida}`)


// - NO FINAL VOCÊ DEVE EXIBIR:
//   - VALOR FINAL DO EMPRÉSTIMO COM OS JUROS
//   - VALOR DE CADA PARCELA COM OS JUROS
//   - NÚMERO DE PARCELAS

// 2 - DESENVOLVA UM ALGORIMTO QUE RECEBE UMA PALAVRA DIGITADA PELO USUÁRIO
//     - VOCÊ DEVE EXIBIR AO FINAL:
//       - TAMANHO DA PALAVRA
//       - NÚMERO DE VOGAIS
//       - PALAVRA INVERTIDA

let palavra = "algoritmo"
let resultado = ""


for(let i = 0; i < palavra.length;1++){
    if(i % 2 === 0){
    resultado += palavra[i].toUpperCase();
}else{
    resultado += palavra[i].toUpperCase();
    console.log(palavra)
}
}
console.log(resultado)


// 3 - DESENVOLVA UM ALGORITMO QUE RECEBA DO USUÁRIO
//     - UMA LISTA DE NÚMEROS
//     - UM NÚMERO, PARA SER USADO COMO MULTIPLICADOR
//       - VOCÊ DEVE EXIBIR AO FINAL
//         - A SOMA DE TODOS OS NÚMEROS
//         - UMA LISTA DOS NÚMEROS QUE SÃO DIVISÍVEIS PELO MULPLICADOR INFORMADO.