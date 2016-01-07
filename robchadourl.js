var url, newurl;
url = prompt ("Please paste url");
newurl = url.replace ("[fe80::211:32ff:fe4a:870f]:5000/", "QuickConnect.to/robchado/");
window.prompt("Copy to Clipboard: Ctrl+C, Enter", newurl);
