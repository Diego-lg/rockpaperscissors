// let name = prompt('what is your name');
// console.log(name);

function getComputerChoice(playerSelection, computerSelection){
    let player = playerSelection;
    let ia = computerSelection;
    if (playerSelection==computerSelection)
    {
        return console.log('YOU TIED! o.O but not anymore pin pam pun');
    }
    if(playerSelection =='rock' && computerSelection =='scissors')
    {
        return console.log(`Your ${player}, fucking beats IA ${ia}`);
    }
    if(playerSelection =='scissors' && computerSelection =='rock')
    {
        return console.log(`Your ${player}, got beat for an IA ${ia} you're dumb dumb dumb`);
    }
    if(playerSelection =='paper' && computerSelection =='scissors')
    {
        return console.log(`Your ${player}, fucking beats IA ${ia} pum pum skinny boy`);
    }
    if(playerSelection =='scissors' && computerSelection =='paper')
    {
        return console.log(`Your ${player}, got beat for an IA ${ia} you dumbass useless piece of shit`);
    }
    if(playerSelection =='rock' && computerSelection =='paper')
    {
        return console.log(`Your ${player}, got beat for an IA ${ia} you dumbass useless piece of shit`);
    }
    if(playerSelection =='paper' && computerSelection =='rock')
    {
        return console.log(`Your ${player}, fucking beats IA ${ia}`);
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
    var seleccion = prompt('WHAT IS YOUR CHOICE:').toLowerCase();
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


