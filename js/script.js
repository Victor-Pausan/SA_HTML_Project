// const buttons = document.querySelectorAll("[btn-slider]")
// var index = 0;

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         buttonClick(button.className);
//     })
// });

// function buttonClick(btnClicked) {
//     let offset;
//     if (btnClicked === "btn-left") {
//         offset = -1;
//     }
//     else {
//         offset = 1;
//     }

//     const slides = document.querySelectorAll(".slide");
//     const lenght = slides.length;

//     for (let i = 0; i < lenght; i++) {
//         delete slides[i].dataset.active;
//     }

//     index += offset;
//     if (index > lenght - 1) {
//         index = 0;
//     }
//     if (index < 0) {
//         index = lenght - 1;
//     }

//     slides[index].dataset.active = true;
// }

// async function autoChangeSlide() {
//     while (true) {
//         await new Promise((resolve) => setTimeout(resolve, 3500));
//         buttonClick("btn-right");
//     }
// }

// autoChangeSlide();

//more elegant way of doing what the autoChangeSlide() func does
//
// setInterval( () => {
//     buttonClick("btn-right");
// }, 3500); 


//get real time weather for each slide location by zip-code

var zipCodes = [10007, 33131, 90069, 33139]

function setWeather() {
    zipCodes.forEach((zipCode) => {
        let temperatureIn = document.getElementById(`${zipCode}`);
        fetch(`http://api.weatherapi.com/v1/current.json?key=ff8208b5d073412a8fe222013242802 &q=${zipCode}&aqi=no`)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        .then(data => {
            temperatureIn.innerHTML = data.current.temp_f + "°F";
        })
        .catch(error => {
            console.error('Error:', error);
          });
    })
}

setWeather()