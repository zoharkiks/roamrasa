import { gsap } from "gsap";

initScript();

// Loader Animations
function initLoader() {
  var tl = gsap.timeline();

  tl.fromTo(
    ".padding_animation",
    { padding: "0 0" },
    { padding: "12px 12px", duration: 0.75 },
    1
  );
  tl.fromTo(
    ".bg_animation",
    { borderRadius: "0 0 0 0", backgroundColor: "#dda15e" },
    { borderRadius: "8px", backgroundColor: "#283618", duration: 1 },
    1
  );
  tl.fromTo(
    ".logo_animation",
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.5 }
  );
  tl.fromTo(
    ".loaderQuote_animation",
    { opacity: 0 },
    { opacity: 1, duration: 1 }
  );
}

function initScript() {
  initLoader();
}
