function myFunc1() {

    let creditCardNumber = document.getElementById("creditcardnumber").value


    if (creditCardNumber !== "" ) {

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../ReportCardIssue/report.html");


    }
    else {
        alert("Please enter credit card number");

    }

}
