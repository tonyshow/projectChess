var exp = module.exports = {};

exp.IsNull = function( _value ){
    return null == _value;
};

exp.IsNotNull = function( _value ){
    return null != _value;
};

exp.getString = function( value ){
    if(!Number(value)){
        return value.toString();
    }else{
       return value;
    }
}

/***回调函数 */
exp.callBack = function( cb , data ){
    if(null != cb ){
        if( null != data ){
            cb(data);
        }else{
            cb();
        } 
    }
}

window.Utils = exp;