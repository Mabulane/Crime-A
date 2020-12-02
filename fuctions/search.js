const displaySearch=document.getElementById('viewSearch');
const searchThis =document.querySelector('#searchText');
const startSearch =document.querySelector('#nowSearch');





const setSeachView = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var datepost =alert.dayPosted;
        const li=`
         <div class="a-card">
         <div class="a-info">
         <span class="a-date">${datepost.toDate("yyyy-mm-dd")}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
         </div>
     </div> <br>
        `;
        html +=li;
    });
    displaySearch.innerHTML=html;
};

 
  
      
        startSearch.addEventListener('click',(e)=>{
         // e.preventDefault();
          if (searchThis.value !="") {
                db.collection('Alerts').where('name', 'array-contains' ,searchThis.value ).get().then(snapshot => {    
               // db.collection('Users').where('name', 'array-contains' ,searchThis.value ).get().then(snapshot => {
                  setSeachView(snapshot.docs);
                  });
               // });
          }
     })

   
 