
function openDrawer() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    console.log(accordionHeaders)
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const symbol = header.querySelector('.symbol');
            symbol.textContent = header.classList.contains('active') ? "-" : "+";
            const content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

}
