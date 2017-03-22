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

    var prams = {host: host, port: port, log: true};

    console.log('connector init %s',JSON.stringify(prams) );

    pomelo.init({host: host, port: port, log: true}, cb);


  
};

cmds.entry = function(cb){
    pomelo.request('connector.entryHandler.entry',{},function(data){
        cb(data)
    })
};