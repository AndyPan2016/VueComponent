<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-body">
      <a href="javascript:;" v-if="isMobile" class="tools" @click="clickMenu">菜单</a>
      <div class="page-body-nav" :class="navStatus ? 'active' : ''">
        <router-link class="nav-item" :to="{path:'/components/popup'}">Popup</router-link>
        <router-link class="nav-item" :to="{path:'/components/panel'}">Panel</router-link>
        <router-link class="nav-item" :to="{path:'/components/tabs'}">Tabs</router-link>
        <router-link class="nav-item" :to="{path:'/components/checkbox'}">CheckBox</router-link>
        <router-link class="nav-item" :to="{path:'/components/switch'}">Switch</router-link>
        <router-link class="nav-item" :to="{path:'/components/form'}">Form</router-link>
        <router-link class="nav-item" :to="{path:'/components/touch'}">Touch</router-link>
      </div>
      <div class="page-body-cont">
        <component v-bind:is="currentComponent"></component>
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
