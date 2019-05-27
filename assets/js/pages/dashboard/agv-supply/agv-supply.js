function showBuscaRapida() {

    var click = document.getElementById('busca__rapida');
    var clickFecha = document.getElementById('busca__avancada');
    
    if (click.style.display === "none") {
        click.style.display = "flex";
        clickFecha.style.display = "none";
    } else {
        click.style.display = "none";
    }
}

function showBuscaAvancada() {

    document.getElementById('busca__rapida').style.diplay = "none";

    var click = document.getElementById('busca__avancada');
    var clickFecha = document.getElementById('busca__rapida');
    
    if (click.style.display === "none") {
        click.style.display = "block";
        clickFecha.style.display = "none";
    } else {
        click.style.display = "none";
    }

}
