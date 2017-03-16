/**
 * Created by tony on 2016/11/23.
 */

var util = require('util');
var _ = require('underscore');
var IndexData = require('../jsonTable');

var Compose = function (data) {
    this.managerData = {};
    IndexData.call(this, data);

};

util.inherits(Compose, IndexData);
var composeMangerData = {};
var pro = Compose.prototype;

pro.rowParser = function (row) {
    if(  composeMangerData ==null )
    {
        composeMangerData = {};
    }

    var needRoleQuality = row.needRoleQuality;

    if( null == composeMangerData[needRoleQuality] ||  _.isUndefined(composeMangerData[needRoleQuality]) ){
        composeMangerData[needRoleQuality] = {};
        composeMangerData[needRoleQuality].tempRate = 0;
        composeMangerData[needRoleQuality].randScetion = [];
        composeMangerData[needRoleQuality].needRoleQuality = row.needRoleQuality;
        composeMangerData[needRoleQuality].needRoleNum = row.needRoleNum;
        composeMangerData[needRoleQuality].newRoleLevel = row.newRoleLevel;
        composeMangerData[needRoleQuality].needGold = row.needGold;
        composeMangerData[needRoleQuality].needDiamond = row.needDiamond;
        composeMangerData[needRoleQuality].posToHero = [];
    }
    composeMangerData[needRoleQuality].posToHero.push( { newRoleId : row.newRoleId , newRoleLevel : row.newRoleLevel } );
    composeMangerData[needRoleQuality].tempRate+=row.rate;
    composeMangerData[needRoleQuality].randScetion.push(composeMangerData[needRoleQuality].tempRate);
    return row;
};


pro.getPrimaryKey = function () {
    return 'needRoleQuality';
};

/*
* 随机出数据
* */
pro.randDataById = function( needRoleQuality ){
    var data = composeMangerData[needRoleQuality];
    var randIndex = 0;
    var randNum = _.random(0, 100)*0.01;
    var randScetion = composeMangerData[needRoleQuality].randScetion;
    _.each(randScetion,function(num){
        if(randNum<num)
        {
            randIndex+=1;
        }
    });
    var heroJson = composeMangerData[needRoleQuality].posToHero[randIndex];
    return heroJson;
};

pro.getDataById = function(needRoleQuality){
    return composeMangerData[needRoleQuality];
};

module.exports = function (data) {
    return new Compose(data);
};