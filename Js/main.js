function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

//enquanto, para cada tecla, faça

for (let i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  //console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  //console.log(i);
}
