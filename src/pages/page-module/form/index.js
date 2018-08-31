/**
 * Forms JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日16:11:22
 */

import Forms from '@/components/Forms/view.vue'

let render = {
  data () {
    return {
    }
  },
  methods: {
    verifyFailureEvent (verifyValue, result) {
      console.info(result)
    },
    formVerifySuccessEvent (myFormData) {
      console.info(myFormData)
    }
  },
  components: {
    Forms
  },
  created () {
  }
}

export {
  render
}
