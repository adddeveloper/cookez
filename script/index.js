function go_r(x){
  location.replace('/recipes/#'+x)
}

window.onscroll = function() {changeNavbarBackground()};

function changeNavbarBackground() {
  var navbar = document.getElementById("nav");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('navbg');
  } else {
    navbar.classList.remove("navbg");
  }
}


window.addEventListener("load", ()=>{
  if(window.location.href.split("#")[1] == "read-more"){
    var holder = document.getElementById("holder__");
    holder.scrollIntoView({ behavior: 'smooth' });
  }
})

    document.querySelector("footer").innerHTML += " <a href='https://cookez.info/privacypolicy.html'>Privacy Policy</a>"; document.querySelector("footer p").style.margin = "0";
