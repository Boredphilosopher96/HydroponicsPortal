var express = require('express');
var axios = require('axios');
var helper  = express.Router();
//import { inspect } from 'util' // or directly
var util = require('util')
var _ = require('lodash');


helper.get("/", (req, res, error) => {
    console.log('get method called!!!!');
    axios
    .get("http://dataservice.accuweather.com/currentconditions/v1/188753", {
        params: {
            apikey : 'oGaDBZoMZl8qw4nK3uu0TCSp3jwib79v'
        }
    })
    .then( res => {
        //console.log('got results '+res);
        //return res;
        //var res1 = JSON.stringify(res.data);
        console.log({"temp":""+_.get(res.data[0],'Temperature.Metric.Value')});
        return (""+_.get(res.data[0],'Temperature.Metric.Value'));
        //console.log(JSON.stringify(res1));
        //return res.data;
    })
    .catch( err => {
        console.log('Error getting data '+err);
    })

})


module.exports = helper;