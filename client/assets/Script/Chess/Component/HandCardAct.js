/**
 * 手牌出牌动作
 * author:tony
 * time : 2017/03/24
 */ 
cc.Class({
    extends: cc.Component,

    properties: {
       state:{
            default:EnumHandCardState.NONE,
            type:EnumHandCardState
        }
    },

    /*** touch */
    doTouch:function(){
        
    },

    /*** 切换状态 */
    swtchState : function(){
        if( EnumHandCardState.NONE ==this.state ){
            this.state = EnumHandCardState.WAIT_OUT;
            return this.state;
        }else if(EnumHandCardState.WAIT_OUT ==this.state ){
            this.state = EnumHandCardState.OUT;
            return this.state;
        } 
    },

    //做出牌动作
    doOut : function(cb){
        Utils.callBack( cb );
    }   
});
