var cat = document.getElementById("cat");
cat.addEventListener('click', function() {
    var clicks = document.getElementById("clicks");
    clicks.innerHTML = parseInt(clicks.innerHTML) + 1;
});