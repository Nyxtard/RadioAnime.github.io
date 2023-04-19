const sources = [
  "https://dj91.hostingnuclear.com/8014/stream", // Radio Animex
  "https://cast.animenexusla.com/radio/8000/animenexus", // Radio Nexus
  "http://curiosity.shoutca.st:8019/stream", // Radio Vocaloid
  "https://azura12.instainternet.com/radio/8030/radio.mp3", // Radio Kawaii Anime
  "https://stream.zeno.fm/6bfysacxc6quv", //Radio Expreso

];

const labels = [
  [ "RadioAnimex", "https://www.radioanimex.com/" ],
  [ "Radio Nexus", "https://www.animenexusla.com/?fbclid=IwAR3RDaFpoJYGacFpKM_icj1nWJ7JSUL8uIWfiB8ZgeDv82YnxqpBViZQOPo" ],
  [ "Radio Vocaloid", "https://vocaloidradio.com/"],
  [ "Radio Kawaii Anime ", "https://kwii.xyz/viewforum.php?f=5&sid=d2a1959f072c6afe718cad32d76c47d9"],
  [ "Radio Expreso", " https://www.radioexpresolatino.com/"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
