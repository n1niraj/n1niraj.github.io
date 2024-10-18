
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