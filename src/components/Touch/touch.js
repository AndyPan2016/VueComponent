﻿
/**
 *
 * touch.js
 *
 * 移动端Web触摸滑动事件模块
 *
 * version 1.0.2.2(主版本号.子版本号.编译版本号.修正版本号)
 *
 * @author pye-mail@163.com
 *
 * create log 2014年8月30日15:01:55
 *
 * update log 2014年8月30日16:03:25
 *              2014年9月9日14:37:30(兼容pc端(IE6,7,8,9)、windows phone(IE10，11)和android、ios的触摸事件，只需要和android,ios一样使用函数就可以了)
 *              2014年10月14日09:36:41(修复低版本IE出错的Bug)
 *              2015年4月3日10:54:46(修复旋转和放大Bug)
 *
 */

module.exports = {
    Touch () {
        /// <summary>
        /// 移动端Web触摸滑动事件模块
        /// </summary>

        var that = this;

        //函数封装(或包装)
        var EncapsulationFunction = function (handle) {
            /// <summary>
            /// 函数封装(或包装)，将传入的函数包装为我们需要的函数对象
            /// </summary>
            /// <param name="handle" type="JSON Object">函数对象</param>

            var that = this;
            //触摸开始函数
            that.start = handle.start || null;
            //触摸滑动函数
            that.move = handle.move || null;
            //触摸结束函数
            that.end = handle.end || null;
        };

        //封装一个我们需要的触摸事件参数集合对象
        var EncapsulationTouch = function (touch, event) {
            /// <summary>
            /// 封装一个我们需要的触摸事件参数集合对象
            /// </summary>
            /// <param name="touch" type="Object">Touch对象</param>
            /// <param name="event" type="Event Object">触摸事件对象</param>

            var that = this;
            var count = 0;

            if (touch) {
                var i = 0, length = touch.length, touchItem;
                for (; i < length; i++) {
                    //获取第i个手指的触摸事件相关参数
                    touchItem = touch[i];
                    if (touchItem) {
                        that['touch' + (i + 1)] = { x: touchItem.clientX, y: touchItem.clientY, event: event };
                        count++;
                    }
                }
                //保存当前触发触摸事件的手指个数
                that['length'] = count;
            }
            else {
                that['touch1'] = { x: event.clientX, y: event.clientY, event: event };
                count = 1;
            }
            //保存当前触发触摸事件的手指个数
            that['length'] = count;
        };

        //触摸滑动事件封装
        that.TouchSlide = function (options) {
            /// <summary>
            /// 触摸基本事件
            /// </summary>
            /// <param name="options" type="JSON Object">参数对象</param>
            /// <param name="handle" type="Function/JSON Object">操作函数(move)对象或集合</param>

            var that = this;

            var TouchSlideModel = function (model) {

                var that = this;

                that.target = model.target || document.body;

                that.handle = model.handle;

                that.preventDefault = !model.preventDefault ? false : true;
            };

            var TouchSlideModelInstance = new TouchSlideModel(options || {});

            var TouchEventType = function () {

                var that = this;

                that.MSPointerType = {
                    start: 'MSPointerOver',
                    move: 'MSPointerMove',
                    end: 'MSPointerOut'
                };

                that.pointerType = {
                    start: 'pointerover',
                    move: 'pointermove',
                    end: 'pointerout'
                };

                that.touchType = {
                    start: 'touchstart',
                    move: 'touchmove',
                    end: 'touchend'
                };

                that.mouseType = {
                    start: 'mousedown',
                    move: 'mousemove',
                    end: 'mouseup',
                    out: 'mouseout'
                };

            };

            var EventType = new TouchEventType();

            var isTouch = function () {
                return typeof window.ontouchstart !== 'undefined';
            };

            var isMSPointer = function () {
                return window.navigator.msPointerEnabled;
            };

            var isPointer = function () {
                return window.navigator.pointerEnabled;
            };

            var isArray = function (ary) {
                try {
                    return Object.prototype.toString.call(ary) === "[object Array]"
                } catch (e) {
                    return false
                }
            };

            var isFunction = function (fn) {
                return (fn && typeof (fn) === 'function') ? 1 : 0
            };

            var bindEvent = function (target, eventName, handle) {

                //if (window.addEventListener) {
                //    target.addEventListener(eventName, handle, false);
                //}
                //else if (window.attachEvent) {
                //    target.attachEvent('on' + eventName, handle);
                //}
                //else {
                //    target['on' + eventName] = handle;
                //}

                if (target) {
                    if (typeof(eventName) === 'string') {
                        target['on' + eventName] = handle;
                    }
                    else if (isArray(eventName)) {
                        var i = 0, length = eventName.length;
                        for (; i < length; i++) {
                            target['on' + eventName[i]] = handle[i];
                        }
                    }
                }

            };

            var touchStart, touchMove, touchEnd, touchFlag = false, moveTouchFlag = false;
            var install = function () {
                var handle = TouchSlideModelInstance.handle,
                    target = TouchSlideModelInstance.target,
                    preventDefault = TouchSlideModelInstance.preventDefault;
                //封装基础操作函数
                var baseHandle = new EncapsulationFunction(handle || {});
                if (target) {

                    //触摸开始事件
                    var startHandle = function (event) {
                        /// <summary>
                        /// 触摸开始事件
                        /// </summary>
                        /// <param name="e">Window Event</param>
                        event = event || window.event;

                        if (!touchFlag) {
                            //获取手指触摸移动对象
                            touchStart = new EncapsulationTouch(event.targetTouches, event);
                            if (baseHandle.start) {
                                //响应事件
                                baseHandle.start.call(this, touchStart, event);
                            }

                            var customEvent = that.customEvent;
                            if (customEvent) {
                                var touchStartEvent = customEvent.onTouchStart;
                                if (touchStartEvent) {
                                    var i = 0, length = touchStartEvent.length, eventItem;
                                    for (; i < length; i++) {
                                        eventItem = touchStartEvent[i];
                                        if (isFunction(eventItem)) {
                                            eventItem.call(that, touchStart, event);
                                        }
                                    }
                                }
                                //if (touchStartEvent && typeof (touchStartEvent) == 'function') {
                                //    touchStartEvent.call(this, touchStart, event);
                                //}
                            }

                            //激活Touch状态
                            touchFlag = true;
                            this.onclick = function () {
                                moveTouchFlag = true;
                                this.mouseup();
                            };
                            //阻止内容(如图片、文字、链接等)被拖动
                            return false;
                        }
                    };

                    //触摸移动事件
                    var moveHandle = function (event) {
                        /// <summary>
                        /// 触摸移动事件
                        /// </summary>
                        /// <param name="event">Window Event</param>
                        event = event || window.event;

                        if (touchFlag) {
                            if (event.preventDefault) {
                                //touchmove事件加上preventDefault从而阻止触摸时浏览器的缩放、滚动条滚动等
                                try {
                                    //event.preventDefault();
                                } catch (e) {}
                            }
                            //获取手指触摸移动对象
                            touchMove = new EncapsulationTouch(event.touches, event);
                            var xDistance = touchStart.touch1.x - touchMove.touch1.x,
                                yDistance = touchStart.touch1.y - touchMove.touch1.y;
                            if (baseHandle.move) {
                                //响应事件
                                baseHandle.move.call(this, touchStart, touchMove, [xDistance, yDistance], event);
                            }
                            var customEvent = that.customEvent;

                            if (customEvent) {
                                var touchMoveEvent = customEvent.onTouchMove;
                                if (touchMoveEvent) {
                                    var i = 0, length = touchMoveEvent.length, eventItem;
                                    for (; i < length; i++) {
                                        eventItem = touchMoveEvent[i];
                                        if (isFunction(eventItem)) {
                                            eventItem.call(that, touchStart, touchMove, [xDistance, yDistance], event);
                                        }
                                    }
                                }
                                //if (touchMoveEvent && typeof (touchMoveEvent) == 'function') {
                                //    touchMoveEvent.call(this, touchStart, touchMove, [xDistance, yDistance], event);
                                //}
                            }

                            if (yDistance > 0) {
                                //向上滑动事件
                                if (customEvent) {
                                    var slideUpEvent = customEvent.onSlideUp;
                                    if (slideUpEvent) {
                                        var i = 0, length = slideUpEvent.length, eventItem;
                                        for (; i < length; i++) {
                                            eventItem = slideUpEvent[i];
                                            if (isFunction(eventItem)) {
                                                eventItem.call(that, touchStart, touchMove, yDistance, event);
                                            }
                                        }
                                    }
                                    //if (slideUpEvent && typeof (slideUpEvent) == 'function') {
                                    //    slideUpEvent.call(this, touchStart, touchMove, yDistance, event);
                                    //}
                                }
                            }
                            else {
                                //向下滑动事件
                                if (customEvent) {
                                    var slideDownEvent = customEvent.onSlideDown;
                                    if (slideDownEvent) {
                                        var i = 0, length = slideDownEvent.length, eventItem;
                                        for (; i < length; i++) {
                                            eventItem = slideDownEvent[i];
                                            if (isFunction(eventItem)) {
                                                eventItem.call(that, touchStart, touchMove, yDistance, event);
                                            }
                                        }
                                    }
                                    //if (slideDownEvent && typeof (slideDownEvent) == 'function') {
                                    //    slideDownEvent.call(this, touchStart, touchMove, yDistance, event);
                                    //}
                                }
                            }

                            if (xDistance > 0) {
                                //向左滑动事件
                                if (customEvent) {
                                    var slideLeftEvent = customEvent.onSlideLeft;
                                    if (slideLeftEvent) {
                                        var i = 0, length = slideLeftEvent.length, eventItem;
                                        for (; i < length; i++) {
                                            eventItem = slideLeftEvent[i];
                                            if (isFunction(eventItem)) {
                                                eventItem.call(that, touchStart, touchMove, xDistance, event);
                                            }
                                        }
                                    }
                                    //if (slideLeftEvent && typeof (slideLeftEvent) == 'function') {
                                    //    slideLeftEvent.call(this, touchStart, touchMove, xDistance, event);
                                    //}
                                }
                            }
                            else {
                                //向右滑动事件
                                if (customEvent) {
                                    var slideRightEvent = customEvent.onSlideRight;
                                    if (slideRightEvent) {
                                        var i = 0, length = slideRightEvent.length, eventItem;
                                        for (; i < length; i++) {
                                            eventItem = slideRightEvent[i];
                                            if (isFunction(eventItem)) {
                                                eventItem.call(that, touchStart, touchMove, xDistance, event);
                                            }
                                        }
                                    }
                                    //if (slideRightEvent && typeof (slideRightEvent) == 'function') {
                                    //    slideRightEvent.call(this, touchStart, touchMove, xDistance, event);
                                    //}
                                }
                            }
                            moveTouchFlag = true;
                        }
                    };

                    //触摸结束事件
                    var endHandle = function (event) {
                        /// <summary>
                        /// 触摸结束事件
                        /// </summary>
                        /// <param name="event">Window Event</param>
                        event = event || window.event;
                        if (touchFlag && moveTouchFlag) {
                            //获取结束触摸事件对象
                            touchEnd = new EncapsulationTouch(event.changedTouches, event);
                            var xDistance = touchStart.touch1.x - touchEnd.touch1.x,
                                yDistance = touchStart.touch1.y - touchEnd.touch1.y;

                            if (baseHandle.end) {
                                //响应事件
                                setTimeout(function () {
                                    baseHandle.end.call(this, touchStart, touchEnd, [xDistance, yDistance], event);
                                }, 1);
                            }
                            var customEvent = that.customEvent;
                            if (customEvent) {
                                var touchEndEvent = customEvent.onTouchEnd;
                                if (touchEndEvent) {
                                    var i = 0, length = touchEndEvent.length, eventItem;
                                    for (; i < length; i++) {
                                        eventItem = touchEndEvent[i];
                                        if (isFunction(eventItem)) {
                                            //setTimeout(function () {
                                                eventItem.call(that, touchStart, touchEnd, [xDistance, yDistance], event);
                                            //}, 1);
                                        }
                                    }
                                }
                                //if (touchEndEvent && typeof (touchEndEvent) == 'function') {
                                //    setTimeout(function () {
                                //        touchEndEvent.call(this, touchStart, touchEnd, [xDistance, yDistance], event);
                                //    }, 1);
                                //}

                                var slideEndEvent = customEvent.onSlideEnd;
                                if (slideEndEvent) {
                                    var i = 0, length = slideEndEvent.length, eventItem;
                                    for (; i < length; i++) {
                                        eventItem = slideEndEvent[i];
                                        if (isFunction(eventItem)) {
                                            setTimeout(function () {
                                                eventItem.call(that, touchStart, touchEnd, [xDistance, yDistance], event);
                                            }, 1);
                                        }
                                    }
                                }
                                //if (slideEndEvent && typeof (slideEndEvent) == 'function') {
                                //    setTimeout(function () {
                                //        slideEndEvent.call(this, touchStart, touchEnd, [xDistance, yDistance], event);
                                //    }, 1);
                                //}
                            }

                            //还原Touch状态
                            touchFlag = false;
                            moveTouchFlag = false;

                            this.onclick = function () {
                                this.onclick = null;
                                return false;
                            };
                        }
                    };

                    var type = null;
                    if (isTouch()) {
                        type = EventType.touchType;
                    }
                    else if (isMSPointer()) {
                        type = EventType.MSPointerType;
                    }
                    else if (isPointer()) {
                        type = EventType.pointerType;
                    }
                    else {
                        type = EventType.mouseType;
                    }

                    if (type) {
                        bindEvent(target, type.start, startHandle);
                        bindEvent(document, type.move, moveHandle);
                        bindEvent(target, type.end, endHandle);
                    }
                }
            };

            install();

            //计算旋转角度(实用CSS3旋转)
            var getAngles = function (sTouch, mTouch, last) {
                /// <summary>
                /// 计算旋转角度(实用CSS3旋转)
                /// </summary>
                /// <param name="sTouch">开始滑动的Touch集合</param>
                /// <param name="mTouch">滑动中的Touch集合</param>
                /// <returns type="Int" />计算结果

                var angles = function (touch, flag) {
                    var touch1 = touch.touch1, touch2 = touch.touch2;
                    var angle = last;
                    if (touch2) {
                        var x = touch1.x - (touch2 ? touch2.x : 0),
                            y = touch1.y - (touch2 ? touch2.y : 0);
                        angle = Math.atan2(y, x) * 180 / Math.PI;
                    }
                    return angle;
                };
                return last + (angles(mTouch) - angles(sTouch));
            };

            //计算缩放倍数(实用CSS3缩放)
            var getZooms = function (sTouch, mTouch, last) {
                /// <summary>
                /// 计算缩放倍数(实用CSS3缩放)
                /// </summary>
                /// <param name="sTouch">开始滑动的Touch集合</param>
                /// <param name="mTouch">滑动中的Touch集合</param>
                /// <returns type=·"Int" />计算结果
                /// <remarks />计算放大倍数：首先计算出两点间X坐标和y坐标的距离(x坐标相减：x = touch1.x-touch2.x，得到X轴距离；y坐标相减：y = touch1.y-touch2.y，得到Y轴距离)
                ///            这时，可得到一个直角三角形，通过勾股定理：Z^2 = X^2 + Y^2，得知两点间距离Z的值；同理，在移动的时候可以计算出移动的距离，移动的距离：原始距离 = 放大倍数。

                var zooms = function (touch) {
                    var touch1 = touch.touch1, touch2 = touch.touch2;

                    var x = touch1.x - (touch2 ? touch2.x : 0),
                        y = touch1.y - (touch2 ? touch2.y : 0);
                    return Math.sqrt((x * x) + (y * y));
                };
                return Math.max(1, Math.min(last * (zooms(mTouch) / zooms(sTouch)), 10));
                //return Math.max(1, (last * (zooms(mTouch) / zooms(sTouch))));
                //return (last * (zooms(mTouch) / zooms(sTouch)));
            };

            //设置元素的Transform属性
            var setTransform = function (target, transform) {
                /// <summary>
                /// 设置元素的Transform属性
                /// </summary>
                /// <param name="target">元素对象</param>
                /// <param name="transform">transform属性字符串</param>
                target.style.transform = transform;
                target.style.oTransform = transform;
                target.style.msTransform = transform;
                target.style.mozTransform = transform;
                target.style.webkitTransform = transform;
            };

            //点击、敲击事件
            that.onTap = function (fun) {
                var status = 1;
                that.onTouchStart(function () { status = 1; moveTouchFlag = true; });
                that.onTouchMove(function () { status = 0; });
                that.onTouchEnd(function (touchStart, touchEnd, Distance, event) {
                    if (fun && isFunction(fun)) {
                        if (status) {
                            fun.call(that, event);
                        }
                    }
                });
            };
            //双击事件
            that.onDoubleTap = function (fun) {
                var timer = 780, count = 0, thread, statusBool = true;

                var clearEvent = function () {
                    count = 0;
                    window.clearTimeout(thread);
                    thread = null;
                    statusBool = false;
                    moveTouchFlag = false;
                };

                that.onTouchStart(function () {
                    statusBool = true;
                    moveTouchFlag = true;
                });
                that.onTouchMove(function () {
                    clearEvent();
                });
                that.onTouchEnd(function (touchStart, touchEnd, Distance, event) {
                    if (fun && isFunction(fun)) {
                        if (statusBool) {
                            count += 1;
                            if (count === 2) {
                                clearEvent();
                                fun.call(that, event);
                            }
                            thread = window.setTimeout(clearEvent, timer);
                        }
                    }
                });
            };
            //长按事件
            that.onLongTab = function (fun) {
                var timer = 780, thread;

                var clearEvent = function () {
                    window.clearTimeout(thread);
                    thread = null;
                    touchFlag = false;
                    moveTouchFlag = false;
                };

                that.onTouchStart(function (touchStart, event) {
                    status = true;
                    touchFlag = true;
                    moveTouchFlag = true;
                    thread = window.setTimeout(function () {
                        if (fun && isFunction(fun)) {
                            clearEvent();
                            fun.call(that, event);
                        }
                    }, timer);
                });
                that.onTouchEnd(function () {
                    clearEvent();
                });
            };
            //拖拽事件
            that.onDrag = function (target, fun) {
                if (isFunction(target)) {
                    fun = target;
                    target = TouchSlideModelInstance.target;
                }
                if (!target) {
                    target = TouchSlideModelInstance.target;
                }

                var transform, zooms = 1, lastZooms = 1, angles = 0, lastAngles = 0, status = 0, flag = null,
                    mleft = parseInt(target[0].offsetLeft), mtop = parseInt(target[0].offsetTop);

                that.onTouchStart(function (sTouch) {
                    if (sTouch.touch2) {
                        //两点同时出发
                        status = 2;
                    }
                    else {
                        //触摸点为1
                        status = 1;
                    }
                });
                that.onTouchMove(function (sTouch, mTouch) {
                    //如果双指滑动-旋转、缩放
                    if (mTouch.touch2) {
                        if (status == 1) {
                            //开始触摸点为1，移动时触摸点为2时，将移动时第二个触摸点赋值给开始的第二个触摸点，保证触摸平衡不抖动
                            sTouch.touch2 = mTouch.touch2;
                            status = 2;
                            return false;
                        }
                        flag = 'transform';
                        //css3旋转、缩放Transform
                        transform = 'scale(#SCALE#, #SCALE#) rotate(#ROTATION#deg)';
                        //计算旋转和缩放值
                        zooms = getZooms(sTouch, mTouch, lastZooms);
                        angles = getAngles(sTouch, mTouch, lastAngles);
                        //设置旋转和缩放值
                        transform = transform.replace(new RegExp('#SCALE#', 'gm'), zooms).replace('#ROTATION#', (angles));
                        //设置css3属性Transform
                        setTransform(target[0], transform);
                    }
                        //如果单指滑动-拖动
                    else {
                        flag = 'drag';
                        //设置拖动样式
                        target[0].style.left = (mleft - (sTouch.touch1.x - mTouch.touch1.x)) + 'px';
                        target[0].style.top = (mtop - (sTouch.touch1.y - mTouch.touch1.y)) + 'px';
                    }
                    //执行自定义函数
                    if (fun) { fun.call(target, sTouch, mTouch); }
                });
                that.onTouchEnd(function (sTouch, eTouch) {
                    //保存数据
                    lastZooms = zooms, lastAngles = angles;
                    mleft = parseInt(target[0].style.left || 0), mtop = parseInt(target[0].style.top || 0);
                    status = 0;
                });
            };
            //触摸开始
            that.onTouchStart = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onTouchStart'] = fun;
                    that.customEvent['onTouchStart'] = that.customEvent['onTouchStart'] || [];
                    that.customEvent['onTouchStart'].push(fun);
                }
                return that;
            };
            //触摸滑动
            that.onTouchMove = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onTouchMove'] = fun;
                    that.customEvent['onTouchMove'] = that.customEvent['onTouchMove'] || [];
                    that.customEvent['onTouchMove'].push(fun);
                }
                return that;
            };
            //触摸结束
            that.onTouchEnd = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onTouchEnd'] = fun;
                    that.customEvent['onTouchEnd'] = that.customEvent['onTouchEnd'] || [];
                    that.customEvent['onTouchEnd'].push(fun);
                }
                return that;
            };
            //向上滑动(返回参数：touchStart, touchMove, yDistance)
            that.onSlideUp = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onSlideUp'] = fun;
                    that.customEvent['onSlideUp'] = that.customEvent['onSlideUp'] || [];
                    that.customEvent['onSlideUp'].push(fun);
                }
                return that;
            };
            //向下滑动(返回参数：touchStart, touchMove, yDistance)
            that.onSlideDown = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onSlideDown'] = fun;
                    that.customEvent['onSlideDown'] = that.customEvent['onSlideDown'] || [];
                    that.customEvent['onSlideDown'].push(fun);
                }
                return that;
            };
            //向左滑动(返回参数：touchStart, touchMove, xDistance)
            that.onSlideLeft = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onSlideLeft'] = fun;
                    that.customEvent['onSlideLeft'] = that.customEvent['onSlideLeft'] || [];
                    that.customEvent['onSlideLeft'].push(fun);
                }
                return that;
            };
            //向右滑动(返回参数：touchStart, touchMove, xDistance)
            that.onSlideRight = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onSlideRight'] = fun;
                    that.customEvent['onSlideRight'] = that.customEvent['onSlideRight'] || [];
                    that.customEvent['onSlideRight'].push(fun);
                }
                return that;
            };
            //滑动结束
            that.onSlideEnd = function (fun) {
                if (fun) {
                    that.customEvent = that.customEvent || {};
                    //that.customEvent['onSlideEnd'] = fun;
                    that.customEvent['onSlideEnd'] = that.customEvent['onSlideEnd'] || [];
                    that.customEvent['onSlideEnd'].push(fun);
                }
                return that;
            };
        };
    }
}

