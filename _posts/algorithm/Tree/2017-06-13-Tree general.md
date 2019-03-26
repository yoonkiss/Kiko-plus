---
layout: post
title: Tree general
tags: [tree]
---
## Binary Tree

1. Create Tree and search

{% highlight java %}
Node insert(Node root, int val) {
if (root == null) {
    return new Node(val);
}

if (root.val > val) {
    root.left = insert(root.left, val);
} else {
    root.right = insert(root.right, val);
}

return root;
}

boolean search(Node root, int val) {
    if (root == null) {
        return false;
    }
    if (root.val == val) {
        return true;
    } else if (root.val > val) {
        return search(root.left, val);
    } else {
        return search(root.right, val);
    }
        
    }
{% endhighlight %}

2. Traversals
    1
  2   3
4   5

a) Inorder (Left, Root, Right) : 4 2 5 1 3
{% highlight java %}
void printInorder(Node node) 
{ 
    if (node == null) 
        return; 

    /* first recur on left child */
    printInorder(node.left); 

    /* then print the data of node */
    System.out.print(node.key + " "); 

    /* now recur on right child */
    printInorder(node.right); 
} 
{% endhighlight %}

(b) Preorder (Root, Left, Right) : 1 2 4 5 3
{% highlight java %}
void printPreorder(Node node) 
{ 
    if (node == null) 
        return; 

    /* first print data of node */
    System.out.print(node.key + " "); 

    /* then recur on left sutree */
    printPreorder(node.left); 

    /* now recur on right subtree */
    printPreorder(node.right); 
} 
{% endhighlight %}

(c) Postorder (Left, Right, Root) : 4 5 2 3 1
{% highlight java %}
void printPostorder(Node node) 
{ 
    if (node == null) 
        return; 

    // first recur on left subtree 
    printPostorder(node.left); 

    // then recur on right subtree 
    printPostorder(node.right); 

    // now deal with the node 
    System.out.print(node.key + " "); 
} 
{% endhighlight %}
(d) Breadth First or Level Order Traversal : 1 2 3 4 5


## find Min MAX element

find left or right element

{% highlight java %}
int findMin(BstNode* root) {
    if (root == NULL) {
        return -1;
    }
    BstNode* current = root;
    while (current->left != NULL) {
        current = current->left;
    }

    return current->data;
}

// recursion
int findMin(BstNode* root) {
    if (root == NULL) {
        return -1;
    }
    else if (root->left == NULL) {
        return root->data;
    }
    
    return findMin(root->left);
}
{% endhighlight %}

## find height

{% highlight java %}
height = max (left child node of height + right child node of height) + 1

findHeight(root)
{
    // if it returns 0, the leaf's height is 1 then. that is wrong. it should be 0 so, it returns -1.
    if (root is null) return -1;

    leftHeight = findHeight(root->left)
    rightHeight = findHeight(root->right)
    
    return max(leftHeight, rightHeight) + 1 

}
{% endhighlight %}

## find height

{% highlight java %}
height = max (left child node of height + right child node of height) + 1

findHeight(root)
{
    // if it returns 0, the leaf's height is 1 then. that is wrong. it should be 0 so, it returns -1.
    if (root is null) return -1;

    leftHeight = findHeight(root->left)
    rightHeight = findHeight(root->right)
    
    return max(leftHeight, rightHeight) + 1 

}
{% endhighlight %}

## Etc
https://leetcode.com/problemset/all/?topicSlugs=tree


https://leetcode.com/problems/maximum-depth-of-binary-tree/
https://leetcode.com/problems/minimum-depth-of-binary-tree/
https://leetcode.com/problems/invert-binary-tree/
https://leetcode.com/problems/diameter-of-binary-tree/
https://leetcode.com/problems/merge-two-binary-trees/
https://leetcode.com/problems/same-tree/