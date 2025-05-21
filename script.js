
function validateForm() {
  let valid = true;

  document.querySelectorAll('.error').forEach(el => el.innerHTML = '');

  const name = document.myForm.name.value.trim();
  const zip = document.myForm.zip.value.trim();
  const country = document.myForm.country.value;
  const gender = document.myForm.gender.value;
  const phone = document.myForm.phone.value.trim();
  const password = document.myForm.password.value;
  const vpassword = document.myForm.vpassword.value;
  const prefs = document.querySelectorAll('input[name="prefs"]:checked');

  if (name === "") {
    document.getElementById("nameErr").innerHTML = " Please enter your name!";
    valid = false;
  } else if (name.length > 20) {
    document.getElementById("nameErr").innerHTML = " Max 20 characters!";
    valid = false;
  }

  if (zip === "") {
    document.getElementById("zipErr").innerHTML = " Required!";
    valid = false;
  }

  if (country === "") {
    document.getElementById("countryErr").innerHTML = " Required!";
    valid = false;
  }

  if (!gender) {
    document.getElementById("genderErr").innerHTML = " Required!";
    valid = false;
  }

  if (prefs.length < 2) {
    document.getElementById("prefsErr").innerHTML = " Select at least 2!";
    valid = false;
  }

  if (phone === "") {
    document.getElementById("phoneErr").innerHTML = " Required!";
    valid = false;
  }

  if (password.length < 6 || password.length > 8) {
    document.getElementById("passErr").innerHTML = " 6-8 characters required!";
    valid = false;
  }

  if (password !== vpassword) {
    document.getElementById("vpassErr").innerHTML = " Passwords do not match!";
    valid = false;
  }

  return valid;
}
