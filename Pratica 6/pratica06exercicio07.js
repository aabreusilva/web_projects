function conversão () {
    var F = document.getElementById("Fahrenheit").value;
    var v1 = 9;
    var v2 = 5;
    var v3 = 32;
    var conversão =  (F - v3) * v2 / v1;
    document.getElementById ("conversao").innerHTML += "O valor em Celsius é:" + conversão;
}