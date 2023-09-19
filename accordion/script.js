let accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {

    header.addEventListener('click', () => {
        const symbol = header.querySelector('.symbol');
        const content = header.nextElementSibling;
        const isExpanded = content.classList.contains("is-expanded");

        header.classList.toggle('active');
        symbol.textContent = header.classList.contains('active') ? "-" : "+";
    
        if (isExpanded) {
          header.setAttribute("aria-expanded", "false");
          content.classList.remove("is-expanded");
        } else {
          header.setAttribute("aria-expanded", "true");
          content.classList.add("is-expanded");
        }

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
accordionHeaders = null

