function toggleImage() {
  const image = document.getElementById('profile-pic');
  if (image.style.transform == 'scale(3)') {
    image.style.transform = 'scale(1)';
  } else {
    image.style.transform = 'scale(3)';
  }
}

function enterName() {
  var name = prompt("Enter your name");
  document.getElementById('name').innerHTML = 'Hello, ' + name + ' welcome to my page!';
}
function changeColor(num) {
  if (num == 1) {
    document.getElementById("navColor1").style.color = "red";
  } else if (num == 2) {
    document.getElementById("navColor2").style.color = "red";
  } else if (num == 3) {
    document.getElementById("navColor3").style.color = "red";
  } 
}
function revertColor(num) {
  if (num == 1) {
    document.getElementById("navColor1").style.color = "rgb(5, 205, 255)";
  } else if (num == 2) {
    document.getElementById("navColor2").style.color = "rgb(5, 205, 255)";
  } else if (num == 3) {
    document.getElementById("navColor3").style.color = "rgb(5, 205, 255)";
  }

  
}