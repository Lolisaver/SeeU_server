var layer=5;
var sliderlayer=1;//會記住
var status=1;
//window.addEventListener("touchmove",function(e){detectscroll(e)}, false); s
window.addEventListener("scroll",function(e){detectscroll(e)}, false);

window.addEventListener('wheel',function(e){detectwheel(e)},false);
function detectscroll(e){

    var st = e.scrollTop();
    if (st > lastScrollTop){
       sliderlayer=sliderlayer+1;
        try {
        document.getElementById("block-"+sliderlayer.toString()).checked=true;
        }
        catch(err) {
        sliderlayer=sliderlayer-1;
        }
    } else {
      sliderlayer=sliderlayer-1;
        try {
        document.getElementById("block-"+sliderlayer.toString()).checked=true;
        }
        catch(err) {
        sliderlayer=sliderlayer+1;
        }
    }
    lastScrollTop = st;
}
function detectwheel(e){
 if(status==1)
 { 
    status=0;
    wDelta = e.deltaY < 0 ? 'down' : 'up';
    if(wDelta=='up')
    {
        sliderlayer=sliderlayer+1;
        try {
        document.getElementById("block-"+sliderlayer.toString()).checked=true;
        }
        catch(err) {
        sliderlayer=sliderlayer-1;
        }
    }  
    else if(wDelta=='down')
    {
        sliderlayer=sliderlayer-1;
        try {
        document.getElementById("block-"+sliderlayer.toString()).checked=true;
        }
        catch(err) {
        sliderlayer=sliderlayer+1;
        }
    }
    
    var node = this;
    setTimeout(function() {
    status=1;
    }, 1000)
 }    


}
function setsliderlayer(num){
    if(num<=layer&&num>0)
    {
        try {
        document.getElementById("block-"+num.toString()).checked=true;
        sliderlayer=num;
        }
        catch(err) {
        }
    }
}
