const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
console.log(num2);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
console.log(score);
const correctAns = num1 * num2;

// Whenever the user clicks on the submit button it activates a call back function
formEl.addEventListener("submit", ()=>{
    //convert datatype of a string to number. Add +inputEl.value
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

// Update the score value
scoreEl.innerText = `score: ${score}`;