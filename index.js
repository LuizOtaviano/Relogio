const divData = document.querySelector("#data")
const divRelogigo = document.querySelector("#relogio")

function updateClock() {

    const data = new Date()
    const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours()
    const minuto = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes()
    const segundo = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds()
    const horaFormat = `${hora}:${minuto}:${segundo}`

    divRelogigo.innerHTML = horaFormat

}

const intervalo = setInterval(updateClock, 1000) 
