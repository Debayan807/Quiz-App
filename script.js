const questions = [
    {
        question: "Which is largest animal in the World?",
        answers: [
            
               { Text: "Shark" , correct: false},
               { Text: "Blue Whale" , correct: true},
               { Text: "Elephant" , correct: false},
               { Text: "Giraffe" , correct: false},
            
        ]
        
    },
    {
        question: 
        "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
        answers: [
            
               { Text: "1850s" , correct: false},
               { Text: "1880s" , correct: true},
               { Text: "1930s" , correct: false},
               { Text: "1950s" , correct: false},
            
        ]
    },
    {
        question: 
        "What is part of a database that holds only one type of information?",
        answers: [
            
               { Text: "Report" , correct: false},
               { Text: "Field" , correct: true},
               { Text: "Record" , correct: false},
               { Text: "File" , correct: false},
            
        ]
    },
    {
        question: 
        "'OS' computer abbreviation usually means ?",
        answers: [
            
               { Text: "Order of Significance" , correct: false},
               { Text: "Open Software" , correct: false},
               { Text: "Operating System" , correct: true},
               { Text: "Optical Sensor" , correct: false},
            
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){

 currentQuestionIndex=0;
  score=0;
nextButton.innerHTML ="Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo +". " +currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("Incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct =="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


startQuiz();