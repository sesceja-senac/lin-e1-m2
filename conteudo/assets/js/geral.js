window.addEventListener("load", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  $(".preloader").fadeOut(300);

  document
    .querySelector(".pin-inglaterra")
    .addEventListener("mouseover", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa-1.png");
    });
  document
    .querySelector(".pin-inglaterra")
    .addEventListener("mouseout", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa.png");
    });

  document.querySelector(".pin-eua").addEventListener("mouseover", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa-2.png");
  });
  document.querySelector(".pin-eua").addEventListener("mouseout", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa.png");
  });

  document
    .querySelector(".pin-canada")
    .addEventListener("mouseover", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa-3.png");
    });
  document
    .querySelector(".pin-canada")
    .addEventListener("mouseout", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa.png");
    });

  document.querySelector(".pin-nz").addEventListener("mouseover", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa-4.png");
  });
  document.querySelector(".pin-nz").addEventListener("mouseout", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa.png");
  });

  document
    .querySelector(".pin-irlanda")
    .addEventListener("mouseover", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa-5.png");
    });
  document
    .querySelector(".pin-irlanda")
    .addEventListener("mouseout", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa.png");
    });

  document.querySelector(".pin-af").addEventListener("mouseover", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa-6.png");
  });
  document.querySelector(".pin-af").addEventListener("mouseout", function () {
    document
      .getElementById("mymap")
      .setAttribute("src", "images/mapa/mapa.png");
  });

  document
    .querySelector(".pin-india")
    .addEventListener("mouseover", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa-7.png");
    });
  document
    .querySelector(".pin-india")
    .addEventListener("mouseout", function () {
      document
        .getElementById("mymap")
        .setAttribute("src", "images/mapa/mapa.png");
    });
});

jQuery("document").ready(function ($) {
  var nav = $(".navbar");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
      nav.addClass("fixar");
    } else {
      nav.removeClass("fixar");
    }
  });

  var pg_number = parseInt(window.location.href.split("?")[1].split("=")[1]);
  console.log("pg_number:", pg_number);
  $("#navbarScroll a").eq(pg_number).addClass("ativo");
  $("#navbarScrollingDropdown span").html(
    $("#navbarScroll a").eq(pg_number).text()
  );

  //alert('URL: '+pg_number);

  if (pg_number == 1) {
    document.body.style.backgroundImage = "url('images/bg_pg1.jpg')";
  } else if (pg_number == 2) {
    document.body.style.backgroundImage = "url('images/bg_pg2.jpg')";
    document
      .getElementById("titulo-header")
      .setAttribute("style", "color:#fff");
  } else if (pg_number == 3) {
    document.body.style.backgroundImage = "url('images/bg_pg3.jpg')";
  } else if (pg_number == 4) {
    document.body.style.backgroundImage = "url('images/bg_pg4.jpg')";
    document
      .getElementById("titulo-header")
      .setAttribute("style", "color:#fff");
  } else if (pg_number == 5) {
    document.body.style.backgroundImage = "url('images/bg_pg5.jpg')";
  }

  //------ Painel Mapa ------\\
  document
    .querySelector(".btn-africano")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-6.png')";
      document.getElementById("texto-tooltip").innerHTML =
        "Inglês sul-africano";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-africano")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-britanico")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-1.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês britânico";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-britanico")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-canadense")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-2.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês canadense";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-canadense")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-indiano")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-7.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês indiano";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-indiano")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-ingles01")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-3.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês americano";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-ingles01")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });
  document
    .querySelector(".btn-ingles02")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-3.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês americano";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-ingles02")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-irlandes")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-5.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês irlandês";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-irlandes")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });

  document
    .querySelector(".btn-neozelandes")
    .addEventListener("mouseover", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa-4.png')";
      document.getElementById("texto-tooltip").innerHTML = "Inglês neozelandês";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:block");
    });
  document
    .querySelector(".btn-neozelandes")
    .addEventListener("mouseout", function () {
      document.getElementById("painel-mapa").style.backgroundImage =
        "url('images/mapa/mapa.png')";
      document
        .getElementById("div-tooltip")
        .setAttribute("style", "display:none");
    });
  //------ Fim Painel Mapa ------\\
});
