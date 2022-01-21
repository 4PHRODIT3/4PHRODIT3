var sidebar_off_btn = document.getElementById("close-sidebar");
var sidebar_in_btn = document.getElementById("open-sidebar");
var sidebar = document.getElementById("sidebar");
var nav_tabs = document.querySelector(".nav-tabs");

const sidebar_toggler = (_) => {
  let screen_width = screen.width;
  if (screen_width <= 1050) {
    sidebar.classList.toggle("nav-slide-off");
    document.body.classList.toggle("overflow-y-scroll");
  }
};

const setActive = (id) => {
  $(".nav-tabs a[href]").removeClass("active");
  $(`.nav-tabs a[href="#${id}"`).addClass("active");
};

sidebar_off_btn.addEventListener("click", sidebar_toggler);
sidebar_in_btn.addEventListener("click", sidebar_toggler);
nav_tabs.addEventListener("click", sidebar_toggler);

const setUpNavActions = (_) => {
  $("section[id]").waypoint(
    function (direction) {
      let current_id = $(this.element).attr("id");
      if (direction == "down") {
        setActive(current_id);
      } else {
        setActive(current_id);
      }
    },
    {
      offset: 0,
    }
  );
};
setUpNavActions();

window.onload = (_) => {
  fetchRenderBlockingElement();
  document.querySelector(".loader-container").remove();
};

const fetchRenderBlockingElement = (_) => {
  document.querySelector(
    "head"
  ).innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`;
  document.querySelector(
    ".map"
  ).innerHTML += `<iframe class="map" title="My Office Location" src="https://maps.google.com/maps?q=16.773602885144747,%2096.18222327116501&t=&z=13&ie=UTF8&iwloc=&output=embed" style="border: 0; filter: grayscale(80%)" allowfullscreen="" loading="lazy"></iframe>`;
};

$(".portfolio").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
