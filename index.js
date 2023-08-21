const apiKey ='035f71d9e2fa36ae4b23378b127ece01'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
    const searchBox = document.querySelector('.search input')
    const searchBtn = document.querySelector('.search button')
    const weatherIcon = document.querySelector('.weather-icon')
    const cond = document.querySelector('.condition')
    async function checkWeather(city) 
    {
        document.querySelector('.weather').style.display = "block"
        const response = await fetch( apiUrl + city + `&appid=${apiKey}`)
        const data = await response.json()

        console.log(data)
        if(response.status === 404){
            document.querySelector('.error').style.display = 'block'
            document.querySelector('.weather').style.display = 'none'
            document.querySelector('.search input').style.border = '3px solid red'

        }else{
            document.querySelector('.search input').style.border = '0'
            document.querySelector('.error').style.display = 'none'
            document.querySelector('.city').innerHTML=data.name
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML=data.main.humidity + '%'
        document.querySelector('.wind').innerHTML=data.wind.speed + ' km/hr'
   
       if(data.weather[0].main == 'Clouds') {
        weatherIcon.src='images/clouds.png';
        cond.innerHTML= 'Cloudy';
       } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src='images/clear.png';
        cond.innerHTML= 'Clear Sky';
       }
       else if (data.weather[0].main == 'Rain') {
        weatherIcon.src='images/rain.png';
        cond.innerHTML= 'Rainy';
       }
       else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src='images/drizzle.png';
        cond.innerHTML= 'Drizzling';
       }
       else if (data.weather[0].main == 'Mist') {
        weatherIcon.src='images/mist.png';
        cond.innerHTML= 'Misty'
       }
       else if (data.weather[0].main == 'Snow') {
        weatherIcon.src='images/snow.png';
        cond.innerHTML= 'Ice Cold'
       }
       else if (data.weather[0].main == 'Humidity') {
        weatherIcon.src='images/humidity.png';
        cond.innerHTML= 'Humid'
       }
       else if (data.weather[0].main == 'Wind') {
        weatherIcon.src='images/wind.png';
        cond.innerHTML= 'Windy'
       }
       document.querySelector('.weather').style.display = "block"
        }

        
      
    }

    searchBtn.addEventListener('click', ()=>{
            checkWeather(searchBox.value)
        } )
