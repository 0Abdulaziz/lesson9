
function checkAge(name,age){
     if(age > 0 && age <=12){
        return name + " hali chaqaloq"
     }
     if(age >= 12 && age <=16){
         return name + " hali bola"
     }
     if(age >= 16 && age <=21){
         return name + " balog'ot yoshida"
     }
     if(age >= 21 && age <=50){
         return name + " o'rta yosh"
     }
     if( age >= 50){
         return name + " qariya"
     }
 };
 console.log(checkAge("ibrohim",21))


