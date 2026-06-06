const apiKey = "08ba393e2c9dd08a737808d72724fc49" ;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");

async function checkweather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp )+ "°C";
    document.querySelector(".description").innerHTML = data.weather[0].description; 
    document.querySelector(".wind-speed").innerHTML=data.wind.speed;
    document.querySelector(".mist-speed").innerHTML=data.main.humidity;

}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value); 
})
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(searchbox.value);
    }
});