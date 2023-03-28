window.onscroll = function() {changeNavbarBackground()};

function changeNavbarBackground() {
  var navbar = document.getElementById("nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('navbg');
  } else {
    navbar.classList.remove("navbg");
  }
}
