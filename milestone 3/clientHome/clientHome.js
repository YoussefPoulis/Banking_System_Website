function togglePopoverreminderes() {
  var remindersPopover = document.getElementById("remindersPopover");
  var notificationsPopover = document.getElementById("notificationsPopover");

  if (remindersPopover.style.display === "block") {
    remindersPopover.style.display = "none";
  } else {
    remindersPopover.style.display = "block";
    notificationsPopover.style.display = "none"; // Close notifications popover
  }
}

function togglePopovernotification() {
  var remindersPopover = document.getElementById("remindersPopover");
  var notificationsPopover = document.getElementById("notificationsPopover");

  if (notificationsPopover.style.display === "block") {
    notificationsPopover.style.display = "none";
  } else {
    notificationsPopover.style.display = "block";
    remindersPopover.style.display = "none"; // Close reminders popover
  }
}

const xValues = ["July","Aug","Sept","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: "deposit",
      data: [10000,11400,10600,10600,10700,11100,13300,22100,50000,40000,50000,55000],
      borderColor: "red",
      fill: false
    },{
      label: "savings",
      data: [16000,17000,17000,19000,20000,27000,40000,50000,60000,70000,65000,60000],
      borderColor: "green",
      fill: false
    },{
      label: "current",
      data: [3000,7000,20000,50000,60000,40000,35000,25000,20000,20000,15000,10000],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {  
    responsive: true,
    maintainAspectRatio: false
  }
});

if (localStorage.getItem('isBlind')) {
  speechToText();
}


function sayWords(msgText) {
  if (!localStorage.getItem('isBlind')) {
      return;
  }
  if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = msgText;
      speechSynthesis.speak(msg);
  }
}

function stopTextToSpeech() {
  if ('speechSynthesis' in window) {
      
      if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
      }
  }
}