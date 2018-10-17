function car1(STOCK_DATA) {
    var button = document.getElementById("chall");
    console.log(button);
    button.innerHTML = STOCK_DATA.repository.carChall;
}
function car2(STOCK_DATA) {
    var button = document.getElementById("must");
    button.innerHTML = STOCK_DATA.repository.carMust;
}
function car3(STOCK_DATA) {
    var button = document.getElementById("char");
    button.innerHTML = STOCK_DATA.repository.carChar;
}
function car4(STOCK_DATA) {
    var button = document.getElementById("cama");
    button.innerHTML = STOCK_DATA.repository.carCama;
}
function car5(STOCK_DATA) {
    var button = document.getElementById("corv");
    button.innerHTML = STOCK_DATA.repository.carCorv;
}
function car6(STOCK_DATA) {
    var button = document.getElementById("lamb");
    button.innerHTML = STOCK_DATA.repository.carLamb;
}
function car7(STOCK_DATA) {
    var button = document.getElementById("buga");
    button.innerHTML = STOCK_DATA.repository.carBuga;
}
function car8(STOCK_DATA) {
    var button = document.getElementById("ferr");
    button.innerHTML = STOCK_DATA.repository.carFerr;
}
function pop() {
    var c = 0;
    var btn = document.querySelectorAll(".btn");
    for (const b of btn) {
        b.addEventListener("click", () => {
            if (c == 0) {
                document.getElementById("box").style.display = "block";
                c = 1;
            } else {
                document.getElementById("box").style.display = "none";
            }
        });
    }
}
function close() {
    var c = document.getElementById("box");
    var button = document.getElementById("close");
    button.addEventListener("click", () => {
        if (c.style.display === "block") {
            c.style.display = "none";
        }
    });
}
// function nameVal() {
//     var name = document.forms["checkout"]["Name"];

//     if (name.value.match(/[a-zA-Z]/)) {
//         window.alert("Please enter your name.");
//         name.focus();
//         return true;
//     } else {
//         name.value.match("");
//         return false;
//     }
// }
function pop1() {
    var c = 0;
    var done = document.querySelectorAll(".done");
    for (const d of done) {
        d.addEventListener("click", () => {
            if (c == 0) {
                document.getElementById("box1").style.display = "block";
                c = 1;
            } else {
                document.getElementById("box1").style.display = "none";
            }
        });
    }
}

pop();
close();
car1(STOCK_DATA);
car2(STOCK_DATA);
car3(STOCK_DATA);
car4(STOCK_DATA);
car5(STOCK_DATA);
car6(STOCK_DATA);
car7(STOCK_DATA);
car8(STOCK_DATA);
nameVal();
pop1();
