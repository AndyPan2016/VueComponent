/**
 * touch JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月31日15:37:58
 */

import Touch from '@/components/Touch/view.vue'

let render = {
  data () {
    return {
    }
  },
  methods: {
    onTab (e) {
      console.info('onTab')
    },
    onDoubleTap (e) {
      console.info('onDoubleTap')
    },
    onLongTab (e) {
      console.info('onLongTab')
    },
    onSlideUp (touchStart, touchMove, yDistance, event) {
      console.info('onSlideUp')
    }
  },
  components: {
    Touch
  },
  created () {
  }
}

export {
  render
}
