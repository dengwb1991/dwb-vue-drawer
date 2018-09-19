/**
 * dwb-vue-drawer
 * @author dengwb
 */
let Drawer = require('./src/Drawer.vue')
Drawer = Drawer.default || Drawer

export default {
  DwbVueDrawer: Drawer,
  install: (Vue) => {
    Vue.component(Drawer.name, Drawer)
  }
}

export const DwbVueDrawer = Drawer
