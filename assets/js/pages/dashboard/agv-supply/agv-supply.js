function btnBuscaRapida() {

    var click = document.getElementById('busca__rapida');
    var clickClose1 = document.getElementById('busca__avancada');
    var clickClose2 = document.getElementById('dashboard');
    
    click.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
}

function btnBuscaAvancada() {
    
    var click = document.getElementById('busca__avancada');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('dashboard');

    click.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
    
}

function btnDashboard() {
    
    var click = document.getElementById('dashboard');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('busca__avancada');
    
    click.style.display = "flex";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
}