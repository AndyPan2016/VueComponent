<!--
 * 表单元素及验证 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月25日16:15:09
-->

<template>
  <form action="" class="ui-form">
    <slot name="form-block"></slot>
  </form>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
