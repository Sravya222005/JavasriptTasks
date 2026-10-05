function printNumbers() {
    var i = 1;
    var result = "";
    do {
        result = result + i + " ";
        i++;
    } while (i <= 5);
    document.getElementById("result1").innerHTML = result;
}
function evenNumbers() {
    var i = 2;
    var result = "";
    do {
        result = result + i + " ";
        i = i + 2;
    } while (i <= 10);
    document.getElementById("result2").innerHTML = result;
}