//-------- Pay Bill ---------//
function myFunc1(){

    let accountNumber = document.getElementById("accountNumber").value
    let amount = document.getElementById("amount").value
    let recieverName = document.getElementById("recieverName").value

    if(accountNumber !==""  && amount!=="" && recieverName!==""){

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../Bills/PayBill.html");


    }
    else
    {
        alert("Invalid Data");

    }

}


//-------- Make Transfer ---------//

function myFunc2(){

    let senderAccountNumber = document.getElementById("senderAccountNumber").value
    let recieverAccountNumber = document.getElementById("recieverAccountNumber").value
    let amount = document.getElementById("amount").value
    let recieverName = document.getElementById("recieverName").value
    let bankName = document.getElementById("bankName").value
    let purpose = document.getElementById("purpose").value



    if(senderAccountNumber !==""  && recieverAccountNumber!=="" && amount!=="" && recieverName!=="" && bankName!=="" && purpose!==""){

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../Tranfers/makeTransfer.html");


    }
    else
    {
        alert("Invalid Data");

    }

}



//-------- Make Transfer Abroad ----------/
function myFunc3(){

    let senderAccountNumber = document.getElementById("senderAccountNumber").value
    let ibanNumber = document.getElementById("ibanNumber").value
    let amount = document.getElementById("amount").value
    let bankName = document.getElementById("bankName").value
    let purpose = document.getElementById("purpose").value



    if(senderAccountNumber !==""  && ibanNumber!=="" && amount!==""  && bankName!=="" && purpose!==""){

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../Tranfers/makeTransferAbroad.html");


    }
    else
    {
        alert("Invalid Data");

    }

}

//-------- Adding Bill ----------/
function myFunc4(){

    let accountNumber = document.getElementById("accountNumber").value
    let amount = document.getElementById("amount").value
    let recieverName = document.getElementById("recieverName").value



    if(accountNumber !==""  && amount!==""  && recieverName!=="" ){

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../Bills/AddBill.html");


    }
    else
    {
        alert("Invalid Data");

    }

}
