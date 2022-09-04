const likebtn = document.querySelector(".like-button")
const likeIcon = document.querySelector("#icon")
const count = document.querySelector("#count")

let clicked = false;

likebtn.addEventListener('click', () => {
    if(!clicked){
        clicked = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent ++;
    }
    else{
        clicked = false;
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`
        count.textContent -1;
    }
})


document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    letsfetch()
    //renderCat()
    fetchingpets()
    //handleSubmit()

})


let petname = document.querySelector('#pet_name').value
let petage = document.querySelector('#pet_age').value
let petimage = document.querySelector('#pet_image').value

document.getElementById('reg-info').addEventListener('click', renderCat)


function handleSubmit(e){
    e.preventDefault()
    let catObject = {
        catname:e.target.petname.value,
        age:e.target.petage.value,
        image:e.target.petimage.value
    }
    
    renderCat(catObject)
}

function renderCat(catObject){
    fetch('http://localhost:3000/cats', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({catObject})
    })
    .then(response => response.json())
    .then(data => console.log(data))
    }






const names = document.querySelector("#names")
const image = document.querySelector(".image")
const ages = document.querySelector("#age")
const likes = document.querySelector(".like-button")


function renderpets(cat){
   const cards = document.getElementById('cards')
    names.innerHTML = cat.catname;
    image. src = cat.image
    ages.innerHTML = cat.age
    document.getElementById('fetched').appendChild(cards)
   
}

function letsfetch(){
    fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(data => data.forEach(cat => renderpets(cat)))
}
