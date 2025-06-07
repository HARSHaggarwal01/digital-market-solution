// header sticky
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $(".home-carousel").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 1000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false,
          fade: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          fade: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          fade: false,
          speed: 700,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".brandLogo-carousel").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for no delay between transitions
    speed: 5000, // Adjust speed (higher = slower movement)
    cssEase: "linear", // Smooth linear scroll
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".testimonial-carousel").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: false,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          fade: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          fade: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          fade: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".client-carousel").slick({
//     infinite: true,
//     dots: false,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     prevArrow:
//       '<button class="slick-prev" aria-label="Previous">&#8592;</button>',
//     nextArrow: '<button class="slick-next" aria-label="Next">&#8594;</button>',
//     speed: 1000,
//     cssEase: "ease-in-out",
//     pauseOnHover: true,
//     pauseOnFocus: false,
//     mobileFirst: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 1,
//           fade: false,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           fade: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           fade: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           fade: true,
//         },
//       },
//     ],
//   });
// });
