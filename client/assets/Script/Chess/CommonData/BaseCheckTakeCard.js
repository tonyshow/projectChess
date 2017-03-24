/**
 * 检查要牌逻辑
 */

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    _  = require('underscore');

var BaseCheckTakeCard = function(){
    EventEmitter.call(this);    
}

var pro = BaseCheckTakeCard.prototype ;

/**
* 是否可以手持两张一样的牌要cardId牌
* cardId：牌id
*/
pro.isCanSub= function( cardId ){
    return false;
};



module.exports = BaseCheckTakeCard;