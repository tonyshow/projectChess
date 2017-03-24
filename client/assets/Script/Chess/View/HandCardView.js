/**
 * 单张手牌对象控制
 * author:tony
 * time : 2017/03/24
 */
cc.Class({
    extends: BaseCardView,

    properties: {        
        handAction:{
            default: null,
            type:HandCardAct, 
        }
    },
     
     //点击事件处理
     eveTouch:function(){
        
     }

     
});
