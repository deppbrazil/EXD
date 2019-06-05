// Go Busca Rápida //
function btnBuscaRapida() {

    var click = document.getElementById('busca__rapida');
    var clickClose1 = document.getElementById('busca__avancada');
    var clickClose2 = document.getElementById('dashboard');
    
    click.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
}

// Go List - Busca Rápida //
function goListBucaRapida() {
    var clickHide = document.getElementById('homeBuscaRapida');
    var clickShow = document.getElementById('busca__rapida__detalhes');

    clickHide.style.display = "none";
    clickShow.style.display = "flex";
}

// Go - Busca Rápida - Detalhes //
function btnGoBuscaRapida() {

    var clickHide = document.getElementById('detalhes');
    var clickShow = document.getElementById('busca__rapida__detalhes');

    clickHide.style.display = "none";
    clickShow.style.display = "flex";
}

// Detalhes da Nota //
function btnGoDetalhes() {

    var clickHide = document.getElementById('busca__rapida__detalhes');
    var clickShow = document.getElementById('detalhes');

    clickHide.style.display = "none";
    clickShow.style.display = "block";
}

// Back Home - Busca Rápida //
function btnGoHomeBuscaRapida() {

    var clickHide = document.getElementById('busca__rapida__detalhes');
    var clickShow = document.getElementById('homeBuscaRapida');

    clickHide.style.display = "none";
    clickShow.style.display = "flex";
}









// Go - Busca Avançada //
function btnBuscaAvancada() {
    
    var click = document.getElementById('busca__avancada');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('dashboard');

    click.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none"; 
}

// Go Dashboard //
function btnDashboard() {
    
    var click = document.getElementById('dashboard');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('busca__avancada');
    
    click.style.display = "flex";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
}