function parImpar(){

var numero=document.getElementById("numero").value;

numero=parseInt(numero);

if(numero 2%===0){
numero=document.getElementById("msg").innerHTML = "o numero é par"+numero;
}
else{
numero=document.getElementById("msg").innerHTML = "o numero é impar" + numero;
}

}