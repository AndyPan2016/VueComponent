/**
 * Panel JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */

import Panel from '@/components/Panel/view.vue'

let render = {
  data () {
    return {
      thisRef: undefined
    }
  },
  methods: {
    openPanel (ref) {
      if (ref) {
        this.$refs[ref].open()
        this.thisRef = ref
      }
    },
    closePanel () {
      let ref = this.thisRef
      if (ref) {
        this.$refs[ref].close()
        this.thisRef = undefined
      }
    },
    onShow () {
      console.info('show')
    },
    onClose () {
      console.info('close')
    }
  },
  components: {
    Panel
  }
}

export {
  render
}
