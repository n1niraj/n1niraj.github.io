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
//reset button 
function resetContact() {
  document.getElementById("contactme").reset();

}

//Store data after clicking submit button

function storeData() {
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var cell = document.getElementById("cell").value;
  var morning = document.getElementById("Morning").checked;
  var afternoon = document.getElementById("Afternoon").checked;
  var evening = document.getElementById("Evening").checked;
  var option = document.getElementById("options").value;
  var message = document.getElementById("Messege").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("cell", cell);
  localStorage.setItem("morning", morning);
  localStorage.setItem("afternoon", afternoon);
  localStorage.setItem("evening", evening);
  localStorage.setItem("option", option);
  localStorage.setItem("message", message);

  alert("Messege Sent!\nThank you for reaching out, I will get back to you as soon as possible.");
};


