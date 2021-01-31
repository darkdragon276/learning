var main = function () {
    var the1 = document.getElementById("the1");
    document.getElementById("button").onclick = function () {
        the1.style.backgroundColor = "black";
        the1.style.display = "none";
    }

    var the2 = document.getElementById("the2");
    document.getElementById("off").onclick = function() {
        the2.setAttribute("src", "./img/pic_bulboff.gif");
    }
    document.getElementById("on").onclick = function() {
        the2.setAttribute("src", "./img/pic_bulbon.gif");
    }
    
}

main();