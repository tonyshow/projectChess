/**
 * 棋牌数据基类
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var BaseConfigData = function(){
    EventEmitter.call(this);
}

var pro = BaseConfigData.prototype ;

/**
* 游戏总人数
* 默认为4人 如有需要请在子类里面重写方法
*/
pro.getGamePeopleCnt = function(){
    return 4;
};

/**
* 一副牌的总张数
* 默认为100张 如有需要请在子类里面重写方法
*/
pro.getCardTotal = function(){
    return 100;
};

/**
* 发牌时单人拥有的牌的张数
* 默认为14张 如有需要请在子类里面重写方法
*/
pro.getFristHandleCardCnt = function(){
    return 14;
};

module.exports = BaseConfigData;