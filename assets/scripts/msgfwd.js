document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
});

document.getElementById("submit-btn").addEventListener("click", (e) => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url = "https://api.brevo.com/v3/smtp/email";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify({
      sender: { name: "New message", email: "harsh@internovo.in" },
      to: [{ email: "harsh@internovo.in" }],
      // to: [{email:'siddharthsingh88505@gmail.com'}],
      // bcc: [{email: 'helen9766@example.com', name: 'Helen'}],
      // cc: [{email: 'ann6533@example.com', name: 'Ann'}],
      textContent: `${message} \n\n ${name} \n\n ${email}`,
      subject: "Message From INDIVEST",
      replyTo: { email: `${email}` },
      // attachment: [
      // {
      //     url: 'https://attachment.domain.com/myAttachmentFromUrl.jpg',
      //     content: 'b3JkZXIucGRm',
      //     name: 'myAttachment.png'
      // }
      // ],
      headers: {
        // 'sender.ip': '1.2.3.4',
        "Content-Type": "application/json",
        // 'X-Mailin-custom': 'some_custom_header',
        // idempotencyKey: 'abc-123'
      },
      // templateId: 2,
      // params: {FNAME: 'Joe', LNAME: 'Doe'},
      // messageVersions: [
      // {
      //     to: [{email: 'jimmy98@example.com', name: 'Jimmy'}],
      //     params: {FNAME: 'Joe', LNAME: 'Doe'},
      //     bcc: [{email: 'helen9766@example.com', name: 'Helen'}],
      //     cc: [{email: 'ann6533@example.com', name: 'Ann'}],
      //     replyTo: {email: 'ann6533@example.com', name: 'Ann'},
      //     subject: 'Login Email confirmation'
      // }
      // ]
      // tags: ['tag1'],
      // scheduledAt: '2022-04-05T12:30:00+02:00',
      // batchId: '5c6cfa04-eed9-42c2-8b5c-6d470d978e9d'
    }),
  };

  // validate input
  if (email.trim().length) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRegex.test(email.trim())) {
      if (message.trim().length) {
        fetch(url, options)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            console.log("gaya message");
            document.querySelector(".loader").style.display = "flex";
            setTimeout(() => {
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              setTimeout(() => {
                document.querySelector(".loader1").style.display = "none";
                document.querySelector(".loader .text").style.display = "none";
                document.querySelector(".success").style.display = "flex";
              }, 300);
              setTimeout(() => {
                document.querySelector(".loader").style.display = "none";
              }, 600);
            }, 3000);
          })
          .catch((err) => console.error("error:" + err));
      } else {
        alert("Please provide message!");
      }
    } else {
      alert("Please provide valid email!");
    }
  } else {
    alert("Please provide email!");
  }

  console.log(name, email, message);
});
