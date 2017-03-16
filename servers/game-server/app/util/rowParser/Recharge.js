/**
 * Created by tony on 2016/8/31.
 */
var util = require('util');

var IndexData = require('../jsonTable'),
    utils = require('../utils');

var Recharge = function (data) {
    IndexData.call(this, data);
};

util.inherits(Recharge, IndexData);

var pro = Recharge.prototype;

pro.rowParser = function (row) {
    return row;
};

pro.getPrimaryKey = function () {
    return 'productId';
};

module.exports = function (data) {
    return new Recharge(data);
};