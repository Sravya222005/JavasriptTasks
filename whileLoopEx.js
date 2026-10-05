function countDigits() {
    var num = parseInt(document.getElementById("num1").value);
    var count = 0;
    while (num > 0) {
        num = parseInt(num / 10);
        count++;
    }
    document.getElementById("result1").innerHTML = "Number of digits = " + count;
}
function reverseNumber() {
    var num = parseInt(document.getElementById("num2").value);
    var reverse = 0;
    while (num > 0) {
        var digit = num % 10;
        reverse = reverse * 10 + digit;
        num = parseInt(num / 10);
    }
    document.getElementById("result2").innerHTML = "Reverse = " + reverse;
}