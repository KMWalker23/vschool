const form = document.invoice
form.addEventListener('submit', (event) => {
  event.preventDefault()
  let goo = form.gPrice.value;
 // let num1 = parsInt(value)
  let bom = form.bPrice.value;
 // let num2 = parsInt(value)
 let chee = form.cPrice.value;
  let total = (+goo + +bom + +chee);
  let addEquals = document.createElement('h3');
  addEquals.textContent = total
  document.getElementsByTagName("body")[0].append(addEquals)
  form.gPrice.value = ''
  form.bPrice.value = ''
  form.cPrice.value = ''
  console.log(total)
})