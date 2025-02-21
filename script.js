//your JS code here. If required.
 document.addEventListener("DOMContentLoaded", function () {
        var myModal = new bootstrap.Modal(document.getElementById("signupModal"));

        document.getElementById("openModalBtn").addEventListener("click", function () {
            myModal.show();  // This will show the modal and manage its display correctly.
        });
    });