document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    particlesJS.load("particles-js", '/assets/json/particles.json' | relative_url, function () {
      console.log("particles.js loaded - callback");
    });
  },
  false
);
