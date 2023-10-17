function validateForm() {
 
  const email = document.getElementById("loginmail").value;
  const password = document.getElementById("pass").value;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";


  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    return false;
  }

 
  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long.";
    return false;
  }


  return true;
}
