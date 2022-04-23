const area = Number(
  prompt(
    "Qual área você deseja seguir?\nDigite 1 para Frontend\nDigite 2 para backend"
  )
);

let framework;
let linguagem;

if (area === 1) {
  framework = Number(
    prompt(
      "Qual framework você deseja aprender?\nDigite 1 para React\nDigite 2 para Vue"
    )
  );
} else if (area === 2) {
  linguagem = Number(
    prompt(
      "Qual framework você deseja aprender?\nDigite 1 para C#\nDigite 2 para Java"
    )
  );
} else {
  alert("Escolha inválida");
}

const especializar = Number(
  prompt(
    "Você deseja se especializar na área escolhida\nou se tornar FullStack?\nDigite 1 para especialização\nDigite 2 para FullStack"
  )
);

if (especializar === 1) {
  if (area === 1) {
    if (framework === 1) {
      alert(
        "Muito bacana você desejar seguir para a área de frontend, estudando React e mais importante ainda, com foco em se especializar! Você será um desenvolvedor e tanto!"
      );
    } else {
      alert(
        "Muito bacana você desejar seguir para a área de frontend, estudando Vue e mais importante ainda, com foco em se especializar! Você será um desenvolvedor e tanto!"
      );
    }
  } else {
    if (linguagem === 1) {
      alert(
        "Muito bacana você desejar seguir para a área de backend, estudando C# e mais importante ainda, com foco em se especializar! Você será um desenvolvedor e tanto!"
      );
    } else {
      alert(
        "Muito bacana você desejar seguir para a área de backend, estudando Java e mais importante ainda, com foco em se especializar! Você será um desenvolvedor e tanto!"
      );
    }
  }
}
