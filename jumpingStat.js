//break; it stops the current iteration
//print last 2 even numbers within the range 10 to 25

function breakEx() {

    let s = Number(document.getElementById("s").value);
    let e = Number(document.getElementById("e").value);

    let c = 0;
    let result = "";

    for (let i = e; i >= s; i--) {

        if (i % 2 == 0) {

            result = result + i + " ";
            c++;
        }

        if (c == 2) {
            break;
        }
document.getElementById("result1").innerHTML = result;
}
}









for(let i=0;i<=10;i++){
    if(i==5){
        continue;//it skips 5
    }
 console.log(i);
}

for(let i=10;i<=20;i++){
    if(i==13){
        continue;
    }
    console.log(i);
}