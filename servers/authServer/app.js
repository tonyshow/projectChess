/**
 * Created by kilua on 2015-03-18.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    mysql = require('./dao/mysql/mysql'),
    config = require('./config/config'),
    authUser = require('./routes/authUser');

var app = express();

process.title = 'Auth Server';

app.set('port', config.port || 3003);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if ('production' === app.get('env')) {
    app.use(express.errorHandler());
}

// app.get('/authUser', authUser.auth);
// app.post('/authCheck', authUser.authCheck);

app.get('/authUser', authUser.auth);
app.post('/authCheck', authUser.authCheck);
app.get('/register', authUser.register);
app.get('/login', authUser.login);
mysql.init();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

    console.log('\n\n请注册账号：http://host:port/register/?name={0}&pwd={1}&token={2}&platform={3}\n' +
        '\n' +
        '例如：\n' +
        'host : 127.0.0.1\n' +
        'port : 3003\n' +
        'name : tony\n' +
        'pwd : 123456\n' +
        'platform : app store\n');

    console.log('\n\n请登录账号：http://host:port/login/?name={0}&pwd={1}&token={2}&platform={3}\n' +
        '\n' +
        '例如：\n' +
        'host : 127.0.0.1\n' +
        'port : 3003\n' +
        'name : tony\n' +
        'pwd : 123456\n' +
        'platform : app store\n');
});