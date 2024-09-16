<template>
  <div class="pane">
    <div class="header">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import './Pane.css';
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

</style>
