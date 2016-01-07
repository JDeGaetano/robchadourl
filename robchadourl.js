var url, newurl;
url = prompt ("Please paste url");
newurl = url.replace ("http:\/\/[fe80::211:32ff:fe4a:870f]/", "http://QuickConnect.to/robchado/");
window.prompt("Copy to Clipboard: Ctrl+C, Enter", newurl);
