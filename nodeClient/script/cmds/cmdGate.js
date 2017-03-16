/**
 * Created by tony on 2017/3/6.
 */
var pomelo = require('./../pomelo');
cmds = module.exports ={};


/*
 *   连接服务器
 * */
cmds.connect = function (host, port, cb) {
    var prams = {host: host, port: port, log: true};

    console.log('gate init %s',JSON.stringify(prams) );

    pomelo.init({host: host, port: port, log: true}, cb);
};
/*
 *   查询入口服务器
 *   @param {String} uid client user id.
 *   @param {Function} callback, signature: function callback(connectorServer, connectorServerPort){}
 * */
cmds.queryEntry = function (uid, callback) {
    if(!uid){
        console.log('uid  can"nt  null ' );
    }
    console.log('uid  can"nt  null ' );
    pomelo.request('gate.gateHandler.queryEntry', {uid: uid}, function (data) {
        pomelo.disconnect();
        if (data.code !== 200) {
            console.error('queryEntry failed!');
            callback();
            return;
        }
        console.log('gate.gateHandler.queryEntry : ok , data.host  =  %s , data.port = %s',data.host,data.port);
        callback(data.host, data.port);
    });
};

cmds.doConnect = function(host, port,uid,callback){
    cmds.connect(host, port,function(){
        cmds.queryEntry(uid,function(clientHost , clientPort ){
            callback( clientHost ,clientPort);
        });
    })
};