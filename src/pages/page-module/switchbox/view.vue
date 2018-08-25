<template>
<div class="page-main">
  <SwitchBox :onSwitch="onSwitch" :checked="true" dataId="id1" />
</div>
</template>
<style lang="less">
@import "view.less";
</style>
<script>
import {render} from './index.js'
export default render
</script>
