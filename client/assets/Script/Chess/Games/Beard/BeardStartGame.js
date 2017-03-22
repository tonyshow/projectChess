/**
 * 启动游戏
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var StartGame = function( ){
    EventEmitter.call(this); 
    
}

var pro = StartGame.prototype;

module.exports = StartGame;