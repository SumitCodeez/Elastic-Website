function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();
var tl = gsap.timeline();
function startAnimation(selector) {
  tl.from(selector, {
    x: 40,
    opacity: 0,
    duration: 0.4,
  }).to(selector, {
    x: 30,
    opacity: 0,
    duration: 0.4,
  });
}

for (let i = 1; i <= 11; i++) {
  startAnimation(`#top-screen #elem${i}`);
}
tl.to("#top-screen", {
  opacity: 0,
}).to("#top-screen", {
  display: "none",
});

tl.from("#hello span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.5,
});
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "#main",
    start: "20% 80%",
    end: "140% 80%",
    scrub: true,
  },
});
tl2.from("#videoanimate", {
  scale: 0.3,
});
tl2.to("#videoanimate", {
  scale: 1,
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-3",
    scroller: "#main",
    start: "55% 80%",
    end: "180% 80%",
  },
});
tl3.from(
  "#first-part",
  {
    opacity: 0,
    y: 130,
    duration: 0.9,
    delay: 0.3,
  },
  "same"
);
tl3.to(
  "#first-part",
  {
    y: 0,
  },
  "diff"
);
tl3.from(
  "#second-part",
  {
    opacity: 0,
    y: 130,
    duration: 0.9,
    delay: 0.3,
  },
  "same"
);
tl3.to(
  "#second-part",
  {
    y: 0,
  },
  "diff"
);
tl3.from(
  "#third-part",
  {
    opacity: 0,
    y: 130,
    duration: 0.9,
    delay: 0.3,
  },
  "same"
);
tl3.to(
  "#third-part",
  {
    y: 0,
  },
  "diff"
);
tl3.from(
  "#fourth-part",
  {
    opacity: 0,
    y: 130,
    duration: 0.9,
    delay: 0.3,
  },
  "same"
);
tl3.to(
  "#fourth-part",
  {
    y: 0,
  },
  "diff"
);
var content1 = document.querySelectorAll(".mousemovement");
var cursor = document.querySelector("#cursor");

content1.forEach(function (element) {
  element.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x - 20,
      y: dets.y - 160,
    });
  });

  element.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
    });
    gsap.to(element, {
      scale: 0.9,
    });
  });

  element.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
    });
    gsap.to(element, {
      scale: 1,
    });
  });
});

gsap.to("#wrapper", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: "#page-6",
    scroller: "#main",
    start: "top 0%",
    end: "top -100%",
    pin: true,
    scrub: true,
  },
});

var h1all = document.querySelectorAll(".upper-text-part h1");

h1all.forEach(function (element, index) {
  gsap.from(element, {
    y: 300,
    duration: 0.7,
    delay: 0.3,
    stagger: 0.5,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page-8",
      scroller: "#main",
      start: "-40% top",
      end: "80% 100%",
      scrub: true,
    },
  });
});
