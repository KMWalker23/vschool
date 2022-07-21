const form = document.clicker
form.addEventListener('submit', (event) => {
  event.preventDefault()
let count= document.getElementById("redboxstart").textContent
localStorage.boxCounter=count
document.getElementById("redboxstart").textContent = (+count + +1)

})




