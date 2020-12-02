const logUserOut = document.querySelector('#log-user-out');
logUserOut.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        window.location='signin.html';
        console.log(user);
    });

});