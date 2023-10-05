// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números
// pares e a quantidade de números ímpares

var nums = []
var numerosPares = []
var numerosImpares = []

for (var i = 0; i < 10; i++){
    var num = parseFloat(prompt("Digite um número: "))
    nums.push(num)
}

for (i of nums){
    if (i % 2 == 0){
        numerosPares.push(i)
    } else {
        numerosImpares.push(i)
    }
}

console.log("Quantidade de números pares: "+numerosPares.length)
console.log("Quantidade de números impares: "+numerosImpares.length)