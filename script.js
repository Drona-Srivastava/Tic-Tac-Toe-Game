let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg")
let turnO = true //playerX, playerO
let pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.classList.add("O");
            box.classList.remove("X");
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.classList.add("X");
            box.classList.remove("O");
        }
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (Winner) => {
    msg.innerText = `Congratulations Winner is ${Winner}`;
    msgcont.classList.remove("hide");
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = () => {
    for(let pat of pattern){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                setTimeout(function(){
                    showWinner(pos1);
                },700);  // 1 sec delay in showing the result
                disable();
            }
            else{
                msg.innerText = "It is a Draw";
                msgcont.classList.remove("hide");
            }
        }
    }
}

const resetgame = () => {
    turnO = true;
    enable();
    msgcont.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);