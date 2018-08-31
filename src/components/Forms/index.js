/**
 * 表单元素及验证 JavaScript
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日16:14:13
 */

import utils from '@/utils'

let render = {
  data () {
    return {
      // 表单元素
      myForm: undefined,
      // 表单数据
      myFormData: {},
      // 表单中被验证元素
      formTargets: undefined,
      // 表单被验证元素class标记
      verifyFlag: 'j-verify',
      // 所验证元素名，非这些元素的可以使用data-value属性来指定被验证值
      verifyNodeName: ['input', 'select', 'textarea'],
      // 表单某个元素验证失败时是否中断后面元素的验证，默认为true.中断
      isVeriyfFailureBreak: true,
      // 是否全部成功
      isVerifySuccessAll: true,
      // 验证相关属性
      verifyAttr: {dataValue: 'data-value', dataKey: 'data-key'},
      // 作为指定触发验证的按钮class
      verifyBtnClass: 'j-verify-submit',
      // 验证类型
      type: {
        // 必填
        'request': function (value) {
          if (!value) {
            return {status: false, message: '必填'}
          } else {
            return {status: true, message: 'success'}
          }
        },
        // 手机
        // 11位数字，以1开头
        'phone': {regular: /^1\d{10}$/, message: '手机号码格式不正确'},
        // 座机
        // 验证规则：区号+号码，区号以0开头，3位或4位，号码由7位或8位数字组成，区号与号码之间可以无连接符，也可以“-”连接
        'telphone': {regular: /^0\d{2,3}-?\d{7,8}$/, message: '座机号码格式不正确'},
        'letters': { regular: /^[A-Za-z]+$/, remark: '只能为字母' },
        'int': { regular: /^[1-9]*[1-9][0-9]*$/, remark: '请输入正整数' },
        'number': { regular: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/, remark: '请输入数字' },
        'email': { regular: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/, remark: '请输入正确的邮件' },
        'float2': { regular: /^(-?\d+)(\.\d{1,2})?$/, remark: '请输入浮点数(两位有效数字)' },
        'not-null-Float1': { regular: /^[0-9]+(\.[0-9]{1})?$/, remark: '非空且保留一位小数' },
        'not-null-Float2': { regular: /^\\d{1,8}\\.{0,1}(\\d{1,2})?$/, remark: '非空且保留两位小数' }
      }
    }
  },
  props: [
    // 每个被验证元素在验证时的事件
    'onVerify',
    // 验证失败事件
    'onVerifyFailure',
    // 整个表单验证成功事件
    'onFormVerifySuccess',
    // 表单某个元素验证失败时是否中断后面元素的验证
    'isFailureBreak',
    // 自定义class
    'className',
    // 自定义验证类型
    'verifyType'
  ],
  methods: {
    verify () {
      // 验证前清空表单数据对象
      this.myFormData = {}
      // 重置状态
      this.isVerifySuccessAll = true

      let formTargets = this.formTargets
      let verifyNodeName = this.verifyNodeName
      if (formTargets) {
        let i = 0
        let lenI = formTargets.length
        let target
        let nodeName
        let isMatch
        // 验证结构
        let result
        let verifyValue
        let verifyAttr = this.verifyAttr
        let dataKey
        for (; i < lenI; i++) {
          target = formTargets[i]
          nodeName = target.nodeName.toLowerCase()
          // 判断当前元素是否与指定类型的验证元素匹配
          isMatch = verifyNodeName.join('|').indexOf(nodeName)
          dataKey = target.getAttribute(verifyAttr.dataKey)
          if (isMatch > -1) {
            // 指定验证元素类型
            verifyValue = target.value
            if (nodeName === 'input') {
              let targetType = target.type || target.getAttribute('type')
              if (targetType === 'text' || targetType === 'password') {
                result = this.verifyTarget(target, verifyValue)
              } else if (targetType === 'radio' || targetType === 'checkbox') {

              }
            } else if (nodeName === 'select') {
              result = this.verifyTarget(target, verifyValue)
            } else if (nodeName === 'textarea') {
              result = this.verifyTarget(target, verifyValue)
            }
          } else {
            // 非指定验证元素类型，验证data-value
            verifyValue = target.getAttribute(verifyAttr.dataValue)
            result = this.verifyTarget(target, verifyValue)
          }
          if (dataKey) {
            // 保存表单数据
            this.myFormData[dataKey] = verifyValue
          }
          // 每一个表单元素的验证事件
          let onVerify = this.onVerify
          if (utils.isFunction(onVerify)) {
            let eventResult = onVerify.call(target, verifyValue, result)
            result = eventResult || result
          }
          // 验证状态为false，
          if (!result.status) {
            // 设置所有验证成功状态为false
            this.isVerifySuccessAll = false
            // 验证失败事件
            let onVerifyFailure = this.onVerifyFailure
            let eventResult
            if (utils.isFunction(onVerifyFailure)) {
              eventResult = onVerifyFailure.call(target, verifyValue, result)
            }
            // 中断循环
            if (this.isVeriyfFailureBreak && eventResult !== 'continue') break
          }
        }
        if (this.isVerifySuccessAll) {
          // 所有验证成功
          let onFormVerifySuccess = this.onFormVerifySuccess
          if (utils.isFunction(onFormVerifySuccess)) {
            onFormVerifySuccess.call(this.myForm, this.myFormData)
          }
        }

        return {isVerifySuccessAll: this.isVerifySuccessAll, result: result}
      }
    },
    verifyTarget (target, verifyValue) {
      let result = { status: true, message: 'success' }
      let verifyType = this.type
      let type
      for (let key in verifyType) {
        if (utils.hasClass(target, key)) {
          type = verifyType[key]
          if (type) {
            if (utils.isFunction(type)) {
              result = type.call(target, verifyValue)
            } else {
              result.status = new RegExp(type['regular']).test(verifyValue)
              result.message = result.status ? 'success' : type['remark']
            }
          } else {
            result = { status: false, message: '未指定验证规则' }
          }

          if (!result.status) break
        }
      }
      return result
    },
    formClick (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (utils.hasClass(target, this.verifyBtnClass)) {
        this.verify()
      }
    }
  },
  components: {
  },
  created () {
    // 表单某个元素验证失败时是否中断后面元素的验证，默认为true.中断
    this.isVeriyfFailureBreak = this.isFailureBreak !== undefined ? this.isFailureBreak : true
    // 自定义验证类型
    let verifyType = this.verifyType
    if (verifyType) {
      this.type = this.type || {}
      for (let key in verifyType) {
        this.type[key] = verifyType[key]
      }
    }
  },
  mounted () {
    let slotFormBlock = this.$slots['form-block']
    this.myForm = slotFormBlock[0] ? slotFormBlock[0].elm.parentNode : undefined
    this.formTargets = this.myForm.querySelectorAll('.' + this.verifyFlag)
  }
}

export {
  render
}
