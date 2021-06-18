function cog() {
    var Time = new Date();
    var hours = Time.getHours();
    var mins = Time.getMinutes();
    var seconds =Time.getSeconds();
    var zone ="am";
    if(seconds<10){
        seconds="0"+seconds;
    }
    if(hours>11){
        zone="pm";

    }else{
        zone="am";
    }
    
    if(hours>12){
        hours=hours-12;
        if(hours<10){
            hours="0"+hours;
        }
    }
    if (mins<10){
        mins="0"+mins;
    }

    document.getElementById("clock").innerHTML= hours+ ":"+mins+ ":"+seconds + zone;
}

setInterval(cog, 1000)