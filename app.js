const request=           require("request");
const geocode=           require("./geocode_call.js")
const {weather,time}=    require("./weather_call.js")

var place= process.argv[2];
var day=process.argv[3]

var options={
    lang:'en',
    units:'si'
}

if(!day){
    day=0;
    console.log("Today's weather")
}

geocode(place,options)

.then(data=>{
  return weather(data.lat,data.lon,options)
})
.then(newData=>{
    if(!day==0){
        console.log("Forecast for",time(newData,day), "from now");
    }
    console.log(newData.daily.data[day].summary);
    console.log('Max temperature',newData.daily.data[day].temperatureHigh+ " C");
    console.log('Min temperature',newData.daily.data[day].temperatureLow+ " C");
})
.catch(function(err){
    console.log(err)
})
  
  