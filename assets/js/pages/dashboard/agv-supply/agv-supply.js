// Go Busca Rápida //
function btnBuscaRapida() {

    var click = document.getElementById('busca__rapida');
    var clickClose1 = document.getElementById('busca__avancada');
    var clickClose2 = document.getElementById('dashboard');
    var clickClose3 = document.getElementById('footer');
    var clickClose4 = document.getElementById('buttonBackForm');
    var clickClose5 = document.getElementById('listBuscaAvancada');
    var clickShow = document.getElementById('busca__avancada__form');
    
    click.style.display = "block";
    clickShow.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
    clickClose3.style.display = "none";
    clickClose4.style.display = "none";
    clickClose5.style.display = "none";
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

// Open Alert - Ocorrências 
function openAlert() {
    var clickOpen = document.getElementById('alert__ocorrencias');
    //clickOpen.style.display = "flex";

    if (clickOpen.style.display === "none") {
        clickOpen.style.display = "flex";
    } else {
        clickOpen.style.display = "none";
    }
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
    var clickOpen = document.getElementById('footer');
    var clickShow = document.getElementById('busca__avancada__form');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('dashboard');
    var clickClose3 = document.getElementById('buttonBackForm');
    var clickClose4 = document.getElementById('listBuscaAvancada');
    

    click.style.display = "block";
    clickOpen.style.display="flex";
    clickShow.style.display = "block";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none"; 
    clickClose3.style.display = "none"; 
    clickClose4.style.display = "none"; 
}

// Go - Busca Avançada - List //
function goListBuscaAvancada() {
    var clickClose = document.getElementById('busca__avancada__form');
    var clickShow = document.getElementById('listBuscaAvancada');
    var clickShow2 = document.getElementById('buttonBackForm');

    clickClose.style.display = "none";
    clickShow.style.display = "block";
    clickShow2.style.display = "block";
}

// Go - Busca Avançada - List - Back Form //
function backFormBuscaAvancada() {
    var clickClose = document.getElementById('listBuscaAvancada');
    var clickShow = document.getElementById('busca__avancada__form');
    var clickClose2 = document.getElementById('buttonBackForm');

    clickClose.style.display = "none";
    clickShow.style.display = "block";
    clickClose2.style.display = "none";

}

// Go Dashboard //
function btnDashboard() {
    
    var clickShow = document.getElementById('dashboard');
    var clickClose1 = document.getElementById('busca__rapida');
    var clickClose2 = document.getElementById('busca__avancada');
    var clickClose3 = document.getElementById('footer');
    
    clickShow.style.display = "flex";
    clickClose1.style.display = "none";
    clickClose2.style.display = "none";
    clickClose3.style.display = "none";
}