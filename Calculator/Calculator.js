
var operation = document.getElementById("console");
var button = document.querySelectorAll("button");
var string = "";

button.forEach((element) =>{
    element.addEventListener("click", (num)=>{
        if(num.target.innerText == "="){
            string = eval(string);
            operation.value = string;
        }
        else if(num.target.innerText == "Ac"){
            string = "";
            operation.value = string;
        }
        else if(num.target.innerText == "Del"){
            string = string.substring(0, string.length-1);
            operation.value = string;
        }
        else{
            string  += num.target.innerText;
            operation.value = string;
        }
    })
})