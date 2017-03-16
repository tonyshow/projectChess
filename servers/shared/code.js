module.exports = {
	OK : 200,	//成功;
	FAIL : 500,	//未知错误;
	DB_ERROR : 501,	//数据库错误;
	DIAMOND_NUM_NOT_ENOUGH : 503,	//钻石不足;

	ACCOUNT:{
		ALREADY_REGISTERED : 1000,	//账号已被注册;
        PWD_ERROR : 1001,	//账号密码错误;
        USER_NOT_EXIST : 1002,	//帐号不存在;
	},

	ACCOUNT1:{
		PWD_ERROR : 1003,	//账号密码错误;
		USER_NOT_EXIST : 1004,	//帐号不存在;
	}
};

