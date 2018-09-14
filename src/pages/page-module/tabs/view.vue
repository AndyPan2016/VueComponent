<template>
<div class="page-main">
  <Tabs :onSwitch="onSwitch"
    :switchAnimation="true">
    <a slot="tabs-hd" href="javascript:;" class="tabs-hd-item active" data-id="111">选项1</a>
    <a slot="tabs-hd" href="javascript:;" class="tabs-hd-item" data-id="222">选项2</a>
    <a slot="tabs-hd" href="javascript:;" class="tabs-hd-item" data-id="333">选项3</a>
    <div slot="tabs-bd" class="tabs-bd-item active">1111</div>
    <div slot="tabs-bd" class="tabs-bd-item">{{testText}}</div>
    <div slot="tabs-bd" class="tabs-bd-item">{{testText}}</div>
  </Tabs>
</div>
</template>
<style lang="less">
@import "view.less";
</style>
<script>
import {render} from './index.js'
export default render
</script>
