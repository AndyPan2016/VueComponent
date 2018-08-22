/**
 * Body
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月14日10:57:35
 */

import Welcome from '@/pages/block-module/welcome/view.vue'
import PagePopup from '@/pages/page-module/popup/view.vue'
import PagePanel from '@/pages/page-module/panel/view.vue'
import PageTabs from '@/pages/page-module/tabs/view.vue'

let render = {
  data () {
    return {
      componentsMap: {
        popup: PagePopup,
        panel: PagePanel,
        tabs: PageTabs
      },
      currentComponent: Welcome
    }
  },
  props: ['components'],
  methods: {},
  computed: {},
  watch: {
    '$route' (to, from) {
      let params = this.$route.params
      this.currentComponent = this.componentsMap[params.type] || Welcome
    }
  },
  created () {
    this.currentComponent = this.componentsMap[this.components] || Welcome
  }
}

export {
  render
}
