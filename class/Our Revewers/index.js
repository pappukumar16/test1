let API_KEY = "9a19eb96e2f720e2695a63dce7e0aeb6";

const weatherdetails = document.querySelector('#weather-data');

const cityInput = document.querySelector('#city-input');

const formEl = document.querySelector('form');

formEl.addEventListener('submit',(e)=>{
   e.preventDefault();
   const cityValue = cityInput.value;
  getWeatherData(cityValue);
})

async  function getWeatherData(cityValue) {
  // body...
  try{
       let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`)
      let data =await response.json();
      const temprature = Math.round(data.main.temp);
      const description = data.weather[0].description;
      console.log(temprature)
     document.querySelector('.temprature').innerText = `Temprature : ${temprature} ºC`;
  }catch(error){
       console.log(error)
       
  }
}

