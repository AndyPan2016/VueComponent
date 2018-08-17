/**
 * 测试页面 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

import Popup from '@/components/Popup/view.vue'

let render = {
  data () {
    return {
      customButtons: {
        sure: { text: '确定1' },
        cancel: { text: '取消1', isVisible: false },
        submit: {text: '测试', fn: function (e) { alert('测试' + this) }}
      },
      downupData: [
        {value: 1, text: '昨天'},
        {value: 2, text: '今天'},
        {value: 3, text: '明天'},
        {value: 4, text: '后天'},
        {value: 5, text: '本周'}
      ],
      downupData1: [
        {value: 1, text: '随便操作', textAlign: 'center'},
        {value: 2, text: '不操作', textAlign: 'center'},
        {value: 3, text: '其他操作', textAlign: 'center'},
        {value: 4, text: '确定', textAlign: 'center', type: 'blue'},
        {value: 5, text: '取消', textAlign: 'center', type: 'red'}
      ],
      downupButton: {
        key1: {value: 1, text: 'key1', fn: function (e, data) { alert(JSON.stringify(data)) }},
        key2: {value: 2, text: 'key2', fn: function (e, data) { alert(JSON.stringify(data)) }},
        submit: {value: 3, text: 'submit', fn: function (e, data) { alert(JSON.stringify(data)) }},
        sure: {value: 4, text: '确定', fn: function (e, data) { alert(JSON.stringify(data)) }},
        cancel: {value: 5, text: '取消', fn: function (e, data) { alert(JSON.stringify(data)) }}
      }
    }
  },
  methods: {
    openPopUp (popupType, type, flag) {
      if (popupType && type) {
        if (type === 'tip') {
          if (flag === 1) {
            this.$refs[popupType].tip('这里是tip消息(8秒后关闭)', 8000)
          } else {
            this.$refs[popupType].tip('这里是tip消息')
          }
        } else if (type === 'loading') {
          this.$refs[popupType].loading('这里是loading消息')
          setTimeout(() => {
            this.$refs[popupType].close()
          }, 5000)
        } else if (type === 'alert') {
          if (flag === 1) {
            this.$refs[popupType].alert('alert自定义标题', '这里是alert消息')
          } else if (flag === 2) {
            this.$refs[popupType].alert('这里是alert消息(带确定按钮事件)', function () {
              alert('确定')
            })
          } else if (flag === 3) {
            this.$refs[popupType].alert('这里是alert消息(带确定按钮事件和弹出关闭回调)', function () {
              alert('确定')
            }, function () {
              alert('关闭')
            })
          } else if (flag === 4) {
            this.$refs[popupType].alert({
              msg: '这里是alert消息(只带弹出关闭回调)',
              close: function () {
                alert('关闭')
              }
            })
          } else {
            this.$refs[popupType].alert('这里是alert消息')
          }
        } else if (type === 'confirm') {
          if (flag === 1) {
            this.$refs[popupType].confirm('confirm自定义标题', '这里是confirm消息')
          } else if (flag === 2) {
            this.$refs[popupType].confirm('confirm(带确定按钮事件)', function () {
              alert('确定')
            })
          } else if (flag === 3) {
            this.$refs[popupType].confirm('confirm(带确定和取消按钮事件)', function () {
              alert('确定')
            }, function () {
              alert('取消')
            })
          } else if (flag === 4) {
            this.$refs[popupType].confirm({
              msg: 'confirm(只带弹出关闭回调)',
              close: function () {
                alert('关闭')
              }
            })
          } else {
            this.$refs[popupType].confirm('这里是confirm消息')
          }
        }
      } else {
        this.$refs[popupType].open()
      }
    },
    threadCallBack (time) {
      return time + '秒后自动关闭'
    },
    maskClickEvent (e) {
      console.info('mask click')
      // return false
    },
    openEvent () {
      console.info('open event')
    },
    closeEvent () {
      console.info('close event')
    },
    sureEvent () {
      console.info('sure event')
    },
    cancelEvent () {
      console.info('cancel event')
    },
    onDownupItemClick (e, data) {
      alert('你选择的是：' + JSON.stringify(data))
    },
    onButtonClick (e, data) {
      alert('你点击的是按钮：' + JSON.stringify(data))
    }
  },
  components: {
    Popup
  }
}

export {
  render
}
