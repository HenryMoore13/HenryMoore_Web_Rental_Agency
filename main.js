function car1(STOCK_DATA) {
    var button = document.getElementById("chall");
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
            console.log(c);
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
function formVal() {
    var name = document.forms["checkout"]["Name"];
    var email = document.forms["checkout"]["EMail"];
    var phone = document.forms["checkout"]["Telephone"];
    var address = document.forms["checkout"]["Address"];

    if (name.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    } else if (address.value === "") {
        window.alert("Please enter your address.");
        name.focus();
        return false;
    } else if (email.value === "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    } else if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    } else if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    } else if (phone.value === "") {
        window.alert("Please enter your telephone number.");
        phone.focus();
        return false;
    }

    return true;
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
formVal();
