
// enter game by hide home page and show playGround

function enterGame(selectHome,selectGround){

    const home = document.querySelector(selectHome)
    const ground = document.querySelector(selectGround)

    home.classList.add('hidden')
    ground.classList.remove('hidden')

}

//create random alphabets

function getRandomAlphabets(){

    const randomNumber = Math.round(Math.random() * 25)

    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'

    const alphabetsArray = alphabetsString.split("")

    const randomAlphabet = alphabetsArray[randomNumber]

    return randomAlphabet
}


// set background color 

function setBackgroundColor(keyId){


    const key = document.getElementById(keyId)

    key.classList.add("bg-orange-400")
}


// remove background color 

function removeBackgroundColor(keyId){


    const key = document.getElementById(keyId)

    key.classList.remove("bg-orange-400")
}


//add element on play screen


function showElementOnScreen(){
    
    const screen = document.getElementById("playScreen")

    const alphabets = getRandomAlphabets()

    screen.innerText = alphabets

    setBackgroundColor(alphabets.toUpperCase())
}

// update score 

function updateUserScore(scoreId){

    let currentScore = document.getElementById(scoreId)

    let scoreText = currentScore.innerText

    const scoreInNumber = parseInt(scoreText)

    return scoreInNumber

}


//show player score

function addUserScore(id, value){

    const element = document.getElementById(id)

    element.innerText = value
}

// game Over 

function gameOver(){

    enterGame("#playGround","#finalResult")

}

function playAgain(){

    enterGame("#finalResult","#playGround")

    addUserScore("score", 0)
    addUserScore("chances", 5)
}