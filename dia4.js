const numero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let chutes = 0;
const adivinhacao = () => {
  for (let chances = 1; chances <= 3; chances++) {
    const tentativa = Number(prompt("Chute um número entre 1 e 10: "));
    if (tentativa === numero) {
      alert("Parabéns, voê acertou!");
      return;
    }
    chutes++;
  }
};

adivinhacao();

if (chutes === 3) {
  alert(`Você não acertou o número, que era: ${numero}`);
}
