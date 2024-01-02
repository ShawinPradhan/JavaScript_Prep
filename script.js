function validateForm() {
    // Get form input values
    const firstName = document.querySelector('input[placeholder="First name"]').value;
    const surName = document.querySelector('input[placeholder="SurName"]').value;
    const email = document.querySelector('input[placeholder="Email address"]').value;
    const password = document.querySelector('input[placeholder="New password"]').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    // Simple validations
    if (firstName === '' || surName === '' || email === '' || password === '' || day === '' || month === '' || year === '' || !gender) {
      alert('Please fill in all fields and select a gender.');
      return false; // Prevent form submission
    }
    
    alert("Registered successfully");
    return true; // Allow form submission
  }


  window.onscroll = function () {
    var fixedNavbar = document.getElementById("fixedNavbar");
    var header = document.querySelector("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        fixedNavbar.style.display = "block";
        header.style.display = "none";
    } else {
        fixedNavbar.style.display = "none";
        header.style.display = "block";
    }
};
