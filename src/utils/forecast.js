const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8d4cd3a30a44a7f913e6f8b8590e2371/'+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?units=si';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' The highest temperature for today is ' + body.daily.data[0].temperatureHigh + '. The lowest temperature for today is ' + body.daily.data[0].temperatureLow + '. It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + "% chance of rain.");
        }
    })
}

module.exports = forecast;