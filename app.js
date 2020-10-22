console.log('Hello');


let quotesDiv = document.getElementById ('quotes')
fetch ('https://api.kanye.rest')
.then (res=> res.json())
.then(quote => {
    quotesDiv.innerHTML += '<p> ${quote.quote} </p>'
})


let dogButton = document.getElementById('give-dog')

dogButton.addEventListener("click", evt => {
  let dogDiv = document.getElementById('dog-pic')

  fetch ('https://api.thedogapi.com/v1/images/search?')
  .then(res=>res.json())
  .then(dogs=> {
    dogDiv.innerHTML = '<h3> Here is this dog wishing you the bestest day! </h3>
    <img src="${dog.url}" alt="doggy" /> '
  });

  })
})
