const header = document.getElementById("header");
const banner = document.getElementById("banner-bg");
const bannerAdditonal = document.getElementById("banner-additonal-bg");

//content
const h1Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");
const playVideo = document.querySelector(".play-video span");
const playVideoCover = document.querySelector(".content-inner .cover");

//image
const handImg = document.querySelector(".image-inner img");
const featureBanner = document.querySelector("#featureBanner");
const featureBannerGreen = document.querySelector("#featureBannerGreen");

//features
const featuresContentTitle = document.querySelector(".features-content h3");
const featuresContentP = document.querySelector(".features-content p");
const featuresContentButton = document.querySelector(
  ".features-content .btn-row"
);
const featuresList = document.querySelectorAll(".features-list li");

//delete
const bannerInner = document.getElementById("bannerInner");

//banner animation
gsap.from([bannerAdditonal, banner], {
  duration: 1.2,
  width: 0,
  skewX: 6,
  ease: "power3.inOut",
  stagger: {
    amount: 0.2
  }
});
// header animation
gsap.from(header, {
  delay: 1,
  y: 16,
  duration: 0.8,
  opacity: 0,
  ease: "power3.inOut"
});

//Stagger content

gsap.from(h1Line, {
  delay: 1.2,
  y: 80,
  duration: 0.8,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});

gsap.from([contentP, contentButton], {
  delay: 1.6,
  y: -40,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});

gsap.to([playVideo, playVideoCover], {
  delay: 1.6,
  opacity: 1,
  duration: 0
});
gsap.to(playVideoCover, {
  delay: 1.8,
  height: 0,
  duration: 1,
  ease: "power3.out"
});

// hand
gsap.from(handImg, {
  delay: 2,
  x: -100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from([featureBanner, featureBannerGreen], {
  delay: 2.2,
  x: -60,
  skewX: 6,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});

const featuresAnimation = a => {
  gsap.from(a, {
    opacity: 0
  });
};

//scroll magic

var tl = gsap.timeline();
tl.from([featuresContentTitle, featuresContentP, featuresContentButton], {
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
}).from(featuresList, {
  delay: -0.4,
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#featureBannerGreen",
  triggerHook: 0,
  reverse: false
})

  .setTween(tl)
  .addTo(controller);
