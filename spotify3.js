// Initializing Variables
let songIndex = 1;
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('D:/HTML & CSS/songs(MP3)/1.mp3');
let seekBar = document.getElementById('seekBar');
let taylorSwift = document.getElementById("taylorSwift");
let previous = document.getElementById("previous");
let next = document.getElementById("next");



let songList = [{songName: "Mera AApki Kripa Se", filePath: "D:/HTML & CSS/songs(MP3)/1.mp3"},
{songName: "All You Had To Do Was Stay", filePath: "D:/HTML & CSS/songs(MP3)/2.mp3"},
{songName: "Love Story", filePath: "D:/HTML & CSS/songs(MP3)/3.mp3"},
{songName: "Shake It Off", filePath: "D:/HTML & CSS/songs(MP3)/4.mp3"},
{songName: "Blank Space", filePath: "D:/HTML & CSS/songs(MP3)/5.mp3"},
{songName: "Back To December", filePath: "D:/HTML & CSS/songs(MP3)/6.mp3"},
{songName: "Look What You Made Me Do", filePath: "D:/HTML & CSS/songs(MP3)/7.mp3"}]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    console.log(progress);
    seekBar.value = progress;
})
seekBar.addEventListener('change', ()=>{
    audioElement.currentTime = seekBar.value * audioElement.duration/100;
})

taylorSwift.addEventListener('click', ()=>{
    if(audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

previous.addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 7;
        audioElement.src = `D:/HTML & CSS/songs(MP3)/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        songIndex -= 1;
        audioElement.src = `D:/HTML & CSS/songs(MP3)/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})

next.addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 1;
        audioElement.src = `D:/HTML & CSS/songs(MP3)/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        songIndex += 1;
        audioElement.src = `D:/HTML & CSS/songs(MP3)/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})







console.log("Hello! This is Javascript.")