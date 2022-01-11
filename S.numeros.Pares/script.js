
 function SubsNumber1() {
     let numbers = []
     
  for (let index = 0; index < 8; index++) {
    
         numbers[index] = prompt("Digite os Numeros")

         if (numbers != Number) {
            alert("Digite um valore valido !")
            return
        }
        
     }
  for(i in numbers){

        if(numbers[i] %2 ==0){

                 numbers[i] = 0
                
           
         }
     }
 for(i in numbers){
         console.log(numbers[i])
     }
    
    
 }

 SubsNumber1()





