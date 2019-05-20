function show() {
    var click = document.getElementById('drop-content');

    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {
        click.style.display = "none";
    }
}