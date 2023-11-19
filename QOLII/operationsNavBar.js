// QOLII Library for my website. MrT-tak.github.io. Copyrighted with CC-BY-NC license.
// Useable code for all bootstrap users with the navbar menu setup like the example code from bootstrap and setup correctly
const navbarMenu = document.getElementById("navbarHeader")
var verbose = true

function open () {
    navbarMenu.classList.remove("hidden")
    if(verbose) console.log("completed opening navbar menu in QOLII/Navbar");
}

function close () {
    navbarMenu.classList.add("hidden")
    if (verbose) console.log("completed closing navbar menu in QOLII/Navbar");
}
