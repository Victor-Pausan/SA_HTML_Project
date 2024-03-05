const form = document.getElementById("form");

function updateSubmissionsCounter(){
    const submissions = JSON.parse(localStorage.getItem("submissions")) || []
    const counter = document.querySelector(".submission-counter");
    counter.innerHTML = `Submissions: ${Object.keys(submissions).length}`;
}

updateSubmissionsCounter();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const firstName = form.querySelector("#first-name").value;
    const lastName = form.querySelector('#last-name').value;
    const email = form.querySelector('#email').value;
    const subject = form.querySelector('#subject').value;
    const message = form.querySelector('#message').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message
    };

    const appendErrorMessage = (message, className) => {
        let errorDiv = document.getElementById(`${className}-error`);
        errorDiv.innerHTML = message;
        
    };

    const deleteErrorMessage = (className) => {
        let errorDiv = document.getElementById(`${className}-error`);
        errorDiv.innerHTML = ''; 
    }

    if (firstName.trim() === '') {
        firstNameError = "Please fill in first name.";
        appendErrorMessage(firstNameError, "first-name");
    }
    else{
        deleteErrorMessage("first-name");
    }
    
    if (lastName.trim() === '') {
        lastNameError = "Please fill in last name.";
        appendErrorMessage(lastNameError, "last-name");
    }
    else{
        deleteErrorMessage("last-name");
    }
    
    if (email.trim() === '') {
        emailError = "Please fill in email.";
        appendErrorMessage(emailError, "email");
    }
    else{
        deleteErrorMessage("email");
    }
    
    if (subject.trim() === '') {
        subjectError = "Please fill in subject.";
        appendErrorMessage(subjectError, "subject");
    }
    else{
        deleteErrorMessage("subject");
    }
    
    if (message.trim() === '') {
        messageError = "Please fill in message.";
        appendErrorMessage(messageError, "message");
    }
    else{
        deleteErrorMessage("message");
    }
    

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(email)){
        emailRegexError = "Please enter a valid email.";
        appendErrorMessage(emailRegexError, "email");
        return;
    }
    else{
        deleteErrorMessage("email");
    }

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(formData);

    localStorage.setItem("submissions", JSON.stringify(submissions));

    updateSubmissionsCounter();

    form.submit();
})