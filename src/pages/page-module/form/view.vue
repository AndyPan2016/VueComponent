<template>
<div class="page-main-form">
  <Forms ref="refForms">

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item">
        <span class="form-item-lab">用户名</span>
        <span class="form-item-txt">张三三</span>
      </div>
      <div class="ui-form-item">
        <span class="form-item-lab">用户名</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入用户名" />
        </span>
      </div>
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
    </div>

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
    </div>

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item title no-border">
        <span class="form-item-lab">标题</span>
      </div>
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
      <div class="ui-form-item choose">
        <span class="form-item-lab">类型</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" readonly="true" placeholder="请选择" />
        </span>
      </div>
    </div>

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item full">
        <span class="form-item-lab">输入框：</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
      <div class="ui-form-item full">
        <span class="form-item-lab">输入框：</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
      <div class="ui-form-item full">
        <span class="form-item-lab">输入框：</span>
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
    </div>

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item full">
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
      <div class="ui-form-item full">
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
      <div class="ui-form-item full">
        <span class="form-item-inp">
          <input type="text" class="form-inp" placeholder="请输入" />
        </span>
      </div>
    </div>

    <div slot="form-block" class="ui-form-block">
      <div class="ui-form-item full">
        <span class="form-item-inp">
          <textarea class="form-inp" placeholder="文本域"></textarea>
        </span>
      </div>
    </div>
  </Forms>
</div>
</template>
<style lang="less">
@import "view.less";
</style>
<script>
import {render} from './index.js'
export default render
</script>
