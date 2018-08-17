/**
 * utils
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-08-14 10:23:48
 */

module.exports = {
  isTrue (attr) {
    return (attr === true || attr === 'true') ? 1 : 0
  },
  isFalse (attr) {
    return (attr === false || attr === 'false') ? 1 : 0
  },
  isFunction (fn) {
    return (fn && typeof (fn) === 'function') ? 1 : 0
  },
  hasClass (target, clas) {
    if (target && clas) {
      var classNameAry = (target.getAttribute('class') || target.className).split(' ')
      let i = 0
      let len = classNameAry.length
      let item
      let status = false
      for (; i < len; i++) {
        item = classNameAry[i]
        if (item === clas) {
          status = true
          break
        }
      }
      return status
    }
  },
  isMobile () {
    return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  }
}
