 
const questions = [
    {
    question: "What is the software development life cycle (SDLC)?",
    a: "A framework for managing software projects",
    b: "A programming language",
    c: "A code versioning system",
    d: "A software testing technique",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of version control systems (VCS) in software engineering?",
    a: "To document software requirements",
    b: "To track and manage changes to source code",
    c: "To automate software testing",
    d: "To monitor software performance",
    correctAnswer: "b"
    },
    {
    question: "What is the Agile software development methodology?",
    a: "A sequential and plan-driven approach to software development",
    b: "A collaborative and iterative approach to software development",
    c: "A formal and standardized approach to software development",
    d: "A waterfall model for software development",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of unit testing in software development?",
    a: "To test the entire system as a whole",
    b: "To ensure that individual components of the software work correctly",
    c: "To test the user interface of the software",
    d: "To evaluate the software's performance under stress",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of code refactoring in software development?",
    a: "To optimize the software for better performance",
    b: "To fix bugs and errors in the code",
    c: "To improve the code's readability and maintainability",
    d: "To add new features to the software",
    correctAnswer: "c"
    },
    {
    question: "What is the role of a software architect in the development process?",
    a: "To write code and implement software features",
    b: "To design the user interface of the software",
    c: "To manage the project and ensure its timely delivery",
    d: "To define the software's overall structure and high-level design",
    correctAnswer: "d"
    },
    {
    question: "What is the purpose of software documentation?",
    a: "To record the software development process",
    b: "To provide a user manual for the software",
    c: "To facilitate collaboration among software developers",
    d: "All of the above",
    correctAnswer: "d"
    },
    {
    question: "What is the purpose of software testing in the software development life cycle?",
    a: "To ensure that the software is error-free",
    b: "To validate the software against the specified requirements",
    c: "To verify that the software works correctly",
    d: "All of the above",
    correctAnswer: "d"
    },
    {
    question: "What is the difference between a bug and a defect in software engineering?",
    a: "A bug is a coding mistake, while a defect is a deviation from the software requirements",
    b: "A bug is a functional error, while a defect is a performance issue",
    c: "A bug is identified during testing, while a defect is identified during code review",
    d: "A bug is easier to fix than a defect",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of software maintenance in the software development life cycle?",
    a: "To enhance the software with new features",
    b: "To fix bugs and errors in the software",
    c: "To optimize the software for better performance",
    d: "All of the above",
    correctAnswer: "d"
    },
    {
    question: "What is the role of a software tester in the development process?",
    a: "To write code and implement software features",
    b: "To design the user interface of the software",
    c: "To ensure that the software meets the specified requirements",
    d: "To manage the project and ensure its timely delivery",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a software requirements specification document?",
    a: "To document the software development process",
    b: "To provide a user manual for the software",
    c: "To define the software's functionality and behavior",
    d: "To facilitate collaboration among software developers",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of software design patterns?",
    a: "To ensure that the software is bug-free",
    b: "To improve the performance of the software",
    c: "To provide reusable solutions to common software design problems",
    d: "To automate the software testing process",
    correctAnswer: "c"
    }


];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers()

    const currentQuizData = questions[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', function(){
    const answer = getSelected();
    if(answer){
        if(answer === questions[currentQuiz].correctAnswer){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < questions.length){
            loadQuiz();
        }else{
           quiz.innerHTML = '<h2> You have scored ' + score + ' / ' + questions.length + ' Marks</h2> <button onclick = "location.reload()">Reload</button>';
          
        }
    
    }
});