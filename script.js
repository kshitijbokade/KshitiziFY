console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement=new Audio('songs/audio5.mp3');
let masterPlay = document.getElementById('myProgressBar');
let myProgressBar =document.getElementById('myProgressBar');

let songs = [
    {songName:"Eyy Bidda", filePath: "songs/audio1.mp3", coverPath: "cover1.jpg"},
    {songName:"Oh Antava Mava", filePath: "songs/audio2.mp3", coverPath: "cover2.jpg"},
    {songName:"Excuse", filePath: "songs/audio3.mp3", coverPath: "cover3.jpg"},
    {songName:"Raatan Lambiyan", filePath: "songs/audio4.mp3", coverPath: "cover4.jpg"},
    {songName:"Tip Tip", filePath: "songs/audio5.mp3", coverPath: "cover5.jpg"},
    {songName:"Chand Baaliyan", filePath: "songs/audio6.mp3", coverPath: "cover6.jpg"},
    {songName:"Doobey", filePath: "songs/audio7.mp3", coverPath: "cover7.jpg"},
    {songName:"Filhaal", filePath: "songs/audio8.mp3", coverPath: "cover8.jpg"},
    {songName:"Mann Bharrya 2.0 ", filePath: "songs/audio9.mp3", coverPath: "cover9.jpg"},
    {songName:"Ranjha", filePath: "songs/audio10.mp3", coverPath: "cover10.jpg"},
    {songName:"Jugnu", filePath: "songs/audio11.mp3", coverPath: "cover11.jpg"},

]

// audioElement.play();

// Handle play/pause click 
masterPlay.addEventListener('click',()=>{
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