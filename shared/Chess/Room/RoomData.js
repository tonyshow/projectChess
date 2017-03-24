/**
 * 游戏数据基类
 */  

var _  = require('underscore');

var RoomData = function(){
    EventEmitter.call(this); 

    this.createPlayerId = 0;         //房间创建者id
    this.seatDataList = {};          //座位信息集合
    this.currOutCardPlayerId = 0;    //当前出牌人id
    this.createTime = 0;             //创建房间的时间
    this.finshGameCnt = 0;           //已完成游戏局数
};

var pro = RoomData.prototype;

/**
 * 通过座位号获取座位信息
 * */
pro.getSeatDataByPlayerId = function ( seatId ) {
    
};

/***新增一个座位数据 */
pro.addSeatData = function( seatData ){
    var seatIndex = seatData.seatIndex;
    var seatData = new SeatData( seatData );
    this.seatDataList[seatIndex] = seatData;
};

/***刷新一个座位数据 */
pro.refreshSeatData = function(seatData){
    var seatIndex = seatData.seatIndex;
    this.seatDataList[seatIndex].refreshData(seatData);
};

module.exports = RoomData;