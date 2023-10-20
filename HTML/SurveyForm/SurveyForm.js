function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = [];
    genderElements.forEach((element) => {
        if (element.checked) {
            gender.push(element.value);
        }
    });
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Check if any field is empty
    if (
        !firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile
    ) {
        alert("All fields are required. Please fill out all the fields.");
        return;
    }

    // Display the submitted data in a popup
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender.join(", ");
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    // Show the popup
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
