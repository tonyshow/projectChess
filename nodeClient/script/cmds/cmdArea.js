/**
 * Created by tony on 2017/3/6.
 */
var pomelo = require('./../pomelo');
cmds = module.exports ={};


cmds.enterScene = function(cb){
    pomelo.request('area.playerHandler.enterScene',{msg:'hello world'},function(data){
        cb(data)
    });
};