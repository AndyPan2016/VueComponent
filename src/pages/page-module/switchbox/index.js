/**
 * SwitchBox JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日15:45:14
 */

import SwitchBox from '@/components/Switch/view.vue'

let render = {
  data () {
    return {
      testText: '测试'
    }
  },
  methods: {
    onSwitch (e, status) {
      console.info(status)
    }
  },
  components: {
    SwitchBox
  },
  created () {
  }
}

export {
  render
}
