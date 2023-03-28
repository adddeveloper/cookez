let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const nav = document.getElementById("nav");

  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove("navbg");
  } else {
    nav.classList.add('navbg');
  }

  prevScrollPos = currentScrollPos;
}
