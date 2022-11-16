let firstImageSrc = document.querySelector("div#dice1 img");
let secondImageSrc = document.querySelector("div#dice2 img");
let decisionButton = document.querySelector("button");
let randomNumber1 = Math.round(Math.random() * 5) + 1;
let randomNumber2 = Math.round(Math.random() * 5) + 1;


decisionButton.addEventListener("click", (e)=>{
    //window.location.reload();
    if (decisionButton.innerText == "Check Decision"){
        firstImageSrc.setAttribute("src",`images/dice${randomNumber1}.png`);
        secondImageSrc.setAttribute("src",`images/dice${randomNumber2}.png`);
        let showWinner = document.querySelector("h1");
        if(randomNumber2 > randomNumber1){
            showWinner.innerText = "Back Out ASAP";
        }else if(randomNumber1 > randomNumber2){
            showWinner.innerText = "Go Ahead";
        }else{
            showWinner.innerText = "Follow Your Mind";
        }
        decisionButton.innerText = "Reset Decision"
    }else if(decisionButton.innerText == "Reset Decision"){
        window.location.reload();
    }
})

