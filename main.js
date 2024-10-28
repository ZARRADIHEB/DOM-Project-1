function plus() {
  let plusBtn = document.getElementsByClassName('plus');
  let value = document.getElementById('quantity')
  for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].value = parseInt(plusBtn[i].value || 0) + 1;
  }
  value.innerText = plusBtn[i].value
}





function like() {
  var likeBtn = document.getElementById('like')
  if( likeBtn.style.color == "red") {
    likeBtn.style.color = ""
  }
  else {
    likeBtn.style.color = "red"
  }
}


function heart() {
  var heart = document.getElementById('heart')
  if( heart.style.color == "red") {
    heart.style.color = ""
  }
  else {
    heart.style.color = "red"
  }
}