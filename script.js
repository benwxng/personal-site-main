document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('heading');
    const description = document.getElementById('description');
    const currently = document.querySelector('.currently');
    const links = document.querySelector('.links');
    const substack = document.getElementById('substack');
    const bookshelf = document.getElementById('bookshelf');
    const instagram = document.getElementById('instagram');
    
 

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
       
    }, 2200)

    setTimeout(() => {

        bookshelf.style.opacity = 1;
        
     }, 2400)

     setTimeout(() => {

        instagram.style.opacity = 1;
        
     }, 2600)
    
});