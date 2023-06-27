// variables

const w3scoolsContainer = document.getElementById('schools');
const w3schoolsButton = document.getElementById('w3school');
const tutContainer = document.getElementById('tut-point');
const tutBtn = document.getElementById('tutorials-point');
const udemyCourse = document.getElementById('udemy-course');
const udemyBtn = document.getElementById('udemy');
const itprotvC = document.getElementById('itpro-tv');
const itprotvBtn = document.getElementById('itpro');

// console.log(itprotvBtn); console.log(itprotvC);
// console.log(udemyBtn); console.log(udemyCourse);

// console.log(tutBtn); console.log(tutContainer);
// console.log(w3schoolsButton);console.log(w3scoolsContainer);

// schools
w3scoolsContainer.addEventListener('mouseover', function(){
    w3scoolsContainer.style = "background: linear-gradient(65deg, #2af598, #009efd); color: #fff; transition: 0.5s;";
    w3schoolsButton.style = "display: initial;background: linear-gradient(65deg, #2af598, #009efd); color: #fff; transition: 0.5s; ";
    w3schoolsButton.addEventListener('click', navigateW3schools);
});
w3scoolsContainer.addEventListener('mouseout', function(){
    w3scoolsContainer.style = "";
    w3schoolsButton.style = "";
});
function navigateW3schools(){
     window.open('https://w3schools.com', '_blank');
}

// Tutorials Point 


tutContainer.addEventListener('mouseover', function(){
    tutContainer.style = "background: linear-gradient(65deg, #014872, #a0eacf); color: white; transition: 0.5s; ";
    tutBtn.style = "display: initial;background: linear-gradient(65deg, #014872, #a0eacf); color: white; transition: 0.5s; ";
    tutBtn.addEventListener('click', navigateTut);
});
tutContainer.addEventListener('mouseout', function(){
    tutContainer.style = "";
   tutBtn.style = "";
});
function navigateTut(){
    window.open('https://www.tutorialspoint.com', "_blank");
}

// udemy

udemyCourse.addEventListener('mouseover', function(){
    udemyCourse.style = "background: linear-gradient(65deg, #a6c0fe, #f68084); color: #fff; transition: 0.6s;";
    udemyBtn.style = "display: initial;background: linear-gradient(65deg, #a6c0fe, #f68084); color: #fff; transition: 0.6s; font-weight: 400;";
    udemyBtn.addEventListener('click', navigateUdemy);
});
udemyCourse.addEventListener('mouseout', function(){
   udemyCourse.style = "";
    udemyBtn.style = "";
});
function navigateUdemy(){
    window.open('https://udemy.com', '_blank');
}

// itpro TV
itprotvC.addEventListener('mouseover', function(){
    itprotvC.style = "background: linear-gradient(65deg, #131c85, #8278d9); color: white; transition: 0.5s;";
    itprotvBtn.style = "display: initial;background:  linear-gradient(65deg, #131c85, #8278d9); color: white; transition: 0.5s; ";
    itprotvBtn.addEventListener('click', navigateItPro);
});
itprotvC.addEventListener('mouseout', function(){
    itprotvBtn.style = "";
    itprotvC.style = "";
});

function navigateItPro(){
    window.open('https://itpro.tv', '_blank');
}