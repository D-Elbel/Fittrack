function register(){
    fetch('http://localhost:3000/api/registration', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({firstname: document.getElementById("firstname").value, lastname: document.getElementById("lastname").value, email: document.getElementById("email").value, password: document.getElementById("password").value})
}).then(res => res.json())
  .then(res => console.log("test"));
}