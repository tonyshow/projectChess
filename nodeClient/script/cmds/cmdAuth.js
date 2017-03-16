/**
 * Created by tony on 2017/3/6.
 */
var pomelo = require('./../pomelo');
cmds = module.exports ={};


/*
 *   连接服务器
 * */
cmds.connect = function ( host, port,cb  ) {
    host = host || '127.0.0.1';
    port = port || '3010';
    pomelo.init({host: host, port: port, log: true}, function(){
        cb();
    });
};

cmds.entry = function(cb){
    pomelo.request('connector.entryHandler.entry',{},function(data){
        cb(data)
    })
};