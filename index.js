let submit = document.querySelector('.button')
let back = document.querySelector('.go-home')
let nextPage = document.querySelector('.thank-you')
let mainPage = document.querySelector('.rate-us')
let ratingBtns = document.querySelectorAll("li")
let messageText = document.querySelector('.message')
let errorText = document.querySelector(".error")


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


