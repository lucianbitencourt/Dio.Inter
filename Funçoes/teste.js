let entrada1 = document.getElementById("input1");
let entrada2 = document.getElementById("input2");
let resultado = document.getElementById("resultado");
let input1 = [];
let input2 = [];
let Aprovados = [];
let Notas = [];

function enviar() {
  input1.push(entrada1.value);
  entrada1.value = "";
  input2.push(entrada2.value);
  entrada2.value = "";
}

function mostrar() {
  for (let i = 0; i < input2.length; i++) {
    if (input2[i] > 7) {
      Aprovados.push(input1[i]);
      Notas.push(input2[i]);
    }
  }

  resultado.innerHTML = `A Media é --7-- // E os Aprovados são ${Aprovados.join(
    " e "
  )}, com suas as suas Notas ${Notas.join(" e ")}`;
}
