function addTwo(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var sum=num1+num2;
    document.getElementById("res").value=sum;
}
function subTwo(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var sub=num1-num2;
    document.getElementById("res").value=sub;
}
function mulTwo(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var mul=num1*num2;
    document.getElementById("res").value=mul;
}

function divTwo(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var div=num1%num2;
    document.getElementById("res").value=div;
}

function modTwo(){
    var num1=parseInt(document.getElementById("n1").value);
    var num2=parseInt(document.getElementById("n2").value);
    var mod=num1/num2;
    document.getElementById("res").value=mod;
}


