import './style.css';
import {homediv} from './home.js';
import {menudiv} from './menu.js';
import {contactdiv} from './contact.js';
function populate(){
  const homebtn=document.getElementById('home');
  homebtn.addEventListener('click',()=>{
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(homediv());
  });
  const menubtn=document.getElementById('menu');
  menubtn.addEventListener('click',()=>{
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(menudiv());
  });
  const contactbtn=document.getElementById('contact');
  contactbtn.addEventListener('click',()=>{
    document.body.removeChild(document.body.lastElementChild);
    document.body.appendChild(contactdiv());
  });
}
document.body.appendChild(homediv());
populate();
 
