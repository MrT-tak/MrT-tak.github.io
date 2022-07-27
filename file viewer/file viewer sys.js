


function getParameter (name) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(name);
}

let fileType = getParameter("filetype")

if( fileType!= null) {
    if(fileType === "md") {
        
    }
}