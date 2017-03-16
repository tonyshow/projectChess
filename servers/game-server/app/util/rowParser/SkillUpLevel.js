/**
 * Created by Administrator on 2016/3/7 0007.
 */

var util = require('util');

var utils = require('../utils'),
    IndexData = require('../jsonTable');

var SkillUpLevel = function (data) {
    IndexData.call(this, data);
};

util.inherits(SkillUpLevel, IndexData);

var pro = SkillUpLevel.prototype;

pro.rowParser = function (row) {
    row.id = row.level;
    row.unInitiativeSkills = utils.parseParams(row.unInitiativeSkills, '#');
    row.skills = [];
    row.skills.push(row.initiativeSkill);
    row.skills.push(row.jumpSkill);
    row.skills = row.skills.concat(row.unInitiativeSkills);
    return row;
};

pro.getPrimaryKey = function () {
    return 'level';
};

pro.getLevelUpCost = function (skillType, curLV, addLV) {
    var i, totalCost = 0, levelUpData;
    for (i = curLV; i < curLV + addLV; ++i) {
        levelUpData = this.findById(i);
        if (levelUpData) {
            totalCost += levelUpData.skills[skillType - 1] || Number.POSITIVE_INFINITY;
        } else {
            totalCost += Number.POSITIVE_INFINITY;
        }
    }
    return totalCost;
};

module.exports = function (data) {
    return new SkillUpLevel(data);
};