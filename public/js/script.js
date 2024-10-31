var x = 0;

function openNav() {
    if (x == 0) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("main").style.marginRight = "250px";
        x = 1;
    } else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("main").style.marginRight = "0";
        x = 0;
    }
}
  
  