<template>
<div class="page-main">
  <Checkbox text="复选框" :onClick="onClick" />
  <Checkbox type="radio" :onClick="onClick" name="radioGroup" />
  <Checkbox type="radio" :onClick="onClick" name="radioGroup" />
  <Checkbox type="radio" :onClick="onClick" :checked="true" name="radioGroup" />
</div>
</template>
<style lang="less">
@import "view.less";
</style>
<script>
import {render} from './index.js'
export default render
</script>
