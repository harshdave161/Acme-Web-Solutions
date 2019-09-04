const btn=document.querySelector('#becall');
const headerr= document.querySelector('#headerr');
function clicked (){
btn.setAttribute('style','display:none;');
headerr.setAttribute('style', 'justify-content: space-evenly;');
}
const home=document.querySelector('.home');
function Home(){
    location.reload();
    console.log('verrr');
}
