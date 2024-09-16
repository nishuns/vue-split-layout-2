<template>
  <div :class="layoutClass" ref="container">
    <div class="views" :class="{ dragging: !!drag }" ref="views">
      <component v-for="node in childrenOf(nodes[0])" :is="renderNode(node)" :key="node.id" />
    </div>
    <div class="preview" ref="preview"></div>
    <div :class="{ 'drag': true, dragging: !!drag }" ref="drag">
      <div class="view" v-if="drag" :target-view="'view-' + drag.node.viewId"></div>
    </div>
    <div style="display: none">
      <slot />
    </div>
  </div>
</template>

<script>
import Split from './Split.vue'
import Tree from './Tree'
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'Layout',
  props: {
    edit: { type: Boolean, default: true },
    resize: { type: Boolean, default: true },
    splits: { type: [String, Number, Object], default: () => ({}) }
  },
  data() {
    return {
      nodes: this.calcSplits(),
      drag: null,
      savedNodes: null
    }
  },
  watch: {
    splits() {
      this.nodes = this.calcSplits()
    }
  },
  beforeUpdate() {
    if (!this.$refs.container) return
    const els = this.$refs.container.querySelectorAll('[target-view]')
    Array.from(els).forEach((e) => {
      const el = this.$refs.container.querySelector(`[src-view=${e.getAttribute('target-view')}]`)
      if (el && el.children[0]) {
        el.appendChild(e.children[0])
      }
    })
  },
  methods: {
    calcSplits() {
      const root = []
      const tree = Tree.from(root)
      const walk = (node) => {
        if (node instanceof Object) {
          const split = tree.push({ type: 'split', dir: node.dir, split: node.split })
          walk(node.first).parent = split
          walk(node.second).parent = split
          return split
        }
        return tree.push({ type: 'view', viewId: node })
      }
      walk(this.splits)
      return root
    },
    childrenOf(parent) {
      return Tree.from(this.nodes).childrenOf(parent)
    },
    renderNode(node) {
      if (node.type === 'split') {
        return Split
      } else {
        return 'div'
      }
    },
    onSplitResize(event, split, size) {
      const nodeId = split.props['node-id']
      const node = Tree.from(this.nodes).findById(nodeId)
      node.split = size
    },
    previewPane(attach, targetDom, amount) {
      if (attach === -1) {
        this.$refs.preview.style.opacity = 0
        return
      }
      if (!targetDom) return -1
      amount = amount || 33
      const size = amount / 100
      const targetRect = targetDom.getBoundingClientRect()
      const previewPos = {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height
      }
      if (attach === 1) {
        previewPos.left += previewPos.width - previewPos.width * size
      } else if (attach === 2) {
        previewPos.top += previewPos.height - previewPos.height * size
      }
      if (attach % 2 === 0) {
        previewPos.height *= size
      } else {
        previewPos.width *= size
      }
      this.$refs.preview.style.opacity = 1
      for (const key in previewPos) {
        this.$refs.preview.style[key] = `${previewPos[key]}px`
      }
    },
    onViewDragStart(e) {
      if (e.button !== 0) return
      const nodeIdAttr = e.target.hasAttribute('node-id')
      const dragAttr = e.target.hasAttribute('pane-drag')
      if (!nodeIdAttr && !dragAttr) return
      let el = e.target
      if (!nodeIdAttr) {
        let viewDom = el
        while (viewDom && viewDom.matches && !viewDom.hasAttribute('node-id')) {
          viewDom = viewDom.parentNode
        }
        if (!viewDom || !viewDom.matches) return
        el = viewDom
      }
      const nodeId = parseInt(el.getAttribute('node-id'), 10)
      const node = this.nodes.find((n) => n.id === nodeId)
      if (!node) return

      e.preventDefault()
      const containerRect = this.$refs.container.getBoundingClientRect()
      const trect = e.target.getBoundingClientRect()

      this.drag = { node, offset: { x: e.clientX - trect.left, y: e.clientY - trect.top } }
      this.savedNodes = cloneDeep(this.nodes)
      Tree.from(this.nodes).removeChild(node)

      this.$refs.drag.style.top = `${trect.y - containerRect.top}px`
      this.$refs.drag.style.left = `${trect.x - containerRect.left}px`
      this.$refs.drag.style.width = `${trect.width}px`
      this.$refs.drag.style.height = `${trect.height}px`

      document.addEventListener('mousemove', this.onViewDrag)
      document.addEventListener('mouseup', this.onViewDrop)
    },
    onViewDrag(e) {
      if (e.button !== 0) return
      const containerRect = this.$refs.container.getBoundingClientRect()
      const rel = {
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      }
      this.$refs.drag.style.left = `${rel.x - this.drag.offset.x}px`
      this.$refs.drag.style.top = `${rel.y - this.drag.offset.y}px`
      this.$refs.drag.style.pointerEvents = 'none'
      const el = document.elementFromPoint(e.clientX, e.clientY)
      this.$refs.drag.style.pointerEvents = null

      let viewDom = el
      while (viewDom && !viewDom.matches('.view')) {
        viewDom = viewDom.parentNode
      }
      if (!viewDom || !viewDom.matches) {
        this.previewPane(-1)
        return
      }

      const attach = this.checkAttach(viewDom, e)
      if (attach !== -1) {
        this.drag.over = { viewDom, attach }
      }
      this.previewPane(attach, viewDom)
    },
    onViewDrop(e) {
      if (e.button !== 0) return
      document.removeEventListener('mousemove', this.onViewDrag)
      document.removeEventListener('mouseup', this.onViewDrop)

      this.previewPane(-1)
      if (!this.drag.over) {
        this.drag = null
        this.nodes = this.savedNodes
        return
      }

      const { viewDom, attach } = this.drag.over
      const nodeId = parseInt(viewDom.getAttribute('node-id'), 10)
      const tree = Tree.from(this.nodes)
      const node = tree.findById(nodeId)
      tree.attachChild(node, attach, this.drag.node)
      this.drag = null
    },
    checkAttach(targetDom, e, amount = 33) {
      const size = amount / 100
      const trect = targetDom.getBoundingClientRect()
      const tW = trect.width * size
      const tH = trect.height * size
      const rPos = { x: e.clientX - trect.left, y: e.clientY - trect.top }

      const pos = [
        rPos.y - tH,
        (trect.width - tW) - rPos.x,
        (trect.height - tH) - rPos.y,
        rPos.x - tW
      ]
      let min = 0
      let minI = -1
      pos.forEach((v, i) => {
        if (v < min) {
          min = v
          minI = i
        }
      })
      return minI
    }
  }
}
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.views.dragging {
  opacity: 0.7;
}

.preview {
  position: absolute;
  opacity: 0;
}

.drag {
  display: none;
}

.drag.dragging {
  display: block;
}

.view {
  height: 100%;
  width: 100%;
}
</style>
