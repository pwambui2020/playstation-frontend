var form = document.getElementById('bookform')
form.addEventListener('submit',function(e){
    e.preventDefault();
    var fullname = document.getElementById('fname').value
    var nickname = document.getElementById('nname').value
    var email = document.getElementById('email1').value

fetch('http://127.0.0.1:8000/api/booking/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({        
            "fullname": name,
            "nickname": name,
            "email": name
                 
         
    })
}).then(res => {
    return res.json()
})        
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
})



