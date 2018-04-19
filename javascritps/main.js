var btn = document.getElementById("button");
var btn2 = document.getElementById("button2");
var ul = document.getElementById("ul");
var ul2 = document.getElementById("ul2");
var li = document.querySelector('#ul li');
var goToRight = true;

btn.addEventListener("click", moveLi);
btn2.addEventListener("click", addLi);

function moveLi(){
    
    if(goToRight){
        ul2.appendChild(li);
        //goToRight = false;
    }else{
        ul.appendChild(li);
        //goToRight = true;
    }
    goToRight = !goToRight;
}

function addLi(){
    var newLi = document.createElement("li"); 
    var newLiContent = document.createTextNode(prompt("Please enter your text", "")); 
    newLi.appendChild(newLiContent); //añade texto al div creado. 
    ul.appendChild(newLi);
}
