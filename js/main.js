let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

const sectionImages = [
  {src: "images/1-bump-block.jpg"},
  {src: "images/2-mountains.jpg"},
  {src: "images/3-goggles.jpg"},
  {src: "images/4-una-pizza.jpg"},
  {src: "images/5-bump-block-2.jpg"},
];

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  console.log(section.bg);

  section.bg.style.backgroundImage = `url(${sectionImages[i].src})`;
  
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
});