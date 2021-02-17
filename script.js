document.getElementById('button').addEventListener('click', calculate)

let a = 0
let b = 0
let h = 0
let unit = 'unit'

function calculate () {
  a = document.getElementById('a').value
  b = document.getElementById('b').value
  h = document.getElementById('h').value
  unit = document.getElementById('unit').value
  let area = (a + b) * h / 2
  alert('The area of the trapezoid would be ' + area + ' ' + unit + '(s)^2')
}