//for google form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxdhIA1nYnosNvrZkuvJPu8HMyspqBvzHKBt1VQ9pxYs--Vlegq4BamP2F2DRk_iVr9mg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});




