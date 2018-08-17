/**
 * 测试页面 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

import Header from '@/pages/block-module/header/view.vue'
import BodyComp from '@/pages/block-module/body/view.vue'
import Footer from '@/pages/block-module/footer/view.vue'

let render = {
  data () {
    return {
      type: this.$route.params['type']
    }
  },
  methods: {
  },
  components: {
    Header,
    BodyComp,
    Footer
  },
  created () {}
}

export {
  render
}
