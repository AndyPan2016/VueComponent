<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-body">
      <div class="page-body-nav">
        <router-link class="nav-item" :to="{path:'/components/popup'}">Popup</router-link>
        <router-link class="nav-item" :to="{path:'/components/panel'}">Panel</router-link>
        <router-link class="nav-item" :to="{path:'/components/tabs'}">Tabs</router-link>
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
