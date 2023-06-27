const questions = [
    {
    question: "What is the basic unit of storage in computer memory?",
    a: "Byte",
    b: "Bit",
    c: "Nibble",
    d: "Megabyte",
    correctAnswer: "a"
    },
    {
    question: "Which programming language is commonly used for web development?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correctAnswer: "d"
    },
    {
    question: "What does CPU stand for?",
    a: "Central Processing Unit",
    b: "Computer Personal Unit",
    c: "Central Personal Unit",
    d: "Computer Processing Unit",
    correctAnswer: "a"
    },
    {
    question: "Which type of memory is non-volatile and can retain data even when power is turned off?",
    a: "RAM",
    b: "ROM",
    c: "Cache",
    d: "Virtual Memory",
    correctAnswer: "b"
    },
    {
    question: "What is the maximum number of IP addresses that can be assigned to devices on a local network using IPv4?",
    a: "256",
    b: "65,536",
    c: "4.3 billion",
    d: "18.4 million",
    correctAnswer: "c"
    },
    {
    question: "Which networking protocol is used to send emails over the Internet?",
    a: "FTP",
    b: "SMTP",
    c: "HTTP",
    d: "SSH",
    correctAnswer: "b"
    },
    {
    question: "Which programming language is often used for artificial intelligence and machine learning?",
    a: "Ruby",
    b: "Perl",
    c: "Rust",
    d: "Python",
    correctAnswer: "d"
    },
    {
    question: "What is the primary purpose of an operating system?",
    a: "Run computer programs",
    b: "Manage hardware resources",
    c: "Control network traffic",
    d: "Create user interfaces",
    correctAnswer: "b"
    },
    {
    question: "Which type of computer memory is the fastest?",
    a: "RAM",
    b: "Hard Disk Drive",
    c: "Solid-State Drive",
    d: "Cache",
    correctAnswer: "d"
    },
    {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "High-Level Machine Language",
    c: "Home Tool Markup Language",
    d: "Hyperlink and Text Markup Language",
    correctAnswer: "a"
    },
    {
    question: "Which programming language is known for its use in scientific computing and data analysis?",
    a: "Java",
    b: "C#",
    c: "R",
    d: "Swift",
    correctAnswer: "c"
    },
    {
    question: "Which component is responsible for converting digital signals to analog signals in a computer?",
    a: "Hard Drive",
    b: "RAM",
    c: "CPU",
    d: "Modem",
    correctAnswer: "d"
    },
    {
    question: "What is the purpose of a compiler?",
    a: "Convert high-level code to machine code",
    b: "Execute database queries",
    c: "Manage network connections",
    d: "Create graphical user interfaces",
    correctAnswer: "a"
    },
    {
    question: "Which programming paradigm emphasizes immutability and pure functions?",
    a: "Procedural programming",
    b: "Object-oriented programming",
    c: "Functional programming",
    d: "Event-driven programming",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of an Ethernet port on a computer?",
    a: "Connect to a printer",
    b: "Connect to a Wi-Fi network",
    c: "Connect to a monitor",
    d: "Connect to a wired network",
    correctAnswer: "d"
    },
    {
    question: "What does the acronym GPU stand for?",
    a: "General Processing Unit",
    b: "Graphical Power Unit",
    c: "Graphics Processing Unit",
    d: "General Purpose Unit",
    correctAnswer: "c"
    },
    {
    question: "What is the function of an IDE in software development?",
    a: "Store and organize data",
    b: "Execute program instructions",
    c: "Create user interfaces",
    d: "Facilitate coding and debugging",
    correctAnswer: "d"
    },
    {
    question: "Which data structure operates on a Last-In-First-Out (LIFO) principle?",
    a: "Queue",
    b: "Stack",
    c: "LinkedList",
    d: "Tree",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of a firewall in computer networks?",
    a: "Ensure network speed and stability",
    b: "Protect against unauthorized access",
    c: "Manage network traffic",
    d: "Translate network addresses",
    correctAnswer: "b"
    },
    {
    question: "Which protocol is commonly used for secure communication over the internet?",
    a: "HTTP",
    b: "FTP",
    c: "TCP",
    d: "HTTPS",
    correctAnswer: "d"
    },
    {
    question: "Which programming language is often used for game development?",
    a: "C++",
    b: "Java",
    c: "Ruby",
    d: "PHP",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of a cache in a computer system?",
    a: "Store frequently accessed data",
    b: "Manage file permissions",
    c: "Execute program instructions",
    d: "Perform arithmetic operations",
    correctAnswer: "a"
    },
    {
    question: "Which type of database stores data in tables with predefined schemas?",
    a: "Relational database",
    b: "NoSQL database",
    c: "Hierarchical database",
    d: "Graph database",
    correctAnswer: "a"
    },
    {
    question: "What is the role of a compiler in the software development process?",
    a: "Translate source code into machine code",
    b: "Execute the program",
    c: "Manage memory allocation",
    d: "Create user interfaces",
    correctAnswer: "a"
    },
    {
    question: "Which programming language is primarily used for system administration and automation tasks?",
    a: "Python",
    b: "C#",
    c: "JavaScript",
    d: "Perl",
    correctAnswer: "d"
    },
    {
    question: "What does the acronym HTTP stand for?",
    a: "Hypertext Transfer Protocol",
    b: "Hyperlink Text Transfer Protocol",
    c: "Hypertext Transmission Technology",
    d: "High-Level Programming Language",
    correctAnswer: "a"
    },
    {
    question: "What does the acronym HTTP stand for?",
    a: "Hypertext Transfer Protocol",
    b: "Hyperlink Text Transfer Protocol",
    c: "Hypertext Transmission Technology",
    d: "High-Level Programming Language",
    correctAnswer: "a"
    },
    {
    question: "Which programming language is often used for web scraping and data extraction?",
    a: "Java",
    b: "C#",
    c: "Python",
    d: "Ruby",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a DNS server?",
    a: "Translate domain names to IP addresses",
    b: "Encrypt network traffic",
    c: "Manage database connections",
    d: "Execute web server scripts",
    correctAnswer: "a"
    },
    {
    question: "Which data structure organizes elements in a hierarchical structure?",
    a: "Stack",
    b: "Queue",
    c: "LinkedList",
    d: "Tree",
    correctAnswer: "d"
    },
    {
    question: "What is the role of an assembler in low-level programming?",
    a: "Translate assembly code into machine code",
    b: "Execute program instructions",
    c: "Manage memory allocation",
    d: "Create user interfaces",
    correctAnswer: "a"
    },
    {
    question: "Which programming language is known for its use in statistical analysis and data visualization?",
    a: "R",
    b: "C++",
    c: "Perl",
    d: "Swift",
    correctAnswer: "a"
    },
    {
    question: "What does RAID stand for in data storage?",
    a: "Redundant Array of Independent Disks",
    b: "Random Access and Integrated Data",
    c: "Remote Access and Integrated Disk",
    d: "Rapid Action and Intelligent Data",
    correctAnswer: "a"
    },
    {
    question: "Which networking protocol is used for transferring files between computers?",
    a: "FTP",
    b: "SMTP",
    c: "HTTP",
    d: "SSH",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of an operating system's kernel?",
    a: "Manage user interfaces",
    b: "Manage hardware resources",
    c: "Execute database queries",
    d: "Create network connections",
    correctAnswer: "b"
    },
    {
    question: "Which programming language is commonly used for mobile app development on iOS?",
    a: "Java",
    b: "C#",
    c: "Swift",
    d: "Python",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a loop in programming?",
    a: "Store and organize data",
    b: "Execute a set of instructions repeatedly",
    c: "Perform mathematical calculations",
    d: "Create graphical user interfaces",
    correctAnswer: "b"
    },
    {
    question: "Which component of a computer system is responsible for executing program instructions?",
    a: "RAM",
    b: "Hard Disk Drive",
    c: "CPU",
    d: "Motherboard",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of an API in software development?",
    a: "Create user interfaces",
    b: "Manage network connections",
    c: "Translate programming languages",
    d: "Facilitate communication between software components",
    correctAnswer: "d"
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
