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
