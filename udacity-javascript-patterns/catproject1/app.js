var options = ["select", "cat", "cat1", "cat2"];
var select = document.createElement("SELECT");
var element = document.getElementById("select");
var pushElement = document.getElementById("p")
for(var i = 0; i < options.length; i++) {
    var option = document.createElement("option");
    option.text = options[i];
    select.add(option);
}

select.addEventListener('change', function() {
        handle(select.value);
    }
);

element.appendChild(select);

function handle(name) {
    pushElement.innerHTML = "";
    var image = document.createElement("img");
    image.src = name + ".jpg";
    var p = document.createElement("p");
    p.innerHTML = 0;
    image.addEventListener("click", function() {
        p.innerHTML = parseInt(p.innerHTML) + 1;
    });
    pushElement.appendChild(image);
    pushElement.appendChild(p);
} 