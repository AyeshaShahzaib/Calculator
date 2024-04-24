let buttons = document.querySelectorAll('.button');
let input = document.querySelector("input")
let equation ="";
Array.from(buttons).forEach(button => {
    button.addEventListener("click",(event)=>{
        if(event.target.innerHTML == "="){
            equation = eval(equation);
            input.value=equation
            
        }else if(event.target.innerHTML=="AC"){
           equation="";
        }else if(event.target.innerHTML=="DE"){
          equation=equation.substring(0,equation.length-1)
          
        }else{
    equation=equation + event.target.innerHTML;}
   input.value=equation
        
   
    })
});
