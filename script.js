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
    renderMembers()
    fetchingMembers()
})



const names = document.querySelector("#names")
const image = document.querySelector(".image")
const age = document.querySelector("#age")
const likes = document.querySelector(".like-button")

function renderMembers(cat){
    names.textContent = cat.catname;
    image.textContent= cat.image;
    age.textContent = cat.age;
    likes.textContent = cat.likes
}
renderMembers(fetchingMembers(cats))


function fetchingMembers(cats){
    fetch('http://localhost:3000/cats')
    .then(response => console.log(response.json()))
    .then(data => data.forEach(cat => renderMembers(cat)))
}