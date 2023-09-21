const notas = [];
for (let i = 1; i <= 3; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i}:`));
  notas.push(nota);
}


const media = (notas.reduce((total, nota) => total + nota, 0)) / notas.length;


if (media <= 4) {
  console.log(`Média: ${media.toFixed(2)} Reprovado`);
} else if (media < 7) {

  const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
  const novaMedia = (media + notaRecuperacao) / 2;

  if (novaMedia >= 5) {
    console.log(`Média: ${media.toFixed(2)} Média final: ${novaMedia.toFixed(2)} Aprovado`);
  } else {
    console.log(`Média: ${media.toFixed(2)} Média final: ${novaMedia.toFixed(2)} Reprovado`);
  }
} else {
  console.log(`Média: ${media.toFixed(2)} Aprovado`);
}