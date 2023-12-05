let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

const sectionImages = [
  "./images/1-process-pic.jpg",
  "./images/2-mountains.jpg",
  "./images/3-electronic-monolith.jpg",
  "./images/4-una-pizza.jpg",
  "./images/5-bump-block.jpg"
];

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  section.bg.style.backgroundImage = `url(${sectionImages[i]})`;
  
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