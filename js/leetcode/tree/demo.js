function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var inorderTraversal = (root) => {
  var stack = [], // 堆栈
    result = [], // 解脱 左边出来了
    cur; // 当前的
  cur = root;
  // 未处理
  while (stack.length > 0 || cur !== null) {
    // 结点不为空
    if (cur !== null) {
      stack.push(cur);
      cur = cur.left; // null
    } else {
      cur = stack.pop(); // 第一次是不是最左侧的叶子？
      result.push(cur.val);
      cur = cur.right;
    }
  }

    return result;
}