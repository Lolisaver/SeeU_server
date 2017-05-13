var tag=0;
/*
var webpageArray = [
        "http://34.250.197.179/webplayer/webplayer.html?load=json/stand.json",
        "http://34.250.197.179/webplayer/webplayer.html?load=json/waving.json", 
        "http://34.250.197.179/webplayer/webplayer.html?load=json/squat.json",
        "http://34.250.197.179/webplayer/webplayer.html?load=json/jump.json"
      ];  
*/

var webpageArray = [
        "https://sketchfab.com/models/04f17226a0c64029a06a58302f5c534d/embed",
        "https://sketchfab.com/models/716ebeedf02a4535b154efb0cee76a6a/embed", 
        "https://sketchfab.com/models/0a3a49ad47b246fa8d4cdab38982cb9a/embed",
        "https://sketchfab.com/models/246907304c764b15b1057e0357a199ac/embed"
      ];

       
function modelchange(tag) {
    var iframe = document.getElementById("myframe"); 
    iframe.src = webpageArray[tag]; 
} 


