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
    fetchingMembers()
    e.preventDefault()
    // fetching()
})

const names = document.querySelector("#names")
const image = document.querySelector(".image")
const age = document.querySelector("#age")
const likes = document.querySelector(".like-button")

function renderMembers(cat){
    names.textContent = cat.catname;
    image.src = cat.image;
    age.textContent = cat.age;
}



function fetchingMembers(){
    fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(data => data.forEach(cat => renderMembers(cat)))
}


// function fetching(){
//     fetch('http://localhost:3000/cats')
//     .then(response => response.json())
//     .then(data => {
//         const details = document.querySelector('#footer')
//     data.forEach(cat => {
//         const list = document.createElement('li')

//         names.textContent = cat.catname;
//         image.textContent= cat.image;
//         age.textContent = cat.age;

//         list.appendChild(names)
//         list.appendChild(image)
//         list.appendChild(age)
//         console.log(list);
//         const card =document.querySelector('.cards')
//         card.append(list)
//         // details.append(card)
//         // details.append(list)

//     })
//     })
// }


document.querySelector('#reg-info').addEventListener('submit', handleSubmit)

const petName = document.querySelector('#pet_name')
const petAge = document.querySelector('#pet_age')
const petImage = document.querySelector('#pet_image')


function handleSubmit(e){
    e.preventDefault()
    const catObject = {
        catname:e.target.petName.value,
        age:e.target.petAge.value,
        image:e.target.petImage.value,
        id:0
    }
    addCats(catObject)
}

function addCats(catObject){
    fetch('http://localhost:3000/cats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(catObject)
    })
    .then(response => response.json())
    .then(cat => console.log(cat))
}