var smile = setInterval(smile, 10);
var note = setInterval(note, 10);
var headphone = setInterval(headphone, 10);
var people = setInterval(people, 10);
var count1 = 100;
var count2 = 100;
var count3 = 100;
var count4 = 10;

function smile() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if (count1 == 232) {
        clearInterval(smile)
    }
}


function note() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;
    if (count2 == 521) {
        clearInterval(note);
    }
}


function headphone() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;
    if (count3 == 1463) {
        clearInterval(headphone)
    }
}


function people() {
    count4++;
    document.querySelector("#number4").innerHTML = count4;
    if (count4 == 15) {
        clearInterval(people)
    }
}