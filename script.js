document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('heading');
    const description = document.getElementById('description');
    const currently = document.querySelector('.currently');

    setTimeout(() => {
        heading.style.opacity = 1;
        heading.style.transform = "translateX(0)";
    }, 400);

    setTimeout(() => {
        description.style.opacity = 1;
        description.style.transform = "translateX(0)";
    }, 500);

    setTimeout(() => {
        currently.style.opacity = 1;
        currently.style.transform = "translateY(0)";
    }, 1600)
});
