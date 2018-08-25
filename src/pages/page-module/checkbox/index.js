/**
 * checkbox JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日15:44:41
 */

import Checkbox from '@/components/Checkbox/view.vue'

let render = {
  data () {
    return {
    }
  },
  methods: {
    onClick (e, status) {
      console.info(status)
    }
  },
  components: {
    Checkbox
  },
  created () {
  }
}

export {
  render
}
