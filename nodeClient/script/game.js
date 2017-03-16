var crypto = require('crypto');

var log4js = require('log4js'),
    logger = log4js.getLogger(__filename),
    _ = require('underscore');

var envConfig = require('../config/env.json'),
    config = require('../config/' + envConfig.env + '/config'),
    pomelo = require('./pomelo'),
    cmds = require('./cmds/cmds');

var MAX_FPS = 60;
var testPos = -1;
var fristPos = 0;
function testCopmose(pos){	 
	++testPos; 
	if(0 == testPos){
		fristPos = pos;
	}else if(testPos==4){
	  cmds.compose(1,fristPos,function(data){
			  logger.info('compose data = %j', data);
		  })
	} 	
}

function enterSceneRes(data) {
//    monitor(END,'enterScene',2);
    logger.info(' enterSceneRes curPlayer = %j \n\n', data.curPlayer);
	// cmds.getRandomShopInfo(function(data){
    //     logger.info('getRandomShopInfo data = %j', JSON.stringify(data));
    // })
    // cmds.setDiamond(98900, function(data){
    //   // logger.info('setDiamond code = %s', data.code);
    // });  

    cmds.endlessFight(1, function (data) {
       logger.info('endlessFight code = %s, occasionId = %s', data.code, data.occasionId);
        cmds.commitSingleEndless(11000, function (data) {
           logger.info('commitSingleEndless data %j', JSON.stringify(data));
        });
    });
    //  cmds.buyRandGoods(5002,function(data){
    //      logger.info('buyRandGoods data = %j', JSON.stringify(data));
    //  });

//    cmds.refreshRandGoods(function(data){
//         logger.info('refreshRandGoods data = %j', JSON.stringify(data));
//     });

     
    //   cmds.setGold(999999, function(data){
    //  //  logger.info('setGold code = %s', data.code);
    // });
	
    // cmds.setDiamond(98900, function(data){
    //   // logger.info('setDiamond code = %s', data.code);
    // });  

    // cmds.setSpirit(9999, function(data){
    //    logger.info('setSpirit code = %s', data.code);
    // });

    //  cmds.clearCustom(11409, function (data) {
    //   // logger.info('clearCustom code = %s', data.code);
    //  });
 
  

    // cmds.setGold(999999, function(data){
    //  //  logger.info('setGold code = %s', data.code);
    // });
	
    // cmds.setDiamond(98900, function(data){
    //   // logger.info('setDiamond code = %s', data.code);
    // });  

    // cmds.setSpirit(9999, function(data){
    //    logger.info('setSpirit code = %s', data.code);
    // });


   

    // cmds.createBarrier(10103, function (data) {
    //    logger.info('createBarrier code = %s, barrier = %j', data.code, data.barrier);
    //    if (data.code === 200) {
    //        setTimeout(function () {
    //            cmds.exitBarrier(1, 1, 300, 5, 6, 7, function(data){
    //                 logger.info('\n\n exitBarrier data = %s\n\n ', JSON.stringify(data));

    //                 if(data.barrierRandBoss!=null){
    //                     var randomBossId = data.barrierRandBoss.randomBossId;
    //                          cmds.atkRandBoss(randomBossId,function(data){
    //                             logger.info('atkRandBoss  data = %s', JSON.stringify(data));
    //                             if (data.code === 200) {
    //                                     cmds.exitRandBoss(1,randomBossId,function(data){
    //                                     logger.info('exitRandBoss data = %s', JSON.stringify(data)); 
    //                             });
    //                             } 
    //                         });
    //                 }
                   
    //            });
    //        }, 200);
    //    } 
   
    // });


	// cmds.createPlayerName('tony001',function(data){
		// logger.info('createPlayerName code = %s', data.code);
	// });
    // cmds.setCurFightHeroBrother(2,2,function(data){
    //         logger.info('setCurFightHeroBrother code = %s', data.code);
    // });
	// testPos  = -1;
	// for(var i=0;i <= 4;++i)
	// {
		// cmds.addHero(101, function(data){
			// logger.info('addHero code = %s  , i = %s ', data.code ,i);
			// testCopmose(data.pos);	
		// });
		 
	// }
    
    // cmds.compose(1,function(data){
        // logger.info('compose data = %j', data);
    // })

    // cmds.splittingUp(2,function(data){
    //            logger.info('splittingUp code = %j', data);
    //         })

	// cmds.snExchange('','G3LRN36JECXD4',function(data){
                // logger.info('snExchange data = %j', data);
     // })
	 
	// cmds.openHeroLock(101, function(data){
    //    logger.info('解锁 data%j',data);
    // });
	// cmds.makeOrderId('hlz_150diamondproduct', function(data){
    //    logger.info('充值订单生成 data%j',data);
    // });
	
	
	// cmds.playerBehavior(1,100, function(data){
       // logger.info('玩家行为');
    // });
	
	// cmds.setHeroLV(1, 150, function(data){
       // logger.info('setHeroLV code = %s', data.code);
    // });
	
	 // cmds.levelUpSkill(1, 2, 1, function(data){
       // logger.info('levelUpSkill code = %s, cost = %s, addLV = %s', data.code, data.cost, data.addLV);
    // });
	
	
	
	// cmds.drawActivityGetEnergy(24,2, function (data) {
       // logger.info(' \n\n\n drawActivityGetEnergy data = %j \n\n\n\n', data);
    // });
	
	// cmds.missionAward(2, function(data){
    //   logger.info('missionAward data %j', data);
    //});
	
	
    // cmds.getRechargeList( function(data) {
	// 	logger.info('充值回调 = %j',data);
	// });
	// cmds.rechargeBuy(1,function(data) {
		// logger.info('充值回调 = %j',data);
	// });
	
    //cmds.reopenBox(2, function (data) {
    //    logger.info('reopenBox code = %s, awards = %j', data.code, data.awards);
    //});
    //cmds.openBox(function (data) {
    //    logger.info('openBox code = %s, awards = %j', data.code, data.awards);
    //});
    //cmds.drawEndlessAwards('56365eb0-62e7-11e6-88e5-0f87a3c91fbc', function (data) {
    //    logger.info('drawEndlessAwards code = %s, presentAwards = %j, winAwards = %j, otherPresentAwards = %j, otherWinAwards = %j',
    //        data.code, data.presentAwards, data.winAwards, data.otherPresentAwards, data.otherWinAwards);
    //});
    //cmds.viewEndlessReports(function (data) {
    //    logger.info('code = %s, reports = %j', data.code, data.reports);
    //});
    //cmds.endlessMatch(2, function (data) {
    //    logger.info('endlessMatch code = %s', data.code);
    //});
    //cmds.addWakeUpItem(5031, 1, function (data) {
    //    logger.info('addWakeUpItem code = %s', data.code);
    //});
    //cmds.addEquipMeltPoint(1, function (data) {
    //    logger.debug('addEquipMeltPoint code = %s', data.code);
    //});
    //cmds.addEndlessPkPoint(1, function (data) {
    //    logger.debug('addEndlessPkPoint code = %s', data.code);
    //});
    //cmds.addChapterKey(1, function (data) {
    //    logger.debug('addChapterKey code = %s', data.code);
    //});
    // cmds.addEquip(1, 100, function (data) {
       // logger.info('addEquip code = %s', data.code);
    // });
    //cmds.viewEndlessOccasion(2, function (data) {
    //    logger.info('viewEndlessOccasion code = %s, mode = %s, occasions = %j, showReportRedSpot = %s', data.code, data.mode, data.occasions, data.showReportRedSpot);
    //});
    //cmds.buyBuffItem(4, function (data) {
    //    logger.info('buyBuffItem code = %s, dataId = %s, cnt = %s, buyCnt = %s', data.code, data.dataId, data.cnt, data.buyCnt);
    //
   // cmds.endlessFight(2, function (data) {
       // logger.info('endlessFight code = %s, occasionId = %s', data.code, data.occasionId);
        // cmds.commitSingleEndless(11000, function (data) {
           // logger.info('commitSingleEndless code = %s, highScore = %s, weekRank = %s, awards = %j', data.code, data.highScore, data.weekRank, data.awards);
        // });
    // });
    //cmds.getBuffShopItems(function (data) {
    //    logger.info('getBuffShopItems code = %s, items = %j', data.code, data.items);
    //});

    //cmds.buyBuffItem(2, function (data) {
    //    logger.info('buyBuffItem code = %s, dataId = %s, cnt = %s, buyCnt = %s', data.code, data.dataId, data.cnt, data.buyCnt);
    //});
    //cmds.melt([9, 10], function (data) {
    //    logger.info('melt code = %s, meltPoint = %s', data.code, data.meltPoint);
    //});
    //cmds.wakeUp(1, function (data) {
    //    logger.info('wakeUp code = %s, part = %s, gold = %s, wakeUpLV = %s', data.code, data.part, data.gold, data.wakeUpLV);
    //});
    //cmds.previewMyRankingAwards(3, function (data) {
    //    logger.info('previewMyRankingAwards code = %s, type = %s, awards = %j', data.code, data.type, data.awards);
    //});
    //cmds.drawRankingAwards(2, function (data) {
    //    logger.info('drawRankingAwards code = %s, type = %s, awards = %j', data.code, data.type, data.awards);
    //});
    //cmds.previewAwards(1, function (data) {
    //    logger.info('previewAwards code = %s, type = %s, awards = %j', data.code, data.type, data.awards);
    //});
    //cmds.getWeekScoreList(function(data){
    //    logger.info('getWeekScoreList code = %s, rankingList = %j, myRank = %s, awardRank = %s, awardDrew = %s',
    //        data.code, data.rankingList, data.myRank, data.awardRank, data.awardDrew);
    //});
    //cmds.saveWeekScoreRankingList(function (data) {
    //    logger.info('saveWeekScoreRankingList code = %s', data.code);
    //});

    //pomelo.request('world.testHandler.test', {}, function (data) {
    //    logger.info('test code = %s', data.code);
    //});

    //cmds.getScoreList(function (data) {
    //    logger.info('getScoreList code = %s, rankingList = %j, myRank = %s, awardRank = %s, awardDrew = %s', data.code,
    //        data.rankingList, data.myRank, data.awardRank, data.awardDrew);
    //});
    //cmds.saveScoreRankingList(function (data) {
    //    logger.info('saveScoreRankingList code = %s', data.code);
    //});
    //cmds.refine(9, function (data) {
    //    logger.info('refine code = %s, pos = %s, gold = %s, diamond = %s, dailyFreeRefine = %s, dailyDiamondRefine = %s',
    //        data.code, data.pos, data.gold, data.diamond, data.dailyFreeRefine, data.dailyDiamondRefine);
    //});
    //cmds.arm(1, function (data) {
    //    logger.info('arm code = %s', data.code);
    //});
    //cmds.getActivities(function (data) {
    //    logger.info('getActivities code = %s, activities = %j', data.code, data.activities);
    ////cmds.getOpFlags(function (data) {
    ////    logger.info('getOpFlags code = %s, opFlags = %j', data.code, data.opFlags);
    ////    cmds.setOpFlags(['sd_2', 'b', 'c'], function (data) {
    ////        logger.info('setOpFlags code = %s, opFlags = %j', data.code, data.opFlags);
    ////        //cmds.getActivities(function (data) {
    ////        //    logger.info('getActivities code = %s, activities = %j', data.code, data.activities);
    ////        //});
    ////    });
    ////});
    //});
    //setTimeout(function(){
    //    cmds.drawActivityAwards(16, 10000, function (data) {
    //        logger.info('drawActivityAwards code = %s, drops = %j', data.code, data.drops);
    //    });
    //}, 3000);
    //cmds.charge(1, 4, 1, function (data) {
    //    logger.info('charge code = %s, diamond = %s', data.code, data.diamond);
    //});
    //cmds.buyDiscountShopGoods(1, 1, function (data) {
    //    logger.info('buyDiscountShopGoods code = %s, moneyType = %s, count = %s', data.code, data.moneyType, data.count);
    //});

  //  cmds.getActivities(function (data) {
  //     logger.info('getActivities code = %s, activities = %j', data.code, data.activities);
 //   });
//
    //cmds.drawActivityInvitAwards(29, 1, 10000014,function (data) {
     // logger.info('drawActivityInvitAwards data = %j',JSON.stringify(data));
   // });


    // cmds.getMailTitle(function(data){
    //        logger.info('getMailTitle data = %j',JSON.stringify(data));
    // }) ;

    //cmds.drawActivityInvitAwards(29, 4, 10000039,function (data) {
    //  logger.info('drawActivityInvitAwards data = %j',JSON.stringify(data));
    //});
    
    //cmds.viewActivity(1, function (data) {
    //    logger.info('viewActivity code = %s', data.code);
    //});
    //goodsId, type, typeId, unit, priceType, price
    //cmds.buyGoods(14, 5, 1002, 1, 7, 60, function (data) {
    //    logger.info('buyGoods code = %s', data.code);
    //});
    //cmds.getShopPageList(function(data){
    //    logger.info('code = %s, pages = %j', data.code, data.pages);
    //});
    //var i = 0;
    //setInterval(function () {
    //    cmds.commitSuggestion(require('util').format('测试2b(%s)', ++i), function (data) {
    //        logger.info('commitSuggestion code = %s', data.code);
    //    });
    //}, 200);

    //cmds.guideFinish(2, function (data) {
    //    logger.info('guideFinish code = %s, guideId = %s, drops = %j', data.code, data.guideId, data.drops);
    //});
    //cmds.saveData('de', function (data) {
    //    logger.info('saveData code = %s', data.code);
    //});

    //cmds.loadData(function (data) {
    //    logger.info('loadData code = %s, saveData = %s', data.code, data.saveData);
    //});
    //cmds.sellItem(1, function (data) {
    //    logger.info('sellItem code = %s, money = %s', data.code, data.money);
    //});
    //cmds.petUpgrade(1, [{pos: 2, count: 2}], [2], function(data){
    //    logger.info('petUpgrade code = %s', data.code);
    //});
    //pomelo.request('area.testHandler.test', {part: 0}, function (data) {
    //    logger.info('test code = %s', data.code);
    //});
    //cmds.clearCustom(10303, function(data){
    //    logger.info('clearCustom code = %s', data.code);
    //});

    //cmds.clearCustomNow(10304, 2, function (data) {
    //    logger.info('clearCustomNow code = %s', data.code);
    //});
    //cmds.addItem(7, 2, function (data) {
    //    logger.info('addItem code = %s', data.code);
    //});

  



    //cmds.addPet(101, function(data){
    //    logger.info('addPet code = %s', data.code);
    //});

    //cmds.setPetLV(1, 3, function(data){
    //    logger.info('setPetLV code = %s', data.code);
    //});


    //cmds.setSpirit(1, function(data){
    //    logger.info('setSpirit code = %s', data.code);
    //});

    //cmds.cleanItemBag(function(data){
    //    logger.info('cleanItemBag code = %s', data.code);
    //});

    //cmds.cleanHeroBag(function(data){
    //    logger.info('cleanHeroBag code = %s', data.code);
    //});

    //cmds.cleanPetBag(function (data) {
    //    logger.info('cleanPetBag code = %s', data.code);
    //});

    //pomelo.player = new Player(data.curPlayer || {});
   
    //cmds.levelUpHero(2, [], [1], function(data){
    //    logger.info('upgradeHero code = %s, cost = %s, retGold = %s', data.code, data.cost, data.retGold);
    //});
    //cmds.breakThroughHero(1, [{pos: 1, count: 20}], [], function (data) {
    //    logger.info('breakThroughHero code = %s, cost = %s, retGold = %s', data.code, data.cost, data.retGold);
    //});
    //cmds.unlockChapter(2, function(data){
    //    logger.info('unlockChapter code = %s, cost = %s', data.code, data.cost);
    //});
    //cmds.wipe(10101, function (data) {
    //    logger.info('wipe code = %s, drops = %j', data.code, data.drops);
    //});
    //cmds.buyWipeTicket(function(data){
    //    logger.info('buyWipeTicket code = %s, cost = %s', data.code, data.cost);
    //});
    //cmds.resetBarrierAtkCnt(1, function(data){
    //    logger.info('resetBarrierAtkCnt code = %s, cost = %s, barrierId = %s, dailyTimes = %s, resetTimes = %s',
    //        data.code, data.cost, data.barrierId, data.dailyTimes, data.resetTimes);
    //});
    //cmds.buyEnergy(function(data){
    //    logger.info('buyEnergy code = %s, cost = %s', data.code, data.cost);
    //});
    //cmds.drawChapterStarAwards(1, 1, function(data){
    //    logger.info('drawChapterStarAwards code = %s, drops = %j', data.code, data.drops);
    //});
    //cmds.revive(1, function(data){
    //    logger.info('revive code = %s, cost = %s', data.code, data.cost);
    //});




    // cmds.atkRandBoss(1,function(data){
    //     logger.info('atkRandBoss  data = %s', JSON.stringify(data));
    //       cmds.exitRandBoss(0,1,function(data){
    //             logger.info('exitRandBoss data = %s', JSON.stringify(data)); 
    //       });
    // });
    // cmds.buyHero(103, function (data) {
       // logger.info('buyHero code = %s, costDiamond = %s, heroId = %s', data.code, data.costDiamond, data.heroId);
    // });

    //cmds.petBreakthrough(1, function (data) {
    //    logger.info('petBreakthrough code = %s, costGold = %s', data.code, data.costGold);
    //});
}

function afterLogin(data, MAC) {
    logger.info('after login begin enter scene...%s',MAC);
    pomelo.player = null;
//    pomelo.isDead = false;

    /**
     * 处理登录请求
     */
    function login(data) {
        if (data.code === 1003) {
            //need create player.
            cmds.createPlayer(MAC, function (success) {
                if (!success) {
                    logger.info('createPlayer create failed!');
                    return;
                }
                cmds.enterScene(enterSceneRes);
//                setTimeout(cmds.enterScene, 1000, enterSceneRes);
            });
            return;
        }
        logger.info('entry ok!already has player.try enter scene...');
        // pass arguments to the callback function of 'setTimeout'.
//        setTimeout(cmds.enterScene, 1000, enterSceneRes);
        cmds.enterScene(enterSceneRes);
    }

    login(data);

}

pomelo.on('onKick', function () {
    logger.info('You have been kicked offline for the same account logined in other place.');
});

pomelo.on('disconnect', function (reason) {
    logger.info('disconnect invoke!' + reason);
});

pomelo.on('heroBag.update', function (data) {
   // logger.info('heroBag.update bagData = %j', data.bagData);
});

pomelo.on('heroBag.remove', function (data) {
  //  logger.info('heroBag.remove pos = %s', data.pos);
});

pomelo.on('player.updateProp', function (data) {
   logger.info('player.updateProp prop = %s, value = %j', data.prop, data.value);
});

pomelo.on('itemBag.update', function (data) {
   // logger.info('itemBag.update itemId = %s, pos = %s, itemCount = %s', data.itemId, data.pos, data.itemCount);
});

pomelo.on('chapter.unlock', function (data) {
   // logger.info('chapter.unlock chapterId = %s, drawFlag = %s', data.chapterId, data.drawFlag);
});

pomelo.on('petBag.update', function (data) {
   // logger.info('petBag.update bagData = %j', data.bagData);
});

pomelo.on('petBag.remove', function (data) {
   // logger.info('petBag.remove pos = %s', data.pos);
});

pomelo.on('passedBarrier.update', function (data) {
  //  logger.info('passedBarrier.update barrierId = %s, star = %s, dailyTimes = %s, resetTimes = %s', data.barrierId,
   //     data.star, data.dailyTimes, data.resetTimes);
});

pomelo.on('playerShop.refreshBuyCount', function (data) {
    //logger.info('playerShop.refreshBuyCount records = %j', data.records);
});

pomelo.on('playerShop.refresh', function (data) {
   // logger.info('playerShop.refresh');
});

pomelo.on('activity.new', function (data) {
   
   //logger.info('activity.new id = %s, name = %s, showRedSpot = %s, type = %s, leftTime = %s, desc = %s, detail = %j',
  //      data.id, data.name, data.showRedSpot, data.type, data.leftTime, data.desc, data.detail);
});

pomelo.on('activity.remove', function (data) {
    //logger.info('activity.remove id = %s', data.id);
});

pomelo.on('activity.refreshRedSpot', function (data) {
    //logger.info('activity.refreshRedSpot id = %s, showRedSpot = %s', data.id, data.showRedSpot);
});

pomelo.on('armBag.refresh', function (data) {
    //logger.info('armBag.refresh part = %s, refineLV = %s, refineExp = %s, equip = %j', data.part, data.refineLV,
    //    data.refineExp, data.equip);
});

pomelo.on('equipBag.update', function (data) {
  //   logger.info('equipBag.update bagData = %j', data.bagData);
});

pomelo.on('equipBag.remove', function (data) {
    // logger.info('equipBag.remove pos = %s', data.pos)
});

pomelo.on('scoreRankingList.award', function (data) {
    // logger.info('scoreRankingList.award rank = %s, drew = %s', data.rank, data.drew);
});

pomelo.on('weekScoreRankingList.award', function (data) {
    // logger.info('weekScoreRankingList.award rank = %s, drew = %s', data.rank, data.drew);
});

pomelo.on('scoreRankingList.update', function (data) {
   //  logger.info('scoreRankingList.update playerId = %s, rank = %s, score = %s',
   //      data.playerId, data.rank, data.score);
});

pomelo.on('weekScoreRankingList.update', function (data) {
   //  logger.info('weekScoreRankingList.update playerId = %s, rank = %s, score = %s, name = %s, headPicId = %s, heroId = %s',
   //      data.playerId, data.rank, data.score, data.name, data.headPicId, data.heroId);
});

pomelo.on('endlessBuff.refresh', function (data) {
    // logger.info('endlessBuff.refresh dataId = %s, cnt = %s, buyCnt = %s', data.dataId, data.cnt, data.buyCnt);
});

pomelo.on('endlessOccasion.refresh', function (data) {
  //   logger.info('endlessOccasion.refresh occasionId = %s, dailyCnt = %s, maxWin = %s, maxLose = %s', data.occasionId,
  //       data.dailyCnt, data.maxWin, data.maxLose);
});

pomelo.on('wakeUpBag.update', function (data) {
  //   logger.info('wakeUpBag.update pos = %s, itemId = %s, itemCount = %s', data.pos, data.itemId, data.itemCount);
});

pomelo.on('endless.matchSuccess', function (data) {
    // logger.info('endless.matchSuccess target = %j', data.target);

    // var percent = 0;
    // var timer = setInterval(function () {
    //     percent += 10;
    //     cmds.loadingPercent(percent);
    //     if (percent >= 100) {
    //         clearInterval(timer);
    //     }
    // }, 1000);
});

pomelo.on('endless.onLoading', function (data) {
   //  logger.info('endless.onLoading playerId = %s, percent = %s, tick = %s', data.playerId, data.percent, data.tick);
});

pomelo.on('endless.startBattle', function (data) {
  //   logger.info('endless.startBattle endlessId = %s', data.endlessId);
    //cmds.endlessRevive(2, function (data) {
    //    logger.info('#1 endlessRevive  code = %s, reviveCnt = %s', data.code, data.reviveCnt);
    //    cmds.endlessRevive(2, function (data) {
    //        logger.info('#2 endlessRevive  code = %s, reviveCnt = %s', data.code, data.reviveCnt);
    //        cmds.endlessRevive(2, function (data) {
    //            logger.info('#3 endlessRevive  code = %s, reviveCnt = %s', data.code, data.reviveCnt);
    //        });
    //    });
    //});

    var score = 0, finishPro = 0.05;
    var curBattleId = 10000;
    var timer = setInterval(function () {
        score += _.random(1, 5000);
        var end = Math.random() < finishPro;//curBattleId >= 10016;
        cmds.reportScore(score, end, curBattleId++, function (data) {
            logger.info('reportScore code = %s, score = %s, otherScore = %s, curBattleId = %s, end = %s, otherEnd = %s',
                data.code, score, data.otherScore, curBattleId, end, data.otherEnd);
            if (end) {
                logger.info('reportScore highScore = %s, curWeekRank = %s, awards = %j', data.highScore, data.curWeekRank, data.awards);

                cmds.reopenBox(2, function (data) {
                    logger.info('reopenBox code = %s, awards = %j', data.code, data.awards);
                });
            }
        });
        if (end) {
            clearInterval(timer);
        }
    }, 3000);
});

pomelo.on('endless.evaluate', function (data) {
    // logger.info('endless.evaluate endlessId = %s, result = %s, otherScore = %s, presentAwards = %j, winAwards = %j',
    //     data.endlessId, data.result, data.otherScore, data.presentAwards, data.winAwards);
});


pomelo.on('Mission.refresh', function (data) {
    // logger.info('Mission.refresh %j',data);
});

pomelo.on('Mission.reset', function (data) {
   //  logger.info('\n\n\n\n\n\nMission.reset %j',data);
});
 

function tick() {
}

try {
    var _MAC =123456;// Math.random(1000000,9999999),
        pwd = '123456';

    log4js.configure('./config/log4js.json');

    setInterval(tick, 1000 / MAX_FPS);
	var host = '127.0.0.1';
	var port = 3010;
    cmds.connect(host, port, function () {
        logger.info('connect gate %s:%s ok!', host, port); 
    });
} catch (ex) {
    logger.error('err: ' + ex.stack);
}