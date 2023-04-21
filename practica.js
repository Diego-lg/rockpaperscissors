// let name = prompt('what is your name');
// console.log(name);

 // BOTONES
    var button_rock = document.createElement("button");
    var button_paper = document.createElement("button");
    var button_scissors = document.createElement("button");

    // Set the text content of the button
    var buttonText_rock = document.createTextNode("ROCK");
    var buttonText_paper = document.createTextNode("PAPER");
    var buttonText_scissors = document.createTextNode("SCISSORS");

    button_rock.appendChild(buttonText_rock);
    button_paper.appendChild(buttonText_paper);
    button_scissors.appendChild(buttonText_scissors)

function getComputerChoice(playerSelection, computerSelection){
    let player = playerSelection;
    let ia = computerSelection;
    if (playerSelection==computerSelection)
    {
        return console.log('TIE');
    }
    if(playerSelection =='rock' && computerSelection =='scissors')
    {
        return console.log(`YOU WON`);
    }
    if(playerSelection =='scissors' && computerSelection =='rock')
    {
        return console.log(`YOU LOST`);
    }
    if(playerSelection =='paper' && computerSelection =='scissors')
    {
        return console.log(`YOU WON`);
    }
    if(playerSelection =='scissors' && computerSelection =='paper')
    {
        return console.log(`YOU LOST`);
    }
    if(playerSelection =='rock' && computerSelection =='paper')
    {
        return console.log(`YOU LOST`);
    }
    if(playerSelection =='paper' && computerSelection =='rock')
    {
        return console.log(`YOU WON`);
    }
}

function computerSelection(){
    rock = 'rock';
    paper = 'paper';
    scissors = 'scissors';  
    const ax = [rock, paper, scissors];
    var proceso = Math.round(Math.random() * 2);
    var eleccion = ax[proceso];
    return eleccion;
}

function playerSelection(){
//respuesta     
var seleccion = "";


    // Create a new button element
    

    // Add an event listener to the button
    button_rock.addEventListener("click", function() {
        seleccion = "rock";

    });
    button_paper.addEventListener("click", function(){
        return seleccion = "paper";

    });
    button_scissors.addEventListener("click", function(){
        return seleccion = "scissors";
    
    });

    
    // Find the div to which you want to add the button
    var container_rock = document.getElementById("myDiv_rock");
    var container_paper = document.getElementById("myDiv_paper");
    var container_scissors = document.getElementById("myDiv_scissors");


    // Append the button to the div
    container_rock.appendChild(button_rock);
    container_paper.appendChild(button_paper);
    container_scissors.appendChild(button_scissors);


        
    //var seleccion = prompt('WHAT IS YOUR CHOICE:').toLowerCase();
    return seleccion;
}

function playRound()
{
    
    for(var pox = 1; pox<=3; pox++){
        getComputerChoice(playerSelection(),computerSelection());
        //console.log(Math.floor((Math.random() * 3)));
    }
    return;
}   
playRound();

//console.log(getComputerChoice(1,2));


