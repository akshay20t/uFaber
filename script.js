console.log(document.body.clientWidth);

function openNav() {
    if(document.body.clientWidth < 426){
        document.getElementById("mySidenav").style.width = "312px";
    }
    else{

        document.getElementById("mySidenav").style.width = "456px";
        // document.body.classList.add("boxshadow");
    }
    document.getElementById("whole").style.opacity="0.3";
    document.getElementById("ll").style.opacity="0.3";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("whole").style.opacity="1";
    document.getElementById("ll").style.opacity="1";
}
