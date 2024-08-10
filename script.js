let displayTurn=document.querySelector(".whoseTurn");
console.log(displayTurn);

let tiles=document.querySelectorAll(".tile");
console.log(tiles);

let winner=document.querySelector(".winner");
console.log(winner);

let resetbtn=document.querySelector("#reset");
console.log(resetbtn);

let newGame=document.querySelector("#newBtn");
console.log(newGame);

let message=document.querySelector(".winningMsg");
console.log(message);
let block=document.querySelector("#block");
console.log(block);

let winningArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let xturn=true;
let count=0;
let player="X";

function winnerAnnounce(){
 message.innerText=`Player ${player} Wins!!`;
 count=0;
 winner.style.display="flex";
 block.style.display="none";
 resetbtn.style.display="none";
 displayTurn.innerText="";
}
function drawFunction(){
  count=0;
  displayTurn.innerHTML="<h1>It's a TIE!!</h1>"
  winner.style.display="none";
}

function winCheck(){
  winningArr.forEach((item)=>{
    // console.log(item[0]);
    // console.log(tiles[item[0]].innerText);
    let[ele1,ele2,ele3]=[
        tiles[item[0]].innerText,
        tiles[item[1]].innerText,
        tiles[item[2]].innerText
    ];
    if(ele1 != "" && ele2 != "" && ele3!= ""){
        if(ele1 === ele2 && ele2 === ele3){
            winnerAnnounce(ele1);
            player=ele1;
        }
    }
  });
}


tiles.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(xturn){
            xturn=false;
            player="X"
            displayTurn.innerHTML=`<h2>Player X's Turn</h2>`
            item.innerText="X";
        }else{
            xturn=true;
            player="O";
            displayTurn.innerHTML=`<h2>Player O's Turn</h2>`
            item.innerText="O";
        }
        count++;
        if(count==9){
            drawFunction();
        }
        winCheck();
    });
});

resetbtn.addEventListener("click",()=>{
    count=0;
    xturn=true;
    tiles.forEach((item)=>{
        item.innerText="";
    });
    winner.style.display="none";
     displayTurn.innerHTML=`<h2>Player X's Turn</h2>`
    
});

newGame.addEventListener("click",()=>{
    count=0;
    xturn=true;
    tiles.forEach((item)=>{
        item.innerText="";
    });
    block.style.display="grid";
    resetbtn.style.display="flex";
    winner.style.display="none";
    displayTurn.innerHTML=`<h2>Player X's turn</h2>`;
})