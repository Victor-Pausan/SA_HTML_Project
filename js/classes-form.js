const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = form.querySelector("#location").value;
    const date = form.querySelector("#date").value;
    const time = form.querySelector("#time").value;
    const name = form.querySelector("#name").value;

    const formData = {
        location: location,
        date: date,
        time: time,
        name: name
    }

    if (location.trim() === '' || date.trim() === '' || time.trim() === '' || name.trim() === '') {
        alert("Please fill in all fields.")
        return;
    }
})