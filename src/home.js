import homeimg1 from './home.jpg';
export function homediv(){
    const div= document.createElement('div');
    div.classList.toggle('outer-div');
    const innerdiv= document.createElement('div');
    innerdiv.classList.toggle('inner-div');
    const homeimg= new Image();
    homeimg.src=homeimg1;
    homeimg.classList.toggle('image');
    innerdiv.appendChild(homeimg);
    const p= document.createElement('p');
    p.innerText="Welcome to Krusty Krab Home Page. The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular and best known restaurant in Bikini Bottom. It is very famous for its Krabby Patty Burgers. ";
    innerdiv.appendChild(p);
    div.appendChild(innerdiv);
    return div;
};


