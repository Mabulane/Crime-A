var config = {
    apiKey: "AIzaSyDuosjPXWSDLzeeKxOeoa3yxllNqsQMNzA",
    authDomain: "c-alert-fca23.firebaseapp.com",
    databaseURL: "https://c-alert-fca23.firebaseio.com",
    projectId: "c-alert-fca23",
    storageBucket: "c-alert-fca23.appspot.com",
    messagingSenderId: "227857367691",
    appId: "1:227857367691:web:85bb32f9a43a5a5566ca8e",
    measurementId: "G-V0VRNJM2T3"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const db =firebase.firestore();

const database = firebase.database();
const UserRef=database.ref('Users');
const alertRef=database.ref('Alerts');
const historyRef=database.ref('History');
const policeReef=database.ref('Police');

/*
const sendAlert =document.querySelector('#create-alert');
db.collection('Alerts').get().then(snapshot=>{
    setUIAlerts(snapshot.docs);
});
sendAlert.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('Alerts').add({
        alertName:sendAlert['altName'].value,
        alertDiscription:sendAlert['disc'].value,
        geolocation:sendAlert['location'].value
    }).then(()=> {
        sendAlert.reset();
    });
});

*/


/*const alertList =document.querySelector('#Alert-list');
function renderAlert(doc){
    let li =document.createElement('li');
    let name = document.createElement('span');
    let discriptin = document.createElement('span');
    let location =document.createElement('span');

    li.setAttribute('data-id',doc.id);
        name.textContent=doc.data().alertName;
        discriptin.textContent= doc.data().alertDiscription;
        location.textContent = doc.data().geolocation;

        alertList.appendChild(li);
}  

db.collection('Alerts').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        renderAlert(doc);
    });
});


  <h3>Rape</h3>
        <p>Robbery in progress, @ Soshanguve L near Metseng Primary School. Suspect wearing all black</p>
        <span id="location">Soshanguve</span> 
        <span id="timing" >09:58</span>*/
