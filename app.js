 
 
const apiKey ="379c9e5dfca75b461fb584ce341d0518";
 const apiUrl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector("#search input");
  const searchBtn = document.querySelector("#search button");


 async function  checkweather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await responce.json();

    console.log(data);
    
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round( data.main.temp)  + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


 }
 searchBtn.addEventListener("click", ()=>{
     
checkweather(searchBox.value);

 });

 
 