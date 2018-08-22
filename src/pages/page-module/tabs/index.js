/**
 * Panel JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

import Tabs from '@/components/Tabs/view.vue'

let render = {
  data () {
    return {
      testText: '测试'
    }
  },
  methods: {
    onSwitch (target, content, data) {
      if (data.id === '333' || data.id === '222') {
        this.testText = '动态内容：' + (new Date()).getTime()
      }
    }
  },
  components: {
    Tabs
  },
  created () {
  }
}

export {
  render
}
