var player = document.getElementById('player');
var choice = function(a){return "stored/"+document.getElementById('episode').value+"."+a};

var playing = false;
var unloadplayer = Function("player.src='';document.getElementById('episode').value='0';");

async function loadtitle() {
  document.getElementById('episodename').innerText = await (await fetch(choice('txt'))).text();
}

function load() {
  playing=true;
  player.src = choice('mp4');
  play();
  loadtitle();
}

function play() {
  if(!playing) {
    load();
  } else {
    player.play();
  }
}

function pause() {
  player.pause();
}

const rewind = load;

function fullscreen() {
  if(document.fullscreen) {
    //
  } else if(document.fullscreenEnabled) {
    document.getElementById('main').requestFullscreen();
  } else {
    alert('Full screen is not supported.');
  }
}

function next() {
  //console.log('Episode ended!');
  if (Number(document.getElementById('episode').value) < 12) {
    document.getElementById('episode').value = String(
      Number(document.getElementById('episode').value) + 1
    );
    load();
  } else {unloadplayer();playing=false;}
  loadtitle();
}

function previous() {
  if (Number(document.getElementById('episode').value) > 1) {
    document.getElementById('episode').value = String(
      Number(document.getElementById('episode').value) - 1
    );
    load();
  } else {unloadplayer();playing=false;}
  loadtitle();
}

player.addEventListener("ended", next);