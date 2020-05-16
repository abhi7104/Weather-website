const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=8da806a2b6556586126a081312ad8e1d'
    
    request({url, json:true},(error,{body})=>{
        if(error){
            callback('unable to connect to weather service',undefined)
        }
        else if(body.message){
            callback('unable to find location',undefined)
        }else{
            const k= body.main.temp
            const t= k-273.15
            callback(undefined,'Current temperature is ' + t +' degree')
            }
        })
}
module.exports=forecast