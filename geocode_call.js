const request=     require("request");
//ENTER YOU GOOGLE API HERE FOR THE LOCALIZATION API
const localizationApiKey=process.env.localizationApiKey

// Default values of language: english and unti: SI, if not option objecy is passed
function geocode(address,{lang='en',units="si"}={}){
    return new Promise((resolve,reject)=>{
            request({
            json:true,
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${localizationApiKey}&language=${lang}`,
            }, 
            (err,res,body)=>{
             try{
             resolve({
                        formatted:body.results[0].formatted_address,
                        lat:body.results[0].geometry.location.lat,
                        lon:body.results[0].geometry.location.lng,
                    })
                    }
                    catch(err){
                        console.log("there was an error with the google API: ",body.error_message)
                    }
            })
    })
}
        
    

module.exports=geocode;