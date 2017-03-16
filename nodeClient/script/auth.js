var  log4js = require('log4js');
var  logger = log4js.getLogger(__filename);
var  _ = require('underscore');
var cmd = module.exports = {};
var request = require('request');
var util = require('util');
var codeLog = require('./codeLog');
/**
 * 注册函数
 * */
cmd.register = function( name , pwd , token , platform ){
    var qs = {
        name: name,
        pwd: pwd,
        token:token,
        platform: platform
    };

    var url = util.format('http://%s:%s/register', '127.0.0.1', 3003 );

    request({url: url, qs: qs}, function(err, response, body){
        if(err){
            console.error('invokeGameServerCb err = %s, orderId = %s', err.stack, msg.orderId);

        }

        if(response.statusCode !== 200){
            console.log('code = %s  note:%s',response.statusCode,code[response.statusCode]);
            console.error('invokeGameServerCb http error,code = %s', response.statusCode);

        }
        console.log('invokeGameServerCb body = %j', body);
        var res;
        try {
            res = JSON.parse(body);
            codeLog.info(res.code)
        }catch (ex){
            console.error('invokeGameServerCb ex = %s, orderId = %s', ex.stack, msg.orderId);

        }
    });
};
var name = 'tony001'
cmd.register(name,name);


