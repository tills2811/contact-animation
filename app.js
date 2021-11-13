const fab=document.querySelector(".FAB");
const icons=document.querySelector(".icons");

fab.addEventListener('click', () => {
    fab.classList.toggle("click")
    icons.classList.toggle('open')
    
}); 


