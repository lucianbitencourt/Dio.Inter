let entrada1 = document.getElementById("input1");
let entrada2 = document.getElementById("input2");
let resultado = document.getElementById("resultado");
let input1 = [];
const nomes = new Map();

function enviar() {

  nomes.set(entrada1.value , entrada2.value)
  

  entrada1.value = ''
  entrada2.value = ''
  
}

function mostrar() {

  for ([key, value] of nomes){

    if (value == 'admin') {
      input1.push(key)
    }
  }
  
 resultado.innerHTML =  input1.join(' - ')

 
}
