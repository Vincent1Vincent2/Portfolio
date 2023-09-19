// This takes choose all my nav-link class and checks for if and what the current .html is in the link. After identifying it says to my css to add a style
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    // This style is located on the 27th line in the style.css
    link.setAttribute("aria-current", "page");
  }
});

// we like this code, it makes all my things load smooooooooth (index.html)
ScrollReveal().reveal("h1", { delay: 350 });
ScrollReveal().reveal("p", { delay: 450 });
ScrollReveal().reveal(".btn", { delay: 550 });
ScrollReveal().reveal(".me-img", { delay: 650 });
ScrollReveal().reveal(".card-title", { delay: 250 });
ScrollReveal().reveal(".card", { delay: 350 });
ScrollReveal().reveal(".socials", { delay: 250 });
ScrollReveal().reveal(".copyright-text", { delay: 350 });

// we like this code, it makes all my things load smooooooooth (projects.html)
ScrollReveal().reveal(".project-title", { delay: 250 });
ScrollReveal().reveal(".project-description", { delay: 250 });
ScrollReveal().reveal(".project-img", { delay: 250 });
ScrollReveal().reveal(".btn", { delay: 450 });
ScrollReveal().reveal(".socials", { delay: 250 });
ScrollReveal().reveal(".copyright-text", { delay: 350 });

// we like this code, it makes all my things load smooooooooth (contact.html)
ScrollReveal().reveal(".contact-title", { delay: 450 });
ScrollReveal().reveal(".form-container", { delay: 550 });
ScrollReveal().reveal(".socials", { delay: 250 });
ScrollReveal().reveal(".copyright-text", { delay: 350 });

// we like this code, it makes all my things load smooooooooth (about.html)
ScrollReveal().reveal(".about-title", { delay: 350 });
ScrollReveal().reveal(".about-description", { delay: 450 });
ScrollReveal().reveal(".socials", { delay: 250 });
ScrollReveal().reveal(".copyright-text", { delay: 350 });
