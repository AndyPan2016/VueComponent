<template>
<div class="page-main-form">
  <Touch ref="refTouch"
    :onTab="onTab"
    :onDoubleTap="onDoubleTap"
    :onLongTab="onLongTab"
    :onSlideUp="onSlideUp"
    className="test-touch">
    <div slot="slot-touch" class="slot-touch">tab、doubletab、longtab、slideup...</div>
  </Touch>
</div>
</template>
<style lang="less">
@import "view.less";
</style>
<script>
import {render} from './index.js'
export default render
</script>
