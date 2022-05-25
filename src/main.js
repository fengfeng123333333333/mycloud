// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-cn'
import global from "./common/global"
import 'view-design/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import {  Upload } from 'element-ui';
Vue.component(Upload.name, Upload);
import { Button,RadioGroup,DatePicker,TimePicker,Message,InputNumber ,Spin,Radio,CheckboxGroup, FormItem,Form,Tooltip,Notice,Submenu,Menu,Icon,Tag,MenuItem,Input,Table,Checkbox,Select,Option,Page,Modal,Poptip} from 'view-design'
Vue.component('Button', Button)
Vue.component('DatePicker', DatePicker)
Vue.component('TimePicker', TimePicker)
Vue.component('InputNumber', InputNumber)
Vue.component('Spin', Spin)
Vue.component('CheckboxGroup', CheckboxGroup)
Vue.component('FormItem', FormItem)
Vue.component('Form', Form)
Vue.component('Tooltip', Tooltip)
Vue.component('RadioGroup', RadioGroup)
Vue.component('Radio', Radio)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Tag', Tag)
Vue.component('MenuItem', MenuItem)
Vue.component('Input', Input)
Vue.component('Table', Table)
Vue.component('Checkbox', Checkbox)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Page', Page)
Vue.component('Modal', Modal)
Vue.component('Poptip', Poptip)
Vue.prototype.$Notice = Notice;
Vue.prototype.$Modal = Modal;
Vue.prototype.$global = global;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
// let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/line')
// require('echarts/lib/chart/pie')
// // 以下的组件按需引入
// require('echarts/lib/component/tooltip')   // tooltip组件
// require('echarts/lib/component/title')   //  title组件
// require('echarts/lib/component/legend')
// Vue.prototype.$echarts = echarts
(function () {
  var whdef = 100 / 1920;// 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
  var wW = window.innerWidth;// 当前窗口的宽度
  var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
})()
window.onresize = function () {
  (function () {
    var whdef = 100 / 1920;// 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
    // var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
  })()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
