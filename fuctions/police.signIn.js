const signIn = document.querySelector('#signin-form');

signIn.addEventListener('submit',(e) => {
    e.preventDefault();
//get input variable 
    

    const email = signIn['user-email'].value;
    const pass= signIn['user-password'].value; 
    auth.signInWithEmailAndPassword(email,pass).then(cred=>{
       // console.log(cred.user);
        //document.location.href="index.html";
        document.getElementById("pgLoader").style.display="flex";
        auth.onAuthStateChanged(user=>{
            if(user){
            
            signIn.reset();
            window.location='police.index.html';
            }
        });
       
        

    })
    .catch(function(error){
        document.getElementById("pgLoader").style.display="none";
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/user-not-found') {
          alert('The emails is not resgistered on Crime-Alert');
        } else if (errorCode == 'auth/invalid-email') {
            alert('Please Enter a valid Email');
          }
          else if (errorCode == 'auth/wrong-password') {
            alert('Wrong password entered');
          } else {
            alert(errorMessage);
          }


    }) 
});
