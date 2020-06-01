/**
 * Construct Binary Search Tree from Preorder Traversal
 * 
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
 * It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.
 * 
 * Example 1:
 * Input: [8,5,1,7,10,12]
 * Output: [8,5,10,1,7,null,12]
 *  
 * Constraints:
 * 1 <= preorder.length <= 100
 * 1 <= preorder[i] <= 10^8
 * The values of preorder are distinct.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) return null;
    var root = new TreeNode(preorder[0]);
    var nextRight = preorder.findIndex(a => a > root.val)
    if (nextRight === 1) {
        root.right = preorder.length > 0 ? bstFromPreorder(preorder.slice(1)) : null;
        root.left = null;
    } else if (nextRight > 1) {
        root.left = bstFromPreorder(preorder.slice(1, nextRight));
        root.right = bstFromPreorder(preorder.slice(nextRight));
    } else {
        root.left = preorder.length > 0 ? bstFromPreorder(preorder.slice(1)) : null;
        root.right = null;
    }
    return root;
};
