<template>
  <div class="drawer">
    <div :class="['cover-mask', maskShow]"
         :style="[maskzIndex, maskStyle]"
         @click="close('mask')"></div>
    <div :class="['cover-container']"
         :style="[containerPosition, containerShow, containerzIndex, containerStyle]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const STYLE = {
  bottom: {
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: '10em',
    transform: 'translate3d(0, 100%, 0)'
  },
  left: {
    bottom: 0,
    left: 0,
    minWidth: '2em',
    height: '100vh',
    transform: 'translate3d(-100%, 0, 0)'
  },
  top: {
    top: 0,
    right: 0,
    width: '100%',
    minHeight: '10em',
    transform: 'translate3d(0, -100%, 0)'
  },
  right: {
    top: 0,
    right: 0,
    minWidth: '2em',
    height: '100vh',
    transform: 'translate3d(100%, 0, 0)'
  }
}

export default {
  name: 'DwbVueDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 100
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    containerStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    maskShow () {
      return this.visible ? 'mask-show' : ''
    },
    containerPosition () {
      return STYLE[this.position]
    },
    containerShow () {
      const style = {
        visibility: 'visible',
        transform: `translate3d(0, 0, 0)`
      }
      return this.visible ? style : ''
    },
    maskzIndex () {
      return { zIndex: this.zIndex }
    },
    containerzIndex () {
      return { zIndex: this.zIndex + 1 }
    }
  },
  watch: {
    visible () {
      this.$emit(this.visible ? 'open' : 'close')
      if (this.lockScroll) {
        document.body.style.overflow = this.visible ? 'hidden' : ''
      }
    }
  },
  methods: {
    open () {
      // 2.3.0+
      this.$emit('update:visible', true)
    },
    close (from) {
      if (from === 'mask' && !this.maskClosable) return
      // 2.3.0+
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style scoped>
.drawer .cover-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  transition-timing-function: linear;
  transition-property: all;
  transition-duration: 200ms;
  transform-origin: 50% 50% 0px;
  opacity: 0;
}
.drawer .cover-container {
  position: fixed;
  visibility: hidden;
  background: #FFF;
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-property: all;
}
.drawer .mask-show {
  visibility: visible;
  opacity: 1;
}
</style>
