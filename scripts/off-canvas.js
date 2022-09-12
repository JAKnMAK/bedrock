(function() {
    var offCanvases = document.querySelectorAll('.off-canvas');

    offCanvases.forEach(offCanvas => {
        var closeButton = '<button class="off-canvas-button" aria-label="close dialog" data-toggle="' + offCanvas.id + '">&#xf00d;</button>';
        var openButton = '<div class="region"><button class="off-canvas-button" aria-label="open dialog" data-toggle="' + offCanvas.id + '">&#xf0c9;</button></div>';
    
        offCanvas.insertAdjacentHTML('afterbegin', closeButton);
        offCanvas.insertAdjacentHTML('afterend', openButton);
    });
    
    var buttons = document.querySelectorAll('.off-canvas-button');
    
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            var offCanvas = document.getElementById(button.dataset.toggle);
    
            if (offCanvas.classList.contains('is-open')) {
                document.body.classList.remove('off-canvas-is-open');
                offCanvas.classList.remove('is-open');
    
                var overlays = document.querySelectorAll('.off-canvas-overlay');
    
                overlays.forEach(overlay => {
                    overlay.remove();
                });
            } else {
                document.body.classList.add('off-canvas-is-open');
                offCanvas.classList.add('is-open');
    
                var overlay = '<div class="off-canvas-overlay"></div>';
    
                offCanvas.insertAdjacentHTML('afterend', overlay);
            }
    
            event.preventDefault();
        }); 
    });    
}());
