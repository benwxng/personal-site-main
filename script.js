document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('heading');
    const description = document.getElementById('description');
    const currently = document.querySelector('.currently');
    const links = document.querySelector('.links');
    const substack = document.getElementById('substack');
    const bookshelf = document.getElementById('bookshelf');
    const instagram = document.getElementById('instagram');
    const synthesis = document.getElementById('synthesis');
    
 

    setTimeout(() => {
        heading.style.opacity = 1;
        heading.style.transform = "translateX(0)";
    }, 400);

    setTimeout(() => {
        description.style.opacity = 1;
        description.style.transform = "translateX(0)";
    }, 600);

    setTimeout(() => {
        currently.style.opacity = 1;
        currently.style.transform = "translateY(0)";
    }, 1600)

    setTimeout(() => {

       substack.style.opacity = 1;
       
    }, 2100)

    setTimeout(() => {

        bookshelf.style.opacity = 1;
        
     }, 2300)

     setTimeout(() => {

        instagram.style.opacity = 1;
        
     }, 2500)

     setTimeout(() => {

        synthesis.style.opacity = 1;
        
     }, 2700)
    
});

function updateParagraphText() {
    const description = document.getElementById('description');
    const currently = document.querySelector('.currently');

    if (window.matchMedia("(max-width: 600px)").matches) {
        currently.textContent = "CS+Econ/🎾 @ Swarthmore ";
        description.textContent = "I'm interested in building tech and community that helps us live to the fullest.";
    }
}

// Initial check
updateParagraphText();

// Update text on window resize
window.addEventListener('resize', updateParagraphText);
