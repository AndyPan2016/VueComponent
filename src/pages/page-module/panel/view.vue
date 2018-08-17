<!--
 * Panel Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-main">
        <div class="demo-item">
            <!-- 从上往下 -->
            <span class="demo-item-title">从上往下：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('upPanel')">open</a>
            <Panel ref="upPanel" enter="up"
              :onShow="onShow"
              :onClose="onClose">
              <div slot="panel-content">
                  <!-- 通过绑定事件去调用关闭方法进行关闭Panel -->
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从右往左 -->
            <span class="demo-item-title">从右往左：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('rightPanel')">open</a>
            <Panel ref="rightPanel" enter="right">
              <div slot="panel-content">
                  <!-- 默认带'j-panel-close'类名的元素点击会关闭Panel -->
                  <a href="javascript:;" class="j-panel-close">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从下往上 -->
            <span class="demo-item-title">从下往上：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('bottomPanel')">open</a>
            <Panel ref="bottomPanel" enter="bottom" closeFlag="test-panel-close">
              <div slot="panel-content">
                  <!-- 可通过设置closeFlag自定义指定类名来作为关闭Panel的class标识 -->
                  <a href="javascript:;" class="test-panel-close">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从左往右 -->
            <span class="demo-item-title">从左往右：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('leftPanel')">open</a>
            <Panel ref="leftPanel" enter="left">
              <div slot="panel-content">
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从左上往右下 -->
            <span class="demo-item-title">从左上往右下：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('leftupPanel')">open</a>
            <Panel ref="leftupPanel" enter="leftup">
              <div slot="panel-content">
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从右上往左下 -->
            <span class="demo-item-title">从右上往左下：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('rightupPanel')">open</a>
            <Panel ref="rightupPanel" enter="rightup">
              <div slot="panel-content">
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从左下往右上 -->
            <span class="demo-item-title">从左下往右上：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('leftbottomPanel')">open</a>
            <Panel ref="leftbottomPanel" enter="leftbottom">
              <div slot="panel-content">
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
        <div class="demo-item">
            <!-- 从右上往左下 -->
            <span class="demo-item-title">从右下往左上：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPanel('rightbottomPanel')">open</a>
            <Panel ref="rightbottomPanel" enter="rightbottom">
              <div slot="panel-content">
                  <a href="javascript:;" @click="closePanel">关闭</a>
              </div>
            </Panel>
        </div>
    </div>
</template>

<script>
import {render} from './index.js'
export default render
</script>
<style lang="less">
@import './view.less';
@import '../popup/view.less';
</style>
