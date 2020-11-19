function validate(e) {
  var emailAddress = document.querySelector("#email").value;
  console.log(emailAddress);
  var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailFilter.test(emailAddress)) {
    alert("E-mail inválido");
    return false;
  }

  alert(`Bem-vindo ${emailAddress}!`);
  return true;
}

document.getElementById("validateEmail").onsubmit = validate;
