/*!
* Derived from Addy Osmani's 
* Pub/Sub implementation
* http://addyosmani.com/
*/

define(function () {
    'use strict';

    var Observable = function () {
        this.topics = {};
        this.subUid = -1;
    };


    Observable.prototype.trigger = function (topic, args) {

        if (!this.topics[topic]) {
            return false;
        }

        var subscribers = this.topics[topic];
        var len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(topic, args);
        }


        return true;

    };

     Observable.prototype.bind = function (topic, func) {

        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        var token = (++this.subUid).toString();
        this.topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

     Observable.prototype.unbind = function (token) {
        for (var m in this.topics) {
            if (this.topics[m]) {
                for (var i = 0, j = this.topics[m].length; i < j; i++) {
                    if (this.topics[m][i].token === token) {
                        this.topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

    return Observable;
});
