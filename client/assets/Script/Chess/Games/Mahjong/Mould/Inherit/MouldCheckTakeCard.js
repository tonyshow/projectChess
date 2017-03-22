/**
 * 检查要牌逻辑
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');
var BaseCheckTakeCard = require('./../../../../BaseCheckTakeCard');

var MouldCheckTakeCard = function(){
    EventEmitter.call(this);    
}

util.inherits( BaseCheckTakeCard, MouldCheckTakeCard );

var pro = MouldCheckTakeCard.prototype ;

/**
* 是否可以手持两张一样的牌要cardId牌
* cardId：牌id
*/
pro.isCanSub= function( cardId ){
    return false;
};



module.exports = MouldCheckTakeCard;