const button = document.getElementById('search-button');
// const input = document.getElementById('city');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(lat,long)
{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=43ff2642fdfe4bca8e1145912240411&q=${lat},${long}&aqi=yes`);

    return await promise.json();
}
// button.addEventListener('click',async()=>{
//     const value  = input.value;
//     const result =  await getData(value);
    
//     cityName.innerText = `${result.location.name},${result.location.region}-${result.location.country}`;
//     cityTime.innerText = result.location.localtime;
//     cityTemp.innerText  = result.current.temp_c;
// });
//http://api.weatherapi.com/v1/current.json?key=43ff2642fdfe4bca8e1145912240411&q=London&aqi=yes

async function gotLocation(position){
const result = await getData(
    position.coords.latitude,
    position.coords.longitude);
console.log(result);
}

function failedLoc()
{
    console.log("There was some issue");
}

button.addEventListener('click',async()=>
{
   navigator.geolocation.getCurrentPosition(gotLocation,failedLoc);
});