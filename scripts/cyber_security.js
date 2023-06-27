 const questions = [ 
{
    question: "What is cybersecurity?",
    a: "The protection of computer systems from physical damage",
    b: "The process of securing digital information from unauthorized access or attacks",
    c: "The practice of monitoring network traffic for malicious activities",
    d: "The development of encryption algorithms for data protection",
    correctAnswer: "b"
    },
    {
    question: "What is a firewall?",
    a: "A hardware device used to protect against viruses",
    b: "A software program that prevents unauthorized access to a network",
    c: "A technique for encrypting data during transmission",
    d: "A process of backing up data to a remote location",
    correctAnswer: "b"
    },
    {
    question: "What is a common example of a social engineering attack?",
    a: "Distributed Denial of Service (DDoS) attack",
    b: "Malware infection through email attachment",
    c: "Phishing scam to obtain sensitive information",
    d: "Exploiting a software vulnerability to gain unauthorized access",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of encryption in cybersecurity?",
    a: "To detect and prevent malware attacks",
    b: "To monitor network traffic for suspicious activities",
    c: "To secure data by converting it into a coded form",
    d: "To protect against physical theft of computer systems",
    correctAnswer: "c"
    },
    {
    question: "What is a strong password?",
    a: "A password that is easy to remember, such as '123456'",
    b: "A password that includes personal information, such as a birthdate",
    c: "A password that is long, complex, and includes a combination of uppercase and lowercase letters, numbers, and symbols",
    d: "A password that is shared with others for convenience",
    correctAnswer: "c"
    },
    {
    question: "What is a phishing attack?",
    a: "An attempt to overload a website with traffic",
    b: "An attack that intercepts and alters communication between two parties",
    c: "A fraudulent attempt to obtain sensitive information through deceptive emails or websites",
    d: "A method of encrypting data to prevent unauthorized access",
    correctAnswer: "c"
    },
    {
    question: "What is malware?",
    a: "A type of computer hardware used for data storage",
    b: "Software designed to perform specific tasks or applications",
    c: "A network security protocol",
    d: "Malicious software intended to damage or disrupt computer systems",
    correctAnswer: "d"
    },
    {
    question: "What is a vulnerability assessment?",
    a: "The process of identifying weaknesses in computer systems or networks",
    b: "The encryption of data for secure transmission",
    c: "The authentication process for granting access to a network",
    d: "The monitoring of network traffic for security incidents",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of a Virtual Private Network (VPN)?",
    a: "To encrypt data during transmission",
    b: "To block unauthorized access to a network",
    c: "To detect and prevent malware attacks",
    d: "To securely connect to a remote network over the internet",
    correctAnswer: "d"
    },


{
    question: "What is the role of a penetration tester in cybersecurity?",
    a: "To develop encryption algorithms for data protection",
    b: "To monitor network traffic for suspicious activities",
    c: "To conduct controlled attacks to identify vulnerabilities in systems",
    d: "To enforce security policies and procedures",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
    a: "To prevent unauthorized access to a network",
    b: "To monitor and analyze security events and log data from various sources",
    c: "To encrypt sensitive data during transmission",
    d: "To conduct vulnerability assessments and penetration tests",
    correctAnswer: "b"
    },
    {
    question: "What is a Distributed Denial of Service (DDoS) attack?",
    a: "An attack that targets a specific user through social engineering",
    b: "An attack that intercepts and alters communication between two parties",
    c: "An attack that floods a network or website with excessive traffic to disrupt its functioning",
    d: "An attack that exploits vulnerabilities in software or systems",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of access control in cybersecurity?",
    a: "To monitor network traffic for suspicious activities",
    b: "To encrypt data during transmission",
    c: "To prevent unauthorized access to systems or resources",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "c"
    },
    {
    question: "What is a data breach?",
    a: "A technique for encrypting data during transmission",
    b: "A security incident where sensitive information is accessed or disclosed without authorization",
    c: "An attack that floods a network or website with excessive traffic",
    d: "A process of backing up data to prevent data loss",
    correctAnswer: "b"
    },
    {
    question: "What is the principle of least privilege?",
    a: "Granting users the highest level of privileges for convenience",
    b: "Providing access to resources based on specific roles and responsibilities",
    c: "Allowing users to share credentials for easier access",
    d: "Enforcing strict password complexity requirements for all users",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of security patches in cybersecurity?",
    a: "To encrypt sensitive data during transmission",
    b: "To conduct vulnerability assessments and penetration tests",
    c: "To monitor network traffic for security incidents",
    d: "To fix vulnerabilities and address security flaws in software or systems",
    correctAnswer: "d"
    },
    {
    question: "What is the role of an Intrusion Detection System (IDS) in cybersecurity?",
    a: "To block unauthorized access to a network",
    b: "To encrypt data during transmission",
    c: "To detect and respond to suspicious activities or attacks",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a security policy in cybersecurity?",
    a: "To enforce strict password complexity requirements",
    b: "To define guidelines and rules for protecting an organization's information and systems",
    c: "To conduct controlled attacks to identify vulnerabilities in systems",
    d: "To monitor and analyze security events and log data",
    correctAnswer: "b"
    },

{
    question: "What is the purpose of a security incident response plan?",
    a: "To prevent unauthorized access to a network",
    b: "To detect and respond to security incidents in a coordinated and effective manner",
    c: "To encrypt sensitive data during transmission",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "b"
    },
    {
    question: "What is the concept of zero trust in cybersecurity?",
    a: "The belief that all network traffic should be encrypted",
    b: "The practice of not trusting any user or device, regardless of their location or previous authorization",
    c: "The use of strong passwords and authentication mechanisms",
    d: "The deployment of multiple firewalls for enhanced security",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of a security awareness training program?",
    a: "To conduct vulnerability assessments and penetration tests",
    b: "To enforce strict password complexity requirements",
    c: "To educate users about potential cybersecurity threats and best practices",
    d: "To monitor and analyze security events and log data",
    correctAnswer: "c"
    },
    {
    question: "What is the role of encryption in secure communication?",
    a: "To detect and prevent malware attacks",
    b: "To securely transmit data over a network by converting it into an unreadable form",
    c: "To monitor network traffic for suspicious activities",
    d: "To enforce access control policies",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of regular software patching in cybersecurity?",
    a: "To encrypt sensitive data during transmission",
    b: "To conduct vulnerability assessments and penetration tests",
    c: "To fix known vulnerabilities and improve the security of software or systems",
    d: "To monitor network traffic for security incidents",
    correctAnswer: "c"
    },
    {
    question: "What is the role of an antivirus program in cybersecurity?",
    a: "To encrypt data during transmission",
    b: "To block unauthorized access to a network",
    c: "To detect and remove or quarantine malicious software",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a secure socket layer (SSL) certificate?",
    a: "To monitor network traffic for suspicious activities",
    b: "To authenticate the identity of a website and enable secure communication",
    c: "To encrypt sensitive data during transmission",
    d: "To enforce strict password complexity requirements",
    correctAnswer: "b"
    },
    {
    question: "What is the principle of separation of duties in cybersecurity?",
    a: "The use of multiple layers of security controls to protect against various threats",
    b: "Providing access to resources based on specific roles and responsibilities",
    c: "The process of verifying identity through multiple methods",
    d: "The practice of dividing critical tasks among different individuals to prevent unauthorized actions",
    correctAnswer: "d"
    },
    {
    question: "What is the purpose of a vulnerability disclosure program?",
    a: "To conduct security audits and risk assessments",
    b: "To enforce access control policies",
    c: "To detect and respond to security incidents in a coordinated and effective manner",
    d: "To provide a mechanism for security researchers to responsibly report discovered vulnerabilities",
    correctAnswer: "d"
    },


{
    question: "What is the purpose of a security audit?",
    a: "To encrypt data during transmission",
    b: "To detect and respond to security incidents",
    c: "To conduct a comprehensive assessment of an organization's security controls and practices",
    d: "To enforce strict password complexity requirements",
    correctAnswer: "c"
    },
    {
    question: "What is the role of a security analyst in cybersecurity?",
    a: "To develop encryption algorithms for data protection",
    b: "To monitor network traffic for suspicious activities",
    c: "To conduct controlled attacks to identify vulnerabilities in systems",
    d: "To analyze and investigate security incidents and breaches",
    correctAnswer: "d"
    },
    {
    question: "What is the purpose of a secure coding practice?",
    a: "To enforce access control policies",
    b: "To conduct vulnerability assessments and penetration tests",
    c: "To develop software and applications with built-in security controls",
    d: "To encrypt sensitive data during transmission",
    correctAnswer: "c"
    },
    {
    question: "What is the principle of defense-in-depth in cybersecurity?",
    a: "The practice of implementing multiple layers of security controls to protect against various threats",
    b: "The process of verifying identity through multiple methods",
    c: "The use of strong passwords and authentication mechanisms",
    d: "The deployment of multiple firewalls for enhanced security",
    correctAnswer: "a"
    },
    {
    question: "What is the purpose of a security incident response plan?",
    a: "To prevent unauthorized access to a network",
    b: "To detect and respond to security incidents in a coordinated and effective manner",
    c: "To encrypt sensitive data during transmission",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "b"
    },
    {
    question: "What is the role of encryption in secure communication?",
    a: "To detect and prevent malware attacks",
    b: "To securely transmit data over a network by converting it into an unreadable form",
    c: "To monitor network traffic for suspicious activities",
    d: "To enforce access control policies",
    correctAnswer: "b"
    },
    {
    question: "What is the purpose of regular software patching in cybersecurity?",
    a: "To encrypt sensitive data during transmission",
    b: "To conduct vulnerability assessments and penetration tests",
    c: "To fix known vulnerabilities and improve the security of software or systems",
    d: "To monitor network traffic for security incidents",
    correctAnswer: "c"
    },
    {
    question: "What is the role of an antivirus program in cybersecurity?",
    a: "To encrypt data during transmission",
    b: "To block unauthorized access to a network",
    c: "To detect and remove or quarantine malicious software",
    d: "To conduct security audits and risk assessments",
    correctAnswer: "c"
    },
    {
    question: "What is the purpose of a secure socket layer (SSL) certificate?",
    a: "To monitor network traffic for suspicious activities",
    b: "To authenticate the identity of a website and enable secure communication",
    c: "To encrypt sensitive data during transmission",
    d: "To enforce strict password complexity requirements",
    correctAnswer: "b"
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