import { defineComponent, ref, nextTick, watch, h } from 'vue';
import Split from './Split.vue';
import Tree from './Tree';
import cloneDeep from 'lodash/cloneDeep';
import './Layout.css';

// Utility function to check attachment direction
function checkAttach(targetDom, e, amount = 33) {
  const size = amount / 100;
  const trect = targetDom.getBoundingClientRect();
  const tW = trect.width * size;
  const tH = trect.height * size;
  const rPos = { x: e.clientX - trect.left, y: e.clientY - trect.top };

  const pos = [
    rPos.y - tH,
    trect.width - tW - rPos.x,
    trect.height - tH - rPos.y,
    rPos.x - tW
  ];

  let min = 0;
  let minI = -1;
  pos.forEach((v, i) => {
    if (v < min) {
      min = v;
      minI = i;
    }
  });
  return minI;
}

export default defineComponent({
  name: 'Layout',
  props: {
    edit: {
      type: Boolean,
      default: true,
    },
    resize: {
      type: Boolean,
      default: true,
    },
    splits: {
      type: [String, Number, Object],
      default: () => ({}),
    },
  },
  setup(props, { emit, slots }) {
    const containerRef = ref(null);
    const previewRef = ref(null);
    const dragRef = ref(null);
    const state = ref({
      nodes: calcSplits(props.splits),
    });
    const drag = ref(null);

    // Watch for splits prop changes
    watch(
      () => props.splits,
      () => {
        state.value.nodes = calcSplits(props.splits);
      }
    );

    // Similar to beforeUpdate
    const beforeUpdate = () => {
      if (!containerRef.value) return;
      const els = containerRef.value.querySelectorAll('[target-view]');
      Array.from(els).forEach((e) => {
        const el = containerRef.value.querySelector(
          `[src-view=${e.getAttribute('target-view')}]`
        );
        el.appendChild(e.children[0]);
      });
    };

    // Calculate splits into internal tree structure
    function calcSplits() {
      const root = [];
      const tree = Tree.from(root);

      const walk = (node) => {
        if (node instanceof Object) {
          let split = tree.push({
            type: 'split',
            dir: node.dir,
            split: node.split,
          });
          walk(node.first).parent = split;
          walk(node.second).parent = split;
          return split;
        }
        return tree.push({ type: 'view', viewId: node });
      };
      walk(props.splits);

      return root;
    }

    // Handle view dragging
    const onViewDragStart = (e) => {
      if (e.button !== 0) return;

      const nodeIdAttr = e.target.hasAttribute('node-id');
      const dragAttr = e.target.hasAttribute('pane-drag');
      if (!nodeIdAttr && !dragAttr) return;

      let el = e.target;
      if (!nodeIdAttr) {
        let viewDom = el;
        for (
          ;
          viewDom && viewDom.matches && !viewDom.hasAttribute('node-id');
          viewDom = viewDom.parentNode
        ) {}
        if (!viewDom || !viewDom.matches) {
          return;
        }
        el = viewDom;
      }

      const nodeId = parseInt(el.getAttribute('node-id'), 10);
      if (nodeId === undefined) {
        return;
      }

      const node = state.value.nodes.find((n) => n.id === nodeId);
      if (node === undefined) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const containerRect = containerRef.value.getBoundingClientRect();
      const trect = e.target.getBoundingClientRect();

      drag.value = {
        node: node,
        offset: { x: e.clientX - trect.left, y: e.clientY - trect.top },
      };
      state.value.savedNodes = cloneDeep(state.value.nodes);
      Tree.from(state.value.nodes).removeChild(node);

      dragRef.value.style.top = `${trect.y - containerRect.top}px`;
      dragRef.value.style.left = `${trect.x - containerRect.left}px`;
      dragRef.value.style.width = `${trect.width}px`;
      dragRef.value.style.height = `${trect.height}px`;

      document.addEventListener('mousemove', onViewDrag);
      document.addEventListener('mouseup', onViewDrop);
    };

    const onViewDrag = (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      drag.value.over = null;

      const containerRect = containerRef.value.getBoundingClientRect();
      const rel = {
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top,
      };

      dragRef.value.style.left = `${rel.x - drag.value.offset.x}px`;
      dragRef.value.style.top = `${rel.y - drag.value.offset.y}px`;

      dragRef.value.style.pointerEvents = 'none';
      let el = document.elementFromPoint(e.clientX, e.clientY);
      dragRef.value.style.pointerEvents = null;

      let viewDom = el;
      for (
        ;
        viewDom && viewDom.matches && !viewDom.matches('.view');
        viewDom = viewDom.parentNode
      ) {}

      if (!viewDom || !viewDom.matches) {
        previewPane(-1);
        return;
      }

      const attach = checkAttach(viewDom, e);
      if (attach !== -1) {
        drag.value.over = { viewDom, attach };
      }
      previewPane(attach, viewDom);
    };

    const onViewDrop = (e) => {
      if (e.button !== 0) return;
      document.removeEventListener('mousemove', onViewDrag);
      document.removeEventListener('mouseup', onViewDrop);

      dragRef.value.style.right =
        dragRef.value.style.bottom =
        dragRef.value.style.left =
        dragRef.value.style.width =
        dragRef.value.style.height =
          '0';

      previewPane(-1);
      if (drag.value.over == null) {
        drag.value = null;
        state.value.nodes = state.value.savedNodes;
        return;
      }

      const { viewDom, attach } = drag.value.over;
      const nodeId = parseInt(viewDom.getAttribute('node-id'), 10);
      const tree = Tree.from(state.value.nodes);
      const node = tree.findById(nodeId);
      tree.attachChild(node, attach, drag.value.node);
      drag.value = null;
    };

    // Update preview pane
    function previewPane(attach, targetDom, amount = 33) {
      if (attach === -1) {
        previewRef.value.style.opacity = 0;
        return;
      }
      if (!targetDom) {
        return -1;
      }

      const size = amount / 100;
      const targetRect = targetDom.getBoundingClientRect();
      const previewPos = {
        left: targetRect.left,
        top: targetRect.top,
        width: targetRect.width,
        height: targetRect.height,
      };

      if (attach === 1) {
        previewPos.left += previewPos.width - previewPos.width * size;
      } else if (attach === 2) {
        previewPos.top += previewPos.height - previewPos.height * size;
      }
      if (attach % 2 === 0) {
        previewPos.height *= size;
      } else if (attach % 2 === 1) {
        previewPos.width *= size;
      }

      previewRef.value.style.opacity = 1;
      previewRef.value.style.position = 'fixed';
      for (const k in previewPos) {
        previewRef.value.style[k] = `${previewPos[k]}px`;
      }
    }

    nextTick(() => {
      emit('layout:begin');
      beforeUpdate();
      emit('layout:complete');
    });

    return () => {
      const walk = (node) => {
        switch (node.type) {
          case 'split': {
            const children = Tree.from(state.value.nodes)
              .childrenOf(node)
              .map((k) => walk(k));

            return h(
              Split,
              {
                key: node.id,
                'node-id': node.id,
                resizeable: props.resize,
                dir: node.dir,
                split: node.split,
                onSplitResize,
              },
              children
            );
          }
          default: {
            if (props.edit) {
              return h('div', {
                class: 'view',
                'node-id': node.id,
                'target-view': `view-${node.viewId}`,
                onMousedown: onViewDragStart,
              });
            }
            return h('div', {
              class: 'view',
              'node-id': node.id,
              'target-view': `view-${node.viewId}`,
            });
          }
        }
      };

      const tree = walk(state.value.nodes[0]);
      const layoutClass = ['layout-container', props.edit ? 'edit' : ''];

      return h('div', { class: layoutClass.join(' '), ref: containerRef }, [
        h('div', { class: `views ${drag.value ? 'dragging' : ''}`, ref: 'views' }, [tree]),
        h('div', { class: 'preview', ref: previewRef }),
        h(
          'div',
          {
            class: `drag ${drag.value ? 'dragging' : ''}`,
            ref: dragRef,
            style: {
              transformOrigin: drag.value
                ? `${drag.value.offset.x}px ${drag.value.offset.y}px`
                : '',
            },
          },
          [
            drag.value &&
              h('div', {
                class: 'view',
                'target-view': `view-${drag.value.node.viewId}`,
              }),
          ]
        ),
        h(
          'div',
          { style: { display: 'none' } },
          slots.default
            .filter((v) => v.tag !== undefined)
            .map((view, i) =>
              h('div', { key: view.key || i, 'src-view': `view-${view.key || i}` }, [view])
            )
        ),
      ]);
    };
  },
});
