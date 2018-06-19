var cat = document.getElementById("cat");
var cat1 = document.getElementById("cat1");
cat.addEventListener('click', function() {
    handle("clickCat");
});
cat1.addEventListener('click', function() {
    handle("clickCat1");
});

function handle(name) {
    var clicks = document.getElementById(name);
    clicks.innerHTML = parseInt(clicks.innerHTML) + 1;
} 