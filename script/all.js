function go(x){
    var a = document.createElement("a")
    a.href = "/"+x;
    a.click();
}



var url = ['/10/10.json', '/5/5.json', '/3/3.json'];
var ddata=[];
var holder = document.getElementById("holder__");
function upload(x){
    x.forEach(e=>{
        holder.innerHTML+=
    '<div onclick="go(\''+e.url+'\')" style="background-image: url(/style/img/'+e.img+');" class="crd">'+
        '<img src="/style/img/'+e.img+'"></img>'+
        '<div>'+
                '<h1>'+e.title+'</h1>'+
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