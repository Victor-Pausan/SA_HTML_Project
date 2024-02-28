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

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailRegex.test(email)){
        alert("Please enter an valid email.")
        return;
    }

    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(formData);

    localStorage.setItem("submissions", JSON.stringify(submissions));

    updateSubmissionsCounter();

    form.submit();
})