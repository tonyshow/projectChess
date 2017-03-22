/**
 * 游戏数据基类
 */  

var _  = require('underscore');

var RoomData = function(){
    EventEmitter.call(this); 

    this.seatList = [];
}

var pro = RoomData.prototype;



module.exports = RoomData;