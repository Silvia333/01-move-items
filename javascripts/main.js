let btn = document.getElementById("button");
let btn2 = document.getElementById("button2");
let container1 = document.querySelector(".wrapper_one");
let container2 = document.querySelector(".wrapper_two");
let ul = document.getElementById("ul");
let arrayLi = document.getElementsByTagName('li');
let goToRight = true;

btn.addEventListener("click", moveLi);
btn2.addEventListener("click", addLi);

function moveLi(){

    if(goToRight){
        container2.appendChild(ul);
        goToRight = false;
    }else{
        container1.appendChild(ul);
        goToRight = true;
    }
}

function addLi(){
    let newLi = document.createElement("li");
    let newLiContent = document.createTextNode(prompt("Please enter your text", ""));
    newLi.appendChild(newLiContent); //añade texto al div creado.
    ul.appendChild(newLi);
}
