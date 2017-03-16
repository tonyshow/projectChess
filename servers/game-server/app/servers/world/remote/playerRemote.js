/**
 * Created by kilua on 2015-05-12.
 */

var util = require('util');

var logger = require('pomelo-logger').getLogger(__filename);

var Code = require('../../../../../shared/code'),
    async = require('async')
    orderLogger = require('pomelo-logger').getLogger('order-log', __filename);
var Handler = function (app) {
    this.app = app;
};

module.exports = function (app) {
    return new Handler(app);
};

var pro = Handler.prototype;
