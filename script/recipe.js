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

function clean(s){
    var ns = s.split('_').join(' ');
    s = capitalizeFirstLetter(ns);
    return s;
}
function cleean_list(p) {
    var np ='';
    p.forEach(e=>{
        np+="<li>"+e+"</li>";
    });
    console.log(np)
    return np;
}

function go_r(x){
    location.replace(x)
    location.reload();
}

function upload(x,y,n){
    if(n=="all"){
        Object.keys(x).forEach((e,i)=>{
                y.innerHTML+=
                '<div onclick="go_r(\''+e+'\')" style="background-image: url(/style/img/'+x[e]['img']+');" class="crd">'+
                    '<img src="/style/img/'+x[e]['img']+'"></img>'+
                    '<div>'+
                        '<h1>'+clean(e)+'</h1>'+
                        '<p>'+x[e]['description']+'</p>'+
                    '</div>'+
                '</div>';
        })
    } else if(n=="one"){
        document.querySelector("h1").style.display ='none';
            y.innerHTML+=
                '<div style="background-image: url(/style/img/'+x['img']+');" class="crd crad">'+
                    '<h1 class="pt-3">'+clean(window.location.href.split("#")[1])+'</h1>'+
                    '<img src="/style/img/'+x['img']+'"></img>'+
                    '<div class="d-flex justify-content-evenly align-items-center flex-column">'+
                        '<p style="color: #333;"><i class="text-black bi bi-info-circle"></i> '+x['description']+'</p>'+
                        '<div class="d-flex justify-content-evenly align-items-baseline flex-wrap">'+
                            '<div>'+
                                '<h1 class="pt-3">Ingredients</h1>'+
                                '<ul class="w-100">'+cleean_list(x['ingredients'])+'</ul>'+
                            '</div>'+
                            '<div>'+
                                '<h1 class="pt-3">Instructions</h1>'+
                                '<ul class="w-100">'+cleean_list(x['instructions'])+'</ul>'+
                            '</div>'
                        '</div>'+
                    '</div>'+
                '</div>';
    }
}

var ddata;
function l(){
    if(window.location.href.split("#")[1]){
        console.log(window.location.href.split("#")[1])
        upload(ddata[window.location.href.split("#")[1]], document.getElementById("r_holder__"), 'one')
    } else{
        upload(ddata, document.getElementById("r_holder__"), 'all')
    }
}

fetch("index.json")
.then((res)=>res.json())
.then(data=>{
    ddata=data;
    l();
})

var nav_links = document.querySelector("nav").children[1].children[0];

nav_links.innerHTML="";

nav_links.innerHTML=
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a style="cursor:pointer;" href="/index.html" class="nav-link">Home</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a href="/recipes/" class="nav-link">Recipe</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a href="/#read-more" class="nav-link">Facts</a>'+
'</li>'+
'<li class="nav-item" style="font-size: 1.3rem;">'+
    '<a target="_blank" href="mailto:lowbudgetdawah@gmail.com" class="nav-link">Contact</a>'+
'</li>';