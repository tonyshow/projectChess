var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanMjConfig = function () {

	var data = [[1,1,1],[2,1,2],[3,1,3],[4,1,4],[5,1,5],[6,1,6],[7,1,7],[8,1,8],[9,1,9],[10,2,1],[11,2,2],[12,2,3],[13,2,4],[14,2,5],[15,2,6],[16,2,7],[17,2,8],[18,2,9],[19,3,1],[20,3,2],[21,3,3],[22,3,4],[23,3,5],[24,3,6],[25,3,7],[26,3,8],[27,3,9],[28,4,100],[29,5,101],[30,6,102],[31,7,103],[32,8,104],[33,9,105],[33,9,105]];

	var indexs = {"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"10":9,"11":10,"12":11,"13":12,"14":13,"15":14,"16":15,"17":16,"18":17,"19":18,"20":19,"21":20,"22":21,"23":22,"24":23,"25":24,"26":25,"27":26,"28":27,"29":28,"30":29,"31":30,"32":31,"33":32,"33":33};

	var indexNames = {"id":0,"cardType":1,"value":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanMjConfig, PlanBase );

var pro = PlanMjConfig.prototype;

pro.getCardtype = function(id)
{
	var data = this.findById(id);
	return data.cardType
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
pro.getValue = function(id)
{
	var data = this.findById(id);
	return data.value
};
module.exports = PlanMjConfig;

