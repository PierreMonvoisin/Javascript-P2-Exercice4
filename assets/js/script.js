let raz = document.getElementById("button");

let lastName = document.getElementById("lastname");
let name = document.getElementById("firstname");
let city = document.getElementById("city");

raz.onclick = function() {
  lastName.value = '';
  name.value = '';
  city.value = '';
};

// let form = document.getElementsByName("input").value;
//
// raz.onclick = function() {
//   form.value = '';
// };
