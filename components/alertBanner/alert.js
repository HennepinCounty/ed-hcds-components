// function to close alerts
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.hc-alert-close-button');
    
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const alertContainer = this.closest('.hc-alert');
            if (alertContainer) {
                alertContainer.style.display = 'none';

                // Use this to set focus to a predetermined element after closing the alert
                // Usually the element that triggered the alert if applicable
                // Currently it is focused on the h1 of the component page
                document.getElementById('main-content-heading').focus();
            }
        });
    });
});
