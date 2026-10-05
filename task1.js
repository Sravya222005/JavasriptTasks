function displaySum(){
let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let n3=parseInt(document.getElementById("n3").value);
let sum=n1+n2+n3;
document.getElementById("res").value=sum;
}
function displayAvg() {
    let n1 = parseInt(document.getElementById("a1").value);
    let n2 = parseInt(document.getElementById("a2").value);
    let n3 = parseInt(document.getElementById("a3").value);
    let sum = n1 + n2 + n3;
    let avg = sum / 3;
    document.getElementById("res1").value = avg;
}
function displaySumN() {
    let n = parseInt(document.getElementById("n4").value);
    let sum = n * (n + 1) / 2;
    document.getElementById("res3").value = sum;
}
function displayAvgN() {
    let n = parseInt(document.getElementById("n5").value);
    let sum = n * (n + 1) / 2;
    let avg = sum / n;
    document.getElementById("res4").value = avg;
}
function displayProfit() {
    let cp = parseFloat(document.getElementById("cp").value);
    let sp = parseFloat(document.getElementById("sp").value);
    let profit = sp - cp;
    let percentage = (profit / cp) * 100;
    document.getElementById("res5").value = percentage;
}
function displaySI() {
    let p = parseFloat(document.getElementById("p").value);
    let r = parseFloat(document.getElementById("r").value);
    let t = parseFloat(document.getElementById("t").value);
    let si = (p * r * t) / 100;
    document.getElementById("res6").value = si;
}
function displayAngle() {
    let a = parseFloat(document.getElementById("ang1").value);
    let b = parseFloat(document.getElementById("ang2").value);
    let c = 180 - (a + b);
    document.getElementById("res7").value = c;
}
function displayLast() {
    let n = parseInt(document.getElementById("num8").value);
    let last = n % 10;
    document.getElementById("res8").value = Math.abs(last);
}
function removeLast() {
    let n = parseInt(document.getElementById("num9").value);
    let result = Math.trunc(n / 10);
    document.getElementById("res9").value = result;
}
function displayFirst3() {
    let n = parseInt(document.getElementById("num10").value);
    let result = Math.trunc(n / 100);
    document.getElementById("res10").value = result;
}
function displayFirst5() {
    let n = parseInt(document.getElementById("num11").value);
    let result = Math.trunc(n / 10000);
    document.getElementById("res11").value = result;
}
function displayFahrenheit() {
    let c = parseFloat(document.getElementById("cel12").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("res12").value = f;
}
function displayCelsius() {
    let f = parseFloat(document.getElementById("f13").value);
    let c = (f - 32) * 5 / 9;
    document.getElementById("res13").value = c;
}
function displayGross() {
    let bs = parseFloat(document.getElementById("bs14").value);
    let hra = parseFloat(document.getElementById("hra14").value);
    let da = parseFloat(document.getElementById("da14").value);
    let gross = bs + hra + da;
    document.getElementById("res14").value = gross;
}
function displaySwap() {
    let a = parseInt(document.getElementById("a15").value);
    let b = parseInt(document.getElementById("b15").value);    let temp = a;
    a = b;
    b = temp;
    document.getElementById("res15a").value = a;
    document.getElementById("res15b").value = b;
}
function displaySwap2() {
    let a = parseInt(document.getElementById("a16").value);
    let b = parseInt(document.getElementById("b16").value);
    a = a + b;
    b = a - b;
    a = a - b;
    document.getElementById("res16a").value = a;
    document.getElementById("res16b").value = b;
}