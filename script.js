const p1 = {
    display: document.querySelector("#p1"),
    button: document.querySelector("#p1btn"),
    score: 0
}
const p2 = {
    display: document.querySelector("#p2"),
    button: document.querySelector("#p2btn"),
    score: 0
}
const reset = document.querySelector("#reset");
const Sscore = document.querySelector("#score");
let winningscore = parseInt(Sscore.innerText);
let gameOver = false;


function MarkUpdation(player, opponent) {
    if (!gameOver) {
        player.score++;
        if (player.score === winningscore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}
p1.button.addEventListener("click", function(){
    MarkUpdation(p1, p2)
})
p2.button.addEventListener("click", function(){
    MarkUpdation(p2, p1)
})
score.addEventListener("change", function () {
    winningscore = parseInt(this.value);
    resetf();
})
reset.addEventListener("click", resetf)
function resetf() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}