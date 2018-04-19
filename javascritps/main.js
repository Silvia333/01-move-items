var btn = document.getElementById("button");
var btn2 = document.getElementById("button2");
<<<<<<< HEAD
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
=======

    btn.addEventListener("click", myFunction);
    btn2.addEventListener("click", myFunction2);

    function myFunction(){
        var txt1 = document.getElementById("txt1").innerHTML;
        var nodo = document.getElementById('txt1');
        var txt2 = document.getElementById("txt2");
        var parrafo = document.querySelector('#txt1 p');
        txt2.innerHTML = txt1;
        nodo.removeChild(parrafo);

>>>>>>> 82dc373fa370335a2d2abcc7220cee9e475e1ff4
    }
    goToRight = !goToRight;
}

<<<<<<< HEAD
function addLi(){
    var newLi = document.createElement("li"); 
    var newLiContent = document.createTextNode(prompt("Please enter your text", "")); 
    newLi.appendChild(newLiContent); //añade texto al div creado. 
    ul.appendChild(newLi);
}
=======
    function myFunction2(){
        var txt1 = document.getElementById("txt1");
        var txt2 = document.getElementById("txt2").innerHTML;
        var nodo = document.getElementById('txt2');
        var parrafo = document.querySelector('#txt2 p');
        txt1.innerHTML=txt2;
        nodo.removeChild(parrafo);
    }
>>>>>>> 82dc373fa370335a2d2abcc7220cee9e475e1ff4
