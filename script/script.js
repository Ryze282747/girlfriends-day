//buttons
const dateTimeBtn = document.getElementById("date-time-btn")
const notesBtn = document.getElementById("notes-btn")
const galleryBtn = document.getElementById("gallery-btn")
const letterBtn = document.getElementById("letter-btn")

//containers
const dateTimeCntr = document.getElementById("dt-container")
const notesCntr = document.getElementById("notes-container")
const galleryCntr = document.getElementById("gallery-container")
const letterCntr = document.getElementById("letter-container")

dateTimeCntr.style.display = "block"
notesCntr.style.display = "none"
galleryCntr.style.display = "none"
letterCntr.style.display = "none"

//controls
function showDateTime(){
  dateTimeCntr.style.display = "block"
  notesCntr.style.display = "none"
  galleryCntr.style.display = "none"
  letterCntr.style.display = "none"
}
function showNotes(){
  dateTimeCntr.style.display = "none"
  notesCntr.style.display = "block"
  galleryCntr.style.display = "none"
  letterCntr.style.display = "none"
}
function showGallery(){
  dateTimeCntr.style.display = "none"
  notesCntr.style.display = "none"
  galleryCntr.style.display = "block"
  letterCntr.style.display = "none"
}
function showLetter(){
  dateTimeCntr.style.display = "none"
  notesCntr.style.display = "none"
  galleryCntr.style.display = "none"
  letterCntr.style.display = "block"
}

function test(e){
  if (e.target.classList["0"] != "actv-btn"){
    e.target.classList.replace("not-actv-btn", "actv-btn")
    e.target.disabled = true
    if (e.target.value == "dt"){
      notesBtn.classList.replace("actv-btn", "not-actv-btn")
      galleryBtn.classList.replace("actv-btn", "not-actv-btn")
      letterBtn.classList.replace("actv-btn", "not-actv-btn")
      notesBtn.disabled = false
      galleryBtn.disabled = false
      letterBtn.disabled = false
      showDateTime()
    }
    if (e.target.value == "notes"){
      dateTimeBtn.classList.replace("actv-btn", "not-actv-btn")
      galleryBtn.classList.replace("actv-btn", "not-actv-btn")
      letterBtn.classList.replace("actv-btn", "not-actv-btn")
      dateTimeBtn.disabled = false
      galleryBtn.disabled = false
      letterBtn.disabled = false
      showNotes()
    }
    if (e.target.value == "gallery"){
      notesBtn.classList.replace("actv-btn", "not-actv-btn")
      dateTimeBtn.classList.replace("actv-btn", "not-actv-btn")
      letterBtn.classList.replace("actv-btn", "not-actv-btn")
      notesBtn.disabled = false
      dateTimeBtn.disabled = false
      letterBtn.disabled = false
      showGallery()
    }
    if (e.target.value == "letter"){
      notesBtn.classList.replace("actv-btn", "not-actv-btn")
      galleryBtn.classList.replace("actv-btn", "not-actv-btn")
      dateTimeBtn.classList.replace("actv-btn", "not-actv-btn")
      notesBtn.disabled = false
      galleryBtn.disabled = false
      dateTimeBtn.disabled = false
      showLetter()
    }
  }
}
dateTimeBtn.addEventListener("click", test)
notesBtn.addEventListener("click", test)
galleryBtn.addEventListener("click", test)
letterBtn.addEventListener("click", test)

//date time
const startDate = new Date('2025-03-26T00:00:00');

function updateTimer() {
  const currentDate = new Date();
  const difference = currentDate - startDate;

  let seconds = Math.floor(difference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

//journey message
const journeyBtn = document.getElementById("journey-btn");
const journeyMsgCntr = document.getElementById("journey-msg-container");

journeyMsgCntr.classList.add("hidden"); // Initially hide the container using a class

function showCntr() {
  journeyMsgCntr.classList.toggle("hidden");
}

journeyBtn.addEventListener("click", showCntr);
