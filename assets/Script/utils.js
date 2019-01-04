cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    changeScene (_, eventType) {
        if (eventType == 1)
        {
            cc.director.loadScene("bunnymark");
        }
        else if (eventType == 2)
        {
            cc.director.loadScene("SkeletonScene");
        }
        else if (eventType == 3)
        {
            cc.director.loadScene("DragonBones");
        }
    },

    gc (_) {
        cc.sys.garbageCollect();
    },

    restartvm () {
        cc.sys.restartVM();
    }
});
