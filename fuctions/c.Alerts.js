/*
const formCtAlert = document.querySelector('#create-alert');
formCtAlert.addEventListener('submit',(e) =>{
    e.preventDefault();
    const posteddate =new Date();
    auth.onAuthStateChanged(user => {
   if(user){
    var  userID = db.collection('Users').doc(user.uid);
  }
    const autoAlertId = alertRef.push().key;
    alertRef.child(autoAlertId).set({
   //db.collection('Alerts').add({
          name: formCtAlert['altName'].value,
          description: formCtAlert['disc'].value,
          location:formCtAlert['location'].value,
          //status:formCtAlert['location'].value,
          //reqMedAssistance:formCtAlert['location'].value,
          //geolocation:formCtAlert['location'].value,
          dayPosted:posteddate
   }).then(() =>{
    formCtAlert.reset();
    document.querySelector('.popUp').style.display="block";
   });
  });
});
 
*/


const formCtAlert = document.querySelector('#create-alert');

formCtAlert.addEventListener('submit',(e) =>{
  e.preventDefault();
  
    
  //var x = document.getElementById("demo");
  
  //function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      //x.innerHTML = "Geolocation is not supported by this browser.";
    }
  //}
  var longitude,latitude;
  
  function showPosition(position) {
   const lati = position.coords.latitude;
   const longi=position.coords.longitude;
  
  longitude =longi;
  latitude=lati;
  
  
  console.log(longitude);
  console.log(latitude);
  auth.onAuthStateChanged(user => {
 if(user){
  var  userId = user.uid;

 var posteddate =new Date();
 var newDate =newDate ,newTime ,month;
 
 month =posteddate.getMonth() + 1;
 
 newTime =posteddate.getHours() +':'+posteddate.getMinutes() +':'+ posteddate.getSeconds()+'s';
 newDate =posteddate.getDate()+'/'+ month+'/'+ posteddate.getFullYear();
console.log(posteddate);
console.log(newDate);
console.log(newTime);
  const autoAlertId = alertRef.push().key;
  alertRef.child(autoAlertId).set({
          alertID:autoAlertId,
          category: formCtAlert['altName'].value,
          message: formCtAlert['disc'].value,
          location:formCtAlert['location'].value,
          //status:formCtAlert['location'].value,
          //reqMedAssistance:formCtAlert['location'].value,
          geolatitude :lati,
          geologitude :longi,
          geolocation:new firebase.firestore.GeoPoint(latitude, longitude),
          dateReported:newDate,
          timeReported: newTime,
          userID:userId
   }).then(() =>{
    formCtAlert.reset();
    document.querySelector('.popUp').style.display="block";
   });
  }
  });
  
}
document.querySelector('.popUp').style.display="block";
});



/*===============================================================================
const formCtAlert = document.querySelector('#create-alert');

formCtAlert.addEventListener('submit',(e) =>{
    e.preventDefault();
    const posteddate =new Date();
    
//var x = document.getElementById("demo");

//function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    //x.innerHTML = "Geolocation is not supported by this browser.";
  }
//}
var longitude,latitude;

function showPosition(position) {
 const lati = position.coords.latitude;
 const longi=position.coords.longitude;

longitude =longi;
latitude=lati;


console.log(longitude);
console.log(latitude);

   db.collection('Alerts').add({
          name: formCtAlert['altName'].value,
          description: formCtAlert['disc'].value,
          location:formCtAlert['location'].value,
          //status:formCtAlert['location'].value,
          //reqMedAssistance:formCtAlert['location'].value,
          //geolatitude :lati,
          //geolatitude :longi,
          geolocation:new firebase.firestore.GeoPoint(latitude, longitude),
          dayPosted:posteddate
   }).then(() =>{
    formCtAlert.reset();
   });
}
});
*/