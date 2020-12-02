//Get element
const menu =document.querySelector('#menu');
const closeMenu = document.querySelector('#closeNav');
const loggedinLink =document.querySelectorAll('.loggedIN');
const notlogedLink =document.querySelectorAll('.notlogged');

menu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#sideMenu').style.width ="250px";
});
closeMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#sideMenu').style.width ="0";
});


setupUI =(user)=>{
    if(user){
        loggedinLink.forEach(achurTag => achurTag.style.display='block');
        notlogedLink.forEach(achurTag=> achurTag.style.display='none');
    }else{
        loggedinLink.forEach(achurTag => achurTag.style.display='none');
        notlogedLink.forEach(achurTag=> achurTag.style.display='block');
    }
}
auth.onAuthStateChanged(user=>{
    if(user){
      setupUI(user);
    }else{
    setupUI();
  }
  });