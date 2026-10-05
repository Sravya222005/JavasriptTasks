function checkPositive() {

    var num = parseInt(document.getElementById("num1").value);

    if (num > 0) {
        document.getElementById("result1").innerHTML = "Number is positive";
    }
}
function checkEvenOdd() {

    var num = parseInt(document.getElementById("num2").value);

    if (num % 2 == 0) {
        document.getElementById("result2").innerHTML = "Even number";
    }
    else {
        document.getElementById("result2").innerHTML = "Odd number";
    }
}
function checkGrade() {

    var marks = parseInt(document.getElementById("marks").value);

    if (marks >= 90) {
        document.getElementById("result3").innerHTML = "Grade A";
    }
    else if (marks >= 75) {
        document.getElementById("result3").innerHTML = "Grade B";
    }
    else if (marks >= 60) {
        document.getElementById("result3").innerHTML = "Grade C";
    }
    else {
        document.getElementById("result3").innerHTML = "Grade D";
    }
}
function checkDay() {

    var day = parseInt(document.getElementById("day").value);
    var result;

    switch (day) {

        case 1:
            result = "Monday";
            break;

        case 2:
            result = "Tuesday";
            break;

        case 3:
            result = "Wednesday";
            break;

        case 4:
            result = "Thursday";
            break;

        case 5:
            result = "Friday";
            break;

        case 6:
            result = "Saturday";
            break;

        case 7:
            result = "Sunday";
            break;

        default:
            result = "Invalid day";
    }

    document.getElementById("result4").innerHTML = result;
}