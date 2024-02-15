
// enter ground by home scree 

const target = document.getElementById("enterGameButton")

target.addEventListener('click', function(){

    enterGame("#homePage","#playGround")

    showElementOnScreen()


})

//show random alphabet on screen

document.addEventListener('keyup', function(event){

    const playerInput = event.key

    const expectedInput = document.getElementById("playScreen").innerText.toLowerCase()

    const alphabets = getRandomAlphabets()


    // check user is user input and player input are equal 
    console.log();

    if( playerInput === expectedInput){

        showElementOnScreen()

        removeBackgroundColor(expectedInput.toUpperCase())




    }


})