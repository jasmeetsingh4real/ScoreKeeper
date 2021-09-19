const teamOneScore = document.querySelector('.t1')
const teamTwoScore = document.querySelector('.t2')
const selectMaxScore = document.querySelector("#maxScore")
// const options = document.querySelectorAll('option')
let maxScore = 4;
let t1 =0
let t2 =0
const team1Btn = document.querySelector("#team1Btn")
const team2Btn = document.querySelector("#team2Btn")
const resetBtn = document.querySelector("#resetBtn")
// const container = document.querySelector(".btns")
const headerImg = document.querySelector(".hearderPic")


team1Btn.addEventListener('click',()=>{
   if(t1<maxScore && t2<maxScore){
       teamOneScore.innerHTML = ++t1       
   }if(t1===maxScore){
        teamOneScore.innerHTML = t1
        teamOneScore.classList.add("green")
        teamTwoScore.classList.add("red")
        team1Btn.classList.add("lightGreen")
        team2Btn.classList.add("lightBlue")
        headerImg.src="./gameover.gif"
   }
})
team2Btn.addEventListener('click',()=>{
   if(t2<maxScore && t1<maxScore){
       teamTwoScore.innerHTML = ++t2;
   } if(t2===maxScore){
    teamTwoScore.innerHTML = t2
    teamTwoScore.classList.add("green")
    teamOneScore.classList.add("red")
    team1Btn.classList.add("lightGreen")
    team2Btn.classList.add("lightBlue")
    headerImg.src="./gameover.gif"
   }
})

selectMaxScore.addEventListener("change",function(){
    maxScore = parseInt( this.value)
    reset()
})

resetBtn.addEventListener("click",reset)

function reset(){
    
        if(t1==maxScore){
            teamOneScore.classList.remove("green")
            teamTwoScore.classList.remove("red")
        }
        if(t2==maxScore){
            teamTwoScore.classList.remove("green")
            teamOneScore.classList.remove("red")
        }
        team1Btn.classList.remove("lightGreen")
        team2Btn.classList.remove("lightBlue")
        t1=t2=0;
        teamOneScore.innerHTML = t1
        teamTwoScore.innerHTML = t2
        headerImg.src="./pic.jpg"
    
    
}

// container.addEventListener("mouseenter",()=>{
//     headerImg.classList.add("zoom")
// })
// container.addEventListener("mouseleave",()=>{
//     headerImg.classList.remove("zoom")
// })