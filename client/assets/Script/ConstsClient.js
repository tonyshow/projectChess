
window.ConstsClient = module.exports = {
    //已我自己为参照其他人的座位方向
	SEAT_DIRECTION:{

		SELF: 1,            //我自己

        RIGHT: 2,           //我右边

        FACE_TO_FACE:3,     //我对面

        LEFT: 4,            //我左边

	},

    //消息传播
    ACTION_TYPE_LISTER:{        
        SELF_OUT_ADD_CARD : 1,  //我的以出牌界面新增一张牌
        SELF_OUT_RM_CARD :2,     //我的以出牌界面删除一张牌

        FUZI_ADD_PENG:3,            //手牌通知附子添加碰牌(3张)
        FUZI_ADD_Eat:4,             //手牌通知附子添加碰牌(3张)
        FUZI_ADD_AN_GANG:5,         //手牌通知附子添加暗杠牌(4张)
        FUZI_ADD_MING_GANG:6,       //手牌通知附子添加暗杠牌(4张)
    },

    CARD_GROUP_TYPE:{
        PENG:1,              //已碰牌 3张
        EAT:2,               //已吃牌 3张
        AN_GANG:3,           //已暗杠 4张   自己抓4张一样的牌
        MING_GANG:4,         //已明杠 4张   碰了以后自己又抓到一张牌
        PUBLIC_GAME:5        //已公杠 4张   自己手上有3张一样的牌 别打出这张牌
    }
};
 