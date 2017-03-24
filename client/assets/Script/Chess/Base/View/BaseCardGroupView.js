/**
 * 牌组
 * author:tony
 * time : 2017/03/24
 */
cc.Class({
    extends: cc.Component,

    properties: {
        
    },  

    onLoad: function () {        
        this.cardList = {};
        this.cards = [];
    },

    /**新增一个牌
     * card：{pos:1,cardId:1}
     */
    addCard:function( card ){
        var cardObj = Card.create(card.cardId);
        this.cards.push( {pos:pos,cardObj:cardObj} );
    },

    /**移除一个牌 */
    removeCard:function( pos ,cardId ){

    },

    /**初始化界面 
     * cardIds:[{pos:1,cardId:1},{pos:2,cardId:1}]
    */
    init:function( cardIds ){

    },
});
