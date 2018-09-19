import Vue from 'vue'
import DwbVueDrawer from './Drawer'

new Vue({
  el: '#app',
  components: {
    DwbVueDrawer
  },
  data () {
    return {
      visible: false,
      position: 'bottom',
      lockScroll: true,
      maskClosable: true,
      zIndex: 200,
      maskStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
      },
      containerStyle: {
        background: '#F5F5F5'
      }
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    open () {
      console.log('open callback')
    },
    close () {
      console.log('close callback')
    }
  }
})