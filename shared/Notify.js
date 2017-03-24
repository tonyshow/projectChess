window.Notify = cc.Enum({
  
    dealToPlayer: 1,        //发牌给玩家
    /**
     * int : cardId
     * int : seatIndex
     */
     
    dealToOtherPlayers: 2,  //通知其他玩家
    /**
     * int : seatIndex
     */

});