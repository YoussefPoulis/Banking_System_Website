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

    var isValidFullname = validateField('fullname');
    var isValidUsername = validateField('username');
    var isValidPassword = validateField('password');
    var isValidNationalID = validateField('nationalID');
    var isValidPhoneNumber = validateField('phoneNumber');
    var isValidEmail = validateField('email');
    var isValidAddress = validateField('address');
    var isValidDateBirth = validateField('dateBirth');
    
    if(!isValidFullname){
        sayWords("Please fill in the fullname field");
        speechToText();
        return
    }
    if (!isValidUsername) {
        sayWords("Please fill in the username field");
        speechToText();
        return
    }

    if (!isValidPassword) {
        sayWords("Please fill in the password field");
        speechToText();
        return
    }
    if (!isValidNationalID) {
        sayWords("Please fill in the National ID field");
        speechToText();
        return
    }
    if (!isValidPhoneNumber) {
        sayWords("Please fill in the Phone Number field");
        speechToText();
        return
    }
    if (!isValidEmail) {
        sayWords("Please fill in the Email field");
        speechToText();
        return
    }
    if (!isValidAddress) {
        sayWords("Please fill in the Address field");
        speechToText();
        return
    }
    if (isValidDateBirth) {
        sayWords("Please fill in the Date Birth field");
        speechToText();
        return
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
    
    window.open("../loginPage/loginPage.html");
    return true;
}
if (localStorage.getItem('isBlind')) {
    speechToText();
}
function sayWords(msgText) {
    if (!localStorage.getItem('isBlind')) {
        return;
    }
    // Check if the browser supports the SpeechSynthesis API
    if ('speechSynthesis' in window) {
        // Create a new instance of SpeechSynthesisUtterance
        var msg = new SpeechSynthesisUtterance();
        // Set the text that you want to be spoken
        msg.text = msgText;

        // Speak the text using the default speech synthesis engine
        speechSynthesis.speak(msg);
    }
}
function stopTextToSpeech() {
    // Check if the browser supports the SpeechSynthesis API
    if ('speechSynthesis' in window) {
        // Cancel any existing speech synthesis
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

        // Start speech recognition
        recognition.start();

        // Event fired when speech recognition starts
        recognition.onstart = ()=> {
            document.getElementById("sound-input").style.display = "inline-block";
            console.log("Speech recognition started");
        };

        // Event fired when speech recognition receives a result
        recognition.onresult = (event) => {
            var transcript = event.results[0][0].transcript;
            console.log(transcript);


            // Regular expressions to match username and password patterns
            var fullnameRegex=/(?:my\s)?full name\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var usernameRegex = /(?:my\s)?username\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var passwordRegex = /(?:my\s)?password\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var nationalIDRegex=/(?:my\s)?national ID\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var phoneNumberRegex=/(?:my\s)?phone number\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var emailRegex=/(?:my\s)?email\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var addressRegex=/(?:my\s)?address\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var dateBirthRegex=/(?:my\s)?date Birth\s(?:is|should\sbe)?\s([\w\s]+)/i;

            // Extract username and password using regular expressions
            var fullnameMatch = transcript.match(fullnameRegex);
            var usernameMatch = transcript.match(usernameRegex);
            var passwordMatch = transcript.match(passwordRegex);
            var nationalIDMatch = transcript.match(nationalIDRegex);
            var phoneNumberMatch = transcript.match(phoneNumberRegex);
            var emailMatch = transcript.match(emailRegex);
            var addressMatch = transcript.match(addressRegex);
            var dateBirthMatch = transcript.match(dateBirthRegex);
           // -------------------------------------------------------------------------------------/

            if (fullnameMatch && fullnameMatch[1]) {
                var fullname = fullnameMatch[1];
                var fullnameField = document.getElementById("fullname");
                fullnameField.value = fullname;
            }

            if (usernameMatch && usernameMatch[1]) {
                var username = usernameMatch[1];
                document.getElementById("username").value = username;
            }
            if (passwordMatch && passwordMatch[1]) {
                var password = passwordMatch[1];
                document.getElementById("password").value = password;
            }
            if (nationalIDMatch && nationalIDMatch[1]) {
                var  nationalID= nationalIDMatch[1];
                document.getElementById("nationalID").value = nationalID;
            }
            if (phoneNumberMatch && phoneNumberMatch[1]) {
                var  phoneNumber= phoneNumberMatch[1];
                document.getElementById("phoneNumber").value = phoneNumber;
            }
            if (emailMatch && emailMatch[1]) {
                var  email= emailMatch[1];
                document.getElementById("email").value = email;
            }
            if (addressMatch && addressMatch[1]) {
                var  address= addressMatch[1];
                document.getElementById("address").value = address;
            }
            if (dateBirthMatch && dateBirthMatch[1]) {
                var  dateBirth= dateBirthMatch[1];
                document.getElementById("dateBirth").value = dateBirth;
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
function openPage(){
    window.open('../login/loginPage.html');
    return true;
}