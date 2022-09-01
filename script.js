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
    // fetchingMembers()
    e.preventDefault()
    // fetching()
    renderCat()

})

// const names = document.querySelector("#names")
// const image = document.querySelector(".image")
// const age = document.querySelector("#age")
// const likes = document.querySelector(".like-button")

// function renderMembers(cat){
//     const holder = document.createElement('div')
//     names.textContent = cat.catname;
//     image.src = cat.image;
//     age.textContent = cat.age;

//     // holder.append(names, image, age)

//     // let rendered = document.getElementById('cards')
//     // rendered =""
//     // rendered.append(holder)
// }



// // function fetchingMembers(){
// //     fetch('http://localhost:3000/cats')
// //     .then(response => response.json())
// //     .then(data => data.forEach(cat => renderMembers(cat)))
// // }


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


// // document.querySelector('#reg-info').addEventListener('submit', handleSubmit)

// // const petName = document.querySelector('#pet_name').textContent
// // const petAge = document.querySelector('#pet_age').textContent
// // const petImage = document.querySelector('#pet_image').textContent


// // function handleSubmit(e){
// //     e.preventDefault()
// //     const catObject = {
// //         catname:e.target.petName.value,
// //         age:e.target.petAge.value,
// //         image:e.target.petImage.value,
// //         // id:0
// //     }
// //     addCats(catObject)
// // }



// // // const petid = document.querySelector('#pet_id').value



// // function addCats(catObject){
// //     console.log(JSON.stringify(catObject));
// //     fetch('http://localhost:3000/cats', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json'
// //         },
// //         body:JSON.stringify({catname: petName,
// //         age:petAge,
// //         image:petImage,
// //         id:0})
// //     })
// //     .then(response => response.json())
// //     .then(catObject => console.log(catObject))
// // }





let petname = document.querySelector('#pet_name').value
let petage = document.querySelector('#pet_age').value
let petimage = document.querySelector('#pet_image').value

document.getElementById('reg-info').addEventListener('click', handleSubmit)

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
            'Conteent-Type': 'application/json'
        },
        body:JSON.stringify(catObject)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    }