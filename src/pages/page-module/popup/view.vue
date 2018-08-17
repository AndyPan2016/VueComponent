<!--
 * 页面视图 Vue
 * @authors AndyPan (pye-mail@163.com)
 * @date    2018-06-08 10:40:52
-->

<template>
    <div class="page-main">
        <div class="demo-item">
            <!-- 默认情况的弹出框 -->
            <span class="demo-item-title">默认情况的弹出框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('defaultPopup')">open</a>
            <Popup ref="defaultPopup" />
        </div>
        <div class="demo-item">
            <!-- 自定义class -->
            <span class="demo-item-title">自定义class：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customClassPopup')">open</a>
            <Popup ref="customClassPopup"
                className="my-popup">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 自定义标题 -->
            <span class="demo-item-title">自定义标题：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customTitlePopup')">open</a>
            <Popup ref="customTitlePopup"
                title="这里是自定义标题">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 标题插槽（插槽可以通过控制span的class自定义标题文字样式） -->
            <span class="demo-item-title">标题插槽：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('titleSlotPopup')">open</a>
            <Popup ref="titleSlotPopup"
                :title="false">
                <span class="" slot="popup-title">标题<font color="#FF7755">插槽</font></span>
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 没有标题 -->
            <span class="demo-item-title">没有标题：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('noTitlePopup')">open</a>
            <Popup ref="noTitlePopup"
                title="visible">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 自定义按钮 -->
            <span class="demo-item-title">自定义按钮：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customButtonPopup')">open</a>
            <Popup ref="customButtonPopup"
                :buttons="customButtons">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 按钮插槽（用于自定义按钮，或者用链接作为按钮等）buttons="visible".设置按钮不可以 -->
           <span class="demo-item-title">按钮插槽：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('buttonSlotPopup')">open</a>
            <Popup ref="buttonSlotPopup"
                buttons="visible">
                <a slot="popup-btn"
                  href="javascript:;"
                  class="popup-btn j-popup-btn sure"
                  data-type="sure"
                  >插槽确定按钮(拥有onSure事件)</a>
                <a slot="popup-btn" href="javascript:;" class="popup-btn">插槽按钮1(点击不会关闭)</a>
                <a slot="popup-btn" href="javascript:;" class="popup-btn j-popup-btn">插槽按钮2(点击会关闭)</a>
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 自定义内容 -->
            <span class="demo-item-title">自定义内容：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customContentPopup')">open</a>
            <Popup ref="customContentPopup"
                content="这是自定义内容">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 自定义插槽内容 -->
            <span class="demo-item-title">自定义插槽内容：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customSlotContentPopup')">open</a>
            <Popup ref="customSlotContentPopup"
                :content="false">
                <div slot="popup-content" style="width: 300px;height: 200px;">自定义<font color="#F00">插槽</font>内容</div>
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 点击背景遮罩关闭弹出框（以及自定义背景点击事件，return false可阻止关闭） -->
            <span class="demo-item-title">点击背景遮罩关闭弹出框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('maskClickHidePopup')">open</a>
            <Popup ref="maskClickHidePopup"
                isMaskClickHide="true"
                :onMaskClick="maskClickEvent">
            </Popup>
        </div>
        <div class="demo-item">
            <!-- 自定义事件（包括：显示、关闭、确定、取消） -->
            <span class="demo-item-title">自定义事件（包括：显示、关闭、确定、取消）：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('customEventPopup')">open</a>
            <Popup ref="customEventPopup"
                :onOpen="openEvent"
                :onClose="closeEvent"
                :onSure="sureEvent"
                :onCancel="cancelEvent"
                >
            </Popup>
        </div>
        <div class="demo-item">
            <!-- tip框（tip会自动关闭，时间默认为4秒，可设置timeout属性自定义关闭时间，单位为毫秒） -->
            <span class="demo-item-title">tip框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('tipPopup')">open</a>
            <Popup ref="tipPopup"
              type="tip"
              message="Tip提示框"
              timeout="10000"
              :threadCallBack="threadCallBack" />
        </div>
        <div class="demo-item">
            <!-- loading框 -->
            <span class="demo-item-title">loading框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('loadingPopup')">open</a>
            <Popup ref="loadingPopup" type="loading" message="loading不会自动关闭" />
        </div>
        <div class="demo-item">
            <!-- alert框 -->
            <span class="demo-item-title">alert框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('alertPopup')">open</a>
            <Popup ref="alertPopup" type="alert" message="alert提示" />
        </div>
        <div class="demo-item">
            <!-- confirm框 -->
            <span class="demo-item-title">confirm框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('confirmPopup')">open</a>
            <Popup ref="confirmPopup" type="confirm" message="confirm提示" />
        </div>
        <div class="demo-item">
            <!-- 用方法调用不同类型弹出框 -->
            <span class="demo-item-title">用方法调用不同类型弹出框：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'tip')">tip</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'tip', 1)">tip自定义关闭时间</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'loading')">loading</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'alert')">alert</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'alert', 1)">自定义alert标题</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'alert', 2)">alert(带确定按钮事件)</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'alert', 3)">alert(带确定按钮事件和弹出关闭回调)</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'alert', 4)">alert(只带弹出关闭回调)</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'confirm')">confirm</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'confirm', 1)">自定义confirm标题</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'confirm', 2)">confirm(带确定按钮事件)</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'confirm', 3)">confirm(带确定和取消按钮事件)</a>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('fnPopup', 'confirm', 4)">confirm(只带弹出关闭回调)</a>
            <Popup ref="fnPopup" />
        </div>
        <div class="demo-item">
            <!-- downup -->
            <span class="demo-item-title">downup(自定义内容模板)：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('downupPopup')">open</a>
            <Popup ref="downupPopup" type="downup" :content="false" title="由下往上弹出(自定义内容模板)">
              <div slot="popup-content">
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
                <div style="height: 50px;">
                    内容超出高度显示<font color="#F00">滚动条</font>
                </div>
              </div>
            </Popup>
        </div>
        <div class="demo-item">
            <!-- downup data -->
            <span class="demo-item-title">downup(自定义数据-默认样式)：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('downupDataPopup')">open</a>
            <Popup ref="downupDataPopup"
              type="downup"
              :downupData="downupData"
              title="由下往上弹出(自定义数据-默认样式)" />
        </div>
        <div class="demo-item">
            <!-- downup data -->
            <span class="demo-item-title">downup(自定义数据-自定义样式)：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('downupDataCustom1Popup')">open</a>
            <Popup ref="downupDataCustom1Popup"
              type="downup"
              :downupData="downupData1"
              :onDownupItemClick="onDownupItemClick"
              title="由下往上弹出(自定义数据-自定义样式1)" />
        </div>
        <div class="demo-item">
            <!-- downup data -->
            <span class="demo-item-title">downup(按钮)：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('downupBtnPopup')">open</a>
            <Popup ref="downupBtnPopup"
              type="downup"
              :content="false"
              :downupButton="downupButton"
              title="由下往上弹出(按钮-无内容)" />
        </div>
        <div class="demo-item">
            <!-- downup data -->
            <span class="demo-item-title">downup(按钮)：</span>
            <a class="demo-item-handle" href="javascript:;" v-on:click="openPopUp('downupBtnContPopup')">open</a>
            <Popup ref="downupBtnContPopup"
              type="downup"
              :content="false"
              :downupButton="downupButton"
              :onButtonClick="onButtonClick"
              title="由下往上弹出(按钮-有内容)">
              <div slot="popup-content">自定义<font color="#F00">插槽</font>内容</div>
            </Popup>
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
