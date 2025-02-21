$(document).ready(function () {
    $("#openModalBtn").click(function () {
        $("#signupModal").modal("show");
    });

    $("#signupForm").submit(function (event) {
        event.preventDefault();
        var email = $("#emailInput").val();
        var password = $("#passwordInput").val();
        var confirmPassword = $("#confirmPasswordInput").val();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setTimeout(function () {
            alert("Signup Successful!");
            $("#signupModal").modal("hide");
        }, 1000);
    });
});