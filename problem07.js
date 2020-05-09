/**
 * Cousins in Binary Tree
 * In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
 * 
 * Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
 * 
 * We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
 * 
 * Return true if and only if the nodes corresponding to the values x and y are cousins.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xk = 0, yk=0;
  let xParent = null, yParent = null;
  var recurse = function(node, k=0) {
    ['left', 'right'].forEach(next => {
      if (node[next]) {
        if (node[next].val === x) {
          xk = k + 1;
          xParent = node.val;
          return;
        }
        if (node[next].val === y) {
          yk = k + 1;
          yParent = node.val;
          return;
        }
        recurse(node[next], k+1)
      }      
    }) 
  }
  recurse(root);
  if (xk === yk && xParent !== yParent) return true;
  return false
};
