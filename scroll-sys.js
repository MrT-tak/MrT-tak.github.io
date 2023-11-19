// MrT © 2023
// CC BY-NC 4.0
// Licensed under the Creative Commons Non-Commercial License (the "License");

//code fixed with the help from chatGPT

//MODERN BUT NO OFFSET CODE HERE
// function scrollTo(DOMid){
//     document.getElementById(DOMid).scrollIntoView();
// }

// function getHash() {
//     var hash = window.location.hash.substr(1);
//     return hash
// }

// OLD CODE HERE
// -------------------------------------------------------------------------- \\
function scrollCode(element) {
    if (element === null) console.log("# is not stated"); return false

    var navbarHeightOffset = 0;
    if (element === "#") navbarHeightOffset = 800; //* 200 px *\\
    if (element === "#AboutMe") navbarHeightOffset = 0; //* 0 px *\\

    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById(element).getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top + navbarHeightOffset;

    window.scrollTo(0, offset);
}

function getHash() {
    var hash = window.location.hash.substr(1);
    return hash
}

scrollCode(getHash());
// \\------------------------------------------------------------------------ //