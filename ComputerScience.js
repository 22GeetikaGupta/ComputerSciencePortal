function openNav() {
document.getElementById("mySidenav").style.display = "block"
document.getElementById("mybtn").onclick = closeNav;
document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.display = "none"
document.getElementById("mybtn").onclick = openNav;
document.getElementsByClassName("content")[0].style.marginLeft = "10px";
}

window.addEventListener('resize', function(){
document.getElementsByClassName("content")[0].removeAttribute("style");
if(window.innerWidth>600){
document.getElementById("mySidenav").removeAttribute("style");
}
});



