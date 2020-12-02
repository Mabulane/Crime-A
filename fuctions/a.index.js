const alertList =document.querySelector('.alert-List');
const PalertList =document.querySelector('.alert-ListP');
const Ualerts =document.querySelector('.userAlerts');
const alertsNear =document.querySelector('#UserSounding');
const atUser =document.querySelector('#bookmark-id');
//const allAlers =document.querySelector('#allAlers');  //order by Date

//const DisplayT =document.querySelector('#provinceAlerts');

//const media =document.querySelector('img');
/*
db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});*/

alertRef.once('value', (snapshot) => {
  let html='';
  snapshot.forEach((child) => {
    var childKey = child.key;
    var childData = child.val().description;
    console.log(childKey,childData);
    //if()
    const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date">${ child.val().dateReported} </span>
           <h3>${ child.val().category}</h3>
           <p>${ child.val().message}</p>
           <span class="location">${ child.val().location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           
         </div>
     </div> <br> 
        `; 
        html +=li;

  });
  alertList.innerHTML=html;
});



alertRef.once('value', (snapshot) => {
  let html='';
  snapshot.forEach((child) => {
    var childKey = child.key;
    var childData = child.val().description;
    console.log(childKey,childData);

    const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date">${ child.val().dateReported} </span>
           <h3>${ child.val().category}</h3>
           <p>${ child.val().message}</p>
           <span class="location">${ child.val().location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           <a href="mapsSearch.html" class="AcceptBtn">Accept</a>
         </div>
     </div> <br> 
        `; 
        html +=li;

  });
  PalertList.innerHTML=html;
});

/**===============User Alert============== */



atUser.addEventListener('click',(e)=>{
  e.preventDefault();


    
alertRef.once('value', (snapshot) => {
  let html='';
  snapshot.forEach((child) => {
    var childKey = child.key;
    var childData = child.val().description;
    console.log(childKey,childData);

    const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date">${ child.val().dateReported} </span>
           <h3>${ child.val().category}</h3>
           <p>${ child.val().message}</p>
           <span class="location">${ child.val().location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           <a href="mapsSearch.html" class="deleteBtn">Delete</a>
         </div>
     </div> <br> 
        `; 
        html +=li;

  });
  Ualerts.innerHTML=html;
});



});



const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var datepost =alert.dayPosted;
        //datepost =months[datepost.getMonth()];
        //datepost= datepost.getMonth();  ${datepost}
        console.log(alert.name);
        const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date"> ${datepost}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           <a href="mapsSearch.html" class="AcceptBtn">Accept</a>
         </div>
     </div> <br> 
        `; 
        html +=li;
    });
    alertList.innerHTML=html;
};

//var ViewUserProvince  ;
//DisplayT.innerHTML=ViewUserProvince;

    auth.onAuthStateChanged(user => {
      
      if(user){
          
          
        db.collection('Users').doc(user.uid).onSnapshot().then(doc=>{
                ViewUserProvince= doc.data().province;
                
                //console.log(ViewUserProvince);
   
            alertsNear.addEventListener('click',(e)=>{
            e.preventDefault();
           //db.collection('Alerts').get().then(snapshot => {
           db.collection('Alerts').where('location','==',ViewUserProvince).OrderBy('dateReported' && '').onSnapshot().then(snapshot => {
                  setUIAlerts(snapshot.docs);
                  //console.log(snapshot.docs);  array-contains
            });
   
                
          }); 
        });
                
  } 
  
});


/*=================================
const alertList =document.querySelector('.alert-List');

const alertsNear =document.querySelector('#UserSounding');
const allAlers =document.querySelector('#allAlers');  //order by Date

const DisplayT =document.querySelector('#provinceAlerts');

//const media =document.querySelector('img');

db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var datepost =alert.dayPosted;
        //datepost =months[datepost.getMonth()];
        //datepost= datepost.getMonth();  ${datepost}
        const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date"> ${datepost}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           <a href="mapsSearch.html" class="AcceptBtn">Accept</a>
         </div>
     </div> <br> 
        `; 
        html +=li;
    });
    alertList.innerHTML=html;
};

//var ViewUserProvince  ;
//DisplayT.innerHTML=ViewUserProvince;

    auth.onAuthStateChanged(user => {
      
      if(user){
          
          
        db.collection('Users').doc(user.uid).get().then(doc=>{
                ViewUserProvince= doc.data().province;
                
                console.log(ViewUserProvince);
   
            alertsNear.addEventListener('click',(e)=>{
            e.preventDefault();
           //db.collection('Alerts').get().then(snapshot => {
           db.collection('Alerts').where('location','==',ViewUserProvince).OrderBy('datepost').get().then(snapshot => {
                  setUIAlerts(snapshot.docs);
                  //console.log(snapshot.docs);  array-contains
            });
   
                
          }); 
        });
                
  } 
  
});



*/