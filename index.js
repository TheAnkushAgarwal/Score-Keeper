const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector("#playTo")



let p1Score = 0;
let p2Score = 0;
let winningScore =3;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score++;
        p1Display.innerText = p1Score;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})
p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score++;
        p2Display.innerText = p2Score;
        if(p2Score === winningScore){ 
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
})


resetButton.addEventListener('click',reset)

function reset(){
    isGameOver=false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
}