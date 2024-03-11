// document.getElementById("contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
// });



// document.getElementById("submit-btn").addEventListener("click", (e) => {
//   const email = document.getElementById("email").value;

//   const message = document.getElementById("message").value;


  
//   // validate input
//   if (email.trim().length) {
//     var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     if (emailRegex.test(email.trim())) {
//       if (message.trim().length) {
//         // Show loading indicator
//         document.getElementById("loadingIndicator").style.display = "block";

//         fetch("https://api.brevo.com/v3/smtp/email", {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//               'api-key': "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",
//           },
//           body: JSON.stringify({
//               sender: {email: `${email}` },
//               to: [{ email: "harsh@internovo.in" }],
//               textContent: `from: ${email} \n message: ${message} \n `,
//               subject: "Query from Indivest Website",
//               replyTo: { email: `${email}` },
//               // attachment: [
//               //     {
//               //         content: base64data,
//               //         name: attachment.name,
//               //     }
//               // ],
//               headers: {
//                   'Content-Type': 'application/json',
//               },
//           }),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//             // Hide loading indicator
//             document.getElementById("loadingIndicator").style.display = "none";
//             // Display success message on the webpage
//             document.getElementById("successMessage").innerText =
//               "Email sent successfully!";
//             document.getElementById("successMessage").style.display = "block";
//           })
//           .catch((error) => {
//             console.error(error);
//             // Hide loading indicator in case of an error
//             document.getElementById("loadingIndicator").style.display = "none";
//           });
//       } else {
//         alert("Please provide message!");
//       }
//     } else {
//       alert("Please provide valid email!");
//     }
//   } else {
//     alert("Please provide email!");
//   }
// });


const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const loadingSpinner = document.getElementById("loading-spinner");

form.addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();
// const name = document.getElementById("name");
const name = "-";
const email = document.getElementById("email");
const message = document.getElementById("message");
// const files = document.getElementById("files");
var dest = "internovoventures@gmail.com";
var website = "Indivest";
const formData = new FormData();
formData.append("name", name.value);
formData.append("email", email.value);
formData.append("message", message.value);
formData.append("dest",dest)
formData.append("website",website)


// for (let i = 0; i < files.files.length; i++) {
//     formData.append("files", files.files[i]);
// }


// Show the loading spinner
loadingSpinner.style.display = "block";

fetch("https://email-serve-gamma.vercel.app/upload_files", {
method: 'POST',
body: formData, 
})
.then((res) => {
// Hide the loading spinner regardless of the result
loadingSpinner.style.display = "none";

if (res.ok) {
// Email sent successfully
successMessage.textContent = 'Email sent successfully';
} else {
// Handle other responses or errors
successMessage.textContent = 'Error sending email';
}
})
.catch((err) => {
// Hide the loading spinner on error
loadingSpinner.style.display = "none";

console.error("Error occurred", err);
successMessage.textContent = 'Error sending email';
});
}