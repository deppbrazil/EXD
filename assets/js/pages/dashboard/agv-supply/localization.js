// Open Map //
(function(window, document){
    var iframe = document.getElementById('agv-suply-iframe');

    // onload iframe
    iframe.onload = function() {
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        var openMapButton = iframeDoc.querySelectorAll('.boxElements-button-open-map');

        openMapButton.forEach(elm => {
            elm.addEventListener('click', function(){
                const localization = document.querySelector('.localization');

                if (!!localization) {
                    // exibi o painel.
                    localization.style.display = 'flex';

                    // fecha o painel.
                    localization.onclick = function(evt) {
                        if (evt.target === localization) {
                            localization.style.display = 'none';
                        }
                    }
                }
            })
        });
    };
})(window, document);

// Close Map - Button 'X' //
function closeMap() {
    var clickClose = document.getElementById('localization');

    clickClose.style.display = "none";
}
