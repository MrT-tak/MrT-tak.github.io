//code from stackOverFlow. Full credit to the original author:Dave Burton
//url to the stackOverFlow:https://stackoverflow.com/questions/36921947/read-a-server-side-file-using-javascript

// Synchronously read a text file from the web server with Ajax
//
// The filePath is relative to the web page folder.
// Example:   myStuff = loadFile("Chuuk_data.txt");
//
// You can also pass a full URL, like http://sealevel.info/Chuuk1_data.json, but there
// might be Access-Control-Allow-Origin issues. I found it works okay in Firefox, Edge,
// or Opera, and works in IE 11 if the server is configured properly, but in Chrome it only
// works if the domains exactly match (and note that "xyz.com" & "www.xyz.com" don't match).
// Otherwise Chrome reports an error:
//
//   No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://sealevel.info' is therefore not allowed access.
//
// That happens even when "Access-Control-Allow-Origin *" is configured in .htaccess,
// and even though I verified the headers returned (you can use a header-checker site like
// http://www.webconfs.com/http-header-check.php to check it). I think it's a Chrome bug.
export function loadFile(filePath) {
    var result = null;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", filePath, false);
    xmlHttp.send();
    if (xmlHttp.status == 200) {
        result = xmlHttp.responseText;
    }
    return result;
}

