// const repeat = 5
 
// const uuidv4 = () => {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }

// const random = () => {
//     return Math.floor(Math.random() * repeat);
// }

// const people_array = Array(repeat).fill().map((cu, index, arr) =>  {
//     if(index === 0 || index === arr.length -1) {
//         return arr[index] = {nombre: 'Joy', id: uuidv4(), parentId: undefined}
//     } else {
//         return arr[index] = {nombre: 'Joy', id: uuidv4(), parentId: arr[index-1].id}
//     }
// });

// const ventas = (person) => {
//     let count = 0
//     while(person.parentId) {
//         count++
//     }
//     return count
// }

// console.log(ventas(people_array[1]))

let root;
      
    class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
      
    // Function to insert nodes in level order
    function insertLevelOrder(arr, i)
    {
        let root = null;
        // Base case for recursion
        if (i < arr.length) {
            root = new Node(arr[i]);
    
            // insert left child
            root.left = insertLevelOrder(arr, 2 * i + 1);
    
            // insert right child
            root.right = insertLevelOrder(arr, 2 * i + 2);
        }
        return root;
    }
    
    // Function to print tree nodes in InOrder fashion
    function inOrder(root)
    {
        if (root != null) {
            inOrder(root.left);
            document.write(root.data + " ");
            inOrder(root.right);
        }
    }
      
    let arr = [ 1, 2, 3, 4, 5, 6, 6, 6, 6 ];
    root = insertLevelOrder(arr, 0);
    inOrder(root);
    console.log(inorder(root))