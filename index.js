const openTab = () => {
    window.open(
        "https://28tech.com.vn/", "28tech",
        "_blank",
        "width=window.innerWidth, height=window.innerHeight, left=500, top=500"
    );
};

setInterval(()=>{
    const time = document.getElementById("time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    // if(hours > 12){
    //     hours = hours - 12;
    //     day_night = "PM";
    // }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    // + " " + day_night
    time.textContent = hours + ":" + minutes + ":" + seconds;
});