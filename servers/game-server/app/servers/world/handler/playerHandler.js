/**
 * Created by tony on 2017/3/6.
 */
module.exports = function(app) {
    return new Handler(app);
};

var Handler = function(app) {
    this.app = app;
};
var pro = Handler.prototype;

pro.enterScene = function(msg , session , next ){
    return next(null,{code:200});
};