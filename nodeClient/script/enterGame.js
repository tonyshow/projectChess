var crypto = require('crypto');

var log4js = require('log4js'),
    logger = log4js.getLogger(__filename),
    _ = require('underscore');

var envConfig = require('../config/env.json'),
    config = require('../config/' + envConfig.env + '/config'),
    pomelo = require('./pomelo'),
    cmds = require('./cmds/cmds');

var cmdWorld = require('./cmds/cmdWorld');
var cmdConnector = require('./cmds/cmdConnector');
var cmdGate = require('./cmds/cmdGate');


var MAX_FPS = 60;


function tick() {
}

try {
    var _MAC =  Math.random(1000000,9999999),
         pwd = '123456';

    log4js.configure('./config/log4js.json');

    setInterval(tick, 1000 / MAX_FPS);

    cmdGate.doConnect('127.0.0.1','3010',_MAC,function(clientHost ,clientPort){
        cmdConnector.connect( clientHost ,clientPort,function(){
            cmdConnector.entry( function(data){
                console.log('connector.entryHandler.entry : %s',JSON.stringify(data) );
                cmdWorld.enterWorld( function(data){  console.log('enterWorld : %s',JSON.stringify(data) ); });
            } );
        } );
    });



    //cmdWorld.connect(function(){
    //
    //});
} catch (ex) {
    logger.error('err: ' + ex.stack);
}