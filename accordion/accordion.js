let accordionHeaders = document.querySelectorAll('.hc-accordion-header');
accordionHeaders.forEach(header => {

    header.addEventListener('click', () => {
        const symbol = header.querySelector('.hc-accordion-symbol');
        const content = header.nextElementSibling;
        const isExpanded = content.classList.contains("is-expanded");

        header.classList.toggle('hc-accordion-active');
        symbol.textContent = header.classList.contains('hc-accordion-active') ? "-" : "+";
    
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

