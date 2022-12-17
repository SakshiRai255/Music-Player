let songs = [
  {
    name: "Aankhon Mein Teri Om Shanti Om",
    title: "Ankhon Me Teri",
    Artist: "Vishal Shekhar",
    img: "aankho me teri",
  },
  {
    name: "Aaj Din Chadeya",
    title: "Aaj Din Chadeya",
    Artist: "Rahat Fateh Ali Khan",
    img: "din chadhiye",
  },
  {
    name: "Aaj Unse Milna Hai",
    title: "Aaj Unse Milna",
    Artist: "Shantanu Mukherjee",
    img: "Aaj unse milna",
  },
  {
    name: "Aa To Sahi",
    title: "Aa To Sahi",
    Artist: "Meet Bros, Neha Kakkar",
    img: "Aa To Sahi",
  },
];

let audio = document.getElementById("audio");
let img = document.getElementById("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

//  Play Song Function

const playMusic = () => {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
  img.classList.add("animation");
};

// Pause Song Function

const pauseMusic = () => {
  audio.pause();
  play.style.display = "block";
  pause.style.display = "none";
  img.classList.remove("animation");
};

// Store Song Function

const storeSongs = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.Artist;
  audio.src = "music/" + songs.name + ".mp3";
  img.src = "img/" + songs.img + ".jpg";
};

songIndex = 0;

// Next Song Function

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  storeSongs(songs[songIndex]);
  playMusic();
};
next.addEventListener("click",nextSong);

// previous Song Function

const  prevSong = () => {
  songIndex = (songIndex - 1 + songs.length)%songs.length;
  storeSongs(songs[songIndex]);
  playMusic();
};

previous.addEventListener("click", prevSong);
