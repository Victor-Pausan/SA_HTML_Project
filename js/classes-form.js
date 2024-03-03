const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = form.querySelector("#location").value;
    const date = form.querySelector("#date").value;
    const time = form.querySelector("#time").value;
    const name = form.querySelector("#name").value;

    const formData = {
        id: "1",
        location: location,
        date: date,
        time: time,
        name: name
    }

    if (location.trim() === '' || date.trim() === '' || time.trim() === '' || name.trim() === '') {
        alert("Please fill in all fields.")
        return;
    }

    postData(formData);

    form.submit();
})

function postData(appointment) {
    fetch("http://localhost:8080/getAppointments")
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    })

    fetch("http://localhost:8080/addAppointment", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

function updateAppointmentsList(){
    let schedule = document.getElementById('schedule');
    fetch("http://localhost:8080/getAppointments")
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    })
    .then((data) => {
        Object.keys(data || {}).forEach(key => {
            const value = data[key];
            let i = value.id;
            schedule.innerHTML += `<div id="app${i}"class="note">
            <h5>Name: ${data[`app${i}`].name}</h5>
            <h5>Date and time: ${data[`app${i}`].date} at ${data[`app${i}`].time}</h5>
            <h5>Location: ${data[`app${i}`].location}</h5>
            <button id="b${i}" class="delete erase">
                <svg id="b${i}" class="erase" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
            </div>`;
        });
    });
}

updateAppointmentsList();

document.addEventListener('click', event => {
    if (event.target.classList.contains('erase')) {
        let param = event.target.id.slice(1);
        console.log(param);
        fetch(`http://localhost:8080/deleteAppointment/:${param}`, {
            method: 'DELETE'
        })
        .then((response) => {
            if(!response.ok){
                throw new Error("Response is not ok.")
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const element = documen.getElementById(`b${param}`);
            element.remove();
        })
        .catch((error) => {
            console.error("Error", error);
        })
    }
})
