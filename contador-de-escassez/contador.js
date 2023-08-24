//Importando valores do HTML
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = "15 Sept 2023"
//Tabela das aberviaturas dos meses em inglês abaixo:
// Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    
    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60 

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minsEl.innerHTML = mins
    secondsEl.innerHTML = seconds

}

countdown()
setInterval(countdown, 1000)
