let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

// let section = document.querySelector("section-1");

// const sectionImages = [
//   {src: "images/1-process-pic.jpg"},
//   {src: "images/2-mountain.jpg"},
//   {src: "images/3-electronic-monolith.jpg"},
//   {src: "images/4-una-pizza.jpg"},
//   {src: "images/5-bump-blocks.jpg"},
// ];

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  console.log(section.bg);

  section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
  
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