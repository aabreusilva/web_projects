
 function minhaFuncao () {
 var element = document.getElementById("minhaDiv");
 var i, vet = new Array ();
 vet[0] = document.getElementById ("num1").value;
 vet[1] = document.getElementById ("num2").value;
 vet[2] = document.getElementById ("num3").value;
 vet[3] = document.getElementById ("num4").value;
 vet[4] = document.getElementById ("num5").value;
 for (i = 0; i < vet.length; i++) {
 //D = vet[i] * 10 / 100;
 document.getElementById ("resp").innerHTML += "vet[" + i +  "] = " +
 vet[i] + "<br/>";

}
 document.getElementById ("resp").innerHTML += "<br/><br/>";
 }
 
 function desconto () {
     var i, vet = new Array();
     vet[0] = document.getElementById ("num1").value;
     vet[1] = document.getElementById ("num2").value;
     vet[2] = document.getElementById ("num3").value;
     vet[3] = document.getElementById ("num4").value;
     vet[4] = document.getElementById ("num5").value;
    for (i = 0; i <vet.length; i++) {
    D = vet[i] * 10 / 100;
    document.getElementById ("resp").innerHTML += "Desconto vet[" + i +  "] = " +
 D + "<br/>";
    }   
     

 }
 
 
 