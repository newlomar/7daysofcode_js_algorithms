let area;
let framework;
let linguagem;
let caminho;
let choice;
const tecnologias = [];

choice = Number(
  prompt(
    "Qual área você deseja seguir?\nDigite 1 para Frontend\nDigite 2 para Backend"
  )
);

function main() {
  if (choice === 1) {
    area = "Frontend";
    choice = Number(
      prompt(
        "Qual framework você deseja aprender?\nDigite 1 para React\nDigite 2 para Vue"
      )
    );
    if (choice === 1) {
      framework = "React";
    } else if (choice === 2) {
      framework = "Vue";
    } else {
      alert("Opção inválida");
      return;
    }
  } else if (choice === 2) {
    area = "Backend";
    choice = Number(
      prompt(
        "Qual linguagem você deseja aprender?\nDigite 1 para C#\nDigite 2 para Java"
      )
    );
    if (choice === 1) {
      linguagem = "C#";
    } else if (choice === 2) {
      linguagem = "Java";
    } else {
      alert("Opção inválida");
      return;
    }
  } else {
    alert("Opção inválida");
    return;
  }

  choice = Number(
    prompt(
      "O que você deseja fazer?\nDigite 1 para especialização na área escolhida\nDigite 2 para se desenvolver como FullStack"
    )
  );

  if (choice === 1) {
    caminho = "especializar na área";
  } else if (choice === 2) {
    caminho = "desenvolver FullStack";
  } else {
    alert("Opção inválida");
    return;
  }

  if (area === "Frontend") {
    alert(
      `Muito bacana que você tenha escolhida a área de ${area}.\nEscolher aprender o framework ${framework} foi uma boa escolha!\nE mais importante, a escolha de se ${caminho} foi incrível!`
    );
  } else {
    alert(
      `Muito bacana que você tenha escolhida a área de ${area}.\nEscolher aprender a linguagem ${linguagem} foi uma boa escolha!\nE mais importante, a escolha de se ${caminho} foi incrível!`
    );
  }

  do {
    tecnologias.push(
      prompt("Diga mais uma tecnologia que você deseja conhecer: ")
    );
    choice = Number(
      prompt(
        "Deseja conhecer mais alguma tecnologia?\nDigite 0 caso não queira"
      )
    );
  } while (choice !== 0);

  console.log(tecnologias);
}
main();
