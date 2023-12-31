function validateField(fieldName) {
    var fieldValue = document.getElementById(fieldName).value;
    if (!fieldValue) {
        var fieldInput = document.getElementById(fieldName);
        fieldInput.classList.add('errorInput');
        var errorMessageElement = document.createElement('p');
        errorMessageElement.classList.add('errormessage');
        errorMessageElement.innerHTML = "Please fill in the " + fieldName + " field";
        var existingErrorMessage = fieldInput.parentNode.querySelector('.errormessage');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
        fieldInput.parentNode.insertBefore(errorMessageElement, fieldInput.nextSibling);
        return false;
    } else {
        var fieldInput = document.getElementById(fieldName);
        fieldInput.classList.remove('errorInput');
        var existingErrorMessage = fieldInput.parentNode.querySelector('.errormessage');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
    }
    return true;
}



 

function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting and page reload


    var isValidUsername = validateField('username');
    var isValidPassword = validateField('password');
     var password=document.getElementById('password').value;
    var username= document.getElementById('username').value;
    var isValidClient=false;
    var isValidBanker=false;
    var isValidAdmin=false;
    if (!isValidUsername) {
        sayWords("Please fill in the username field");
        // speechToText();
        return false;
    } else if (
        (username.toLowerCase() === 'client' ||
        username.toUpperCase() === 'CLIENT')&&(password.toLowerCase() === 'client' ||
        password.toUpperCase() === 'CLIENT')
  ) {
    isValidClient = true;
  } else if (
    (username.toLowerCase() === 'banker' ||
    username.toUpperCase() === 'BANKER')&&(password.toLowerCase() === 'banker' ||
    password.toUpperCase() === 'BANKER')
  ) {
    isValidBanker = true;
  } else if (
    (username.toLowerCase() === 'admin' ||
    username.toUpperCase() === 'ADMIN')&&(password.toLowerCase() === 'admin' ||
    password.toUpperCase() === 'ADMIN')
  ) {
    isValidAdmin = true;
  } else {
    sayWords("Wrong username or password");
    var usernameInput = document.getElementById('username');
    usernameInput.classList.add('errorInput');
    var errorMessageElement = document.createElement('p');
    errorMessageElement.classList.add('errormessage');
    errorMessageElement.innerHTML = "Wrong username or password";
    var existingErrorMessage = usernameInput.parentNode.querySelector('.errormessage');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }
    usernameInput.parentNode.insertBefore(errorMessageElement, usernameInput.nextSibling);
    return false;
  }


    if (!isValidPassword) {
        sayWords("Please fill in the password field");
        // speechToText();
        return false;
    }
   

   
   
    var password = document.getElementById('password').value;
    var minLength = 4;
    var maxLength = 32;

    if (password && password.length < minLength || password.length > maxLength) {
        sayWords("Password length should be between 4 and 32 characters");
        var passwordInput = document.getElementById('password');
        passwordInput.classList.add('errorInput');
        var errorMessageElement = document.createElement('p');
        errorMessageElement.classList.add('errormessage');
        errorMessageElement.innerHTML = "Password length should be between 4 and 32 characters";
        var existingErrorMessage = passwordInput.parentNode.querySelector('.errormessage');
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
        passwordInput.parentNode.insertBefore(errorMessageElement, passwordInput.nextSibling);
        return false;
    }
    // if (!checkbox) { // Check if the checkbox is not checked
    //     var checkboxInput = document.getElementById('checkbox');
    //     var passwordInput = document.getElementById('password');
    //     var existingErrorMessage = passwordInput.parentNode.querySelector('.errormessage');
    //     if (existingErrorMessage) {
    //         existingErrorMessage.remove();
    //     }
    //     var errorMessageElement = document.createElement('p');
    //     errorMessageElement.classList.add('errormessage');
    //     errorMessageElement.innerHTML = "You cannot login without agreeing to the terms and conditions";
    //     var existingErrorMessage1 = checkboxInput.parentNode.querySelector('.errormessage');
    //     if (existingErrorMessage1) {
    //         existingErrorMessage1.remove();
    //     }
    //     checkboxInput.parentNode.insertBefore(errorMessageElement, checkboxInput.nextSibling);
    //     return false;
    // }

    if(isValidClient===true){
        window.location.href = '../clientHome/clientHome.html';
    //window.open("../clientHome/clientHome.html");
    //window.close("../login/loginPage.html");

    return true;
}else if(isValidBanker===true){
    window.location.href = '../Banker/BankerHomePage.html';
    // window.open("../Banker/BankerHomePage.html");
    // window.close("../login/loginPage.html");

    return true;
}else if(isValidAdmin===true) {
    window.location.href = '../adminHome/adminHome.html';
    // window.open("../adminHome/adminHome.html");
    // window.close("../login/loginPage.html");

    return true;
}
else{
    return;
}
}


function myregister() {
    window.open("../registerPage/register.html", "_self");
    window.close("../login/loginPage.html");
    return true;
}



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

function speechToText() {
    // Check if the browser supports the SpeechRecognition API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // Create a new instance of SpeechRecognition
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        // Start speech recognition
        recognition.start();

        // Event fired when speech recognition starts
        recognition.onstart = ()=> {
            document.getElementById("sound-input").style.display = "inline-block";
            console.log("Speech recognition started");
        };

        // Event fired when speech recognition receives a result
        recognition.onresult = (event) => {
            var transcript = event.results[event.results.length - 1][0].transcript;
            console.log(transcript);


            // Regular expressions to match username and password patterns
            var usernameRegex = /(?:the\s)?user name\s(?:is|should\sbe)?\s(\w+)/i;
            var passwordRegex = /(?:the\s)?password\s(?:is|should\sbe)?\s(\w+)/i;


            // Extract username and password using regular expressions
            var usernameMatch = transcript.match(usernameRegex);
            var passwordMatch = transcript.match(passwordRegex);

            if (usernameMatch && usernameMatch[1]) {
                var username = usernameMatch[1];
                var userNameField = document.getElementById("username");
                userNameField.value = username;
            }

            if (passwordMatch && passwordMatch[1]) {
                var password = passwordMatch[1];
                document.getElementById("password").value = password;
            }

        };

        // Event fired when speech recognition ends
        recognition.onend = () => {
            document.getElementById("sound-input").style.display = "none";
            console.log("Speech recognition ended");
        };

        // Event fired when an error occurs in speech recognition
        recognition.onerror = function (event) {
            console.error("Speech recognition error:", event.error);
        };
    }
}