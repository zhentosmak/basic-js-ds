const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) {
        return new TreeNode(data);
      } else if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        return node;
      }
      return node;
    }
    this.treeRoot = addNode(this.treeRoot, data);
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
    return hasNode(this.treeRoot, data);
  }
  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
    return findNode(this.treeRoot, data);
  }
  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let current = node.right;
          while (current.left) {
            current = current.left;
          }
          node.data = current.data;
          node.right = removeNode(node.right, current.data);
        }
        return node;
      }
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {
      return;
    } else {
      let node = this.treeRoot;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    if (!this.treeRoot) {
      return;
    } else {
      let node = this.treeRoot;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }

}

module.exports = {
  BinarySearchTree
};