/**
 * 单张手牌对象显示
 * author:tony
 * time : 2017/03/24
 */
cc.Class({
    extends: cc.Component,

    properties: {
         iconSprite:{
             type:cc.Sprite
         }
    },   

    /**
     * 设置图片
     * spritePath:资源路径
     */
    setIconByPath:function( spritePath ){
         var self = this;
         cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {             
            self.iconSprite.spriteFrame = spriteFrame; 
        });
        return self;
    },
});
