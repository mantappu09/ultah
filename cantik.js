// AUDIO

const bgMusic = document.getElementById('bgMusic');
const voiceNote = document.getElementById('voiceNote');


// GET ELEMENTS

const hero = document.getElementById('hero');

const room1 = document.getElementById('room1');
const room2 = document.getElementById('room2');
const room3 = document.getElementById('room3');
const room4 = document.getElementById('room4');
const room5 = document.getElementById('room5');
const room6 = document.getElementById('room6');

const ending = document.getElementById('ending');


// LOCK ALL ROOMS

room1.style.display = 'none';
room2.style.display = 'none';
room3.style.display = 'none';
room4.style.display = 'none';
room5.style.display = 'none';
room6.style.display = 'none';
ending.style.display = 'none';


// START BUTTON

const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {

  bgMusic.play();

  room1.style.display = 'flex';

  room1.scrollIntoView({
    behavior:'smooth'
  });

});


// ROOM 1 VALIDATION

const room1Btn = document.getElementById('room1Btn');

room1Btn.addEventListener('click', () => {

  const answer = document
    .getElementById('room1Answer')
    .value
    .toLowerCase()
    .trim();

  if(answer === 'te'){

    room2.style.display = 'flex';

    room2.scrollIntoView({
      behavior:'smooth'
    });

  }else{

    alert('not quite ✨');

  }

});


// ROOM 2 VALIDATION

const room2Btn = document.getElementById('room2Btn');

room2Btn.addEventListener('click', () => {

  const answer = document
    .getElementById('room2Answer')
    .value
    .toLowerCase()
    .trim();

  if(answer === 'ungu'){

    room3.style.display = 'flex';

    room3.scrollIntoView({
      behavior:'smooth'
    });

  }else{

    alert('try again ✨');

  }

});


// ROOM 3 VALIDATION

const room3Btn = document.getElementById('room3Btn');

room3Btn.addEventListener('click', () => {

  const answer = document
    .getElementById('room3Answer')
    .value
    .toLowerCase()
    .trim();

  if(
    answer.includes('kamu perempuan yang hebat')
  ){

    room4.style.display = 'flex';

    room4.scrollIntoView({
      behavior:'smooth'
    });

  }else{

    alert('almost ✨');

  }

});


// ROOM 4

const room4Btn = document.querySelector('#room4 .next-room');

room4Btn.addEventListener('click', () => {

  room5.style.display = 'flex';

  room5.scrollIntoView({
    behavior:'smooth'
  });

});


// ROOM 5

const room5Btn = document.querySelector('#room5 .next-room');

room5Btn.addEventListener('click', () => {

  room6.style.display = 'flex';

  room6.scrollIntoView({
    behavior:'smooth'
  });

});


// FINAL PASSWORD

const passwordBtn = document.getElementById('passwordBtn');

passwordBtn.addEventListener('click', () => {

  const password = document
    .getElementById('passwordInput')
    .value
    .toLowerCase()
    .trim();

  if(password === 'ardiansyah'){

    ending.style.display = 'flex';

    ending.scrollIntoView({
      behavior:'smooth'
    });

  }else{

    alert('try again ✨');

  }

});


// PLAY VOICE NOTE

const playVN = document.getElementById('playVN');

playVN.addEventListener('click', () => {

  // pause background music
  bgMusic.pause();

  // play voice note
  voiceNote.play();

});

voiceNote.addEventListener('ended', () => {

  bgMusic.play();

});