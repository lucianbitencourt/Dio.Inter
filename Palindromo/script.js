 function busca(){
     let palavra = prompt("Digite a palavra para verificar se é um Palíndromo !")

  palavra.split("")
    
         if (palavra[0]==palavra[palavra.length - 1]){
             alert("Verdadeiro")
         }    
         else{
             alert("Falso")
         }

 }
 busca()

function busca2() {
    
    let palavra = prompt("Digite a palavra para verificar se é um Palíndromo !")

    if (palavra.split("").reverse().join("") === palavra){
        alert("Verdadeiro")
    }    
    else{
        alert("Falso")
    }
    


}
busca2()
