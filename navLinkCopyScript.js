var URLloactionhref = new URL(window.location.href);
var port_number = URLloactionhref.port;

function copyToClipboard(textThatIsPlain){
    const type = "text/plain";
    const blob = new Blob([textThatIsPlain], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        () => {
            /* success */
            console.log("Copied text to clipboard! yayay! \n copied text:" + textThatIsPlain)
            return true
        },
        () => {
            /* failure */
            console.error("Couldn't copy text to clipboard. oh noo. \n copied text:" + textThatIsPlain)
            return false
        }
    );
}

function copyNavLink(DOMId){
    return copyToClipboard(`${window.location.protocol}//${window.location.hostname}:${port_number}${window.location.pathname}#${DOMId}`);
}