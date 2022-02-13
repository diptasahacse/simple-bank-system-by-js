document.getElementById('login-btn').addEventListener('click', function(){
    const myEmail = 'diptasaha.lpu.cse@gmail.com';
    const myPassword = '11712644';
    const inputEmail = document.getElementById('email-field').value;
    const inputPassword = document.getElementById('password-field').value;
    
    if(myEmail == inputEmail && myPassword == inputPassword){
        window.location.href = 'account.html';

    }
    else{
        alert('Incorrect Email or password');
    }
    
});
document.getElementById('email-field').addEventListener('keyup',function(event){
    if(event.target.value.includes('@')){
        document.getElementById('login-btn').classList.remove('hidden');
        
    }
    else{
        document.getElementById('login-btn').classList.add('hidden');

    }

});