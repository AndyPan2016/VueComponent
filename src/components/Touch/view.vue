<!--
 * Touch Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月31日15:11:29
-->

<template>
  <div class="ui-touch" :class="className">
  	<slot name="slot-touch"></slot>
  </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
