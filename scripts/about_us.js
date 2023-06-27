const twenty = document.querySelector('#twenty');
const twentyb = document.querySelector('#twentyb');
const fifty = document.querySelector('#fifty');
const fiftyb = document.querySelector('#fiftyb');
const hundred = document.querySelector('#hundred');
const hundredb = document.querySelector('#hundredb');

twenty.addEventListener('mouseover', function(){
    twentyb.style = "display: initial;background: linear-gradient(65deg, #014872, #a0eacf); color: white; transition: 0.5s; ";
    twenty.style = "background: linear-gradient(65deg, #014872, #a0eacf); color: white; transition: 0.5s; ";
})
twenty.addEventListener('mouseout', function(){
    twentyb.style = "";
    twenty.style = "";

});

// Fifty Button

fifty.addEventListener('mouseover', function(){
    fiftyb.style = "display: initial;background: linear-gradient(65deg, #a6c0fe, #f68084); color: #fff; transition: 0.6s; font-weight: 400;";
    fifty.style = "background: linear-gradient(65deg, #a6c0fe, #f68084); color: #fff; transition: 0.6s; font-weight: 400;";
})
fifty.addEventListener('mouseout', function(){
    fiftyb.style = "";
    fifty.style = "";

});
// hundredb
hundred.addEventListener('mouseover', function(){
    hundredb.style = "display: initial;background:  linear-gradient(65deg, #131c85, #8278d9); color: white; transition: 0.5s; ";
    hundred.style = "display: initial;background:  linear-gradient(65deg, #131c85, #8278d9); color: white; transition: 0.5s; ";
})
hundred.addEventListener('mouseout', function(){
    hundredb.style = "";
    hundred.style = "";

});

