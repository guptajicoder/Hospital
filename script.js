let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let winning_methds =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const dis = ()=>{
for(box of boxes){
  box.disabled = true;
}
}
let para = document.querySelector("h2")
const showwinner = (winner)=>{
para.innerText = `Winner oF THE GAME IS ${winner}`
para.classList.remove("hide")
dis()
}
const en = ()=>{
  for(box of boxes){
    box.disabled = false;
    box.innerText = ""
}
}
const rest = ()=>{
en()
para.classList.add("hide")
}
let turnO = true;
boxes.forEach((box)=>{
    box.addEventListener('click',function() {       
        console.log("box was click")
      if( turnO){
        box.innerText = "O";
        turnO =false;
      }
      else {
        box.innerText = "X";
        turnO = true;
        }
     box.disabled = true;
     checkwinner()
   })
})
const checkwinner = ()=>{
  for(pattern of winning_methds){
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
    let pos1value = boxes[pattern[0]].innerText
    let pos2value = boxes[pattern[1]].innerText
    let pos3value = boxes[pattern[2]].innerText
    if( pos1value!=0 && pos2value!=0 && pos3value!=0){
      if(pos1value ==pos2value && pos2value==pos3value){
        console.log("is the winner")
        showwinner(pos1value)
      }
    }
    
  }
}
reset.addEventListener("click", rest)
