const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});


updateCounter();//when the page refreshes this will update total character to 0 and remaining character to 50 instead of some random number which we have hard coded

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length; 
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}