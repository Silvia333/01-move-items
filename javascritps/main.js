/*funcion para pasar un texto de un sitio a otro */
var btn = document.getElementById("button");
    btn.addEventListener("click", myFunction);

    function myFunction(){
        var txt1 = document.getElementById("txt1").innerHTML;
        var txt2 = document.getElementById("txt2");
        txt2.innerHTML=txt1;
    }

    