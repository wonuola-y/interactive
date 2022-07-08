let submit = document.querySelector('.button')
let back = document.querySelector('.go-home')
let nextPage = document.querySelector('.thank-you')
let mainPage = document.querySelector('.rate-us')
let ratingBtns = document.querySelectorAll("li")
let messageText = document.querySelector('.message')
let errorText = document.querySelector(".error")
// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');  
//     })      
//     });
let rating = 0;
ratingBtns.forEach( ratingBtn => {
   ratingBtn.addEventListener('click', function () {
    ratingBtns.forEach(button => button.classList.remove('active'));
this.classList.add('active');
//   console.log('kolo');
    rating = ratingBtn.dataset.set;
   })
});

submit.addEventListener('click', ()=>{
    if (rating === 0) {
console.log('error!!!');
errorText.style.display = 'block';        
    }
     else{
        errorText.style.display = 'none';  
        messageText.innerHTML = `You rated us ${rating} out of 5`
        mainPage.style.display = 'none';
        nextPage.style.display = 'block';
    }
})


back.addEventListener('click', ()=>{
    console.log('pressed')
    mainPage.style.display = 'block';
    nextPage.style.display = 'none';
})


// const cardOne = document.querySelector(".card-one");
// const cardTwo = document.querySelector(".card-two");
// const submitBtn = document.querySelector(".submit button");
// const rattingBtns = document.querySelectorAll("li");
// let error = document.querySelector(".error");
// let ratting = 0;
// const selectedRatting = document.querySelector(".selected-ratting");

// rattingBtns.forEach(rattingBtn => {
//   rattingBtn.addEventListener("click", () => {
//     error.classList.add("hidden");
//     removeActive();
//     rattingBtn.classList.add("active");
//     ratting = rattingBtn.dataset.value;
//   })
// })

// submitBtn.addEventListener("click", () => {
//   if (ratting === 0) {
//     error.classList.remove("hidden");
//   }
//   else {
//     selectedRatting.innerHTML = `You selected ${ratting} out of 5`;
//     cardOne.classList.add("hidden");
//     cardTwo.classList.remove("hidden");
//   }
// })

// function removeActive() {
//   for (const rattingBtn of rattingBtns) {
//     rattingBtn.classList.remove("active");
//   }
// }

