const almoco = document.getElementById('almoco');
const porcentagem = document.getElementById('porcentagem');
const button = document.getElementById('button');
const total = document.getElementById('total');

button.addEventListener('click', () => {
  const valorAlmoco = Number(almoco.value);
  const valorGorgeta = Number(porcentagem.value) / 100;
  const valorTotal = valorAlmoco + valorAlmoco * valorGorgeta;

  if (valorTotal != 0) {
    total.innerText = `Valor Total: R$ ${valorTotal} Reais`;
    document.getElementById('almoco').value = '';
    document.getElementById('porcentagem').value = '';
  } else {
    total.innerText = 'Insira um valor válido';
  }
});
