/**
 * 牌组牌坐标排序管理
 * author:tony
 * time : 2017/03/24
 */
cc.Class({
    extends: BaseCardGroupPosSort,

    properties: {
        
    },  

    onLoad: function () {        
        this.posList = [];
    },

    /**通过下标标号获取对应的坐标
     * idx:位置号 从0开始
     */
    getPosByIdx:function( idx ){
        return this.posList[idx];
    },

    /***重新计算坐标 */
    reRefresh:function(){

    },

    /***在最末尾新增一个坐标 */
    addNewPosToLast:function(){
        //子类实现
    },

    /***获取当前最末尾牌坐标 */
    getCurLastPos:function(){
        //子类实现
    } 
});
