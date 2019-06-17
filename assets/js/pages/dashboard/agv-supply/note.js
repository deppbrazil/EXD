// Open Note //
(function(window, document){
    var iframe = document.getElementById('agv-suply-iframe');

    // Onload iframe
    iframe.addEventListener('load', function() {
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        var openNoteButton = iframeDoc.querySelectorAll('.boxElements-button-open-note');

        openNoteButton.forEach(elm => {
            elm.addEventListener('click', function(){
                var note = document.querySelector('.note');

                if (!!note) {
                    // Open Panel
                    note.style.display = 'flex';

                    // Close Panel
                    note.onclick = function(evt) {
                        if (evt.target === note) {
                            note.style.display = 'none';
                        }
                    }
                }
            })
        });
    });
})(window, document);

// Close Note - Button 'X' //
function closeNote() {
    var clickClose = document.getElementById('note');

    clickClose.style.display = "none";
}

