function PingRemoteURL() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "https://your-serviceNow-URL", true);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(null)
};
setInterval(function(){PingRemoteURL()},100000);