<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
  <div class="ui-popup"
    :class="(thisDevice ? thisDevice + ' ' : '') + (customClass ? customClass + ' ' : '') + (isVisible ? 'show' : '') + (popupType ? ' ' + popupType : '')">
    <div class="ui-popup-mask"
      :class="isShow ? 'active' : ''"
      @click="maskClickEvent">
    </div>
    <div class="ui-popup-main" :class="isShow ? 'active' : ''">
      <!------------------- 弹出框头部 -------------------->
      <div class="ui-popup-hd" v-if="title !== 'visible' && popupType !== 'loading' && popupType !== 'tip'">
        <span class="popup-hd-title">
          <slot name="popup-title"></slot>
          <!-- 如果title为false，就不显示默认弹出框title -->
          {{title === false ? '' : popupTitle}}
        </span>
        <span class="popup-hd-tools">
          <a href="javascript:;" class="tools-close" @click="toolsCloseEvent">X</a>
        </span>
      </div>
      <!------------------- 弹出框内容 -------------------->
      <div class="ui-popup-bd" v-if="popupDownUpData" @click="bdClickEvent">
        <a href="javascript:;"
          v-for="(item, idx) in popupDownUpData"
          v-bind:key="idx"
          class="downup-data-item j-downup-item"
          :class="(item.type ? (' type-' + item.type) : '') + (item.textAlign ? (' text-align-' + item.textAlign) : '')"
          :data-value="item.value">{{item.text}}</a>
      </div>
      <div class="ui-popup-bd" v-else>
        <slot name="popup-content"></slot>
        <!-- 如果content为false，就不显示默认弹出框content -->
        {{content === false ? '' : popupContent}}
      </div>
      <!------------------- 弹出框底部 -------------------->
      <!-- 按钮对象不可用，只能用插槽定义按钮 -->
      <div class="ui-popup-ft" v-if="buttons == 'visible' && popupType !== 'loading' && popupType !== 'tip' && popupType !== 'downup'" @click="ftClickEvent">
        <span class="popup-ft-wrap">
          <slot name="popup-btn"></slot>
        </span>
      </div>
      <!-- 按钮对象可用，并且不为false -->
      <div class="ui-popup-ft" v-else-if="buttons !== false && popupType !== 'loading' && popupType !== 'tip' && (popupType !== 'downup' || downupButton)" @click="ftClickEvent">
        <span class="popup-ft-wrap">
          <a href="javascript:;"
            class="popup-btn j-popup-btn"
            v-for="(button, key) in customButtons"
            v-bind:key="key"
            :data-type="key"
            :data-value="button.value"
            v-if="button.isVisible != false"
            :class="key">{{button.text}}</a>
        </span>
      </div>
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
