const openButton = document.querySelector('[data-open-modal]');
        const closeButton = document.querySelector('[data-close-modal]');
        const modal = document.querySelector('[data-modal]');
        const iconClose = document.querySelector('[icon]');

        openButton.addEventListener('click', () =>{
            modal.show();
        });

        closeButton.addEventListener('click', () =>{
            modal.close();
        });

        iconClose.addEventListener('click', () =>{
            modal.close();
        });