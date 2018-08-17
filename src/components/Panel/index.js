/**
 * Panel JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月17日14:43:54
 */

import utils from '@/utils'

let render = {
  data () {
    return {
      // 显示panel
      isShow: false,
      isActive: false,
      // 进入方向
      panelEnter: 'right',
      // 移出方向
      panelOuter: 'right',
      // 显示事件
      onPanelShow: undefined,
      // 关闭事件
      onPanelClose: undefined,
      // 关闭Panel标记
      panelCloseFlag: 'j-panel-close'
    }
  },
  props: [
    // 设置默认显示
    'show',
    // 进入方向
    'enter',
    // 移出方向
    'outer',
    // 关闭Panel标记
    'closeFlag',
    // 自定义Class
    'className',
    // 显示事件
    'onShow',
    // 关闭事件
    'onClose'
  ],
  methods: {
    open () {
      let onPanelShow = this.onPanelShow
      if (utils.isFunction(onPanelShow)) {
        if (utils.isFalse(onPanelShow.call(this))) {
          return false
        }
      }
      this.isShow = true
      this.isActive = true
    },
    close () {
      let onPanelClose = this.onPanelClose
      if (utils.isFunction(onPanelClose)) {
        if (utils.isFalse(onPanelClose.call(this))) {
          return false
        }
      }
      this.isShow = false
      setTimeout(() => {
        this.isActive = false
      }, 400)
    },
    panelMainClick (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (utils.hasClass(target, this.panelCloseFlag)) {
        this.close()
      }
    }
  },
  created () {
    this.isShow = this.show !== undefined ? this.show : this.isShow
    this.panelEnter = this.enter !== undefined ? this.enter : this.panelEnter
    this.onPanelShow = this.onShow || this.onPanelShow
    this.onPanelClose = this.onClose || this.onPanelClose
    this.panelCloseFlag = this.closeFlag || this.panelCloseFlag
  }
}

export {
  render
}
