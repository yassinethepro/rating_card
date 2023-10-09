
let submit = document.getElementById("submit")
let ratingCard = document.querySelector(".rating-card");
let thankYou = document.querySelector(".thank-you");
let again = document.querySelector(".again");
let rates = document.querySelectorAll(".btn");
let rating = document.getElementById("rating");


submit.onclick = () => {
 thankYou.classList.remove("hidden")
 ratingCard.classList.add("hidden")
}

again.addEventListener("click", () => {
  thankYou.classList.add("hidden")
 ratingCard.classList.remove("hidden")
})


rates.forEach((rate) => {
  rate.addEventListener ("click", () => {
    rating.innerHTML =  rate.innerHTML
  })
})
