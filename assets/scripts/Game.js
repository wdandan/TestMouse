var Difficult = cc.Enum({
    Simple: 1000,
    Ordinary: 2500,
    Difficult: 5000
});

cc.Class({
    extends: cc.Component,

    properties: {
        hammer: {
            default: null,
            type: cc.Prefab,
        },

        countDown: {
            default: null,
            type: cc.Prefab,
        },

        gameOver: {
            default: null,
            type: cc.Prefab,
        },

        mouseNodes: {
            default: null,
            type: cc.Node,
        },

        animalAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },

        animalDeathAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },

        timeRollerBar: {
            default: null,
            type: cc.Sprite,
        },

        icon: {
            default: null,
            type: cc.SpriteAtlas,
        },

        gameRule: {
            default: null,
            type: cc.SpriteFrame,
        },

        gameScore: {
            default: null,
            type: cc.Label,
        },

        timeRollerStep: {
            default: null,
            range: [0, 2, 0.1],
        },

        gameScoreEffect: {
            default: null,
            type: cc.Prefab,
        },

        gameDifficultScore: {
            default: Difficult.Simple,
            type: Difficult,
            tooltip: "Simple:2000\n Ordinary:4000\n Difficult:6000",
        },

        gameGitHubUrl:"",

        _mouseNode: null,
        _mouseIndexArr: [],
        _times: 0,
        _isRunning: true,
        _score: 0,
    },

    start () {
        this.initGameData();
        this.initEventListener();
    },

    initGameData () {
        this._mouseDataTable = [
            {
                mouseName: "harmful_mouse_0",
                scoreUpdateFunc: function () {
                    this._score += 100;
                }
            },
            {
                mouseName: "harmful_mouse_1",
                scoreUpdateFunc: function () {
                    this._score += 500;
                }
            },
            {
                mouseName: "kind_mouse_0",
                scoreUpdateFunc: function () {
                    if (this._score === 0) {
                        this._score += 200;
                    } else {
                        this._score = Math.floor(this._score * 1.2);
                    }
                }
            },
            {
                mouseName: "kind_mouse_1",
                scoreUpdateFunc: function () {
                    this._score -= 100;
                }
            },
            {
                mouseName: "rabbit_0",
                scoreUpdateFunc: function () {
                    this._score = Math.floor(this._score / 2);
                }
            }
        ];
    },

    // update (dt) {},
});
