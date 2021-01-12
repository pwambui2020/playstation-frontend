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

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }




