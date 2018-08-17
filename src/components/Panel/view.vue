<!--
 * Panel Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018年8月17日14:43:24
-->

<template>
  <div class="ui-panel"
    :class="(isShow == true ? ' show' : '') + (panelEnter ? ' ' + panelEnter : '')">
    <div class="ui-panel-main" @click="panelMainClick">
      <slot name="panel-content"></slot>
    </div>
  </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
</style>
