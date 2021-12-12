function getOffSet() {
  var _offset = 450;
  var windowHeight = window.innerHeight;

  if (windowHeight > 500) {
    _offset = 400;
  }
  if (windowHeight > 680) {
    _offset = 300;
  }
  if (windowHeight > 830) {
    _offset = 210;
  }

  return _offset;
}

function setParallaxPosition($doc, multiplier, $object) {
  var offset = getOffSet();
  var from_top = $doc.scrollTop(),
    bg_css = "center " + (multiplier * from_top - offset) + "px";
  $object.css({ "background-position": bg_css });
}

// Parallax function
// Adapted based on https://codepen.io/roborich/pen/wpAsm
var background_image_parallax = function ($object, multiplier, forceSet) {
  multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  // $object.css({"background-attatchment" : "fixed"});

  if (forceSet) {
    setParallaxPosition($doc, multiplier, $object);
  } else {
    $(window).scroll(function () {
      setParallaxPosition($doc, multiplier, $object);
    });
  }
};

var background_image_parallax_2 = function ($object, multiplier) {
  multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({ "background-attachment": "fixed" });

  $(window).scroll(function () {
    if ($(window).width() > 768) {
      var firstTop = $object.offset().top,
        pos = $(window).scrollTop(),
        yPos = Math.round(multiplier * (firstTop - pos) - 186);

      var bg_css = "center " + yPos + "px";

      $object.css({ "background-position": bg_css });
    } else {
      $object.css({ "background-position": "center" });
    }
  });
};

$(function () {
  // Hero Section - Background Parallax
  background_image_parallax($(".tm-parallax"), 0.3, false);
  background_image_parallax_2($("#contact"), 0.8);
  background_image_parallax_2($("#products"), 0.8);

  // Handle window resize
  window.addEventListener(
    "resize",
    function () {
      background_image_parallax($(".tm-parallax"), 0.3, true);
    },
    true
  );

  // Detect window scroll and update navbar
  $(window).scroll(function (e) {
    if ($(document).scrollTop() > 120) {
      $(".tm-navbar").addClass("scroll");
    } else {
      $(".tm-navbar").removeClass("scroll");
    }
  });

  // Close mobile menu after click
  $("#tmNav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // Scroll to corresponding section with animation
  $("#tmNav").singlePageNav({
    easing: "easeInOutExpo",
    speed: 600,
  });

  // Add smooth scrolling to all links
  // https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        "easeInOutExpo",
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // Product & Solution function
  $(document).ready(function () {
    let pages = ["#dell-first", "#dell-second", "#ibm-first", "#ibm-second"];

    for (let page of pages) {
      $(page).hover(
        function () {
          $(this).css("color", "red");
        },
        function () {
          $(this).css("color", "#3085a3");
        }
      );
    }
  });

  // Dell Technologies

  let _dell = ["#dell", "#dell-first"];

  for (let _ of _dell) {
    $(_).on("click", function (event) {
      $("#company-title").html("Dell Technologies");

      $("#company-summarize").html(
        "엔터프라이즈 데이터 스토리지: 클라우드, NAS 및 플래시 | Dell Technologies Korea"
      );
      $("#product-link").prop(
        "href",
        "https://www.delltechnologies.com/ko-kr/storage/data-storage.htm"
      );
    });
  }

  $("#dell-second").on("click", function (event) {
    $("#company-summarize").html(
      "VxRail 하이퍼 컨버지드 인프라스트럭처 어플라이언스 | Dell Technologies Korea"
    );
    $("#product-link").prop(
      "href",
      "https://www.delltechnologies.com/ko-kr/converged-infrastructure/vxrail/index.htm"
    );
  });

  // IBM
  let _ibm = ["#ibm", "#ibm-first"];
  for (let _ of _ibm) {
    $(_).on("click", function (event) {
      $("#company-title").html("IBM");

      $("#company-summarize").html(
        "플래시 스토리지 및 올플래시 어레이 솔루션 - 대한민국 | IBM"
      );
      $("#product-link").prop(
        "href",
        "https://www.ibm.com/kr-ko/it-infrastructure/storage/flash"
      );
    });
  }

  // Pop up
  $(".tm-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });

  $(".tm-products-carousel").slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1,
        },
      },
    ],
  });

  // Gallery
  $(".tm-gallery").slick({
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
});
