cc.Class({
    extends: cc.Component,

    properties: {
        count : {
            default: undefined,
            type: cc.Label,
        },

        tplArr : {
            default: [],
            type: cc.Prefab,
        }
    },

    start () {
        this.maxX = cc.winSize.width / 2;
        this.maxY = cc.winSize.height / 2;
        this.minX = -this.maxX;
        this.minY = -this.maxY;
        this.handleCount = 5;
        this.skeArr = [];
        this.maxCount = 140;

        this.add();
    },

    add () {
        for (var i = 0; i < this.handleCount; i++) {
            if (this.skeArr.length >= this.maxCount) break;
            let index = Math.random() * this.tplArr.length;
            index = Math.floor(index);
            let tpl = this.tplArr[index];
            if (!tpl) return;
            let newNode = cc.instantiate(tpl);
            newNode.x = (Math.random() - 0.5) * 2 * this.maxX;
            newNode.y = (Math.random() - 0.5) * 2 * this.maxY;
            this.node.addChild(newNode);
            this.skeArr.push(newNode);
        }
        this.count.string = this.skeArr.length;
    },

    del () {
        if (this.skeArr.length == 0) return;
        for (var i = 0; i < this.handleCount; i++) {
            let newNode = this.skeArr.pop();
            if (!newNode) break;
            newNode.destroy();
        }
        this.count.string = this.skeArr.length;
    }
});
