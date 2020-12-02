const resetPass =document.querySelector("#resetBtn");
const inputedEmail =document.querySelector("#setToemail");
const pageONload =document.querySelector("#pgLoader");
const emalForm=document.getElementById("forgotPassword-form");



resetPass.addEventListener('click',(e)=>{
  e.preventDefault();
   
    const email =inputedEmail.value;
    console.log(email);
    if(email!=null){
      document.getElementById("pgLoader").style.display="flex";
    auth.sendPasswordResetEmail(email).then(()=>{

        console.log('Successfull please your Email for reset password link!!');
    })  .catch(function(error) {
      document.getElementById("pgLoader").style.display="none";
      
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/user-not-found') {
          alert('The emails is not resgistered');
        } else {
          alert(errorMessage);
        }
        //console.log(error);
      }).then(()=>{
        
      emalForm.reset();

      document.getElementById("pgLoader").style.display="none";
      //success pop up

      
      });
    } else{
            //console.log('enter emaill');
          //display  eer popup
    }
});
/*
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});



https://firebase.google.com/docs/reference/js/firebase.auth.Auth


ERRO CODES=================
auth/email-already-in-use
Thrown if there already exists an account with the given email address.
auth/invalid-email
Thrown if the email address is not valid.
auth/operation-not-allowed
Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
auth/weak-password


OTHER====================
confirmPasswordReset
confirmPasswordReset ( code :  string ,  newPassword :  string ) : Promise < void >
Completes the password reset process, given a confirmation code and new password.

Error Codes
auth/expired-action-code
Thrown if the password reset code has expired.
auth/invalid-action-code
Thrown if the password reset code is invalid. This can happen if the code is malformed or has already been used.
auth/user-disabled

Thrown if the user corresponding to the given password reset code has been disabled.
auth/user-not-found

Thrown if there is no user corresponding to the password reset code. This may have happened if the user was deleted between when the code was issued and when this method was called.
auth/weak-password
*/