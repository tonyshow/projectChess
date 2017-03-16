/**
 * Created by employee11 on 2015/12/7.
 */

var util = require('util');

var request = require('request');

var config = require('../../config/stateReport.json');

var stateReport = module.exports;

stateReport.pushUserInfo = function(MAC){
    var options = {
        uri: util.format('http://%s:%s/pushUserInfo', config.host, config.port),
        method: 'POST',
        json: {
            "MAC": MAC,
            "serverName": config.name
        }
    };
    request(options, function (err, res) {
        if(err){
            console.log('pushUserInfo failed! err = %s', err.stack);
        }else{
            if(res.statusCode !== 200){
                console.log('pushUserInfo failed! code = %s', res.statusCode);
            }else{
                console.log('pushUserInfo ok!');
            }
        }
    });
};