let accordionHeaders = document.querySelectorAll(".hc-accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // const symbol = header.querySelector(".material-symbols-outlined");
    const symbol = header.querySelector(`.hc-icon-size--regular path`);
    const content = header.nextElementSibling;
    const isExpanded = content.classList.contains(
      "hc-accordion-content--expanded"
    );

    if (content.classList.contains("hc-accordion-content--expanded")) {
      symbol.setAttribute(
        `d`,
        `M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z`
      );
    } else {
      symbol.setAttribute(`d`, `M200-440v-80h560v80H200`);
    }

    // header.classList.toggle("hc-accordion-active");
    // symbol.setAttribute = header.classList.contains("hc-accordion-active")
    //   ? "-"
    //   : "+";

    // header.classList.toggle("hc-accordion-active");
    // symbol.textContent = header.classList.contains("hc-accordion-active")
    //   ? "remove"
    //   : "add";

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
