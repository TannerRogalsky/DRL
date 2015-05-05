import buildTree from './buildTree.js';
import renderElement from './renderElement.js';
import createElement from './createElement.js';

class Component {
  constructor(tree, gl) {
    this.tree = tree;
    this.gl = gl;
  }

  update(newProps) {
    var rootElement = this.tree['0'].element;
    var newTree = {
      '0': {
        element: createElement(rootElement.type, newProps),
        childrenIDs: [],
        children: {}
      }
    }
    buildTree(newTree, '0');
    this.tree = newTree;

    this.gl.clear();
    renderElement(this.tree['0'], this.gl);
  }
}

export default Component;