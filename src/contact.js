import imgsrc from './contact.jpg';
export function contactdiv(){
    const div= document.createElement('div');
    div.classList.toggle('outer-div');
    const innerdiv= document.createElement('div');
    innerdiv.classList.toggle('inner-div');
    const img= new Image();
    img.src=imgsrc;
    img.classList.toggle('image');
    innerdiv.appendChild(img);
    const p= document.createElement('p');
    p.innerHTML="Address:     124 Conch Street, Bikini Bottom, Pacific Ocean<br>Employees:     SpongeBob Squarepants(Cook), Squidward Tentacles(Cashier)";
    innerdiv.appendChild(p);
    div.appendChild(innerdiv);
    return div;
};