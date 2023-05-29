//-------- Pay Bill ---------//
function myFunc1() {

  let accountNumber = document.getElementById("accountNumber").value
  let amount = document.getElementById("amount").value
  let recieverName = document.getElementById("recieverName").value

  if (accountNumber !== "" && amount !== "" && recieverName !== "") {

    alert("Succesfull");
    saywords("successful");
    window.open("../clientHome/clientHome.html");
    window.close("../Bills/PayBill.html");


  }
  else {
    sayWords("Invalid data");
    alert("Invalid Data");

  }

}


//-------- Make Transfer ---------//

function myFunc2() {

  let senderAccountNumber = document.getElementById("senderAccountNumber").value
  let recieverAccountNumber = document.getElementById("recieverAccountNumber").value
  let amount = document.getElementById("amount").value
  let recieverName = document.getElementById("recieverName").value
  let bankName = document.getElementById("bankName").value
  let purpose = document.getElementById("purpose").value



  if (senderAccountNumber !== "" && recieverAccountNumber !== "" && amount !== "" && recieverName !== "" && bankName !== "" && purpose !== "") {

    alert("Succesfull");
    saywords("successful");
    window.open("../clientHome/clientHome.html");
    window.close("../Tranfers/makeTransfer.html");


  }
  else {
    sayWords("Invalid data");
    alert("Invalid Data");

  }

}



//-------- Make Transfer Abroad ----------/
function myFunc3() {

  let senderAccountNumber = document.getElementById("senderAccountNumber").value
  let ibanNumber = document.getElementById("ibanNumber").value
  let amount = document.getElementById("amount").value
  let bankName = document.getElementById("bankName").value
  let purpose = document.getElementById("purpose").value



  if (senderAccountNumber !== "" && ibanNumber !== "" && amount !== "" && bankName !== "" && purpose !== "") {
    sayWords("Succesfull");
    alert("Succesfull");
    window.open("../clientHome/clientHome.html");
    window.close("../Tranfers/makeTransferAbroad.html");


  }
  else {
    sayWords("invalid data")
    alert("Invalid Data");

  }

}

//-------- Adding Bill ----------/
// add the next 2 lines (make the id of the html button alert-id)
const button = document.getElementById("alert-id");
button.addEventListener("click", myFunc4, false);

function myFunc4(event) {
  // add the next line
  event.preventDefault();
        
  let accountNumber = document.getElementById("accountNumber").value
  let amount = document.getElementById("amount").value
  let recieverName = document.getElementById("recieverName").value

  if (accountNumber !== "" && amount !== "" && recieverName !== "") {
    // add the next 4 lines
    Swal.fire({
      title: 'succesfull!',
      icon: 'success',
      confirmButtonColor: '#850F0F'
    })
    sayWords("succesfull");
    // remove the next 2 lines
    // window.open("../clientHome/clientHome.html");
    // window.close("../Bills/AddBill.html");
  }
  else {
    // add the next 4 lines
    Swal.fire({
      title: 'invalid data!',
      icon: 'error',
      confirmButtonColor: '#850F0F'
    })
    sayWords("invalid data");
  }

}
if (localStorage.getItem('isBlind')) {
  const url = window.location.href;
  if (url.includes("PayBill")) {
    // The word "PayBill" is in the URL.
    speechToTextPayBill();
  }
  else if(url.includes("AddBill")){
    speechToTextAddBill();
  }
  else if(url.includes("makeTransferAbroad")){
    speechToTextMakeTransferAbroad();
  }
  else if(url.includes("makeTransfer")){
    speechToTextMakeTransfer();
  }
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

function speechToTextPayBill() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.start();
    recognition.onstart = () => {
      // document.getElementById("sound-input").style.display = "inline-block";
      console.log("Speech recognition started");
    };
    recognition.onresult = (event) => {
      var transcript = event.results[event.results.length - 1][0].transcript;
      
      console.log(transcript);
      // Regular expressions to match username and password patterns
      var senderaccountnumberRegex = /(?:the\s)?account number\s(?:is|should\sbe)?\s(\d+(\.\d+)?)/i;
      var recievernameRegex = /(?:the )?receiver (?:name )?is (\w+\s\w+)/i;
      var typeRegex = /(?:the\s)?type\s(?:is|should\sbe)?\s(\w+)/i;
      var currencyRegex = /(?:the\s)?currency\s(?:is|should\sbe)?\s(\w+)/i;
      var amountRegex = /(?:the\s)?amount\s(?:is|should\sbe)?\s(\d+(\.\d+)?)/i;

      // Extract username and password using regular expressions
      var senderaccountnumberMatch = transcript.match(senderaccountnumberRegex);
      var recievernameMatch = transcript.match(recievernameRegex);
      var typeMatch = transcript.match(typeRegex);
      var currencyMatch = transcript.match(currencyRegex);
      var amountMatch = transcript.match(amountRegex);

      if (senderaccountnumberMatch && senderaccountnumberMatch[1]) {
        var senderaccountnumber = senderaccountnumberMatch[1];
        var senderaccountnumberField = document.getElementById("accountNumber");
        senderaccountnumberField.value = senderaccountnumber;
      }

      if (recievernameMatch && recievernameMatch[1]) {
        var recievername = recievernameMatch[1];
        var recievernameField = document.getElementById("recieverName");
        recievernameField.value = recievername;
      }
      if (typeMatch && typeMatch[1]) {
        var type = typeMatch[1];
        var typeField = document.getElementById("validationCustom04");
        typeField.value = type;
      }
      if (currencyMatch && currencyMatch[1]) {
        var currency = currencyMatch[1];
        var currencyField = document.getElementsByClassName("currency")[0];
        currencyField.value = currency;
      }
      if (amountMatch && amountMatch[1]) {
        var amount = amountMatch[1];
        var amountField = document.getElementById("amount");
        amountField.value = amount;
      }

    };

    // Event fired when speech recognition ends
    recognition.onend = () => {
      // document.getElementById("sound-input").style.display = "none";
      console.log("Speech recognition ended");
    };

    // Event fired when an error occurs in speech recognition
    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  }
}
function speechToTextAddBill() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.start();
    recognition.onstart = () => {
      // document.getElementById("sound-input").style.display = "inline-block";
      console.log("Speech recognition started");
    };
    recognition.onresult = (event) => {
      var transcript = event.results[event.results.length - 1][0].transcript;
      
      console.log(transcript);
      // Regular expressions to match username and password patterns
      var accountnumberRegex = /(?:the\s)?account number\s(?:is|should\sbe)?\s(\d+)/i;
      var recievernameRegex = /(?:the )?receiver (?:name )?is (\w+\s\w+)/i;
      var typeRegex = /(?:the\s)?type\s(?:is|should\sbe)?\s(\w+)/i;
      var currencyRegex = /(?:the\s)?currency\s(?:is|should\sbe)?\s(\w+)/i;
      var amountRegex = /(?:the\s)?amount\s(?:is|should\sbe)?\s(\d+)/i;
      var repeatRegex= /(?:the\s)?repeat\s(?:is|should\sbe\s)?(\w+\s\w+)/i;

      // Extract username and password using regular expressions
      var accountnumberMatch = transcript.match(accountnumberRegex);
      var recievernameMatch = transcript.match(recievernameRegex);
      var typeMatch = transcript.match(typeRegex);
      var currencyMatch = transcript.match(currencyRegex);
      var amountMatch = transcript.match(amountRegex);
      var repeatMatch = transcript.match(repeatRegex);

      if (accountnumberMatch && accountnumberMatch[1]) {
        var accountnumber = accountnumberMatch[1];
        var accountnumberField = document.getElementById("accountNumber");
        accountnumberField.value = accountnumber;
      }

      if (recievernameMatch && recievernameMatch[1]) {
        var recievername = recievernameMatch[1];
        var recievernameField = document.getElementById("recieverName");
        recievernameField.value = recievername;
      }
      if (typeMatch && typeMatch[1]) {
        var type = typeMatch[1];
        var typeField = document.getElementById("validationCustom04");
        typeField.value = type;
      }
      if (currencyMatch && currencyMatch[1]) {
        var currency = currencyMatch[1];
        var currencyField = document.getElementsByClassName("currency")[0];
        currencyField.value = currency;
      }
      if (amountMatch && amountMatch[1]) {
        var amount = amountMatch[1];
        var amountField = document.getElementById("amount");
        amountField.value = amount;
      }
      if (repeatMatch && repeatMatch[1]) {
        var repeat = repeatMatch[1];
        var repeatField = document.getElementsByClassName("repeat")[0];
        repeatField.value = repeat;
      }


    };

    // Event fired when speech recognition ends
    recognition.onend = () => {
      // document.getElementById("sound-input").style.display = "none";
      console.log("Speech recognition ended");
    };

    // Event fired when an error occurs in speech recognition
    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  }
}
function speechToTextMakeTransferAbroad() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.start();
    recognition.onstart = () => {
      // document.getElementById("sound-input").style.display = "inline-block";
      console.log("Speech recognition started");
    };
    recognition.onresult = (event) => {
      var transcript = event.results[event.results.length - 1][0].transcript;
      
      console.log(transcript);
      // Regular expressions to match username and password patterns
      var accountnumberRegex = /(?:the\s)?account number\s(?:is|should\sbe)?\s(\d+)/i;
      var IBANnumberRegex=/(?:the\s)?number\s(?:is|should\sbe)?\s(\d+)/i;
      var bankNameRegex = /(?:the )?bank name\s(?:is|should\sbe)?\s(\w+)/i;
      var currencyRegex = /(?:the\s)?currency\s(?:is|should\sbe)?\s(\w+)/i;
      var amountRegex = /(?:the\s)?amount\s(?:is|should\sbe)?\s(\d+)/i;
      var purposeoftransferRegex= /(?:the )?purpose of transfer (?:name )?is (\w+\s\w+)/i;

      // Extract username and password using regular expressions
      var accountnumberMatch = transcript.match(accountnumberRegex);
      var IBANnumberMatch = transcript.match(IBANnumberRegex);
      var banknameMatch = transcript.match(bankNameRegex);
      var currencyMatch = transcript.match(currencyRegex);
      var amountMatch = transcript.match(amountRegex);
      var purposeoftransferMatch = transcript.match(purposeoftransferRegex);

      if (accountnumberMatch && accountnumberMatch[1]) {
        var accountnumber = accountnumberMatch[1];
        var accountnumberField = document.getElementById("senderAccountNumber");
        accountnumberField.value =accountnumber;
      }

      if (banknameMatch && banknameMatch[1]) {
        var bankname = banknameMatch[1];
        var banknameField = document.getElementById("bankName");
        banknameField.value =bankname;
      }
      if (IBANnumberMatch && IBANnumberMatch[1]) {
        var IBANnumber = IBANnumberMatch[1];
        var IBANnumberField = document.getElementById("ibanNumber");
        IBANnumberField.value =IBANnumber;
      }
      if (currencyMatch && currencyMatch[1]) {
        var currency = currencyMatch[1];
        var currencyField = document.getElementById("validationCustom04");
        currencyField.value =currency;
      }
      if (amountMatch && amountMatch[1]) {
        var amount = amountMatch[1];
        var amountField = document.getElementById("amount");
        amountField.value =amount;
      }
      if (purposeoftransferMatch && purposeoftransferMatch[1]) {
        var purposeoftransfer = purposeoftransferMatch[1];
        var purposeoftransferField = document.getElementById("purpose");
        purposeoftransferField.value = purposeoftransfer;
      }


    };

    // Event fired when speech recognition ends
    recognition.onend = () => {
      // document.getElementById("sound-input").style.display = "none";
      console.log("Speech recognition ended");
    };

    // Event fired when an error occurs in speech recognition
    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  }
}
function speechToTextMakeTransfer() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.start();
    recognition.onstart = () => {
      // document.getElementById("sound-input").style.display = "inline-block";
      console.log("Speech recognition started");
    };
    recognition.onresult = (event) => {
      var transcript = event.results[event.results.length - 1][0].transcript;
      
      console.log(transcript);
      // Regular expressions to match username and password patterns
      var senderaccountnumberRegex = /(?:the\s)?sender account number\s(?:is|should\sbe)?\s(\d+)/i;
      var recieveraccountnumberRegex = /(?:the\s)?reciever account number\s(?:is|should\sbe)?\s(\d+)/i;
      var recieverNameRegex = /(?:the )?reciever name\s(?:is|should\sbe)?\s(\w+)/i;
      var currencyRegex = /(?:the\s)?currency\s(?:is|should\sbe)?\s(\w+)/i;
      var amountRegex = /(?:the\s)?amount\s(?:is|should\sbe)?\s(\d+)/i;
      var purposeoftransferRegex= /(?:the )?purpose of transfer (?:name )?is (\w+\s\w+)/i;
      var typeRegex = /(?:the\s)?type \s(?:is|should\sbe)?\s(\w+)/i;
      var bankNameRegex = /(?:the )?bank name\s(?:is|should\sbe)?\s(\w+)/i;

      // Extract username and password using regular expressions
      var senderaccountnumberMatch = transcript.match(senderaccountnumberRegex);
      var recieveraccountnumberMatch = transcript.match(recieveraccountnumberRegex);
      var recieverNameRegex = transcript.match(recieverNameRegex);
      var currencyMatch = transcript.match(currencyRegex);
      var amountMatch = transcript.match(amountRegex);
      var purposeoftransferMatch = transcript.match(purposeoftransferRegex);
      var typeMatch = transcript.match(typeRegex);
      var banknameMatch = transcript.match(bankNameRegex);
     
      if (senderaccountnumberMatch && senderaccountnumberMatch[1]) {
        var senderaccountnumber = senderaccountnumberMatch[1];
        var senderaccountnumberField = document.getElementById("senderAccountNumber");
        senderaccountnumberField.value =senderaccountnumber;
      }

      if (recieveraccountnumberMatch && recieveraccountnumberMatch[1]) {
        var recieveraccountnumber = recieveraccountnumberMatch[1];
        var receiveraccountnumberField = document.getElementById("recieverAccountNumber");
        receiveraccountnumberField.value =recieveraccountnumber;
      }

      if (recieverNameRegex && recieverNameRegex[1]) {
        var recievername = recieverNameRegex[1];
        var recievernameField = document.getElementById("recieverName");
        recievernameField.value =recievername;
      }
      if (typeMatch && typeMatch[1]) {
        var type = typeMatch[1];
        var typeField = document.getElementsByClassName("type")[0];
         typeField.value =type;
      }
      if (currencyMatch && currencyMatch[1]) {
        var currency = currencyMatch[1];
        var currencyField = document.getElementsByClassName("currency")[0];
        currencyField.value =currency;
      }
      if (amountMatch && amountMatch[1]) {
        var amount = amountMatch[1];
        var amountField = document.getElementById("amount");
        amountField.value =amount;
      }
      if (purposeoftransferMatch && purposeoftransferMatch[1]) {
        var purposeoftransfer = purposeoftransferMatch[1];
        var purposeoftransferField = document.getElementById("purpose");
        purposeoftransferField.value = purposeoftransfer;
      }
      if (banknameMatch && banknameMatch[1]) {
        var bankname = banknameMatch[1];
        var banknameField = document.getElementById("bankName");
        banknameField.value =bankname;
      }


    };

    // Event fired when speech recognition ends
    recognition.onend = () => {
      // document.getElementById("sound-input").style.display = "none";
      console.log("Speech recognition ended");
    };

    // Event fired when an error occurs in speech recognition
    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  }
}
