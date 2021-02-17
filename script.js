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
  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)
  const area = (a + b) / 2 * h
  alert('The area of the trapezoid would be ' + area + ' ' + unit + '(s)^2')
}
