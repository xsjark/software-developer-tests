// javascript program to demonstrate insert operation
// in binary search tree with parentId pointer
const names = require('./names')
const getRandomInt = (max) =>  Math.floor(Math.random() * max);

const getRandomName = () => names[getRandomInt(names.length - 1)];

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


class Node {
    constructor() {
        this.id = 0;
        this.left = null;
        this.right = null;
        this.parentId = null;
        this.nombre = "";
    }
}

var res = 0;

// A utility function to create a new BST Node
const newNode = (item, name, ventas) => {
    var temp = new Node();
    temp.id = item;
    temp.left = null;
    temp.right = null;
    temp.parentId = null;
    temp.nombre = name;
    temp.ventas = ventas;
    return temp;
}

// A utility function to do inorder traversal of BST
const inorder = (root) => {
    if (root != null) {
        inorder(root.left);
        console.log("Node : " + root.id + " , " + root.nombre + " , $" + root.ventas);
        if (root.parentId == null)
            console.log("parentId : NULL");
        else
            console.log("parentId : " + root.parentId.id);
        inorder(root.right);
    }
}

/* A utility function to insert a new Node with
given id in BST */
const insert = (node, id, name = "John") => {


    /* If the tree is empty, return a new Node */
    if (node == null) return newNode(id, name, getRandomInt(100));

    /* Otherwise, recur down the tree */
    if (id < node.id) {
        var lchild = insert(node.left, id, name);
        node.left = lchild;

        // Set parentId of root of left subtree
        lchild.parentId = node;
    }
    else if (id > node.id) {
        var rchild = insert(node.right, id, name);
        node.right = rchild;

        // Set parentId of root of right subtree
        rchild.parentId = node;
    }

    /* return the (unchanged) Node pointer */
    return node;
}
const calcSum = (root) => {
    // Base Case
    if (root == null)
        return;

    // If the value of the
    // current node if even

    // If the left child of the even
    // node exist then add it to the res
    if (root.left != null)
        res += root.left.ventas;

    // Do the same with the right child
    if (root.right != null)
        res += root.right.ventas;

    // Visiting the left subtree and the right
    // subtree just like preorder traversal
    calcSum(root.left);
    calcSum(root.right);
}

// Function to return the sum of nodes
// whose parent has even value
const findSum = (root) => {
    // Initialize result
    res = 0;

    calcSum(root);
    return res;
}

// Driver Program to test above functions

/* Let us create following BST
        50
    /	 \
    30	 70
    / \ / \
20 40 60 80 */
var root = null;
root = insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());
insert(root, uuidv4(), getRandomName());

// print iNorder traversal of the BST
inorder(root);
console.log(findSum(root.right));
// This code contributed by umadevi9616

