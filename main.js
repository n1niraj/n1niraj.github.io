// enlarge image 
function toggleImage() {
  const image = document.getElementById('profile-pic');
  if (image.style.transform == 'scale(3)') {
    image.style.transform = 'scale(1)';
  } else {
    image.style.transform = 'scale(3)';
  }
}
// Input name 
function enterName() {
  var name = prompt("Enter your name");
  document.getElementById('name').innerHTML = 'Hello, ' + name + ' welcome to my page!';
}
//onmouseover/onmouseout 
function changeColor(num) {
  if (num == 1) {
    document.getElementById("navColor1").style.color = "red";
  } else if (num == 2) {
    document.getElementById("navColor2").style.color = "red";
  } else if (num == 3) {
    document.getElementById("navColor3").style.color = "red";
  } else if (num == 4) {
    document.getElementById("navColor4").style.color = "red";
  } else if (num == 5) {
    document.getElementById("navColor5").style.color = "red";
  }
}

//onmouseover/onmouseout 
function revertColor(num) {
  if (num == 1) {
    document.getElementById("navColor1").style.color = "rgb(5, 205, 255)";
  } else if (num == 2) {
    document.getElementById("navColor2").style.color = "rgb(5, 205, 255)";
  } else if (num == 3) {
    document.getElementById("navColor3").style.color = "rgb(5, 205, 255)";
  } else if (num == 4) {
    document.getElementById("navColor4").style.color = "rgb(5, 205, 255)";
  } else if (num == 5) {
    document.getElementById("navColor5").style.color = "rgb(5, 205, 255)";
  }
}
// Function to enlarge text size
function enlargeText() {
  document.body.style.fontSize = "20px";
}

// Toggle text colors for accessibility
function toggleColorMode() {
  const body = document.body;
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  }
}


// Function to display alt text 
function showAltText(elementId) {
  const element = document.getElementById(elementId);
  let altText;

  // Making the alert 
  if (element.tagName === 'IMG') {
    altText = element.alt;
  } else if (element.tagName === 'VIDEO') {
    const description = document.getElementById('alt-' + elementId);
    description.style.display = 'block';
    return; 
  }
  alert(` ${altText}`);
}
