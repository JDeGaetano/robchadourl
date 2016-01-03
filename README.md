# robchadourl
Replaces URL for robert's NAS to quickconnect
Made easy by making use of http://mrcoles.com/bookmarklet/

var url, newurl;
url = prompt ("Please paste url");
newurl = url.replace ("http:\/\/192.168.1.46:5000/", "http://QuickConnect.to/robchado/");
window.prompt("Copy to Clipboard: Ctrl+C, Enter", newurl);

javascript:(function()%7Bvar%20url%2C%20newurl%3Burl%20%3D%20prompt%20(%22Please%20paste%20url%22)%3Bnewurl%20%3D%20url.replace%20(%22http%3A%5C%2F%5C%2F192.168.1.46%3A5000%2F%22%2C%20%22http%3A%2F%2FQuickConnect.to%2Frobchado%2F%22)%3Bwindow.prompt(%22Copy%20to%20Clipboard%3A%20Ctrl%2BC%2C%20Enter%22%2C%20newurl)%7D)()
