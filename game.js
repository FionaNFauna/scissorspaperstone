var humanScore = 0;
var computerScore = 0;
var rounds = 0;

function getComputerChoice()    {
    const num = Math.round(Math.random() *3);
    if  (num === 0) {
        return "scissors";
    } else if   (num === 1)  {
        return "rock";
    } else  {
        return "paper";
    }
}

function getHumanChoice()   {
    let intput = document.getElementById("input");
    var unum = parseInt(intput.value);
    if  (unum === 1) {
        return "scissors";
    } else if   (unum === 2)  {
        return "rock";
    } else  if  (unum === 3) {
        return "paper";
    }
    alert("please type in valid argument")
    return null;
}

function playRound()    {
    var resultbool = null;
    const cnum = getComputerChoice();
    const unum = getHumanChoice();
    if  (unum == null)  {
        return;
    }
    document.getElementById("computerchoice").textContent = `The Computer choose ${cnum}.`
    document.getElementById("userchoice").textContent = `You choose ${unum}.`
    if  (cnum == "scissors")    { 
        if  (unum == "rock")    {
            humanScore++;
            resultbool = true;
        } else if   (unum == "paper")   {
            computerScore++;
            resultbool = false;
        }
    } else if   (cnum == "rock")    {
        if  (unum == "paper")   {
            humanScore++;
            resultbool = true;
        } else if   (unum == "scissors")    {
            computerScore++;
            resultbool = false;
        }
    } else  {
        if  (unum == "scissors")   {
            humanScore++;
            resultbool = true;
        } else if   (unum == "rock")    {
            computerScore++;
            resultbool = false;
        }
    }
    rounds++;
    if  (resultbool == null)    {
        document.getElementById("res").textContent = "It was a tie!"
    } else if   (resultbool)    {
        document.getElementById("res").textContent = "You Won!!!"
    } else  {
        document.getElementById("res").textContent = "You lost."
    }

    document.getElementById("comp_score").textContent = computerScore;
    document.getElementById("user_score").textContent = humanScore;

    if  (rounds >= 5)   {
        var str = "\nIn these 5 rounds, ";
        if  (computerScore > humanScore)    {
            str += `you lost ${computerScore}-${humanScore}.`
        } else if   (computerScore < humanScore)    {
            str += `you won ${humanScore}-${computerScore}.`
        } else  {
            str += `you tied with the computer.`
        }
        document.getElementById("res").textContent += str;

        computerScore  = 0;
        humanScore = 0;
        rounds = 0;
    }
}

