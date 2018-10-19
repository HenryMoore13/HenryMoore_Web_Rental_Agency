function car(STOCK_DATA) {
    var div = document.querySelector("#template1").innerHTML;
    var template = Handlebars.compile(div);
    for (data of STOCK_DATA) {
        var html = template({
            name: data.name,
            imageURL: data.imageURL,
            price: data.price,
            id: data.id
        });
        document
            .querySelector("#inventoryItems")
            .insertAdjacentHTML("beforeend", html);
    }
    pop();
}
function items(STOCK_DATA) {
    var items = document.querySelectorAll(".item");
    for (const item of items) {
        item.querySelector(".btn").addEventListener("click", () => {
            let name = item.querySelector(".name").innerText;
            console.log(name);
            for (const data of STOCK_DATA) {
                if (name == data.name) {
                    display(data);
                }
            }
        });
    }
}

function display(data) {
    var div = document.querySelector("#template2").innerHTML;
    var template = Handlebars.compile(div);
    var html = template({
        name: data.name,
        imageURL: data.imageURL,
        price: data.price
    });
    let selected = document.querySelector("#selected");
    selected.innerHTML = "";
    selected.insertAdjacentHTML("afterbegin", html);
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

bye();
car(STOCK_DATA);
pop();
close();
display(STOCK_DATA);
items(STOCK_DATA);
