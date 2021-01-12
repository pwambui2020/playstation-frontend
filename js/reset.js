$(document).ready(function() {
    $("#resetPasswordForm").submit(function(){
        var email = $("#email").val();
        var url = 'http://127.0.0.1:8000/api/password_reset/';
        fetch(url,{
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
                    $("#resetTokenCard").show();
                }else{
                    alert('There is no active user associated with the email');
                }  
            }).catch(error => {
                    alert('Server Error!!!')
                });
            event.preventDefault();
    });
    $("#resetTokenForm").submit(function(){
        var token = $("#token").val()
        var password = $("#password").val()
        var message = 'Password successfully updated'
        var url = 'http://127.0.0.1:8000/api/password_reset/confirm/';
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                "password": password,
                "token":token
            })
        }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data.status);
                if(data.status == 'OK'){
                    $("#resetTokenCard").hide();
                    $("#reset-message").show();
                    $("#resetLinkSent").append(message);
                }else if(data.status == 'not found'){
                    alert('Invalid token!!!');
                }else{
                    alert('Server error!!!')
                }
            }).catch(error => {
                    alert('Server Error!!!')
                });
            event.preventDefault();

    });
});

