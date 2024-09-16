export default class Tree {
  static gid = 0
  constructor(tree) {
    this.tree = tree || []
  }
  push(node) {
    if (node.id === undefined) {
      node.id = Tree.gid++
    }
    this.tree.push(node)
    return node
  }
  findById(nodeId) {
    return this.tree.find(n => n.id === nodeId)
  }
  childrenOf(parent) {
    return this.tree.filter(k => k.parent === parent)
  }
  attachChild(target, position, child, size) {
    if (child.id === undefined) {
      child.id = Tree.gid++
    }
    size = size || 33
    const targetIndex = this.tree.indexOf(target)
    const newSplit = {
      id: Tree.gid++,
      type: 'split',
      parent: target.parent,
      dir: position % 2 === 0 ? 'vertical' : 'horizontal'
    }
    target.parent = newSplit
    child.parent = newSplit
    this.tree[targetIndex] = newSplit
    if (position === 0 || position === 3) {
      newSplit.split = size + '%'
      this.tree.push(child, target)
    } else {
      newSplit.split = (100 - size) + '%'
      this.tree.push(target, child)
    }
    return child
  }
}
Tree.from = function (tree) {
  return new Tree(tree)
}
