// constants



// variables
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
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
function init(){
  // console.log(date)
  // console.log(time)
  // console.log(year)

  yearEl.textContent = year
  monthEl.textContent = month+"月"
  dateEl.textContent = date
  hoursEl.textContent = hours
  minutesEl.textContent = minutes
  secondsEl.textContent = seconds

  render()
}

function render(){

}

init()