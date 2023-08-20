var particle_json_path = '/assets/json/particles.json' | relative_url
document.addEventListener(
  "DOMContentLoaded",
  (event) => {
    particlesJS.load("particles-js", particle_json_path, function () {
      console.log("particles.js loaded - callback");
    });
  },
  false
);
