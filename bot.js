
let tg = window.Telegram.WebApp;

tg.expant()

tg.MainButton.textColor = "#FFFFFF";

tg.MainButton.colot ="2cab37";


let item  ="";

let btn1=Document.getElementById("btn1");

let btn2=Document.getElementById("btn2");

let btn3=Document.getElementById("btn3");

let btn4=Document.getElementById("btn4");

let btn5=Document.getElementById("btn5");

let btn6=Document.getElementById("btn6");


btn1.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар1!");
        item = "1";
        tg.MainButton.show;
    }

});
btn2.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар2!");
        item = "2";
        tg.MainButton.show;
    }

});btn3.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар3!");
        item = "3";
        tg.MainButton.show;
    }

});btn4.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар4!");
        item = "4";
        tg.MainButton.show;
    }

});btn5.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар5!");
        item = "5";
        tg.MainButton.show;
    }

});btn6.addEventListaner("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("вы выбрали товар6!");
        item = "6";
        tg.MainButton.show;
    }

});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);