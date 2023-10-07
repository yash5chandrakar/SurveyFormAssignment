function validateFormValues(){
    let name = document.forms["surveyForm"]["name"].value
    let email = document.forms["surveyForm"]["email"].value
    let profession = document.forms["surveyForm"]["profession"].value
    let mobileNumber = document.forms["surveyForm"]["mobileNumber"].value
    let dateTime = document.forms["surveyForm"]["dateTime"].value
    let country = document.forms["surveyForm"]["country"].value
    let gender = document.forms["surveyForm"]["gender"].value
    let qtn1 = document.forms["surveyForm"]["qtn-1"].value
    let qtn2 = document.forms["surveyForm"]["qtn-2"].value
    let qtn3 = document.forms["surveyForm"]["qtn-3"].value
    let suggestions = document.forms["surveyForm"]["suggestions"].value

    var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    console.log(emailRegex.test(email))
    let errors = []
    if(name?.trim() === ""){
        errors.push("Name is required!")
    }
    if(email?.trim() === ""|| !emailRegex.test(email?.trim())){
        errors.push("Valid Email is required!")
    }
    if(profession?.trim() === ""){
        errors.push("Profession is required!")
    }
    if(mobileNumber?.trim() === ""){
        errors.push("Mobile Number is required!")
    }
    if(dateTime?.trim() === ""){
        errors.push("DOB is required!")
    }
    if(gender?.trim() === ""){
        errors.push("Gender is required!")
    }
    if(suggestions?.trim() === ""){
        errors.push("Suggestions are required!")
    }
    if(country?.trim() === ""){
        errors.push("Country is required!")
    }
    if(qtn1?.trim() === ""){
        errors.push("Answer to Question 1 is required!")
    }
    if(qtn2?.trim() === ""){
        errors.push("Answer to Question 2 is required!")
    }
    if(qtn3?.trim() === ""){
        errors.push("Answer to Question 3 is required!")
    }

    if(errors?.length>0){
        alert(errors?.join("\n"))
        return
    }

    document.getElementById("nameValue").innerHTML  = name
    document.getElementById("emailValue").innerHTML  = email
    document.getElementById("professionValue").innerHTML  = profession
    document.getElementById("mobileNumberValue").innerHTML  = mobileNumber
    document.getElementById("dateTimeValue").innerHTML  = dateTime
    document.getElementById("countryValue").innerHTML  = country
    document.getElementById("genderValue").innerHTML  = gender
    document.getElementById("qtnValue1").innerHTML  = qtn1
    document.getElementById("qtnValue2").innerHTML  = qtn2
    document.getElementById("qtnValue3").innerHTML  = qtn3
    document.getElementById("suggestionsValue").innerHTML  = suggestions
    document.getElementById("popupModal").style.display  = "block"
    
}

function resetForm(){
    document.forms["surveyForm"]["name"].value = ""
    document.forms["surveyForm"]["email"].value = ""
    document.forms["surveyForm"]["profession"].value = ""
    document.forms["surveyForm"]["mobileNumber"].value = ""
    document.forms["surveyForm"]["dateTime"].value = ""
    document.forms["surveyForm"]["country"].value = ""
    document.forms["surveyForm"]["gender"].value = ""
    document.forms["surveyForm"]["qtn-1"].value = ""
    document.forms["surveyForm"]["qtn-2"].value = ""
    document.forms["surveyForm"]["qtn-3"].value = ""
    document.forms["surveyForm"]["suggestions"].value = ""
}

function closeModal(){
    document.getElementById("popupModal").style.display  = "none"
    resetForm()
}