const userEmail =document.querySelector('#UserEmalAdress');
const userPassword =document.querySelector('#user-password');
const userName =document.querySelector('#User-name');
const userSurname =document.querySelector('#User-surname');
const userProvince =document.querySelector('#User-provence');
const userGender =document.querySelector('#User-gender');
const userContact =document.querySelector('#User-phone');
const userRigDate =document.querySelector('#User-date-registed');
//var dateReg;
auth.onAuthStateChanged(user => {
  
    if(user){
        //console.log(user);
        db.collection('Users').doc(user.uid).get().then(doc=>{
         // UserRef.get().then(doc=>{
          const userDetails =doc.data();
              userEmail.innerHTML= `${user.email}`;
              //userPassword.innerHTML= `${user.pass}`;
              userName.innerHTML= `${userDetails.first_name}`;
              userSurname.innerHTML= `${userDetails.last_name}`;
              userProvince.innerHTML= `${userDetails.province}`;
              userContact.innerHTML= `${userDetails.contact}`;
              userGender.innerHTML= `${userDetails.gender}`;
              //dateReg=userDetails.dateRegistered;
              
              userRigDate.innerHTML= `${userDetails.dateRegistered}`;
              // dateReg =dateReg.toDate();
               //console.log(dateReg);
         });
            
    }else{
      UserProfile.innerHTML= `<div class="loggedOut" center >Please Login</div>`;
    }
});
