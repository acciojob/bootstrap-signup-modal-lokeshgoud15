//your JS code here. If required.
  document.addEventListener("DOMContentLoaded", function () {
        var myModal = new bootstrap.Modal(document.getElementById("signupModal"));

        document.getElementById("openModalBtn").addEventListener("click", function () {
            myModal.show();
        });
    });