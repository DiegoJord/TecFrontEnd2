// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, 
// o maior valor e a soma dos valores

var nums = []
var numeroMenor = 10000000;
var numeroMaior = 0;
var soma = 0;

for (var i = 0; i < 6; i++){
    var num = parseFloat(prompt("Digite um número: "))
    nums.push(num)
}

for (i of nums){
    if (i > numeroMaior){
        numeroMaior = i
    } else if (i < numeroMenor){
        numeroMenor = i
    }
}

for (i of nums){
    soma += i
}


console.log("Maior valor: "+numeroMaior)
console.log("Menor valor: "+numeroMenor)
console.log("A soma dos valores: "+soma)