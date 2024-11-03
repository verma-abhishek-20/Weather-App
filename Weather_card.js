let url=
"https://api.openweathermap.org/data/2.5/weather?q=";

let apiKey="&appid=8acdc1017570d0611c8ef6511f4b50ea&&metric";

let btn=document.querySelector("button");
let tem=document.querySelector(".temperature");
let des=document.querySelector(".des");

btn.addEventListener("click",async ()=>{
    let inp=document.querySelector("input");
    let country=inp.value;

    let store=await getWeather(country);
    
    tem.innerHTML=Math.round(store.data.main.temp -273.13) + "°C";
    des.innerHTML=store.data.weather[0].description;

})
async function getWeather(country){
    let res=await axios.get(url+country+apiKey);

    return res;
}

