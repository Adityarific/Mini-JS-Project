
const question = document.getElementById("question");
console.log(question);

const questions = [
    {
        question : "Who is the largest animal in the world?",
        answer: [
            { text: "Blue Whale", correct: true },
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question : "Which planet is known as the Red Planet?",
        answer: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question : "What is the capital of India?",
        answer: [
            { text: "New Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question : "Which language is used to style web pages?",
        answer: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question : "Who invented the telephone?",
        answer: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question : "Which data structure follows FIFO?",
        answer: [
            { text: "Queue", correct: true },
            { text: "Stack", correct: false },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.querySelector(".next");

let currentQuestionIndex = 0;

function showQuestion() {
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answer.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn");

        if (option.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(optionsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz Finished 🎉";
        optionsElement.innerHTML = "";
        nextBtn.style.display = "none";
    }
});

showQuestion();

// const questionElement = document.getElementById("question");
// const optionsElement = document.getElementById("options");
// const nextBtn = document.querySelector("next");

// let currentQuestionIndex = 0;

// function showQuestion(){
//     optionsElement.innerHTML = "";
//     nextBtn.style.display ="none";

//     let currentQuestion = question[currentQuestionIndex];
//     questionElement.innerText = currentQuestion.question; //// storing question in html id name question ...........which is questionElement in js

//         currentQuestion.answer.forEach(option => {       //// creating options buttons
//             const button = document.createElement("button")
//             button.innerText = option.text;
//             button.classList.add("btn");                        /// creating class btn of these buttons
//             optionsElement.appendChild(button);

//             if(option.correct){
//                 button.dataset.correct = "true";
//             }
//             button.addEventListener("click",selectAnswer);
//         });
//     }
//         function selectAnswer(e){
//             const selectedBtn = e.target;
//             const isCorrect = selectedBtn.dataset.console === "true";

//             if(isCorrect){
//                 selectedBtn.classList.add("correct");
//             }else{
//                 selectedBtn.classList.add("incorrect")
//             }
//               Array.from(optionsElement.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true; // prevent double click
//     });

//     nextBtn.style.display = "block";
// }
// nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         questionElement.innerText = "Quiz Finished 🎉";
//         optionsElement.innerHTML = "";
//         nextBtn.style.display = "none";
//     }
// });

// // start quiz
// showQuestion();































// function start() {
//         quesIndex = 0;
//         score = 0;
//         nextButton.innerHTML = "Next";
//         showQuestion();
//     }
    
//     function resetState() {
//         nextButton.style.display = "none";
//         while (answerButton.firstChild) {
//             answerButton.removeChild(answerButton.firstChild);
//         }
//     }
// function showQuestion() {
//     resetState();
//     let quesNum = quesIndex + 1;
//     let currques = questions[quesIndex];
//     questionElement.innerHTML = quesNum + ". " + currques.question;

//     currques.answer.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);

//         if (answer.correct) {
//             button.dataset.correct = "true";
//         }

//         button.addEventListener("click", selectAnswer);
//     });
// }


// function selectAnswer(e) {
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";

//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//         score++;
//     } else {
//         selectedBtn.classList.add("incorrect");
//     }
// }

// start();
