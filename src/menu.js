import menuimg1 from './menu.jpg';
export function menudiv(){
    const div= document.createElement('div');
    div.classList.toggle('outer-div');
    const innerdiv= document.createElement('div');
    innerdiv.classList.toggle('inner-div');
    const img= new Image();
    img.src=menuimg1;
    img.classList.toggle('image');
    innerdiv.appendChild(img);
    const p= document.createElement('p');
    p.innerText="Best Food in Town at Best Prices";
    innerdiv.appendChild(p);
    div.appendChild(innerdiv);
    return div;
};