// let audioElement = new Audio('songs/1.mp3');
// why we are using new ?? 


console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
//audioElement is object name
// Audio is class name

let masterPlay = document.getElementById('masterPlay');
// console.log(masterPlay);
{/* <i class="far fa-3x fa-play-circle" id="masterPlay"></i> */}

let myProgressBar = document.getElementById('myProgressBar');
{/* <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"></input> */}

let gif = document.getElementById('gif');
// {/* <img src="playing.gif" width="42px" alt="" id="gif">

let masterSongName = document.getElementById('masterSongName');
{/* <span id="masterSongName">Warriyo - Mortals [NCS Release]</span> */}

let songItems = Array.from(document.getElementsByClassName('songItem'));
// <div class="songItemContainer">
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="1" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="2" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="3" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="4" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="5" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="6" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="7" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="8" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// <div class="songItem">
//     <img alt="1">
//     <span class="songName">Let me Love You</span>
//     <span class="songlistplay"><span class="timestamp">05:34 <i id="9" class="far songItemPlay fa-play-circle"></i> </span></span>
// </div>
// </div>


let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

//changing song name below means near play button left side and and uppar harr ekk song mai Image daal raha huu
    songItems.forEach((element, i)=>{ 
    // let x1 = element.getElementsByTagName("img").src;
    // console.log(x1);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // console.log(songs[0].coverPath);
    // <img alt="1">
    //we have created object of songs upwards so over here I am trying to access songs coverpath using songs[i].coverpath; like for eg output of songs[0].coverpath is "covers/1.jpg"
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
//  <span class="songName">Let me Love You</span>
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        if(audioElement.paused){
		element.classList.remove('fa-pause-circle');
        	element.classList.add('fa-play-circle');
	}
	else{
        	audioElement.pause();
        	element.classList.remove('fa-pause-circle');
        	element.classList.add('fa-play-circle');
    }
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})