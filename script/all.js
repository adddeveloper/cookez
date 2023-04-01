
window.addEventListener("load", ()=>{
    if(window.location.href.split("/").length > 4){
        window.onscroll =()=>{}
        var navbar = document.getElementById("nav");
        navbar.classList.add('navbg');
    }
})


function go(x){
    var a = document.createElement("a")
    a.href = "/"+x;
    a.click();
}

function capitalizeFirstLetter(str) {
    var whole="";
    var arr = str.split(" ");
    arr.forEach(e=>{
        var rr = e.split('')
        rr.shift()
        rr.unshift(e.split('')[0].toUpperCase())
        whole += " "+ rr.join("")
    })
    return whole;
}


var url = ['/10/10.json', '/5/5.json', '/3/3.json'];
var ddata=[];
var holder = document.getElementById("holder__");

function scrollToTarget() {
    holder.scrollIntoView({ behavior: 'smooth' });
}

function clean(s){
    var ns = s.split('_').join(' ');
    s = capitalizeFirstLetter(ns);
    return s;
}


function upload(x,y,n){
    if(n=="top"){
        x.forEach((e,i)=>{
                if(window.location.href.split("/")[3] == "" || window.location.href.split("/")[3] == "index.html"){
                    y.innerHTML+=
                '<div onclick="go(\''+e.url+'\')" style="background-image: url(/style/img/'+e.img+');" class="crd">'+
                    '<img src="/style/img/'+e.img+'"></img>'+
                    '<div>'+
                            '<h1>'+capitalizeFirstLetter(e.title)+'</h1>'+
                            '<p>'+e.description+'</p>'+
                    '</div>'+
                '</div>';
                } else if(i<=2){
                    y.innerHTML+=
                    '<div onclick="go(\''+e.url+'\')" style="background-image: url(/style/img/'+e.img+');" class="crd">'+
                        '<img src="/style/img/'+e.img+'"></img>'+
                        '<div>'+
                                '<h1>'+capitalizeFirstLetter(e.title)+'</h1>'+
                                '<p>'+e.description+'</p>'+
                        '</div>'+
                    '</div>';
                }
        })
    }
    if(n=="recipes"){
        Object.keys(x).forEach((e,i)=>{
            if(i<3){
            y.innerHTML+=
                '<div onclick="go_r(\''+e+'\')" style="background-image: url(/style/img/'+x[e]['img']+');" class="crd">'+
                    '<img src="/style/img/'+x[e]['img']+'"></img>'+
                    '<div>'+
                            '<h1>'+clean(e)+'</h1>'+
                            '<p>'+x[e]['description']+'</p>'+
                    '</div>'+
                '</div>';
            }
        })
    }
}
if(holder){
    url.forEach(e=>{
        fetch(e)
        .then((res)=>res.json())
        .then(data=>{
            upload(data, holder, "top")
        })
    });
}

fetch("/recipes/index.json")
.then((res)=>res.json())
.then(data=>{
    upload(data, document.getElementById("r_holder__"), "recipes")
})


var t = document.getElementById("ttitle");
var title = document.querySelector("title");
if(t){
    title.innerHTML = t.innerHTML;
}


var nav_links = document.querySelector("nav").children[1].children[0];

if(nav_links){
    nav_links.innerHTML="";

nav_links.innerHTML=
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a style="cursor:pointer;" href="/index.html" class="nav-link">Home</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a href="/recipes/" class="nav-link">Recipe</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a href="#read-more" onclick="scrollToTarget()" class="nav-link">Facts</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a target="_blank" href="mailto:lowbudgetdawah@gmail.com" class="nav-link">Contact</a>'+
'</li>';
}