// constants



// variables
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
// console.log(year)
// console.log(now.getFullYear(), now.getMonth(), now.getDate())
// console.log(now.getHours(), now.getMinutes(), now.getSeconds())

// cached element
let yearEl = document.getElementById("year")
let monthEl = document.getElementById("month")
let dateEl = document.getElementById("date")
let hoursEl = document.getElementById("hours")
let minutesEl = document.getElementById("minutes")
let secondsEl = document.getElementById("seconds")
// event listener





// functions
function init() {
  yearEl.textContent = year
  monthEl.textContent = month + "月"
  dateEl.textContent = date
  hoursEl.textContent = hours
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds

  render()
}

function render() {
  year = new Date().getFullYear()
  month = new Date().getMonth() + 1
  date = new Date().getDate()
  hours = new Date().getHours()
  minutes = new Date().getMinutes()
  seconds = new Date().getSeconds()
  // console.log(seconds)
  yearEl.textContent = year
  monthEl.textContent = month + "月"
  dateEl.textContent = date
  hoursEl.textContent = hours
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds

  // render()
}

init()
let run = setInterval(render, 1000);