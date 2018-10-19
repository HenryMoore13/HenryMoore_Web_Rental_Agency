// function car1(STOCK_DATA) {
//     var button = document.getElementById("chall");
//     button.innerHTML = STOCK_DATA.repository.carChall;
// }
// function car2(STOCK_DATA) {
//     var button = document.getElementById("must");
//     button.innerHTML = STOCK_DATA.repository.carMust;
// }
// function car3(STOCK_DATA) {
//     var button = document.getElementById("char");
//     button.innerHTML = STOCK_DATA.repository.carChar;
// }
// function car4(STOCK_DATA) {
//     var button = document.getElementById("cama");
//     button.innerHTML = STOCK_DATA.repository.carCama;
// }
// function car5(STOCK_DATA) {
//     var button = document.getElementById("corv");
//     button.innerHTML = STOCK_DATA.repository.carCorv;
// }
// function car6(STOCK_DATA) {
//     var button = document.getElementById("lamb");
//     button.innerHTML = STOCK_DATA.repository.carLamb;
// }
// function car7(STOCK_DATA) {
//     var button = document.getElementById("buga");
//     button.innerHTML = STOCK_DATA.repository.carBuga;
// }
// function car8(STOCK_DATA) {
//     var button = document.getElementById("ferr");
//     button.innerHTML = STOCK_DATA.repository.carFerr;
// }
function car(STOCK_DATA) {
    var div = document.querySelector("#template1").innerHTML;
    var template = Handlebars.compile(div);
    for (data of STOCK_DATA) {
        var html = template({
            name: data.name,
            imageURL: data.imageURL,
            price: data.price
        });
        document
            .querySelector("#inventoryItems")
            .insertAdjacentHTML("beforeend", html);
    }
}

// function car(STOCK_DATA, carType, buttonId) {
//     var cars = document.querySelectorAll(".car");
//     for (const car of cars) {
//         car.addEventListener("click", )
//     }
//     }
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
function bye() {
    var x = document.getElementById("submit");
    x.addEventListener("submit", () => {
        alert("Thanks For Shopping at Henry's Auto Sells");
    });
}

pop();
close();
bye();
car(STOCK_DATA);
