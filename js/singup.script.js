var form = document.getElementById('register')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var username = document.getElementById('username').value
    var phone = document.getElementById('phone').value
    var email= document.getElementById('email').value
    var password= document.getElementById('password').value

fetch('http://127.0.0.1:8000/api/register/',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "firstname": firstname ,
        "lastname": lastname ,
        "username": username ,
        "phone" : phone ,
        "email": email ,
        "password": password
    })
})
   .then(res => {
      return res.json()
   })
   .then(data => console.log(data))
   .catch(error => console.log('ERROR'))
})
