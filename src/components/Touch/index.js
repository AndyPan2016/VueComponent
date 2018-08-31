/**
 * Touch JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月31日15:09:12
 */

import utils from '@/utils'
import TouchPackage from './touch.js'

let render = {
  data () {
    return {
      slotTouchTarget: undefined
    }
  },
  props: [
    // 自定义类名
    'className',
    // 事件
    'onTab', 'onDoubleTap', 'onLongTab', 'onSlideUp', 'onSlideRight', 'onSlideDown', 'onSlideLeft'
  ],
  methods: {
  },
  components: {
  },
  created () {
  },
  mounted () {
    let slotTarget = this.$slots['slot-touch']
    if (slotTarget[0]) {
      let slotTouchTarget = slotTarget[0].elm
      this.slotTouchTarget = slotTouchTarget
      let TouchInstance = new TouchPackage.Touch()
      let SlideInstance = new TouchInstance.TouchSlide({target: slotTouchTarget})
      let that = this

      SlideInstance.onTap(function(e){
        let onTab = that.onTab
        if (onTab) {
          onTab.call(slotTarget, e)
        }
      })
      SlideInstance.onDoubleTap(function(e){
        let onDoubleTap = that.onDoubleTap
        if (onDoubleTap) {
          onDoubleTap.call(slotTarget, e)
        }
      })
      SlideInstance.onLongTab(function(e){
        let onLongTab = that.onLongTab
        if (onLongTab) {
          onLongTab.call(slotTarget, e)
        }
      })
      SlideInstance.onSlideUp(function(touchStart, touchMove, yDistance, event){
        let onSlideUp = that.onSlideUp
        if (onSlideUp) {
          onSlideUp.call(slotTarget, touchStart, touchMove, yDistance, event)
        }
      })
      SlideInstance.onSlideRight(function(touchStart, touchMove, yDistance, event){
        let onSlideRight = that.onSlideRight
        if (onSlideRight) {
          onSlideRight.call(slotTarget, touchStart, touchMove, yDistance, event)
        }
      })
      SlideInstance.onSlideDown(function(touchStart, touchMove, yDistance, event){
        let onSlideDown = that.onSlideDown
        if (onSlideDown) {
          onSlideDown.call(slotTarget, touchStart, touchMove, yDistance, event)
        }
      })
      SlideInstance.onSlideLeft(function(touchStart, touchMove, yDistance, event){
        let onSlideLeft = that.onSlideLeft
        if (onSlideLeft) {
          onSlideLeft.call(slotTarget, touchStart, touchMove, yDistance, event)
        }
      })
    }
  }
}

export {
  render
}
