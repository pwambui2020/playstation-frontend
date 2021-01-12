$(document).ready(function() {
    $("#resetPasswordForm").submit(function(){
        var email = $("#email").val();
        var obj;
        var status;
        var message = 'Link to reset your password has been sent to your Email. Please click it to reset your password';
        fetch('http://127.0.0.1:8000/api/password_reset/',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                'email': email,
            })
        }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data.status);
                if(data.status == 'OK'){
                    $("#resetPasswordCard").hide();
                    $("#resetLinkSent").append(message);
                }else{
                    alert('There is no active user associated with the email');
                }  
            }).catch(error => {
                    alert('Server Error!!!')
                });
            event.preventDefault();
    });
});

