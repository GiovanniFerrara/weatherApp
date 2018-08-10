const request = require("request")
//ENTER YOU API KEY REGISTERING AT https://darksky.net/dev
const weatherApiKey=process.env.weatherApiKey

function weather(lat,lon,{lang='it',units='si'}={}){
    return new Promise((resolve,reject)=>{
    request({
    json:true,
    url:`https://api.darksky.net/forecast/${weatherApiKey}/${lat},${lon}?lang=${lang}&units=${units}`,
    },(err,res,body)=>{
       try{
        resolve(body)
        } catch(err){
         reject(err)     
        }})
    })
}

var time    =(object,day)=>{
        let time= object.daily.data[day].time;
        let now= (Date.now()).toString().substring(0,10);
        let seconds=(time - now);
        var days = Math.floor(seconds / (3600*24));
        seconds  -= days*3600*24;
        var hrs   = Math.floor(seconds / 3600);
        seconds  -= hrs*3600;
        var mnts = Math.floor(seconds / 60);
        seconds  -= mnts*60;
        return (days+" days, "+hrs+" Hrs");
        } 

module.exports={weather,time};