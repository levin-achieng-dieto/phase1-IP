// const likebtn = document.querySelector(".like-button")
//     const likeIcon = document.querySelector("#icon")
//     const count = document.querySelector("#count")
    
    let clicked = false;

function likingThisPic(likebtn){
    return likebtn.querySelector('#icon i').classList.contains("far")
}

function liking(likebtn){
likebtn.addEventListener('click', () => {
    const x = likingThisPic(likebtn)

    if(likingThisPic(likebtn)){
        // clicked = true;
        // // likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        // likebtn.querySelector('#count').textContent ++;

        likebtn.querySelector('#count').textContent++
        likebtn.querySelector('#icon i').classList.remove("far")
        likebtn.querySelector('#icon i').classList.add("fas")
    }
    else{
        // clicked = false;
        // // likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`
        // likebtn.querySelector('count').textContent -1;
        likebtn.querySelector('#icon i').classList.add("far")
        likebtn.querySelector('#icon i').classList.remove("fas")
        likebtn.querySelector('#count').textContent--
    }
})
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    letsfetch()
    renderCat(catObject)
    //fetchingpets()
    //handleSubmit()
})

// let petname = document.querySelector('#pet_name').value
// petname=""
// let petage = document.querySelector('#pet_age').value
// petage=""
// let petimage = document.querySelector('#pet_image').value
// petimage=""


document.getElementById('form-input').addEventListener('submit', handleSubmit)


function handleSubmit(e){
    e.preventDefault()
    let catObject = {
        catname:e.target['pet_name'].value,
        age:e.target['pet_age'].value,
        image:e.target['pet_image'].value
    }
    
    renderCat(catObject)
}

function renderCat(catObject){
    fetch('http://localhost:3000/cats', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Accept: "application/json"
        },
        
        body:JSON.stringify(catObject)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    }



const names = document.querySelector("#names")
const image = document.querySelector(".image")
const ages = document.querySelector("#age")
const likes = document.querySelector(".like-button")


function renderpets(cat){
   const cards = document.createElement('li')
    // names.innerHTML = cat.catname;
    // image. src = cat.image
    // ages.innerHTML = cat.age
    cards.innerHTML = `
    <div class="cards">
            <h2 id="names">${cat.catname}</h2>
            <img class="image" src="${cat.image}" alt="">
            <p id="age">${cat.age}</p>
            <button class="like-button">
                <span id="icon"><i class="far fa-thumbs-up"></i></span>
                <span id="count">0</span> Likes
            </button>
        </div>
    `

    liking(cards.querySelector('button'))
    document.querySelector('#fetched').appendChild(cards)
   
}

function letsfetch(){
    fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then((data) => data.forEach((cat) => renderpets(cat)))
}
