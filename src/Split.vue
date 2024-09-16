<template>
  <div :class="splitClass">
    <div class="content" :style="{ 'flex-basis': state.split }">
      <slot name="first"></slot>
    </div>
    <div class="splitter" @mousedown="startResize"></div>
    <div class="content">
      <slot name="second"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Split',
  props: {
    resizeable: { type: Boolean, default: false },
    dir: { type: String, default: 'horizontal' },
    split: { type: String, default: '50%' }
  },
  data() {
    return {
      state: {
        resizing: false,
        split: this.split
      }
    }
  },
  computed: {
    splitClass() {
      return [
        'split',
        this.dir,
        this.state.resizing ? 'resizing' : '',
        this.resizeable ? 'resizeable' : ''
      ]
    }
  },
  methods: {
    startResize(event) {
      if (!this.resizeable || event.button !== 0) return
      event.preventDefault()
      this.state.resizing = true
      const drag = (e) => {
        const horizontal = this.dir === 'horizontal'
        const splitterSize = (horizontal ? this.$el.children[1].clientWidth : this.$el.children[1].clientHeight) / 2
        const parentRect = this.$el.getBoundingClientRect()
        const newSize = horizontal
          ? (e.clientX - parentRect.left - splitterSize) / this.$el.clientWidth * 100
          : (e.clientY - parentRect.top - splitterSize) / this.$el.clientHeight * 100
        this.state.split = newSize + '%'
      }
      const stopResize = () => {
        this.state.resizing = false
        document.removeEventListener('mousemove', drag)
        document.removeEventListener('mouseup', stopResize)
      }
      document.addEventListener('mousemove', drag)
      document.addEventListener('mouseup', stopResize)
    }
  }
}
</script>

<style>
.split {
  display: flex;
  height: 100%;
}

.content {
  flex: 1;
  overflow: hidden;
}

.splitter {
  flex-basis: 6px;
  background: #ccc;
}

.horizontal {
  flex-direction: row;
}

.vertical {
  flex-direction: column;
}

.resizeable.horizontal .splitter {
  cursor: col-resize;
}

.resizeable.vertical .splitter {
  cursor: row-resize;
}
</style>
