 
const questions = [
    {
    question: "What is the purpose of an IP address in computer networking?",
    a: "Identify the user's location",
    b: "Establish a secure connection",
    c: "Assign a unique identifier to a device",
    d: "Manage network traffic",
    correctAnswer: "c"
    },
    {
    question: "Which networking device is used to connect multiple computers in a local area network (LAN)?",
    a: "Router",
    b: "Modem",
    c: "Switch",
    d: "Bridge",
    correctAnswer: "c"
    },
    {
    question: "What does DNS stand for in computer networking?",
    a: "Domain Network System",
    b: "Data Network Service",
    c: "Domain Name Server",
    d: "Data Naming System",
    correctAnswer: "c"
    },
    {
    question: "Which protocol is commonly used for transferring files between a client and a server over a network?",
    a: "SMTP",
    b: "FTP",
    c: "HTTP",
    d: "SSH",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of a subnet mask in computer networking?",
    a: "Encrypt network traffic",
    b: "Translate domain names to IP addresses",
    c: "Determine the network and host portions of an IP address",
    d: "Manage network security",
    correctAnswer: "c"
    },
    {
    question: "Which networking protocol is used for sending email messages?",
    a: "SMTP",
    b: "FTP",
    c: "HTTP",
    d: "SSH",
    correctAnswer: "a"
    },
    {
    question: "What is the function of a router in computer networking?",
    a: "Translate IP addresses to domain names",
    b: "Connect devices within a LAN",
    c: "Establish secure connections between networks",
    d: "Direct network traffic between different networks",
    correctAnswer: "d"
    },
    {
    question: "What does NAT stand for in computer networking?",
    a: "Network Attached Technology",
    b: "Network Address Translation",
    c: "Network Access Terminal",
    d: "Network Authentication Token",
    correctAnswer: "b"
    },
    {
    question: "Which networking device is used to connect a LAN to the internet?",
    a: "Modem",
    b: "Switch",
    c: "Bridge",
    d: "Firewall",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of a firewall in computer networking?",
    a: "Translate domain names to IP addresses",
    b: "Manage network traffic",
    c: "Establish secure connections",
    d: "Connect devices within a LAN",
    correctAnswer: "b"
    },
    {
    question: "Which protocol is used to retrieve email messages from a remote server?",
    a: "SMTP",
    b: "FTP",
    c: "POP3",
    d: "SSH",
    correctAnswer: "c"
    },
    {
    question: "What is the function of a DHCP server in computer networking?",
    a: "Assign IP addresses to devices on a network",
    b: "Translate domain names to IP addresses",
    c: "Manage network security",
    d: "Establish secure connections",
    correctAnswer: "a"
    },
    {
        question: "Which networking device operates at the Data Link layer of the OSI model?",
        a: "Switch",
        b: "Router",
        c: "Hub",
        d: "Bridge",
        correctAnswer: "a"
        },
        {
        question: "What is the purpose of a gateway in computer networking?",
        a: "Translate IP addresses to domain names",
        b: "Connect devices within a LAN",
        c: "Establish secure connections between networks",
        d: "Translate network protocols",
        correctAnswer: "c"
        },
        {
        question: "What does SSID stand for in wireless networking?",
        a: "Secure System Identifier",
        b: "Service Set Identifier",
        c: "System Security Identifier",
        d: "Static Signal Identifier",
        correctAnswer: "b"
        },
        {
        question: "Which networking protocol is used for secure remote login?",
        a: "SMTP",
        b: "FTP",
        c: "HTTP",
        d: "SSH",
        correctAnswer: "d"
        },
        {
        question: "What is the purpose of a VPN in computer networking?",
        a: "Connect devices within a LAN",
        b: "Translate IP addresses to domain names",
        c: "Establish secure connections over a public network",
        d: "Manage network security",
        correctAnswer: "c"
        },
        {
        question: "Which networking device is used to filter network traffic based on IP addresses?",
        a: "Firewall",
        b: "Router",
        c: "Switch",
        d: "Bridge",
        correctAnswer: "a"
        },
        {
        question: "What does the acronym WAN stand for in computer networking?",
        a: "Wireless Area Network",
        b: "Wide Access Network",
        c: "Wireless Access Node",
        d: "Wide Area Network",
        correctAnswer: "d"
        },
        {
        question: "Which protocol is used for secure web browsing?",
        a: "HTTP",
        b: "FTP",
        c: "HTTPS",
        d: "SMTP",
        correctAnswer: "c"
        },
        {
        question: "What is the purpose of an access point in wireless networking?",
        a: "Connect devices within a LAN",
        b: "Translate IP addresses to domain names",
        c: "Establish secure connections between networks",
        d: "Provide wireless network connectivity",
        correctAnswer: "d"
        },
        {
        question: "Which networking device is used to divide a network into smaller broadcast domains?",
        a: "Router",
        b: "Switch",
        c: "Hub",
        d: "Bridge",
        correctAnswer: "a"
        },
        {
        question: "What is the function of ARP in computer networking?",
        a: "Translate domain names to IP addresses",
        b: "Translate IP addresses to MAC addresses",
        c: "Manage network security",
        d: "Establish secure connections",
        correctAnswer: "b"
        },
        {
        question: "Which networking protocol is used for real-time communication over the internet?",
        a: "SMTP",
        b: "FTP",
        c: "HTTP",
        d: "VoIP",
        correctAnswer: "d"
        },
        {
        question: "What is the purpose of a proxy server in computer networking?",
        a: "Translate domain names to IP addresses",
        b: "Manage network traffic",
        c: "Establish secure connections",
        d: "Act as an intermediary between clients and servers",
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