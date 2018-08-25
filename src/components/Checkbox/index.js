/**
 * checkbox JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日15:49:49
 */

import utils from '@/utils'

let render = {
  data () {
    return {
      // 是否选中
      isActive: false,
      // 文字
      chkText: 'checkbox'
    }
  },
  props: [
    // 自定义Class
    'className',
    // 是否选中
    'checked',
    // 文字
    'text',
    // 点击事件
    'onClick'
  ],
  methods: {
    chkBoxClick (e) {
      e = e || window.event
      let target = e.target || e.srcElement

      this.isActive = !this.isActive

      let onClick = this.onClick
      if (utils.isFunction(onClick)) {
        onClick.call(target, e, this.isActive)
      }
    }
  },
  created () {
    this.isActive = this.checked !== undefined ? this.checked : this.isActive
    this.chkText = this.text === false ? '' : (this.text || this.chkText)
  }
}

export {
  render
}
