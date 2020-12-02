
const closePopup =document.querySelector('#updateBtn');
//    REAPET POPUP CALLER COZ IF its one,, its  doesnt other
const openPopup1 =document.querySelector('.callPopUp1');
const openPopup2 =document.querySelector('.callPopUp2');
const openPopup3 =document.querySelector('.callPopUp3');
const openPopup4 =document.querySelector('.callPopUp4');
const openPopup5 =document.querySelector('.callPopUp5');

const UpdateThis =document.querySelector('#edit');

var numbers = /[0-9]/g;

//=============close pop up=======================================================
openPopup1.addEventListener('click',(e)=>{
    e.preventDefault();

    document.querySelector('#upDateFieldN').innerHTML="Name";
    document.querySelector('.popUp').style.display="flex";
    closePopup.addEventListener('click',(e)=>{
            e.preventDefault();
            // lodear
                
//-----verify      

        

                if(UpdateThis.value !=""){
                  // VERIFIY  
      if(UpdateThis.value.match(numbers) && UpdateThis.value.length<15){
        document.querySelector('#verifyError').innerHTML="Invalid Name";
        document.querySelector('.popUp').style.display="flex";
        document.querySelector('#verifyError').style.display="flex";  
      }else{
        document.querySelector('#verifyError').innerHTML=``;
                  auth.onAuthStateChanged(user => {
                  if(user){
                            //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                            db.collection('Users').doc(user.uid).update({
                           // db.collection('Users').doc(userID).update({
                            first_name : UpdateThis.value
                            /*last_name :  signUp['last-name'].value,
                            province :  signUp['province'].value,
                            contact :  signUp['phone-no'].value,
                            gender :   signUp['gender-type'].value,*/
                    }).then(()=>{
                      document.querySelector('.popUp').style.display="none";   
                    });
                }
            });
          }
         
          }else{
            document.querySelector('.popUp').style.display="none";   
        }

      });
      
      UpdateThis.value="";
});

openPopup2.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('#upDateFieldN').innerHTML="Surname";
  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
      if(UpdateThis.value !=""){
        // VERIFIY  
      if(UpdateThis.value.match(numbers) && UpdateThis.value.length<15){
        document.querySelector('#verifyError').innerHTML="Invalid Surname";
        document.querySelector('.popUp').style.display="flex";
        document.querySelector('#verifyError').style.display="flex";  
      }else{
        document.querySelector('#verifyError').innerHTML=``;
        auth.onAuthStateChanged(user => {
        if(user){
                  //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                  db.collection('Users').doc(user.uid).update({
                // db.collection('Users').doc(userID).update({
                  //last_name : UpdateThis.value
                  last_name :  UpdateThis.value
                  /*province :  signUp['province'].value,
                  contact :  signUp['phone-no'].value,
                  gender :   signUp['gender-type'].value,*/
          }).then(()=>{
            document.querySelector('.popUp').style.display="none";   
          });
      }
    });
  }
    }else{
    document.querySelector('.popUp').style.display="none";   
    }
});
UpdateThis.value="";
});




openPopup3.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('#upDateFieldN').innerHTML="Province";
  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
  if(UpdateThis.value !=""){
    // VERIFIY  
    if(UpdateThis.value.match(numbers) && UpdateThis.value.length<15){
      document.querySelector('#verifyError').innerHTML="Invalid Province";
      document.querySelector('.popUp').style.display="flex";
      document.querySelector('#verifyError').style.display="flex";  
    }else{
      document.querySelector('#verifyError').innerHTML=``;th.onAuthStateChanged(user => {
        
            if(user){
                      //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                      db.collection('Users').doc(user.uid).update({
                    // db.collection('Users').doc(userID).update({
                    // first_name : UpdateThis.value
                      //last_name :  signUp['last-name'].value,
                    province :  UpdateThis.value
                    /* contact :  signUp['phone-no'].value,
                      gender :   signUp['gender-type'].value,*/
              }).then(()=>{
                document.querySelector('.popUp').style.display="none";   
              });
        }
      });
  }
    }else{
    document.querySelector('.popUp').style.display="none";   
    }
    });
    UpdateThis.value="";
  });


openPopup4.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('#upDateFieldN').innerHTML="Contact";
  document.querySelector('.popUp').style.display="flex";
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
  if(UpdateThis.value !=""){

    // vefify  contact
    if(UpdateThis.value.match(numbers) && UpdateThis.value.length==10){
     // document.querySelector('.popUp').style.display="flex";
      document.querySelector('#verifyError').innerHTML=``;

    auth.onAuthStateChanged(user => {
    if(user){
              //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
              db.collection('Users').doc(user.uid).update({
             // db.collection('Users').doc(userID).update({
              //first_name : UpdateThis.value
              //last_name :  signUp['last-name'].value,
             // province :  signUp['province'].value,
              contact :  UpdateThis.value
              //gender :   signUp['gender-type'].value,
      }).then(()=>{
        document.querySelector('.popUp').style.display="none";   
      });
  }
});
    }else{
      document.querySelector('#verifyError').style.display="flex";
      document.querySelector('#verifyError').innerHTML="Invalid contact number";
      
      document.querySelector('.popUp').style.display="flex";
      
      
    }
  }else{
  document.querySelector('.popUp').style.display="none";   
  }
});
UpdateThis.value="";
});

openPopup5.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('#upDateFieldN').innerHTML="Gender";
  document.querySelector('.popUp').style.display="flex";
  document.querySelector('#verifyError').innerHTML=``;
  closePopup.addEventListener('click',(e)=>{
    e.preventDefault();
    // lodear
      if(UpdateThis.value !=""){
// VERIFIY  GENDER
        if(UpdateThis.value.match(numbers) && UpdateThis.value.length<10){
          document.querySelector('#verifyError').innerHTML="Invalid Gender";
          document.querySelector('.popUp').style.display="flex";
          document.querySelector('#verifyError').style.display="flex";  
        }else{
          document.querySelector('#verifyError').innerHTML=``;
        auth.onAuthStateChanged(user => {
        if(user){
                  //var userID =db.collection('Users').doc(user.uid).get().then(doc=>{});
                  db.collection('Users').doc(user.uid).update({
                // db.collection('Users').doc(userID).update({
                /* first_name : UpdateThis.value
                  last_name :  signUp['last-name'].value,
                  province :  signUp['province'].value,
                  contact :  signUp['phone-no'].value,*/
                  gender :   UpdateThis.value
          }).then(()=>{
            document.querySelector('.popUp').style.display="none";   
          });
      }
    });
  }
}else{
document.querySelector('.popUp').style.display="none";   
}
    });
     UpdateThis.value="";
});



//=============close pop up=======================================================
closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});
/*  closePopup.addEventListener('click',(e)=>{
  e.preventDefault();

  document.querySelector('.popUp').style.display="none";
});       alertGeoLocation
*/




//==  End close pop up=======================================================
//https://firebase.google.com/docs/reference/js/firebase.User#updateProfile
//auth/wrong-password

