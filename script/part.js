var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "path/to/bootstrap-icons.css";
document.head.appendChild(link);

// amazon
function go_amazon(x){
    var a = document.createElement("a");
    a.target ="_blank";
    a.href = x;
    a.click(); 
}

function place_amazon(x){
    var d = document.createElement("div");
    d.addEventListener("click", ()=>{
        go_amazon(amazondata[x].url);
    })
    d.classList.add("container-fluid", "d-flex", "justify-content-evenly", "align-items-center","bg-white", "shadow-lg", "text-black", "cursor-pointer");
    
    var dd = document.createElement("div");
    dd.classList.add("p-2")
    dd.innerHTML += '<img style="width: 8rem;heigth: auto;" src="/style/img/amazon/'+amazondata[x].img+'">';
    d.appendChild(dd);

    var ddd = document.createElement("div");
    var h = document.createElement("h2");
    h.innerHTML = amazondata[x].name;
    ddd.appendChild(h)

    d.appendChild(ddd);
    document.getElementById("holder__").appendChild(d);
}

var amazondata = []
fetch("/am.json")
.then(res=>res.json())
.then(d=>{
    amazondata = d;
    if(location.href.split("/").length > 4){
        place_amazon(Math.floor(Math.random()*amazondata.length))
    }
})
