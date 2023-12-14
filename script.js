function playAll(songNumber){
    var audioElement=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName="Music/"+songNumber+".mp3";
    var currentRow=document.getElementById("song"+songNumber);

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="playbutton.png">';
        currentRow.classList.remove("highlight");
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="pausebutton.jpeg">';
        currentRow.classList.add("highlight");
    }

}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.paly();
        playBtn.innerHTML='<img src="pausebutton.jpeg">';

    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="playbutton.png">';
    }
}