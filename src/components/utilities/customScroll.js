import React, { Component } from 'react';

import $ from 'jquery';
import { TweenMax, TweenLite, TimelineLite, Power2 } from "gsap/TweenMax";

class CustomScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wheelEvent: null,
            limits: null,
            increment: null,
            incrementDefaulf: null,
            position: 0,
            scroll: 0,
            gesture: 0,
            percent: 0,
            enable: !1,
            scrolling: !1,
            events: !0,
            delta: 0,
            gestureDelta: 0,
            direction: 0
        }
    }

    componentDidMount = (t,i) => {
        this.state.wheelEvent = this.isEventSupported("mousewheel") 
            ? "mousewheel" : "wheel",
        this.state.limits = {
            min: t,
            max: i
        },
        this.state.increment = 0,
        // console.log("hello")
        this.init()
    }

    disableEvents = () => {
        this.events = !1
    }

    enableEvents = () => {
        this.events = !0
    }

    setPosition =(t) => {
        this.position = t
    }

    update = () => {
        $(this).trigger({
            type: CustomScroll.EVENT.MOVE
        })
    }

    setScrollAnimation = (t, i, e) => {
        e || (e = Cubic.easeInOut),
        TweenLite.killTweensOf(this),
        TweenMax.to(this, t, {
            scroll: i,
            ease: e,
            onUpdate: function() {
                this.position = this.scroll,
                this.position = this.position < this.limits.min ? 
                    this.limits.min : this.position,
                this.position = this.position > this.limits.max ? 
                    this.limits.max : this.position,
                this.percent = 100 * i / this.limits.max,
                $(this).trigger({
                    type: CustomScroll.EVENT.MOVE
                }).bind(this)
            }
            .bind(this)
        })
    }

    touchstart = (t) => {
        this.events && (this.enable && (this.gesture = t.originalEvent.touches[0].clientY,
        this.gestureDelta = 0),
        t.originalEvent.preventDefault())
    }

    touchend = (t) => {
        this.events && (this.enable,
        t.originalEvent.preventDefault(),
        this.scrolling = !1)
    }

    touchmove = (t) => {
        if (this.events) {
            if (this.enable) {
                var i = t.originalEvent.touches[0].clientY
                  , e = 0;
                i > this.gesture ? (this.direction = -1,
                e += (i - this.gesture) / 10,
                e += Math.pow(e, 2),
                this.gestureDelta += -e) : i < this.gesture && (this.direction = 1,
                e += (this.gesture - i) / 10,
                e += Math.pow(e, 2),
                this.gestureDelta += e),
                this.gesture = t.originalEvent.touches[0].clientY
            }
            this.scrolling = !0,
            t.originalEvent.preventDefault()
        }
    }

    move = (t) => {
        if (!window.menu_opened && this.events && (t.preventDefault(),
        this.enable)) {
            var i = t.originalEvent
              , e = i.deltaY || i.wheelDelta;
            if (this.isMac()) {
                var s = e / 100;
                newData = Math.pow(s, 2),
                e > 0 ? this.increment = s : e < 0 && (this.increment = -s)
            } else {
                var s = this.isFirefox() ? e : e / 40;
                e > 0 ? this.increment = s : e < 0 && (this.increment = -s)
            }
            this.isIE() ? e > 0 ? this.position -= this.increment : e < 0 && (this.position += this.increment) : e > 0 ? this.position += this.increment : e < 0 && (this.position -= this.increment),
            this.position = this.position < this.limits.min ? this.limits.min : this.position,
            this.position = this.position > this.limits.max ? this.limits.max : this.position,
            TweenLite.killTweensOf(this),
            TweenLite.to(this, this.isMac() ? .3 : .5, {
                scroll: this.position,
                onUpdate: function() {
                    this.percent = 100 * this.position / this.limits.max,
                    $(this).trigger({
                        type: CustomScroll.EVENT.MOVE
                    })
                }
                .bind(this)
            })
        }
    }

    isEventSupported = (t) => {
        var i = document.createElement("div");
        t = "on" + t;
        var e = t in i;
        return e || (i.setAttribute(t, "return;"),
        e = "function" == typeof i[t]),
        i = null,
        e
    }

    isMac = () => {
        return navigator.platform.toUpperCase().indexOf("MAC") >= 0
    }

    isTablet = () => {
        return window.innerWidth >= 768
    }

    isIE = () => {
        var t = window.navigator.userAgent
          , i = t.indexOf("MSIE ");
        return i > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)
    }

    isFirefox = () => {
        var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        return t
    }
    animate = () => {
        this.render_UPDATE()
    }
    render_UPDATE = () => {
        this.updateRender(),
        requestAnimFrame(this.render_UPDATE.bind(this))
    }

    updateRender = () => {
        var t, i;
        1 == this.direction ? (t = this.gestureDelta / 20,
        this.gestureDelta -= t,
        i = (this.gestureDelta - 1) / 100,
        i = i <= 0 ? 0 : i,
        this.position += i) : this.direction == -1 && (t = this.gestureDelta / 20,
        this.gestureDelta -= t - .1,
        i = (this.gestureDelta - 1) / 100,
        i = i >= 0 ? 0 : i,
        this.position += i),
        this.position = this.position < this.limits.min ? this.limits.min : this.position,
        this.position = this.position > this.limits.max ? this.limits.max : this.position,
        this.scroll = this.position,
        this.percent = 100 * this.position / this.limits.max,
        $(this).trigger({
            type: CustomScroll.EVENT.MOVE
        })
    }
    init = () => {
        this.incrementDefaulf = this.increment,
        $(window).on(this.wheelEvent, this.move.bind(this)),
        $(window).bind("touchstart", this.touchstart.bind(this)),
        $(window).bind("touchend", this.touchend.bind(this)),
        $(window).bind("touchmove", this.touchmove.bind(this)),
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }(),
        window.useTouchEvents && this.animate()
    }
}

export default CustomScroll;