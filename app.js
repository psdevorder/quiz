const correctAnswers = ['A', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 25;
        }
    });


    //show result

scrollTo(0,0);

let result = document.querySelector('.result');
result.classList.remove("d-none");

let displayResult = document.querySelector('body > div.result.py-4.bg-light.text-center > div > p > span');

    //animacija rezultata

let output = 0
const timer = setInterval(() => {
    displayResult.innerText = output + '%';
    if(output === score){
        clearInterval(timer);
    } else {
        output++;
    }
}, 10);

});

//window object (global object)

