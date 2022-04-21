const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
const gosta = prompt(
  `Você gosta de estudar a linguagem: ${linguagem} ?\nResponda com o número 1 para SIM\nou 2 para NÃO`
);

if (gosta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gosta == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  alert("Resposta inválida.");
}
