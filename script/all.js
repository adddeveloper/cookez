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

function upload(x){
    x.forEach(e=>{
        holder.innerHTML+=
    '<div onclick="go(\''+e.url+'\')" style="background-image: url(/style/img/'+e.img+');" class="crd">'+
        '<img src="/style/img/'+e.img+'"></img>'+
        '<div>'+
                '<h1>'+capitalizeFirstLetter(e.title)+'</h1>'+
                '<p>'+e.description+'</p>'+
        '</div>'+
    '</div>';
    })
}
url.forEach(e=>{
    fetch(e)
    .then((res)=>res.json())
    .then(data=>{
        upload(data)
    })
});


var t = document.getElementById("ttitle");
var title = document.querySelector("title");
title.innerHTML = t.innerHTML;