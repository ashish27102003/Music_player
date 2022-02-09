const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "1",
        title:"Hanuman chalisha",
        artist:"Gulshan kumar",
    },
    {
        name: "2",
        title:"Rait Zara si Atrangi",
        artist:"Arjit singh",
    },
    {
        name: "3",
        title:"Soch liya",
        artist:"Arjit singh",
    },
];

let isPlaying = false; 
// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// for pause function

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace( "fa-pause" , "fa-play");
    img.classList.remove("anime");
};
 
play.addEventListener('click' , () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name +".mp3";
    img.src = "images/" + songs.name +".jpg";
};
songIndex = 2;
//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};




next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);