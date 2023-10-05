window.addEventListener("beforeunload",function(e){
    document.getElementById("page-loading-space").className = "page-loading";
},false);
window.addEventListener("unload", function (e) {
    document.getElementById("page-loading-space").classList.remove("page-loading");
}, false);