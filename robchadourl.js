var url, newurl;
url = prompt ("Please paste url");
newurl = url.replace ("http:\/\/192.168.1.46:5000/", "http://QuickConnect.to/robchado/");
window.prompt("Copy to Clipboard: Ctrl+C, Enter", newurl);