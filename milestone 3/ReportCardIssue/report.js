function myFunc1() {

    let creditCardNumber = document.getElementById("creditcardnumber").value
    let description = document.getElementById("description").value

    if (creditCardNumber !== "" && description!=="") {

        alert("Succesfull");
        window.open("../clientHome/clientHome.html");
        window.close("../ReportCardIssue/report.html");


    }
    else {
        alert("Please enter all fields");

    }

}
