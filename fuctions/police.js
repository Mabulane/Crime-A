const signUp = document.querySelector('#signup-form');
//const submitTT =document.querySelector('#submitT');
const registryDate =new Date();


signUp.addEventListener('submit',(e) =>{
  e.preventDefault();
if(signUp['user-email'].value !=null  ){
  ///Erro
    const email = signUp['user-email'].value;
    const pass= signUp['user-password'].value;

      //first name/
      var numbers = /[0-9]/g;
     if (signUp['polIDnum'].value.match(numbers)  ){
     
      if (signUp['empNO'].value.match(numbers)  ){
        
        //if (signUp['empNO'].value.match(numbers) ) {
          //document.getElementById("pgLoader").style.display="none";
      //}else{
        //document.getElementById("verifyName").innerHTML=`<p></p>`;
        // document.getElementById("verifyName").style.display = "none";
      
                    auth.createUserWithEmailAndPassword(email,pass).then(cred=>{
                      // console.log(cred.user);
                        //document.location.href="index.html";
                        //return db.collection('Users').doc(cred.user.uid).set({
                         
                        // console.log(cred.user);
                        //document.location.href="index.html";
                        //autoId=database.ref('Users').push().key;
                       // database.ref('Users').child(autoId).set({

                        //Nate 
                        //
                        // pWorkNumber : 217396
                        //idNumber : 9505125305089
                        // stationName :KillerForce
                        //name : Nate
                       //surname : Masiya

                        const  userID = cred.user.uid ;
                         
                        //policeReef.child(userID).set({
                          return db.collection('Users').doc(cred.user.uid).set({
                            pWorkNumber : signUp['polIDnum'].value,
                            idNumber : signUp['empNO'].value,
                            stationName :'Soshanguhve',
                            name : 'Nate',
                            surname : 'Masiaya',
                            email :signUp['user-email'].value,
                            password :signUp['user-password'].value
                            
                            //registryDate
                            
                        }).then(()=>{
                          signUp.reset();   
                         window.location='police.index.html';
                          //document.location.href="index.html";
                     // });
                    }); })
                        .catch(function(error){
                        document.getElementById("pgLoader").style.display="none";
                        
                        var errorCode = error.code;
                        var errorMessage = error.message;


             
                //email name
                        if (errorCode == 'auth/email-already-in-use') {
                          document.getElementById("pgLoader").style.display="none";
                          alert('Email entered is already in use');
                          document.getElementById("verifyEmail").innerHTML=`<p>Email entered is already in use</p>`;
                        }
                    
                        if (errorCode == 'auth/invalid-email') {
                            alert('The please Enter a valid Email');
                            
                          } else {
                            alert(errorMessage);
                          }
                        });
                        if(signUp['polIDnum'].value.lenght !=13 ) {
                          alert('The please Enter a valid ID number');
                        }
                          if(signUp['empNO'].value.lenght !=6 ) {
                            alert('The please Enter a valid Employee');
                          }


                        
              }else{
                alert('invalidi Emp No or Id entered');  
              }
            }else{
              alert('The please Enter a valid ID number');
            }
          }else{
            alert('The please Enter a valid Employee');
            }   
             
        });

      