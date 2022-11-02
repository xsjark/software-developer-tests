// javascript program to demonstrate insert operation
// in binary search tree with parentId pointer

class Node {
	constructor() {
		this.id = 0;
		this.left = null;
		this.right = null;
		this.parentId = null;
        this.nombre = "";
	}
}


// A utility function to create a new BST Node
function newNode(item)
{
	var temp = new Node();
	temp.id = item;
	temp.left = null;
	temp.right = null;
	temp.parentId = null;
    temp.nombre = "";
	return temp;
}

// A utility function to do inorder traversal of BST
function inorder(root)
{
	if (root != null)
	{
		inorder(root.left);
		console.log("Node : "+ root.id + " , ");
		if (root.parentId == null)
		console.log("parentId : NULL");
		else
		console.log("parentId : " + root.parentId.id);
		inorder(root.right);
	}
}

/* A utility function to insert a new Node with
given id in BST */
function insert(node , id)
{
	/* If the tree is empty, return a new Node */
	if (node == null) return newNode(id);

	/* Otherwise, recur down the tree */
	if (id < node.id)
	{
		var lchild = insert(node.left, id);
		node.left = lchild;

		// Set parentId of root of left subtree
		lchild.parentId = node;
	}
	else if (id > node.id)
	{
		var rchild = insert(node.right, id);
		node.right = rchild;

		// Set parentId of root of right subtree
		rchild.parentId = node;
	}

	/* return the (unchanged) Node pointer */
	return node;
}

// Driver Program to test above functions

	/* Let us create following BST
			50
		/	 \
		30	 70
		/ \ / \
	20 40 60 80 */
	var root = null;
	root = insert(root, 50);
	insert(root, 30);
	insert(root, 20);
	insert(root, 40);
	insert(root, 70);
	insert(root, 60);
	insert(root, 80);

	// print iNorder traversal of the BST
	inorder(root);

// This code contributed by umadevi9616

