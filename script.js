
var today = new Date();
var day = today.getDate();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthNames[today.getMonth()];
var year = today.getFullYear();
var formattedDate = day + " - " + month + ", " + year;




let Temperature = document.querySelector(".city-temp")

let cityName = document.querySelector(".city-name")

let cityDate = document.querySelector(".city-date")

let sunrise = document.querySelector("#rise-time")
let sunset = document.querySelector("#set-time")

let TempMin = document.querySelector("#temp-min")
let TempMax = document.querySelector("#temp-max")
let WindSpeed = document.querySelector("#wind-speed")
let pressure = document.querySelector("#pressure")

const func = async () => {
    try {

        let citysearch = document.querySelector(".container-3 input").value
        // cityName.innerText = citysearch;
    
        url = `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&appid=e35fef662bd54953d3a6f995cb2abc07&units=metric`
    
        response = await fetch(url)
        data = await response.json()
        console.log(data);
        cityName.innerText = data.name
        Temperature.innerHTML = `${data.main["temp"]} &#8451`
        cityDate.innerText = formattedDate
        sunrise.innerText = GenerateTime(data.sys["sunrise"])
        sunset.innerText = GenerateTime(data.sys["sunset"])
    
        TempMin.innerHTML = `${data.main["temp_min"]} &#8451`
        TempMax.innerHTML = `${data.main["temp_max"]} &#8451`
        WindSpeed.innerText = data.wind["speed"]
        pressure.innerText = data.main["pressure"]
        
    } catch (error) {
        alert("Something Went Wrong ")
    }
}


let searchBtn = document.querySelector(".search")

searchBtn.addEventListener("click", () => {
    func()
})

const GenerateTime = (time) => {
    const timestamp =
        time;
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Set the time zone to 'Asia/Kolkata' (Indian Standard Time)
    const options = { timeZone: 'Asia/Kolkata' };
    const istTimeString = date.toLocaleTimeString('en-US', options);

    console.log(istTimeString);

    return istTimeString;
}

window.onload = function() {
    cityDate.innerText = formattedDate;
};


