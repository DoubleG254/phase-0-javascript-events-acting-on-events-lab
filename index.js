const dodger = document.getElementById ("dodger");
function moveDodgerLeft(){
    const leftnumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftnumbers, 10);

    if(left>0){
        dodger.style.left=`${left -1}px`;
    }
}

function moveDodgerRight(){
    const leftnumber= dodger.style.left.replace("px","");
    const left= parseInt(leftnumber, 10);

    if (left<360) {
        dodger.style.left=`${left+1}px`
    }
}
document.addEventListener("keydown",function(e){
    if(e==="ArrowLeft"){
        moveDodgerLeft();
    }
    else if (e==="ArrowRight") {
        moveDodgerRight();
    }
 }
)
