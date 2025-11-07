let fc = document.getElementById("f-c");
let cf = document.getElementById("c-f");
let input = document.getElementById("text");
let p = document.getElementById("result");
let submit = document.getElementById("submit");


function convert(submit){
 
    if(cf.checked){
        userinput = Number(input.value);
        if(isNaN(userinput)){
            p.textContent = "Select a valid number."

        }
        else{
            answer = (userinput*9/5)+32
            p.textContent = `${userinput}°C is ${answer}°F`
        }
    }
    else if(fc.checked){
        userinput = Number(input.value);
        if(isNaN(userinput)){
            p.textContent = "Select a valid number."

        }
        else{
            answer = (userinput - 32)*5/9
            p.textContent = `${userinput}°F is ${answer}°C`
        }
    }
    
    
}