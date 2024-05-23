var myContent = document.getElementById("page_content");
var aboutContent = document.getElementById("about_content");
function contentChange(){
    myContent.innerHTML = "This is About page";
}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }