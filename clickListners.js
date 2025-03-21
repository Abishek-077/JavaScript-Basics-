document.addEventListener("DOMContentLoaded", function () {
    // Select the button
    const button = document.getElementById("btn");

    // Check if the button exists to avoid errors
    if (button) {
        button.addEventListener("click", function () {
            alert("Button Clicked!");
        });
    

button.addEventListener("mouseover",function(){
    button.style.backgroundColor ="orange";
});
button.addEventListener("mouseout",function(){
    button.style.backgroundColor = "blue";
});
    }
});


