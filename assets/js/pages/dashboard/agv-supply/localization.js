// Open Map //
(function(window, document){
    var iframe = document.getElementById('agv-suply-iframe');

    // Onload iframe
    iframe.addEventListener('load', function() {
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        var openMapButton = iframeDoc.querySelectorAll('.boxElements-button-open-map');

        openMapButton.forEach(elm => {
            elm.addEventListener('click', function(){
                var localization = document.querySelector('.localization');

                if (!!localization) {
                    // Open Panel
                    localization.style.display = 'flex';

                    // Close Panel
                    localization.onclick = function(evt) {
                        if (evt.target === localization) {
                            localization.style.display = 'none';
                        }
                    }
                }
            })
        });
    });
})(window, document);

// Close Map - Button 'X' //
function closeMap() {
    var clickClose = document.getElementById('localization');

    clickClose.style.display = "none";
}