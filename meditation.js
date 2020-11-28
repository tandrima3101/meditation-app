const app = () =>{
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const video = document.querySelector(".vid-container video");
    const timer = document.querySelector(".timer");
    const timeSelect = document.querySelectorAll(".time-select button");
    const sound = document.querySelectorAll(".theme button");

     //specify song
     sound.forEach(element => {
        element.addEventListener("click",function(){
            song.src=this.getAttribute("data-sound");
            video.src=this.getAttribute("data-video");
            document.getElementById("play-button").src="play-icon.png";
        });
    });

    //play song
    play.addEventListener("click",() => 
    {
        checkplay(song);
    }
    );

    //specify time duration

    timeSelect.forEach(elements => {
        elements.addEventListener("click",function(){
        
            fakeDuration = this.getAttribute("data-time");
            timer.textContent=`${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
        });
        
    });

    //specific play and pause
    const checkplay = (song) => {
        if(song.paused){
            song.play();
            video.play();
            document.getElementById("play-button").src="pause-icon.png";
        }
        else{
            song.pause();
            video.pause();
            document.getElementById("play-button").src="play-icon.png";
        }
    }

    //ontime update
    song.ontimeupdate = () =>{
    let currentTime = song.currentTime;
    let elapsed = fakeDuration- currentTime;
    let seconds = Math.floor(elapsed%60);
    let minutes = Math.floor(elapsed/60);
    timer.textContent=`${minutes}:${seconds}`;

    if(currentTime>=fakeDuration)
    {
        song.pause();
        video.pause();
        song.currentTime=0;
        document.getElementById("play-button").src="play-icon.png";
    }
    }
}
app();