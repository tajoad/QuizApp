const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector(".quiz-form");
const updateScore = document.querySelector(".update-score");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);

    //check answers

    userAnswers.forEach((ans, index) => {
        if(ans === correctAnswers[index]) {
            score += 25;
        }
        scrollTo(0,0);
        updateScore.children[1].innerHTML = `You have scored ${score}%`;
        updateScore.classList.remove("d-none");

        let output = 0;
        const timer = setInterval(()=> {
            updateScore.children[1].innerHTML = `You have scored ${output}%`;
            if (output === score) {
                clearInterval(timer);
            }else{
                output++;
            }
        }, 10)
        //console.log(score);
    });
});

