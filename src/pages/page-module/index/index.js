/**
 * 测试页面 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 11:55:32
 */


import Popup from '@/components/Popup/View.vue'

let render = {
  data () {
    return {
      logo: require('../../../images/logo.png')
    }
  },
  methods: {
    click: () => {
      console.info('you click me...')

      // let info = {
      //   bankAccount: '22263303271850966347394',
      //   bankCode: '6687211',
      //   bankName: '中国银行',
      //   mobileNo: '13032362127',
      //   requestNo: '20150821000001',
      //   service: 'bankCardSendSms',
      //   depositBank: '开户行地址',
      //   sign: '4f7d6fa4e4b22307246797208719ebfb',
      //   notifyUrl: 'http://www.mechanthost.com/notifyUrl.html',
      //   signType: 'MD5',
      //   partnerId: '20141229020000062199',
      //   returnUrl: 'http://doc.yijifu.net/return.jsp',
      //   protocol: 'httpPost',
      //   version: '1.0'
      // }
      // import api from '@/apis'
      // api.post('/api', info).then(function (data) {
      //   console.log(data)
      // }).catch(function (err) {
      //   console.log(err)
      // })
    }
  },
  components: {
    Popup
  }
}

export {
  render
}
