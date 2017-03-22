/**
 * 游戏控制基类
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

/***
 * 游戏主控
 * _configData ：游戏基础配置对象  --> new BaseConfigData()
 * _checkTakeCard ：检查要牌对象 --> new BaseCheckTakeCard()
 * _gameData ：数据对象 --> new BaseGameData()
 */
var BaseGameCtr = function( _configData ,_checkTakeCard,_gameData ){
    EventEmitter.call(this); 
    this.configData = _configData;
    this.checkTakeCard = _checkTakeCard;
    this.gameData = _gameData;
}

var pro = BaseGameCtr.prototype;

module.exports = BaseGameCtr;