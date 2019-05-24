function showBuscaRapida() {

    var click = document.getElementById('busca__rapida');
    
    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {
        click.style.display = "none";
    }
}
