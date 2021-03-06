/**
 * Body
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月14日10:57:35
 */

import Welcome from '@/pages/block-module/welcome/view.vue'
import PagePopup from '@/pages/page-module/popup/view.vue'
import PagePanel from '@/pages/page-module/panel/view.vue'
import PageTabs from '@/pages/page-module/tabs/view.vue'
import PageCheckBox from '@/pages/page-module/checkbox/view.vue'
import PageSwitchBox from '@/pages/page-module/switchbox/view.vue'
import PageForm from '@/pages/page-module/form/view.vue'
import PageTouch from '@/pages/page-module/touch/view.vue'

import utils from '@/utils'

let render = {
  data () {
    return {
      isMobild: false,
      navStatus: false,
      componentsMap: {
        popup: PagePopup,
        panel: PagePanel,
        tabs: PageTabs,
        checkbox: PageCheckBox,
        switch: PageSwitchBox,
        form: PageForm,
        touch: PageTouch
      },
      currentComponent: Welcome
    }
  },
  props: ['components'],
  methods: {
    clickMenu () {
      this.navStatus = !this.navStatus
    }
  },
  computed: {},
  watch: {
    '$route' (to, from) {
      let params = this.$route.params
      this.currentComponent = this.componentsMap[params.type] || Welcome
    }
  },
  created () {
    this.currentComponent = this.componentsMap[this.components] || Welcome

    this.isMobile = utils.isMobile()
  }
}

export {
  render
}
