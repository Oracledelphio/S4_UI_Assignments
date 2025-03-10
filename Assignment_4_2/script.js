document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const age = parseInt(document.getElementById("age").value);
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const today = new Date();
    const birthDate = new Date(dob);
    const ageFromDOB = today.getFullYear() - birthDate.getFullYear();

    if (age < 15 || age > 30 || ageFromDOB < 15 || ageFromDOB > 30) {
      alert("Age must be between 15 and 30.");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

    const nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent = `First Name: ${firstName}, Last Name: ${lastName}`;
  });
