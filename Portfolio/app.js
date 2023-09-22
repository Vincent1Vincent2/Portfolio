// This takes choose all my nav-link class and checks for if and what the current .html is in the link. After identifying it says to my css to add a style
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    // This style is located on the 27th line in the style.css
    link.setAttribute("aria-current", "page");
  }
});

// This selects my coustom cursors from the css stylesheet
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

// This listens for my move move and allows me to keep track of where my mouse is
document.addEventListener("mousemove", moveCursor);

// This is what tracks the where the mouse is
function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  // This makes the outer cursor drag behind the smaller one to add more felling to the site
  setTimeout(() => {
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
  }, 150);
}

// This selects all my links in the css style sheet
let links = Array.from(document.querySelectorAll("a"));

// When the mouse is over the <a> tag it adds my shrink class
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    outerCursor.classList.add("shrink");
  });
});

// This makes the mouse revert to it's original colors when it leaves any <a> tag
links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    outerCursor.classList.remove("shrink");
  });
});

// When the mouse is over the <a> tag it adds my opacity class
links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("opacity");
  });
});
// This makes the mouse revert to it's original opacity when it leaves any <a> tag
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("opacity");
  });
});

// This selects my triangl animation icon, it's a SVG
let triangles = Array.from(document.querySelectorAll("svg"));

// Same as the link tags but to give more of a variation i only change the opacity
triangles.forEach((triangles) => {
  triangles.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("opacity");
  });
});

triangles.forEach((triangles) => {
  triangles.addEventListener("mouseover", () => {
    innerCursor.classList.add("opacity");
  });
});

// we like this code, it makes all my things load smooooooooth (index.html)
ScrollReveal().reveal("h1", { delay: 350 });
ScrollReveal().reveal("p", { delay: 450 });
ScrollReveal().reveal("#projectLink", { delay: 550 });
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

// When the user scrolls the page it activates myFunction
window.onscroll = function () {
  myFunction();
};

// This keeps track of the windows height and how long you've scrolled, then some math to calculate how long the progressbar should be
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
