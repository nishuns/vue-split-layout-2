<template>
  <div :class="splitClass">
    <div class="content" :style="{ flexBasis: state.split }">
      <slot name="first" />
    </div>
    <div class="splitter" @mousedown="startResize" />
    <div class="content">
      <slot name="second" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'SplitPane',
  props: {
    resizeable: { type: Boolean, default: false },
    dir: { type: String, default: 'horizontal' },
    split: { type: String, default: '50%' },
  },
  setup(props, { emit }) {
    // Reactive state
    const state = ref({
      resizing: false,
      split: props.split || '50%',
    });

    // Computed property for split class
    const splitClass = computed(() => [
      'split',
      props.dir,
      state.value.resizing ? 'resizing' : '',
      props.resizeable ? 'resizeable' : '',
    ]);

    // Method to start resizing
    const startResize = (event) => {
      if (!props.resizeable || event.button !== 0) return;
      event.stopPropagation();
      event.preventDefault();
      state.value.resizing = true;

      const drag = (event) => {
        if (event.button !== 0) return;

        const isHorizontal = props.dir === 'horizontal';
        const splitter =
          (isHorizontal
            ? event.target.parentNode.children[1].clientWidth
            : event.target.parentNode.children[1].clientHeight) / 2;
        const parentRect = event.target.parentNode.getBoundingClientRect();
        const splitSize = isHorizontal
          ? ((event.x - parentRect.left - splitter) /
              event.target.parentNode.clientWidth) *
            100
          : ((event.y - parentRect.top - splitter) /
              event.target.parentNode.clientHeight) *
            100;

        state.value.split = splitSize + '%';
        emit('onSplitResize', event, state.value.split);
      };

      const drop = (event) => {
        if (event.button !== 0) return;
        state.value.resizing = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', drop);
      };

      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', drop);
    };

    return {
      state,
      splitClass,
      startResize,
    };
  },
});
</script>

<style scoped>
.split {
  display: flex;
  flex: 1;
  height: 100%;
}

.split > .content {
  position: relative;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.split > .content > * {
  flex: 1;
  height: 100%;
}

.split > .content:last-child {
  flex: 1;
}

.split > .splitter {
  flex-basis: 6px;
}

.split.vertical {
  flex-direction: column;
}

.split.horizontal {
  flex-direction: row;
}

.split.resizeable.vertical > .splitter {
  cursor: row-resize;
}

.split.resizeable.horizontal > .splitter {
  cursor: col-resize;
}
</style>
