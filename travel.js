var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__control")
var elSpan = document.querySelector(".item__text__span")
var elSpan2 = document.querySelector(".item__text__span2")
var elSpan3 = document.querySelector(".item__text__span3")
var elSpan4 = document.querySelector(".item__text__span4")


elForm.addEventListener("submit", function(e){
    e.preventDefault();
  
    var elInputVal = elInput.value;
    var elError = document.querySelector(".error")
    var Man = 3.6;
    var Bike = 20;
    var Car = 70;
    var Airplane = 800;


  if(elInputVal <= 0 || isNaN(elInputVal)){

    elError.textContent =
    "Iltimos 0  dan katta raqam kiriting , yoki son kiriting" ;

    elError.classList.add("result-error");
    elError.classList.remove("result-success");


  }
  else{

    elError.textContent = "";

    elError.classList.remove("result-error");
    elError.classList.add("result-success");
  }

    
  function result(distance, speed) {
  var hour = Math.floor(elInputVal / Man);
  var minute = Math.floor((elInputVal / Man - hour) * 60);
  var second = Math.floor(((elInputVal / Man - hour) * 60 - minute) * 60);
  return hour + ' soat ' + minute + ' minut ' + second + 'secund';
  }
  function result2(distance, speed) {
    var hour = Math.floor(elInputVal / Bike);
    var minute = Math.floor((elInputVal / Bike - hour) * 60);
    var second = Math.floor(((elInputVal / Bike - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + second + 'secund';
    }
    function result3(distance, speed) {
      var hour = Math.floor(elInputVal / Car);
      var minute = Math.floor((elInputVal / Car - hour) * 60);
      var second = Math.floor(((elInputVal / Car - hour) * 60 - minute) * 60);
      return hour + ' soat ' + minute + ' minut ' + second + 'secund';
      }
      function result4(distance, speed) {
        var hour = Math.floor(elInputVal / Airplane);
        var minute = Math.floor((elInputVal / Airplane - hour) * 60);
        var second = Math.floor(((elInputVal / Airplane - hour) * 60 - minute) * 60);
        return hour + ' soat ' + minute + ' minut ' + second + 'secund';
        }
  
    elSpan.textContent = result();
    elSpan2.textContent = result2();
    elSpan3.textContent = result3();
    elSpan4.textContent = result4();
  
  });




    
    

    
    
  
    
    
  
    
    
    
  