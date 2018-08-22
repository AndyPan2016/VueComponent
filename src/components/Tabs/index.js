/**
 * Tabs JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月21日15:51:13
 */

import utils from '@/utils'

let render = {
  data () {
    return {
      // 选项卡选项
      tabHdItem: 'tabs-hd-item',
      // 选项卡自定义宽度
      tabWidth: 'auto',
      // 选项卡自定义高度
      tabHeight: 'auto',
      // resize
      isResize: true
    }
  },
  props: [
    // 自定义Class
    'className',
    // 自定义宽度
    'width',
    // 自定义高度
    'height',
    // 切换事件
    'onSwitch'
  ],
  methods: {
    tabSwitchClick (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (utils.hasClass(target, this.tabHdItem)) {
        let slotBd = this.$slots['tabs-bd']
        let slotHd = this.$slots['tabs-hd']
        let childNodes = target.parentNode.childNodes
        let h = 0
        let lenCN = childNodes.length
        let child
        for (; h < lenCN; h++) {
          child = childNodes[h]
          if (utils.hasClass(child, 'active')) {
            utils.removeClass(child, 'active')
            break
          }
        }
        let i = 0
        let lenHd = slotHd.length
        let idx
        for (;i < lenHd; i++) {
          if (target === slotHd[i].elm) {
            idx = i
            utils.addClass(target, 'active')
            break
          }
        }
        let bdChildNodes = slotBd[idx].elm.parentNode.childNodes
        let j = 0
        let lenBdCN = bdChildNodes.length
        let bdChild
        let thisBdChild
        for (; j < lenBdCN; j++) {
          bdChild = bdChildNodes[j]
          if (j === idx) {
            thisBdChild = bdChild
            utils.addClass(bdChild, 'active')
          } else {
            utils.removeClass(bdChild, 'active')
          }
        }

        // 响应切换事件
        let onSwitch = this.onSwitch
        if (onSwitch) {
          let targetData = {id: target.getAttribute('data-id'), text: target.innerText}
          // onSwitch.call(targetData, target, thisBdChild, targetData)
          onSwitch(target, thisBdChild, targetData)
        }
      }
    },
    winResize () {
      let isResize = this.isResize
      if (isResize) {
        let winHeight = document.body.offsetHeight
        this.tabHeight = winHeight + 'px'
      }
    }
  },
  created () {
    this.tabWidth = this.width || this.tabWidth
    this.tabHeight = this.height || this.tabHeight

    if (this.tabHeight !== 'auto') {
      this.isResize = false
    } else {
      this.winResize()
      document.onresize = this.winResize
    }
  }
}

export {
  render
}
