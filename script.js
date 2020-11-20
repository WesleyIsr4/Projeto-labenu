function validate(e) {
  var emailAddress = document.querySelector("#email").value;
  var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailFilter.test(emailAddress)) {
    alert("E-mail inválido");
    return false;
  }
  alert(`Bem-vindo ${emailAddress}!`);
  return true;
}

function IsEmpty() {
  if (document.forms["validateEmail"].email.value === "") {
    console.log("chegou carai!");
    alert("Preencha o campo com o seu email!");
    return false;
  }
  return true;
}

document.getElementById("validateEmail").onsubmit = validate;
