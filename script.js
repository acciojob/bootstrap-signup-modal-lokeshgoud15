 $(document).ready(function () {
        // Open modal when "Sign Up" button is clicked
        $("#openModalBtn").click(function () {
            console.log("Sign Up button clicked, opening modal...");
            $("#signupModal").modal("show"); // Show modal
        });

        // Log when modal is shown
        $('#signupModal').on('shown.bs.modal', function () {
            console.log("Modal is now visible!");
        });

        // Log when modal is hidden
        $('#signupModal').on('hidden.bs.modal', function () {
            console.log("Modal is now hidden!");
        });

        // Handle form submission using AJAX
        $("#signupForm").submit(function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Get form data
            var formData = {
                email: $("#emailInput").val(),
                password: $("#passwordInput").val(),
                confirmPassword: $("#confirmPasswordInput").val()
            };

            console.log("Sending AJAX request with:", formData);

            // Simulate a successful signup response
            setTimeout(function () {
                alert("Signup Successful!");
                $("#signupModal").modal("hide"); // Close modal on success
            }, 1000);
        });
    });