const button = document.getElementById('button');
const p = document.getElementById('text');
const div = document.getElementById('container');

// Gerar RGB aleatório
const redBlueGreen = () => {
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);

  div.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;

  p.innerText = `Red: ${red}\n Blue: ${green}\n Green: ${blue}`;
};

// Adicionar evento de clique ao botão
button.addEventListener('click', redBlueGreen);
