const buttons = document.querySelectorAll("[btn-slider]")
var index = 0;

function buttonClick(btnClicked)
{
    let offset;
    if(btnClicked === "btn-left")
    {
        offset = -1;
    }
    else
    {
        offset = 1;
    }

    const slides = document.querySelectorAll(".slide");
    const lenght = slides.length;

    for(let i = 0; i < lenght; i++)
    {
        delete slides[i].dataset.active;
    }

    index += offset;
    if(index > lenght-1)
    {
        index = 0;
    }
    if(index < 0)
    {
        index = lenght-1;
    }
    
    slides[index].dataset.active = true;
}

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        buttonClick(button.className);   
    })
});

async function autoChangeSlide() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 3500));
        buttonClick("btn-right");
    }
}

autoChangeSlide();