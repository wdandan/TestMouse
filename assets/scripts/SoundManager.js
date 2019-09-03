
cc.Class({
    extends: cc.Component,

    properties: {
        backGroupSound: {
            default: null,
            type: cc.AudioClip,
        },

        loop: true,

        soundVolume: {
            default: 1,
            range: [0, 1, 0.1],
            slide: true,
            notify: function () {
                this.setVolume();
            }
        },

        audioClipPoll: {
            default: [],
            type: cc.AudioClip,
        },

        _isPlaying: false,
        _audioId: null,
        _effectId: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    playBackGroundSound () {
        cc.audioEngine.stopAll();
        this._audioId = cc.audioEngine.play(this.backGroupSound, this.loop, this.soundVolume);
    },

    playEffectSound (command, loop) {
        if (!loop) {
            loop = this.loop;
        }
        if (command) {
            switch (command) {
                case "begin":
                case "score":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[0], loop);
                    break;
                case "pass":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[1], loop);
                    break;
                case "hit":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[2], loop);
                    break;
                case "lose":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[3], loop);
                    break;
                case "second":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[4], loop);
                    break;
                case "click":
                    this._effectId = cc.audioEngine.playEffect(this.audioClipPoll[5], loop);
                    break;
                default:
                    break;
            }
        }
    },

    pauseMusic () {
        cc.audioEngine.pauseAll();
    },

    resumeMusic () {
        cc.audioEngine.resumeAll();
    },

    setVolume () {
        cc.audioEngine.setVolume(this.soundVolume);
    },

    stopAll () {
        cc.audioEngine.stopAll();
        this._audioId = null;
    },

    start () {

    },

    // update (dt) {},
});
