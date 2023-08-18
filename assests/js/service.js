function submitForm() {
    var email = document.getElementById('email').value;
    var query = document.getElementById('query').value;

    var payload = {
        "email_id": email,
        "query": query
    };

    fetch('https://indivest.dev.racecondition.io/authService/api/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the API here
        console.log(data);
        // You can display a popup, show a message, or perform other actions
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });
}
