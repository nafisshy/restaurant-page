import './style.css';
import homediv from './home.js';
console.log("It's wo");
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
   
 element.style.cssText="background-colour:white; width:75%; height:45%";
 
    return element;
  }
 
  document.body.appendChild(component());