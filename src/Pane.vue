<template>
  <div class="pane">
    <div class="header">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pane',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style >
.pane {
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

.header {
  height: 40px;
  padding: 10px;
  background-color: #f0f0f0;
  user-select: none;
}

.content {
  position: absolute;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
