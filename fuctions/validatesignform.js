var pWord = document.getElementById("user-password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
//comfirm password
var confirmPwd=document.getElementById("confrmPwd");
//verify name
var confirmName=document.getElementById("first-name");
//verify surname
var confirmSurname=document.getElementById("last-name");
//verify phone number
var confirmContact=document.getElementById("phone-no");

//verify gender
var confirmGender=document.getElementById("gender-type");
//verify Province
var confirmProvince=document.getElementById("province");












// When the user clicks on the password field, show the checkPwd box
pWord.onfocus = function() {
  document.getElementById("checkPwd").style.display = "block";
}

// When the user clicks outside of the password field, hide the checkPwd box
pWord.onblur = function() {
  document.getElementById("checkPwd").style.display = "none";
}

// When the user starts to type something inside the password field
pWord.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pWord.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pWord.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pWord.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(pWord.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

/*-------------------comfirm password
confirmPwd.onkeyup = function() {
  if(confirmPwd.value == pWord.value){
  document.getElementById("pwdCmfBox").style.display="block";
  document.getElementById("pwdCmfBox").innerHTML=`<p class="valid">password comfirmed</p>`;
  
  } else {
  document.getElementById("pwdCmfBox").style.display="block";
  document.getElementById("pwdCmfBox").innerHTML=`<p  class="invalid">Password Doesnt Match</b></p>`;
    }
  
  }
*/
//-------------------verify name  verifyName  verifygender  verifyProvence  verifyContact

confirmName.onfocus = function() {
  document.getElementById("verifyName").style.display = "block";
}
confirmName.onblur = function() {
  document.getElementById("verifyName").style.display = "none";
}

confirmName.onkeyup =function(){
   var numbers = /[0-9]/g;
  if (confirmName.value.match(numbers) ) {
 
     document.getElementById("verifyName").innerHTML=`<p  >First name cannot include a number</b></p>`;
 
   }else{
     document.getElementById("verifyName").innerHTML=`<p></p>`;
    // document.getElementById("verifyName").style.display = "none";
   }
 }

//-----onkey -verify surname 
confirmSurname.onfocus = function() {
  document.getElementById("verifySurname").style.display = "block";
}
confirmSurname.onblur = function() {
  document.getElementById("verifySurname").style.display = "none";
}

//--------------onkey fuction 
confirmSurname.onkeyup =function(){
  var numbers = /[0-9]/g;
  if (confirmSurname.value.match(numbers) ) {
    document.getElementById("verifySurname").innerHTML=`<p  class="invalid">Last name cannot include a number</b></p>`;
  }else{
    document.getElementById("verifySurname").innerHTML=`<p></p>`;
   // document.getElementById("verifyName").style.display = "none";
  }
}


 

//-----onkey -verify contact
confirmContact.onfocus = function() {
  document.getElementById("verifyContact").style.display = "block";
}
confirmContact.onblur = function() {
  document.getElementById("verifyContact").style.display = "none";
}
//--------------onkey fuction 
confirmContact.onkeyup=function(){
       var numbers = /[0-9]/g;
      if (confirmContact.value.match(numbers)) {
        
        document.getElementById("verifyContact").innerHTML=`<p></p>`;
      }else{
        document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;
      }

      /*if (confirmContact.value.length == 10 ) {
        document.getElementById("verifyContact").innerHTML=`<p></p>`;
      }else{
        document.getElementById("verifyContact").innerHTML=`<p>Invalid phone number</p>`;      
      }
      */
}

const sub = document.querySelector('#submit');
sub.addEventListener('submit',(e) =>{
    e.preventDefault();
document.getElementById("verifyName").style.display = "block";
document.getElementById("verifySurname").style.display = "block";

//document.getElementById("verifySurname").style.display = "block";
//document.getElementById("verifySurname").style.display = "block";
document.getElementById("verifyContact").style.display = "block";
});


/*

if (confirmGender !="none") {
  
}if (confirmProvince !="none") {
    
}
if(confirmPwd!=null){
  if(confirmName!=null){
    if (confirmSurname!=null) {
        if (confirmContact !=null) {
          if (confirmGender !="none") {
            if (confirmProvince !="none") {
              
            }
          }
        }
    }
  }
}
  
-------------------Dclaring varibles

const email = signUp['user-email'].value;
const pass= signUp['user-password'].value;
const first_name =  signUp['first-name'].value;
const last_name =signUp['last-name'].value;
const province= signUp['Province'].value;
const contact =signUp['phone-no'].value;*/