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
  document.querySelector(".loader-container").remove();
};

$(".portfolio").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 1380,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
