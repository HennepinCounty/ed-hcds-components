let accordionHeaders = document.querySelectorAll(".hc-accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const symbol = header.querySelector(".material-symbols-outlined");
    const content = header.nextElementSibling;
    const isExpanded = content.classList.contains(
      "hc-accordion-content--expanded"
    );

    header.classList.toggle("hc-accordion-active");
    symbol.textContent = header.classList.contains("hc-accordion-active")
      ? "remove"
      : "add";

    if (isExpanded) {
      header.setAttribute("aria-expanded", "false");
      content.classList.remove("hc-accordion-content--expanded");
    } else {
      header.setAttribute("aria-expanded", "true");
      content.classList.add("hc-accordion-content--expanded");
    }

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
accordionHeaders = null;
