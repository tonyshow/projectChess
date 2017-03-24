/**
 * 单张手牌对象控制
 * author:tony
 * time : 2017/03/24
 * 描述 : 处理单牌表现逻辑
 */
cc.Class({

    extends: BaseSingleCardView,

    properties: {        
        handAction:{
            default: null,
            type:HandCardAct, 
        }
    },
     
     //点击事件处理
     eveTouch:function(){
        
     },

     //成功出牌 数据通过了才会调研
     outSuccess:function( cb ){
        this.handAction.doOut( cb );
     }
});
