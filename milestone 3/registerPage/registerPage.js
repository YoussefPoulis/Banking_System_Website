function validateField(fieldName) {
    var fieldValue = fieldName == 'checkbox' ? document.getElementById(fieldName).checked : document.getElementById(fieldName).value;
    if (!fieldValue) {
        var fieldInput = document.getElementById(fieldName);
        fieldInput.classList.add('errorInput');
        var errorMessageElement = document.createElement('p');
        errorMessageElement.classList.add('errormessage');
        if (fieldName == 'checkbox') {
            errorMessageElement.innerHTML = "Please agree to the terms and conditions";
        } else {
            errorMessageElement.innerHTML = "Please fill in the " + fieldName + " field";
        }
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
    var isValidCountry = validateField('country');
   // var isValidCurrency = validateField('currency');
    //var isValidAccountType = validateField('accounttype');
    var isValidCheckbox = validateField('checkbox');
    var isValidnew=validateField('new');
    //var  isvalidaccountnumber=validateField('accountnumber');
    
    // var isValidDateBirth = validateField('dateBirth');
    
    if(!isValidFullname){
        sayWords("Please fill in the fullname field");
        return
    }
    if (!isValidUsername) {
        sayWords("Please fill in the username field");
        return
    }

    if (!isValidPassword) {
        sayWords("Please fill in the password field");
        return
    }
    if (!isValidNationalID) {
        sayWords("Please fill in the National ID field");
        return
    }
    if (!isValidPhoneNumber) {
        sayWords("Please fill in the Phone Number field");
        return
    }
    if (!isValidEmail) {
        sayWords("Please fill in the Email field");
        return
    }
    if (!isValidAddress) {
        sayWords("Please fill in the Address field");
        return
    }
    if (!isValidCountry) {
        sayWords("Please fill in the country field");
        return
    }
    // if (!isValidAccountType) {
    //     sayWords("Please fill in the account type field");
    //     return
    // }
    // if (!isValidCurrency) {
    //     sayWords("Please fill in the currency field");
    //     return
    // }
    if (!isValidCheckbox) {
        sayWords("Please agree to the terms and conditions");
        return
    }
    // if (!isvalidaccountnumber) {
    //     sayWords("Please agree to the terms and conditions");
    //     return
    // }
    if(!isValidnew){
        sayWords("Please fill this field");
        return
    }
    // if (!isValidDateBirth) {
    //     sayWords("Please fill in the Date Birth field");
    //     return
    // }
    

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
    window.location.href = '../login/loginPage.html';
    // window.close('../registerPage/register.html');
    // window.open("../login/loginPage.html");
    
    return true;
}
if (localStorage.getItem('isBlind')) {
    const url = window.location.href;
    if (url.includes("registerPage")) {
      // The word "PayBill" is in the URL.
      speechToTextResgister();
    }
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
function speechToTextResgister() {
    // Check if the browser supports the SpeechRecognition API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // Create a new instance of SpeechRecognition
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        // Start speech recognition
        recognition.start();

        // Event fired when speech recognition starts
        recognition.onstart = ()=> {
            // document.getElementById("sound-input").style.display = "inline-block";
            console.log("Speech recognition started");
        };

        // Event fired when speech recognition receives a result
        recognition.onresult = (event) => {
            var transcript = event.results[event.results.length - 1][0].transcript;
            console.log(transcript);


            // Regular expressions to match username and password patterns
            var fullnameRegex=/(?:my\s)?full name\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var usernameRegex = /(?:my\s)?username\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var passwordRegex = /(?:my\s)?password\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var nationalIDRegex=/(?:my\s)?national ID\s(?:is|should\sbe)?\s(\d+(\.\d+)?)/i;
            var phoneNumberRegex=/(?:my\s)?phone number\s(?:is|should\sbe)?\s(\d+(\.\d+)?)/i;
            var emailRegex=/(?:my\s)?email\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var addressRegex=/(?:my\s)?address\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var countryRegex=/(?:my\s)?country\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var typeRegex=/(?:my\s)?type\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var currencyRegex=/(?:my\s)?currency\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var newRegex=/(?:my\s)?type\s(?:is|should\sbe)?\s([\w\s]+)/i;
            var accountnumberRegex=/(?:my\s)?national ID\s(?:is|should\sbe)?\s(\d+(\.\d+)?)/i;
            // Extract username and password using regular expressions
            var fullnameMatch = transcript.match(fullnameRegex);
            var usernameMatch = transcript.match(usernameRegex);
            var passwordMatch = transcript.match(passwordRegex);
            var nationalIDMatch = transcript.match(nationalIDRegex);
            var phoneNumberMatch = transcript.match(phoneNumberRegex);
            var emailMatch = transcript.match(emailRegex);
            var addressMatch = transcript.match(addressRegex);
            var countryMatch=transcript.match(countryRegex);
            var typeMatch=transcript.match(typeRegex);
            var currencyMatch=transcript.match(currencyRegex);
            var newMatch=transcript.match(newRegex);
            var accountnumberMatch=transcript.match(accountnumberRegex);
           // -------------------------------------------------------------------------------------/
 
            if (fullnameMatch && fullnameMatch[1]) {
                var fullname = fullnameMatch[1];
                var fullnameField = document.getElementById("fullname");
                fullnameField.value = fullname;
            }

            if (usernameMatch && usernameMatch[1]) {
                var username = usernameMatch[1];
                document.getElementById("username").value =username;
            }
            if (passwordMatch && passwordMatch[1]) {
                var password = passwordMatch[1];
                document.getElementById("password").value =password;
            }
            if (nationalIDMatch && nationalIDMatch[1]) {
                var  nationalID= nationalIDMatch[1];
                document.getElementById("nationalID").value =nationalID;
            }
            if (phoneNumberMatch && phoneNumberMatch[1]) {
                var  phoneNumber= phoneNumberMatch[1];
                document.getElementById("phoneNumber").value =phoneNumber;
            }
            if (emailMatch && emailMatch[1]) {
                var  email= emailMatch[1];
                document.getElementById("email").value =email;
            }
            if (addressMatch && addressMatch[1]) {
                var  address= addressMatch[1];
                document.getElementById("address").value =address;
            }
            if (countryMatch && countryMatch[1]) {
                var country= countryMatch[1];
                document.getElementById("country").value =country;
            }
            if (typeMatch && typeMatch[1]) {
                var type= typeMatch[1];
                document.getElementById("accounttype").value =type;
            }
            if (currencyMatch && currencyMatch[1]) {
                var currency= currencyMatch[1];
                document.getElementById("currency").value =currency;
            }
            if (newMatch && newMatch[1]) {
                var newm= newMatch[1];
                document.getElementById("new").value =newm;
            }
            if (accountnumberMatch && accountnumberMatch[1]) {
                var accountnumber= accountnumberMatch[1];
                document.getElementById("accountnumber").value =accountnumber;
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
function openPage(){
    window.location.href = '../login/loginPage.html';
    // window.close('../registerPage/register.html');
    // window.open('../login/loginPage.html');
    
    return true;
}


function change() {
    if (document.getElementById("new").value == "existinguser") {
        document.getElementById("ex").style.display = "block"
        document.getElementById("new2").style.display = "none"
        document.getElementById("new1").style.display = "none"

    }
    else {
        document.getElementById("ex").style.display = "none"
        document.getElementById("new1").style.display = "block"
        document.getElementById("new2").style.display = "block"
    }

}
