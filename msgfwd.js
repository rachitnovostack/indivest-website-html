document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
});



document.getElementById("submit-btn").addEventListener("click", (e) => {
  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  
  // validate input
  if (email.trim().length) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRegex.test(email.trim())) {
      if (message.trim().length) {
        // Show loading indicator
        document.getElementById("loadingIndicator").style.display = "block";

        fetch("https://api.brevo.com/v3/smtp/email", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'api-key': config.op,
          },
          body: JSON.stringify({
              sender: {email: `${email}` },
              to: [{ email: "support@internovo.in" }],
              textContent: `from: ${email} \n message: ${message} \n `,
              subject: "Query from Indivest Website",
              replyTo: { email: `${email}` },
              // attachment: [
              //     {
              //         content: base64data,
              //         name: attachment.name,
              //     }
              // ],
              headers: {
                  'Content-Type': 'application/json',
              },
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Hide loading indicator
            document.getElementById("loadingIndicator").style.display = "none";
            // Display success message on the webpage
            document.getElementById("successMessage").innerText =
              "Email sent successfully!";
            document.getElementById("successMessage").style.display = "block";
          })
          .catch((error) => {
            console.error(error);
            // Hide loading indicator in case of an error
            document.getElementById("loadingIndicator").style.display = "none";
          });
      } else {
        alert("Please provide message!");
      }
    } else {
      alert("Please provide valid email!");
    }
  } else {
    alert("Please provide email!");
  }
});
