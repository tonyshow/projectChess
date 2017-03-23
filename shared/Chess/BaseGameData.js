/**
 * 游戏数据基类
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var BaseGameData = function(){
    EventEmitter.call(this);
    
    
    this.handCards = {}; //手持牌
}

var pro = BaseGameData.prototype;

/**
* 获取手持牌数据集
*/
pro.getHoldCards = function(){
    return this.handCards;
};


module.exports = BaseGameData;