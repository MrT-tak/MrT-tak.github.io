function scrollCode(element) {
    if (element === null) return console.log("# is not stated");
        
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById(element).getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;

    window.scrollTo(0, offset);
}

function getHash() {
    var hash = window.location.hash.substr(1);
    return hash
}

scrollCode(getHash());